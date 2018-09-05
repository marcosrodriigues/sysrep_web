import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarHomenageadoComponent } from './visualizar-homenageado.component';

describe('VisualizarHomenageadoComponent', () => {
  let component: VisualizarHomenageadoComponent;
  let fixture: ComponentFixture<VisualizarHomenageadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarHomenageadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarHomenageadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
