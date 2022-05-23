import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HardSoftAccessoryComponent } from './components/hard-soft-accessory/hard-soft-accessory.component';
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    NavbarComponent,
    HardSoftAccessoryComponent,
    PaginaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
