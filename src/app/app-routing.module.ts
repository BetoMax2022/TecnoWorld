import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent},
  { path: 'pagina/produto/:id', component: PaginaProdutoComponent},
  { path: 'login', component: LoginComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'cadastro', component: CadastroComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
