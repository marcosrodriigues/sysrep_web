import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCaixinhaComponent } from './listagem-caixinha.component';

describe('ListagemCaixinhaComponent', () => {
  let component: ListagemCaixinhaComponent;
  let fixture: ComponentFixture<ListagemCaixinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemCaixinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemCaixinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
