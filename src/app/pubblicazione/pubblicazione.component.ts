import { Component, ViewChild, ElementRef } from '@angular/core';
import { PubblicazoneService } from '../pubblicazone.service';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-pubblicazione',
  templateUrl: './pubblicazione.component.html',
  styleUrls: ['./pubblicazione.component.css']
})
export class PubblicazioneComponent {

  nome: string = '';
  materiale: string = '';
  descrizione: string = '';
  prezzo: number =0;
  imageId: number =0;
  utenteId: number=1;
  
  image?: File;

  @ViewChild('inputFile', { static: false }) inputFile!: ElementRef;

  imagePreview: string | ArrayBuffer | null = null;

  constructor(private pubblicazoneService: PubblicazoneService ,private imageUploadService: ImageUploadService) {}

  onSubmit() {

    const productData = {
      imageId: this.imagePreview, 
      nome: this.nome,
      materiale: this.materiale,
      descrizione: this.descrizione,
      prezzo: this.prezzo,
      utenteId: this.utenteId,
    };
    
    const imageData = {
      image: this.image,
    };
    


   
    this.imageUploadService.publish(imageData).subscribe(
      (response) => {
         console.log(imageData);
        console.log('immagine  inserita con successo nel database', response);
        // Puoi anche reindirizzare l'utente o fare altre azioni qui
      },
      (error) => {
        console.log(imageData);
        console.error('Errore durante l inserimento dell immagine', error);
        // Gestisci l'errore qui
      }
    );


    // Chiamata al servizio per inviare i dati al backend
 
  }


  selectImage() {
    this.inputFile.nativeElement.click();
}

previewImage(event: any) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
          console.log('Immagine caricata con successo.');
          this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
  } else {
      this.imagePreview = null;
  }
}

selectedFile: File | null = null;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.image = file;
    }
  } 

  
}
