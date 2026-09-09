export interface Contribution {
  project: string;
  projectUrl: string;
  title: string;
  description: string;
  prUrl: string;
  /** Fallback status used while the live GitHub status is being fetched (or if it fails). */
  status: 'merged' | 'open';
}
