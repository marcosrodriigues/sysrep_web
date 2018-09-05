import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenageadoComponent } from './homenageado.component';

describe('HomenageadoComponent', () => {
  let component: HomenageadoComponent;
  let fixture: ComponentFixture<HomenageadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenageadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenageadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
