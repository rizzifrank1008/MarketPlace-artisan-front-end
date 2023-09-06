import { Component, ViewChild, ElementRef } from '@angular/core';
import { PubblicazoneService } from '../pubblicazone.service';

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
  immagine: string ='';
  utenteId: number=1;


  @ViewChild('inputFile', { static: false }) inputFile!: ElementRef;

  imagePreview: string | ArrayBuffer | null = null;

  constructor(private pubblicazoneService: PubblicazoneService) {}

  onSubmit() {
    const productData = {
      immagine: this.imagePreview, 
      nome: this.nome,
      materiale: this.materiale,
      descrizione: this.descrizione,
      prezzo: this.prezzo,
      utenteId: this.utenteId,
    };

    // Chiamata al servizio per inviare i dati al backend
    this.pubblicazoneService.publish(productData).subscribe(
      (response) => {
        console.log('Prodotto inserito con successo nel database', response);
        // Puoi anche reindirizzare l'utente o fare altre azioni qui
      },
      (error) => {
        console.error('Errore durante l inserimento del prodotto', error);
        // Gestisci l'errore qui
      }
    );
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


  
}
