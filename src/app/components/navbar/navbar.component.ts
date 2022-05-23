import { Component,OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  nomeDoApp: String = 'TecnoWorld';
  isMenuCollapsed = true;


  constructor() { }





  ngOnInit(): void {
  }


}
