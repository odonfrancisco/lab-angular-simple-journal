import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RetrieveEntriesService {

  constructor(private http: Http) { }

  getEntries(){
    return this.http.get('http://localhost:3000/api/journal-entries').pipe(
      map(res => res.json())
    )
  }

  getEntry(id){
    return this.http.get('http://localhost:3000/api/journal-entries/' + id).pipe(
      map(res => res.json())
    )
  }
  
}
