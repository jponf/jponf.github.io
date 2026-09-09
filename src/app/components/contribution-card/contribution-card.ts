import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCodePullRequest, faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import { Contribution } from '../../models/contribution';
import { GithubPrStatusService, PullRequestStatus } from '../../services/github-pr-status';

@Component({
  selector: 'app-contribution-card',
  host: {
    'class': 'col-12 col-sm-12 col-md-4 col-lg-4',
  },
  imports: [FontAwesomeModule],
  templateUrl: './contribution-card.html',
  styleUrl: './contribution-card.scss',
})
export class ContributionCard implements OnInit {
  @Input() contribution!: Contribution;

  status: PullRequestStatus = 'open';

  readonly faCodePullRequest = faCodePullRequest;
  readonly faCodeMerge = faCodeMerge;

  constructor(private readonly githubPrStatus: GithubPrStatusService) {}

  ngOnInit(): void {
    this.status = this.contribution.status;
    this.githubPrStatus.getStatus(this.contribution.prUrl).subscribe((status) => {
      this.status = status;
    });
  }
}
