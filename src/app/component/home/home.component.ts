import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../data/utilisateur';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listeUserJira: Array<Utilisateur> = [];

  constructor() { }

  ngOnInit() {
    var firstUser = new Utilisateur('Louvet Hugo','UOOI701');
    var secondUser = new Utilisateur('Touzet Sebastien','UOOXXXX');
    var thirdUser = new Utilisateur('Goyet Olivier','UOOXXXX');

    this.listeUserJira.push(firstUser);
    this.listeUserJira.push(secondUser);
    this.listeUserJira.push(thirdUser);
  }

}
