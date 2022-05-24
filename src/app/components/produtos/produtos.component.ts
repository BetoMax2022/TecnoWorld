import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  produtos: Produto[] = [];
  carrinho: Produto[] = [];


  addProdutoCarrinho(produto: Produto){
    this.carrinho.push(produto);
    console.log(this.carrinho);
  }

  produtosNoCarrinho(produto: Produto){
    return this.carrinho.includes(produto);
  }



  ngOnInit(): void {
   this.produtos = this.produtosService.produtos;
  }




}
