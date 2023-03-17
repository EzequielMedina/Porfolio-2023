import { Component, OnInit } from '@angular/core';
import { ISkills } from 'src/app/interfaces/Iskills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  css3 = {
    name: 'CSS3',
    level: [true,true,true,true,false],
    image: "../../../assets/img/css3.png"
  } as ISkills;
  javaScript = {
    name: 'JavaScript',
    level: [true,true,true,true,false],
    image: "../../../assets/img/javascript.png"
  }
  angularJS = {
    name: 'AngularJS',
    level: [true,true,true,true,false],
    image: "../../../assets/img/angularJS.png"
  } as ISkills;
  reactJs = {
    name: 'ReactJS',
    level: [true,true,true,false,false],
    image: "../../../assets/img/reactJs.png"
  } as ISkills;
  flutter = {
    name: 'Flutter',
    level: [true,true,true,false,false],
    image: "../../../assets/img/flutter.png"
  } as ISkills;

  listSkills = [] as ISkills[];
  
  cShrap = {
    name: 'C#',
    level: [true,true,true,true,false],
    image: "../../../assets/img/cSharp.png"
  }
  typescript = {
    name: 'TypeScript',
    level: [true,true,true,true,false],
    image: "../../../assets/img/Typescript.png"
  } as ISkills;
  nodeJs = {
    name: 'NodeJS',
    level: [true,true,true,false,false],
    image: "../../../assets/img/nodeJs.png"
  } as ISkills;
  mongoDB = {
    name: 'MongoDB',
    level: [true,true,true,false,false],
    image: "../../../assets/img/mongodb.png"
  } as ISkills;
  slqServer = {
    name: 'SQL Server',
    level: [true,true,true,true,false],
    image: "../../../assets/img/sqlServer.png"
  }
  listSkillsTwo = [] as ISkills[];

  gitHub = {
    name: 'GitHub',
    level: [true,true,true,true,false],
    image: "../../../assets/img/GitHub.png"
  } as ISkills;

  bootstrap = {
    name: 'Bootstrap',
    level: [true,true,true,true,false],
    image: "../../../assets/img/bootstrap.png"
  } as ISkills;
  jquery = {
    name: 'jQuery',
    level: [true,true,true,true,true],
    image: "../../../assets/img/jquery.gif"
  } as ISkills;
  threeJs = {
    name: 'ThreeJS',
    level: [true,true,true,false,false],
    image: "../../../assets/img/three.png"
  } as ISkills;

  listSkillsthree = [] as ISkills[];
  constructor() { 

  }

  ngOnInit(): void {
    this.listSkills.push(this.css3);
    this.listSkills.push(this.javaScript);
    this.listSkills.push(this.angularJS);
    this.listSkills.push(this.reactJs);
    this.listSkills.push(this.flutter);
          
    this.listSkillsTwo.push(this.cShrap);
    this.listSkillsTwo.push(this.typescript);
    this.listSkillsTwo.push(this.nodeJs);
    this.listSkillsTwo.push(this.mongoDB);
    this.listSkillsTwo.push(this.slqServer);


    this.listSkillsthree.push(this.gitHub);
    this.listSkillsthree.push(this.bootstrap);
    this.listSkillsthree.push(this.jquery);
    this.listSkillsthree.push(this.threeJs);
  }

}
