import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoHomenageadoComponent } from './novo-homenageado.component';

describe('NovoHomenageadoComponent', () => {
  let component: NovoHomenageadoComponent;
  let fixture: ComponentFixture<NovoHomenageadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoHomenageadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoHomenageadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
