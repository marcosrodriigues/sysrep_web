import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCaixinhaComponent } from './novo-caixinha.component';

describe('NovoCaixinhaComponent', () => {
  let component: NovoCaixinhaComponent;
  let fixture: ComponentFixture<NovoCaixinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCaixinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCaixinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
