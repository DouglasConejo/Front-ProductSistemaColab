import { Component, OnInit } from '@angular/core';
import {ProductosService} from "../../servicios/productos.service";

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto = {
    name: '',
    descripcion: '',
    price: '',
    serialNumber: ''
  };
  submitted = false;

  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
  }

  salvarProducto(): void {
    const data = {
      name: this.producto.name,
      descripcion: this.producto.descripcion,
      price: this.producto.price,
      serialNumber: this.producto.serialNumber
    };

    this.productosService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoProducto(): void {
    this.submitted = false;
    this.producto = {
      name: '',
      descripcion: '',
      price: '',
      serialNumber: ''
    };
  }

}
