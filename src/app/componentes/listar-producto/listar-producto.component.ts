import { Component, OnInit } from '@angular/core';
import {ProductosService} from "../../servicios/productos.service";

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos: any;
  productoActual:any = null;
  currentIndex = -1;
  nombre = '';

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productosService.getAll()
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActivarProducto(producto: any, index: number): void {
    this.productoActual = producto;
    this.currentIndex = index;
  }

  eliminarTodosProductos(): void {
    this.productosService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.eliminarTodosProductos();
        },
        error => {
          console.log(error);
        });
  }


}
