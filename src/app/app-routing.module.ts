import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent},
  { path: 'pagina/produto/:id', component: PaginaProdutoComponent},
  { path: 'pagina/produto', component: PaginaProdutoComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
