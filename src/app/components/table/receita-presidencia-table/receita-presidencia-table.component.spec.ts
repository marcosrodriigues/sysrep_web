import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaPresidenciaTableComponent } from './receita-presidencia-table.component';

describe('ReceitaPresidenciaTableComponent', () => {
  let component: ReceitaPresidenciaTableComponent;
  let fixture: ComponentFixture<ReceitaPresidenciaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaPresidenciaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaPresidenciaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
