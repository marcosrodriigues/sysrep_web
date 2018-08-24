import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemHomenageadoComponent } from './listagem-homenageado.component';

describe('ListagemHomenageadoComponent', () => {
  let component: ListagemHomenageadoComponent;
  let fixture: ComponentFixture<ListagemHomenageadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemHomenageadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemHomenageadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
