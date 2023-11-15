import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudDatasetsService {

  constructor(
    private http:HttpClient
  ) { }

  loadAllData(){

    const headers= new HttpHeaders()
    .set('Content-Type','application/json')
    // .set('Access-Control-Allow-Origin','*')
    .set('Authorization','Bearer '+localStorage.getItem("token"))

    return this.http.get('datasets/v1/list',
      {headers}
      )
  }

  getDatasetById(id_dataset:number){
    const headers= new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+localStorage.getItem("token"));

    return this.http.get(`datasets/v1/list/${id_dataset}`,{headers})
  }

  saveDataset({nombre, comentarios, descripcion}:any){
    const headers= new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+localStorage.getItem("token"))
    let body = {'nombre': nombre,'comentarios':comentarios,'descripcion': descripcion, 'id_user':parseInt(localStorage.getItem("id")!)}


    return this.http.post('datasets/v1/',body, {headers})
  }


  deleteDataSet(id_dataset:number){
    const headers= new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+localStorage.getItem("token"));
    return this.http.delete(`datasets/v1/${id_dataset}`,{headers})

  }

  editDataSet(id_dataset:number,{nombre, comentarios, descripcion}:any){
    const headers= new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+localStorage.getItem("token"));
    let body = {'nombre': nombre,'comentarios':comentarios,'descripcion': descripcion}

    return this.http.put(`datasets/v1/${id_dataset}`,body,{headers})
  }
}
