import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colors } from '../colorsmodel/colors.model';
import { FormGroup } from '@angular/forms';
import { response } from 'express';

//TODO
//options reload on change in various dropdowns
//ADD COLOR
//REMOVE COLOR
//ERROR MESSAGES?



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiurl = 'https://cs.colostate.edu/~oceans77/databaseapi.php' //change if you need to test locally
  

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
    let id = colorUpdate.get('color')?.value;
    let hex = colorUpdate.get('hex')?.value;
    let name = colorUpdate.get('name')?.value;
    
    let params = new HttpParams();
    params = params.append("update", 1);

    const colorData = {
      id: id,
      hexval: hex,
      name: name,
    }

    return this.http.post<any>(this.apiurl, colorData, {params: params}).subscribe();


  }

  getAmount(){
    let count = [];
    //count = this.http.get<any[]>(this.apiurl, {responseType: 'json'});
    //return count['COUNT(ID)'];
  }

  
  getColorFromID(name: string){
    let params = new HttpParams;
    params = params.append('getid', name);
    params = params.append('update', 1);
    return this.http.get<Colors>(this.apiurl, {params: params}).subscribe();

  }

  //
}
