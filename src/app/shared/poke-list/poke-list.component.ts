import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public allPokemons: any
  public filteredPokemons: any
  public isLoading: boolean = true
  public apiError: boolean = false

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.allPokemons = res.results
        this.filteredPokemons = this.allPokemons
      },
      (_error): void => {
        this.apiError = true
      }
    );
    this.isLoading = false
  }

  public getSearch(value: string) {
    this.filteredPokemons = this.allPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })
  }
}
