import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  @Input('infoProduto') produto!:Produto;
  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();

  constructor() { }

  addProdutoCarrinho(){
    this.onCarrinho.emit(this.produto);
  }



  ngOnInit(): void {
  }

}
