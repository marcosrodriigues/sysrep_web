import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarExalunoComponent } from './visualizar-exaluno.component';

describe('VisualizarExalunoComponent', () => {
  let component: VisualizarExalunoComponent;
  let fixture: ComponentFixture<VisualizarExalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarExalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarExalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
