import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';

export type PullRequestStatus = 'merged' | 'open' | 'closed';

interface GitHubPullRequestResponse {
  state: 'open' | 'closed';
  merged_at: string | null;
}

@Injectable({ providedIn: 'root' })
export class GithubPrStatusService {
  private readonly cache = new Map<string, Observable<PullRequestStatus>>();

  constructor(private readonly http: HttpClient) {}

  getStatus(prUrl: string, fallback: PullRequestStatus = 'open'): Observable<PullRequestStatus> {
    const cached = this.cache.get(prUrl);
    if (cached) {
      return cached;
    }

    const apiUrl = this.toApiUrl(prUrl);
    const status$ = (apiUrl
      ? this.http.get<GitHubPullRequestResponse>(apiUrl).pipe(
          map((pr) => this.toStatus(pr)),
          catchError(() => of<PullRequestStatus>(fallback)),
        )
      : of<PullRequestStatus>(fallback)
    ).pipe(shareReplay({ bufferSize: 1, refCount: false }));

    this.cache.set(prUrl, status$);
    return status$;
  }

  private toApiUrl(prUrl: string): string | null {
    const match = prUrl.match(
      /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)\/?$/,
    );
    if (!match) {
      return null;
    }

    const [, owner, repo, number] = match;
    return `https://api.github.com/repos/${owner}/${repo}/pulls/${number}`;
  }

  private toStatus(pr: GitHubPullRequestResponse): PullRequestStatus {
    if (pr.merged_at) {
      return 'merged';
    }
    return pr.state === 'closed' ? 'closed' : 'open';
  }
}
