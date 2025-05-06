import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colors } from '../colorsmodel/colors.model';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private apiurl = '[PHP URL (host on CSU Server)]'
  

  constructor(private http: HttpClient) {}

  //get specified colors... somehow
  getAllColors(count: number, firstTime: number): Observable<Colors[]>{
    let params = new HttpParams();
    params = params.append("count", count);
    params = params.append("first", firstTime);
    //params.append('first', firstTime);
    return this.http.get<Colors[]>(this.apiurl, {params: params});
  }


  updateColor(colorUpdate: FormGroup) {
    let id = colorUpdate.get('id')?.value;
    let hex = colorUpdate.get('hex')?.value;
    let name = colorUpdate.get('name')?.value;
    
    let params = new HttpParams();
    params = params.append("id", id);
    params = params.append("hexval", hex);
    params = params.append("name", name);

    console.log("Made it to service!");
    console.log("id " + id + " hex " + hex + " name " + name );

    this.http.post(this.apiurl, {params});

  }

  getAmount(){
    let count = [];
    //count = this.http.get<any[]>(this.apiurl, {responseType: 'json'});
    //return count['COUNT(ID)'];
  }

  

  //
}
