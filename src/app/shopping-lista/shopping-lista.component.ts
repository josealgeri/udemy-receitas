import { Component, OnInit } from '@angular/core';
import {Ingrediente} from "../shared/ingrediente.model";

@Component({
  selector: 'app-shopping-lista',
  templateUrl: './shopping-lista.component.html',
  styleUrls: ['./shopping-lista.component.css']
})
export class ShoppingListaComponent implements OnInit {
  ingredientes: Ingrediente[] = [
    new Ingrediente('Maçãs', 5 ),
    new Ingrediente('Tomates', 10 )

  ];

  constructor() { }

  ngOnInit() {
  }

}
