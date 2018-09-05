import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarCaixinhaComponent } from './visualizar-caixinha.component';

describe('VisualizarCaixinhaComponent', () => {
  let component: VisualizarCaixinhaComponent;
  let fixture: ComponentFixture<VisualizarCaixinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarCaixinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarCaixinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
