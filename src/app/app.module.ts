import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { HardSoftAccessoryComponent } from './components/hard-soft-accessory/hard-soft-accessory.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PaginaProdutoComponent,
    HardSoftAccessoryComponent,
    ProdutosComponent,
    CadastroComponent,
    FeedbackComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
