import { Component, Input, HostBinding } from '@angular/core';
import { SoftwareCard } from '../../components/software-card/software-card';
import { WebappCard } from '../../components/webapp-card/webapp-card';
import { SoftwareEntry } from '../../models/software-entry';
import { WebappEntry } from '../../models/webapp-entry';

@Component({
  selector: 'app-software',
  host: { 'id': 'software' },
  imports: [SoftwareCard, WebappCard],
  templateUrl: './software.html',
  styleUrl: './software.scss',
})
export class Software {
  static readonly sectionId = 'software';
  static readonly sectionLabel = 'Software';

  softwareList: SoftwareEntry[] = [
    {
      name: "aia-chaser",
      about: "Chase authority information access (AIA) from a host certificate to complete the chain of trust.",
      languages: ["Python"],
      url: "https://github.com/jponf/aia-chaser"
    },
    {
      name: "OptiLog",
      about: "A Framework for SAT-based Systems.",
      languages: ["C++", "C", "Python"],
      url: "https://pypi.org/project/optilog/"
    },
    {
      name: "pyrl",
      about: "Deep reinforcement learning agents implemented with Python.",
      languages: ["Python"],
      url: "https://github.com/jponf/pyrl"
    },
    {
      name: "PyDGGA",
      about: "Distributed GGA for automatic configuration.",
      languages: ["Python"],
      url: "https://ulog.udl.cat/software"
    },
    {
      name: "Neural Style Transfer",
      about: "Pytorch implementation of the paper \"A Neural Algorithm of Artistic Style\".",
      languages: ["Python"],
      url: "https://github.com/jponf/neural-style-transfer"
    },
    {
      name: "jrlisp",
      about: "Mini-list implementation. Programming contest in memory of Josep Mª Ribó Balust.",
      languages: ["Java"],
      url: "https://github.com/jponf/jrlis"
    },
  ];

  webappList: WebappEntry[] = [
    {
      title: "Paraulògic-Solver",
      about: "A solver for the paraulògic game (catalan spelling bee).",
      links: [
        { href: "https://github.com/jponf/paraulogic-solver", text: "Repository" },
        { href: "https://vilaweb.cat/paraulogic/", text: "Original Game WebApp" }
      ],
      url: "https://jponf.github.io/paraulogic-solver/"
    },
  ];

  @Input() classes = '';
  @HostBinding('class') get hostClass(): string { return this.classes; }
}
