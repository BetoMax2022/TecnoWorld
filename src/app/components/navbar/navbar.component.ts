import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/models/produto';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nomeDoApp: String = 'TecnoWorld';
  isMenuCollapsed = true;

  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();

  constructor() { }

  carrinho: Produto[] = [];

  addCarrinho(produto: Produto) {
    this.carrinho.push(produto);

  }
  ngOnInit(): void {

  }


}
