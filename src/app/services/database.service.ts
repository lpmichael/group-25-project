import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colors } from '../colors/colors.model'

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  private apiurl = 'https://cs.colostate.edu/~oceans77/databaseapi.php'
  

  constructor(private http: HttpClient) {}

  //get specified colors... somehow
  getAllColors(count: number): Observable<Colors[]>{
    const params = new HttpParams({fromString: 'count=' + count});
    return this.http.get<Colors[]>(this.apiurl, {responseType: 'json',params});
  }

  

  //
}
