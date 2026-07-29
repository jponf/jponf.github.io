import { Component, Input, HostBinding } from '@angular/core';
import { Publication } from '../../models/publication';

@Component({
  selector: 'app-publications',
  host: { 'id': 'publications' },
  imports: [],
  templateUrl: './publications.html',
  styleUrl: './publications.scss',
})
export class Publications {
  static readonly sectionId = 'publications';
  static readonly sectionLabel = 'Publications';

  publications: Publication[] = [
    {
      authors: ['Carlos Ansótegui', 'Jesús Ojeda', 'Antoni Pacheco', 'Josep Pon', 'Josep Mª Salvia', 'Eduard Torres'],
      title: 'OptiLog: A Framework for SAT-based Systems',
      venue: 'Theory and Applications of Satisfiability Testing – SAT 2021',
      link: { href: 'https://doi.org/10.1007/978-3-030-80223-3_1', text: 'DOI: 10.1007/978-3-030-80223-3_1' }
    },
    {
      authors: ['Carlos Ansótegui', 'Josep Pon', 'Meinolf Sellmann', 'Kevin Tierney'],
      title: 'PyDGGA: Distributed GGA for Automatic Configuration',
      venue: 'Theory and Applications of Satisfiability Testing – SAT 2021',
      link: { href: 'https://doi.org/10.1007/978-3-030-80223-3_2', text: 'DOI: 10.1007/978-3-030-80223-3_2' }
    },
    {
      authors: ['Carlos Ansótegui', 'Josep Pon', 'Meinolf Sellmann'],
      title: 'Boosting evolutionary algorithm configuration.',
      venue: 'Annals of Mathematics and Artificial Intelligence 2021',
      link: { href: 'https://doi.org/10.1007/s10472-020-09726-y', text: 'DOI: 10.1007/s10472-020-09726-y' }
    },
    {
      authors: ['Carlos Ansótegui', 'Britta Heymann', 'Josep Pon', 'Meinolf Sellmann', 'Kevin Tierney'],
      title: 'Hyper-Reactive Tabu Search for MaxSAT.',
      venue: 'International Conference on Learning and Intelligent Optimization - LION 2018',
      link: { href: 'https://doi.org/10.1007/978-3-030-05348-2_27', text: 'DOI: 10.1007/978-3-030-05348-2_27' }
    },
    {
      authors: ['Carlos Ansótegui', 'Josep Pon', 'Meinolf Sellmann', 'Kevin Tierney'],
      title: 'Reactive Dialectic Search Portfolios for MaxSAT.',
      venue: 'Association for the Advancement of Artificial Intelligence - AAAI 2017',
      link: { href: 'http://aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14872', text: 'aaai.org (open access)' }
    },
  ];

  @Input() classes = '';
  @HostBinding('class') get hostClass(): string { return this.classes; }

  @Input() linkClasses = '';
}
