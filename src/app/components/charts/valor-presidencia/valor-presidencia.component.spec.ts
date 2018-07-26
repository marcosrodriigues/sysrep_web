import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorPresidenciaComponent } from './valor-presidencia.component';

describe('ValorPresidenciaComponent', () => {
  let component: ValorPresidenciaComponent;
  let fixture: ComponentFixture<ValorPresidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorPresidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorPresidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
