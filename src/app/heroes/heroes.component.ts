import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Hero[]=[];

  constructor(private heroeService:HeroService,
              private messageService:MessageService
             ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroeService.getHeroes()
    .subscribe(hrs =>this.heroes=hrs);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroeService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroeService.deleteHero(hero.id).subscribe();
  }

}
