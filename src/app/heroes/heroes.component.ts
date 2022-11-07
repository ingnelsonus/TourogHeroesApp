import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroesList} from '../mockHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes=HeroesList;
  hero:Hero={
    id:1,
    name:'Windstorm'
  }
  selectedHero?:Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(heroselect:Hero):void{
    this.selectedHero=heroselect;
  }

}
