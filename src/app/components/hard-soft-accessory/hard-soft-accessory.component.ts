import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';



@Component({
  selector: 'app-hard-soft-accessory',
  templateUrl: './hard-soft-accessory.component.html',
  styleUrls: ['./hard-soft-accessory.component.css']
})

export class HardSoftAccessoryComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }




  @Input('infoProduto') produto!: Produto;
  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();



  perc?: number;

  carrinho: Produto[] = [];

   desconto() {
    this.perc = this.produto.preco * this.produto.desconto
    return this.produto.preco - (this.perc);
  }

  addCarrinho() {
    this.carrinho.push(this.produto);
  }

  aoCarrinho() {
    this.onCarrinho.emit(this.produto);
  }




}
