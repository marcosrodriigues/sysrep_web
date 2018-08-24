import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemExalunoComponent } from './listagem-exaluno.component';

describe('ListagemExalunoComponent', () => {
  let component: ListagemExalunoComponent;
  let fixture: ComponentFixture<ListagemExalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemExalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemExalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
