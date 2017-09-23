import { Component, OnInit } from '@angular/core';
import {Receitas} from "../receitas.model";

@Component({
  selector: 'app-receitas-lista',
  templateUrl: './receitas-lista.component.html',
  styleUrls: ['./receitas-lista.component.css']
})
export class ReceitasListaComponent implements OnInit {
  receitas: Receitas[] = [
    new Receitas('Receita teste', 'Teste de receita',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Receitas('Receita teste', 'Teste de receita',
      'https://c1.staticflickr.com/6/5643/30102545481_54a2fdeeaa_b.jpg'),
    new Receitas('Receita teste', 'Teste de receita',
      'https://cdn.pixabay.com/photo/2015/07/05/21/38/salad-832811_960_720.jpg')

  ];



  constructor() { }

  ngOnInit() {
  }

}
