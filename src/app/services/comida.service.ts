import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories, Meals } from '../interfaces/comidas';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  tipo:string="Chicken";

  constructor(private httpclient:HttpClient) { }

  getCategorias()
  {
    return this.httpclient.get<Categories>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }


  //www.themealdb.com/api/json/v1/1/filter.php?c=Beef
  getComidasxCategoria(tipo:string)
  {
    return this.httpclient.get<Meals>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${tipo}`);
    }
}
