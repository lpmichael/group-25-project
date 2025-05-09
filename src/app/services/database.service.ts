import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colors } from '../colorsmodel/colors.model';
import { Form, FormGroup } from '@angular/forms';
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
  getAllColors(): Observable<Colors[]>{
    let params = new HttpParams();
 

    //params.append('first', firstTime);
    return this.http.get<Colors[]>(this.apiurl);
  }


  updateColor(colorUpdate: FormGroup, colorsList: Array<Colors>) {
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

    this.http.post<any>(this.apiurl, colorData, {params: params}).subscribe();

    this.getAllColors().subscribe({
      next: (response) => {
        colorsList = response;
            console.log ('Fetched: ', colorsList);
          },
          error: (err) => {
            console.error('AHHHHHHHHH: ', err);
          }})
          return;

        

  }

  addColor(colorUpdate: FormGroup, colorsList: Array<Colors>){
    console.log('hit service');

    let id = colorUpdate.get('color')?.value;
    let hex = colorUpdate.get('hex')?.value;
    let name = colorUpdate.get('name')?.value;
    
    let params = new HttpParams();
    params = params.append("add", 1);

    const colorData = {
      id: id,
      hexval: hex,
      name: name,
    }

    this.http.post<any>(this.apiurl, colorData, {params: params}).subscribe();

    this.getAllColors().subscribe({
      next: (response) => {
        colorsList = response;
            console.log ('Fetched: ', colorsList);
          },
          error: (err) => {
            console.error('AHHHHHHHHH: ', err);
          }})
          return;

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

  deleteColor(colorDelete: FormGroup){
    console.log('hit delete');
    let params = new HttpParams;
    params = params.append('delete', 1);

    let id = colorDelete.get('color')?.value;
    let hex = colorDelete.get('hex')?.value;
    let name = colorDelete.get('name')?.value;
    

    const colorData = {
      id: id,
      hexval: hex,
      name: name,
    }

    this.http.post<any>(this.apiurl, colorData, {params: params}).subscribe();
    return;
  }

  //
}
