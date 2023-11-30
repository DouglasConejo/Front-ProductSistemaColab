import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrlList = 'http://localhost:8080/products'
const baseUrlAdd = 'http://localhost:8080/product'
const baseUrlDeleteALL = 'http://localhost:8080/product/deleteAll'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) {}

  getAll(): Observable<any>
  {
    return this.http.get(baseUrlList);
  }


  create(data:{name:string;descripcion:string;price:string;serialNumber:string}): Observable<any>
  {
    return this.http.post(baseUrlAdd,data);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrlDeleteALL);
  }

}
