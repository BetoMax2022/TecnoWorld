import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-hard-soft-accessory',
  templateUrl: './hard-soft-accessory.component.html',
  styleUrls: ['./hard-soft-accessory.component.css']
})

export class HardSoftAccessoryComponent implements OnInit {

  @Input('infoProduto') produto!:Produto;
  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();


  constructor() { }

  perc?: number;
  selected = 0;
  hovered = 0;
  readonly = false;

  desconto(){
    this.perc = this.produto.preco * this.produto.desconto
    return this.produto.preco - (this.perc);
}


  addProdutoCarrinho(){
  this.onCarrinho.emit(this.produto);
}

  ngOnInit(): void {

  }

}
