import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarOfertaComponent } from './publicar-oferta.component';

describe('PublicarOfertaComponent', () => {
  let component: PublicarOfertaComponent;
  let fixture: ComponentFixture<PublicarOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
