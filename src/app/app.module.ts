import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AgregarProductoComponent,
    ListarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
