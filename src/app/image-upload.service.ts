import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private baseUrl = 'http://localhost:8081/api/v1/uploadImage'; // l'URL backend per l'upload delle immagini

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  uploadImage(image: File): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.cookieService.get('jwt')
    });

    const formData = new FormData();
    formData.append('image', image);

    const url = `${this.baseUrl}`;
    return this.http.post(url, formData, { headers: headers });
  }
}
