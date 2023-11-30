import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgregarProductoComponent} from "./componentes/agregar-producto/agregar-producto.component";
import {ListarProductoComponent} from "./componentes/listar-producto/listar-producto.component";

const routes: Routes = [
  { path: 'agregar',component:AgregarProductoComponent},
  { path: 'productos',component:ListarProductoComponent},
  { path: '',redirectTo:'productos',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
