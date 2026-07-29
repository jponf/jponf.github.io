import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SkillEntry } from '../../models/skill-entry';
import { SkillCard } from '../../components/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  host: { 'id': 'skills' },
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  static readonly sectionId = 'skills';
  static readonly sectionLabel = 'Skills';

  techSkills: SkillEntry[] = [
    {
      name: "Python",
      img: "python.min.png",
      level: 10
    },
    // {
    //   name: "Tensorflow",
    //   img: "tf.png",
    //   level: 9
    // },
    {
      name: "PyTorch",
      img: "pytorch.min.png",
      level: 9
    },
    {
      name: "Scikit Learn",
      img: "sklearn.min.png",
      level: 9
    },
    {
      name: "Docker",
      img: "docker.min.png",
      level: 8
    },
    {
      name: "Google Cloud",
      img: "gcp.min.png",
      level: 6
    },
    {
      name: "Latex",
      img: "latex.min.png",
      level: 7
    },
    {
      name: "Grid Engine",
      img: "grid-engine.min.png",
      level: 6
    },
    {
      name: "Angular",
      img: "angular.min.png",
      level: 7
    },
    // {
    //   name: "webpack",
    //   img: "webpack.min.png",
    //   level: 6
    // },
    // {
    //   name: "ASP.NET Core",
    //   img: "aspnet-core.min.png",
    //   level: 6
    // },
    // {
    //     name: "Rocks Cluster",
    //     img: "rocks-cluster.min.png",
    //     level: 8
    // },
    // {
    //   name: "gRPC",
    //   img: "grpc.min.png",
    //   level: 6
    // },
    {
      name: "AWS",
      img: "aws.min.png",
      level: 7
    }
  ];

  @Input() classes = '';
  @HostBinding('class') get hostClass(): string { return this.classes; }

  ngOnInit(): void {
    this.techSkills.sort((a, b) => b.level - a.level);
  }

}
