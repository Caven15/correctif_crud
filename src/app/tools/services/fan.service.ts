import { Injectable } from '@angular/core';
import { Fan } from '../../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  listeFan : Fan[] = [
    {nom : 'John', dateNaissance : new Date(12,5,2023), serieFavoris : ["24h chrono","Monk","Prison break"]},
    {nom : 'Alain', dateNaissance : new Date(12,5,2023), serieFavoris : ["Mr. robot","Star Trek","Pokémon"]}
  ]

  constructor() {}

  // GetAll
  getAll() : Fan[]{
    return this.listeFan
  }

  // GetById
  getById(index : number) : Fan{
    return this.listeFan[index]
  }

  // Create
  create(newFan : Fan) : void {
    this.listeFan.push(newFan)
  }

  // Update
  update(index : number, fan : Fan) : void{
    this.listeFan[index] = fan
  }

  // Delete
  delete(index : number) : void {
    this.listeFan.splice(index,1)
  }
}