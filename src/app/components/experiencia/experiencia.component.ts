import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/interfaces/IExperience';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
listExperiences: IExperience[] = []
experience1: IExperience = {
  image: '../../../assets/img/AcaMiCampo.png',
  title: 'ACA Mí CAMPO',
  description: 'Software de gestion de campos. \n Desarrollo con la empresa BIT S.A',
  nameButton: 'Pagina',
  link: 'https://acamicampo.com.ar/'
}
experience2: IExperience = {
  image: '../../../assets/img/agrobit.png',
  title: 'AGROBIT',
  description: 'Software de gestion de campos. \n Desarrollo con la empresa BIT S.A',
  nameButton: 'Pagina',
  link: 'https://agrobit.com/smartfarm/'
}
experience3: IExperience = {
  image: '../../../assets/img/vintech.png',
  title: 'VINTECH',
  description: 'Sistema de gestion de tecnologias. \n Desarrollo como Freelance',
  nameButton: 'GitHub',
  link: 'https://agrobit.com/smartfarm/'
}
  constructor() {
    this.listExperiences.push(this.experience1);
    this.listExperiences.push(this.experience2);
    this.listExperiences.push(this.experience3);
   }

  ngOnInit(): void {
  }

}
