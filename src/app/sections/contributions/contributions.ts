import { Component, Input, HostBinding } from '@angular/core';
import { ContributionCard } from '../../components/contribution-card/contribution-card';
import { Contribution } from '../../models/contribution';

@Component({
  selector: 'app-contributions',
  host: { 'id': 'contributions' },
  imports: [ContributionCard],
  templateUrl: './contributions.html',
  styleUrl: './contributions.scss',
})
export class Contributions {
  static readonly sectionId = 'contributions';
  static readonly sectionLabel = 'Contributions';

  contributions: Contribution[] = [
    {
      project: 'langchain-azure',
      projectUrl: 'https://github.com/langchain-ai/langchain-azure',
      title: 'Convert vectors to native floats via tolist() in AzureSearch queries',
      description:
        'Fixed a JSON serialization crash in AzureSearchVectorStoreRetriever by converting numpy.float32 vector elements to native Python floats.',
      prUrl: 'https://github.com/langchain-ai/langchain-azure/pull/1018',
      status: 'merged',
    },
    {
      project: 'cachetools',
      projectUrl: 'https://github.com/tkem/cachetools',
      title: 'Add efficient clear() method to all cache classes',
      description:
        'Replaced the default O(n) MutableMapping.clear() with O(1) implementations across all cache classes, fixing a bottleneck when clearing large caches (400k+ entries).',
      prUrl: 'https://github.com/tkem/cachetools/pull/386',
      status: 'merged',
    },
    {
      project: 'sagemaker-training-toolkit',
      projectUrl: 'https://github.com/aws/sagemaker-training-toolkit',
      title: "Fix unknown argument: '-export-dynamic' on macOS",
      description:
        'Forwarded the linker flag through clang via -Wl on macOS, fixing a build failure while keeping gcc builds unaffected.',
      prUrl: 'https://github.com/aws/sagemaker-training-toolkit/pull/227',
      status: 'merged',
    },
    {
      project: 'sagemaker-scikit-learn-container',
      projectUrl: 'https://github.com/aws/sagemaker-scikit-learn-container',
      title: 'Added AWS CLI',
      description: "Added AWS CLI v2 installation to the container's base Docker image.",
      prUrl: 'https://github.com/aws/sagemaker-scikit-learn-container/pull/151',
      status: 'merged',
    },
    {
      project: 'bounter',
      projectUrl: 'https://github.com/piskvorky/bounter',
      title: 'Add 64bit Min Sketch',
      description:
        'Added a Count-Min Sketch variant with 64-bit cells behind an opt-in parameter, preserving the existing 32-bit default behavior.',
      prUrl: 'https://github.com/piskvorky/bounter/pull/53',
      status: 'merged',
    },
    {
      project: 'box2d-py',
      projectUrl: 'https://github.com/openai/box2d-py',
      title: 'Added newer Python versions',
      description:
        'Published pre-built wheels for Python 3.8/3.9 and dropped deprecated 3.5 support, unblocking gym installs on modern Python.',
      prUrl: 'https://github.com/openai/box2d-py/pull/8',
      status: 'merged',
    },
    {
      project: 'mdatp-xplat',
      projectUrl: 'https://github.com/microsoft/mdatp-xplat',
      title: "High cpu parser had syntax errors under 'group' section",
      description:
        "Fixed a broken high-CPU parser script by correcting a set/list type mismatch and a missing index access.",
      prUrl: 'https://github.com/microsoft/mdatp-xplat/pull/58',
      status: 'merged',
    },
  ];

  @Input() classes = '';
  @HostBinding('class') get hostClass(): string { return this.classes; }
}
