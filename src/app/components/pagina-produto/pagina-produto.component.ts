import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
    styleUrls: ['./pagina-produto.component.css']
})

export class PaginaProdutoComponent implements OnInit {

  currentRate = 0;

  constructor(private activateRoute: ActivatedRoute, private produtosService: ProdutosService) { }

  product:any;
  productId:any;


  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.paramMap.get('id');
    this.product = this.produtosService.produtos.find(cod => cod.id == this.productId);
  }

}

