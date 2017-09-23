import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { ReceitasComponent } from './receitas/receitas.component';
import { ReceitasListaComponent } from './receitas/receitas-lista/receitas-lista.component';
import { ReceitasDetalhesComponent } from './receitas/receitas-detalhes/receitas-detalhes.component';
import { ReceitasItemComponent } from './receitas/receitas-lista/receitas-item/receitas-item.component';
import { ShoppingListaComponent } from './shopping-lista/shopping-lista.component';
import { ShoppingEditarComponent } from './shopping-lista/shopping-editar/shopping-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceitasComponent,
    ReceitasListaComponent,
    ReceitasDetalhesComponent,
    ReceitasItemComponent,
    ShoppingListaComponent,
    ShoppingEditarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
