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
  prezzo: number = 0;
  imageId: number = 0;
  utenteId: number = 1;

  image?: File;

  @ViewChild('inputFile', { static: false }) inputFile!: ElementRef;

  imagePreview: string | ArrayBuffer | null = null;

  constructor(private pubblicazoneService: PubblicazoneService, private imageUploadService: ImageUploadService) {}

  onSubmit() {
    // Prima di tutto, carica l'immagine
    if (this.image) {
      this.imageUploadService.uploadImage(this.image).subscribe(
        (imageResponse) => {
          // L'immagine è stata caricata con successo, ora puoi creare il prodotto
          const productData = {
            imageId: imageResponse.id, // Usa l'ID dell'immagine restituito dalla risposta
            nome: this.nome,
            materiale: this.materiale,
            descrizione: this.descrizione,
            prezzo: this.prezzo,
            utenteId: this.utenteId,
          };

          // Invia i dati del prodotto al servizio pubblicazione
          this.pubblicazoneService.publish(productData).subscribe(
            (productResponse) => {
              console.log('Prodotto inserito con successo nel database', productResponse);
              // Puoi anche reindirizzare l'utente o fare altre azioni qui
            },
            (productError) => {
              console.error('Errore durante l\'inserimento del prodotto', productError);
              // Gestisci l'errore qui
            }
          );
        },
        (imageError) => {
          console.error('Errore durante l\'inserimento dell\'immagine', imageError);
          // Gestisci l'errore dell'immagine qui
        }
      );
    } else {
      // Gestisci il caso in cui non sia stata selezionata un'immagine
      console.error('Devi selezionare un\'immagine prima di inviare il prodotto');
    }
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

  // ... Altri metodi del componente
}
