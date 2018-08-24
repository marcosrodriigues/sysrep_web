import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAmigoComponent } from './listagem-amigo.component';

describe('ListagemAmigoComponent', () => {
  let component: ListagemAmigoComponent;
  let fixture: ComponentFixture<ListagemAmigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemAmigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemAmigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
