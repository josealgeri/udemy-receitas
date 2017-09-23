import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas-lista',
  templateUrl: './receitas-lista.component.html',
  styleUrls: ['./receitas-lista.component.css']
})
export class ReceitasListaComponent implements OnInit {
  receitas = [];

  constructor() { }

  ngOnInit() {
  }

}
