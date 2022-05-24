import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [

  { path: 'produtos', component: ProdutosComponent},
  { path: 'pagina/produto/:id', component: PaginaProdutoComponent},
  { path: 'pagina/produto', component: PaginaProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
