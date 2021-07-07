import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
API_URL="https://api.github.com"
   constructor(private http: HttpClient) {
        // this.getJSON().subscribe(data => {
        //     console.log(data);
        // });
    }
    // getUsers(){
    //     return this.http.get<User[]>(`${this.API_URL}/users`);
    
    //   }

    public getJSON(): Observable<any> {
        return this.http.get("assets/test.json");
    }
}