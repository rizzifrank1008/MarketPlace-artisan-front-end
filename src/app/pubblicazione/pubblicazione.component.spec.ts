import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubblicazioneComponent } from './pubblicazione.component';

describe('PubblicazioneComponent', () => {
  let component: PubblicazioneComponent;
  let fixture: ComponentFixture<PubblicazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PubblicazioneComponent]
    });
    fixture = TestBed.createComponent(PubblicazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
