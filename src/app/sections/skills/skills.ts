import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Skill } from '../../models/skill';
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

  techSkills: Skill[] = [
    {
      name: "Python",
      img: "python.png",
      level: 10
    },
    // {
    //   name: "Tensorflow",
    //   img: "tf.png",
    //   level: 9
    // },
    {
      name: "PyTorch",
      img: "pytorch.png",
      level: 9
    },
    {
      name: "Scikit Learn",
      img: "sklearn.png",
      level: 9
    },
    {
      name: "Docker",
      img: "docker.png",
      level: 8
    },
    {
      name: "Google Cloud",
      img: "gcp.png",
      level: 6
    },
    {
      name: "Latex",
      img: "latex.png",
      level: 7
    },
    {
      name: "Grid Engine",
      img: "grid-engine.png",
      level: 6
    },
    {
      name: "Angular",
      img: "angular.png",
      level: 7
    },
    // {
    //   name: "webpack",
    //   img: "webpack.png",
    //   level: 6
    // },
    // {
    //   name: "ASP.NET Core",
    //   img: "aspnet-core.png",
    //   level: 6
    // },
    // {
    //     name: "Rocks Cluster",
    //     img: "rocks-cluster.png",
    //     level: 8
    // },
    // {
    //   name: "gRPC",
    //   img: "grpc.png",
    //   level: 6
    // },
    {
      name: "AWS",
      img: "aws.png",
      level: 7
    }
  ];

  @Input() bgClass = '';
  @HostBinding('class') get hostClass(): string { return this.bgClass; }

  ngOnInit(): void {
    this.techSkills.sort((a, b) => b.level - a.level);
  }

}
