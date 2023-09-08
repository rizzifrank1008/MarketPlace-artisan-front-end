import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private baseUrl = 'http://localhost:8081/api/uploadImage'; // l'URL backend per l'upload delle immagini

  constructor(private http: HttpClient) { }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    const url = `${this.baseUrl}`;
    return this.http.post(url, formData);
  }
}
