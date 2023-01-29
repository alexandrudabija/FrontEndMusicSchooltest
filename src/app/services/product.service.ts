import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }
  readonly  url= 'https://backend-music-school.vercel.app/api';


noAutHeader={headers:new HttpHeaders({'noAuth':'True'})}

getProducts():Observable<any>
{

return this.http.get<any>(this.url+'/product',this.noAutHeader)

}



}
