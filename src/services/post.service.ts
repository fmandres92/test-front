import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    constructor(
        private http: HttpClient
    ) {}

    getAllPost(): Observable<any> {
        console.log('la peticion');
        return this.http.get(`${environment.url}/getAll`);
    }

    deletePost(id): Observable<any> {
        return this.http.delete(`${environment.url}/${id}`);
    }
}
