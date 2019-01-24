import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaCaixinhaComponent } from './despesa-caixinha.component';

describe('DespesaCaixinhaComponent', () => {
  let component: DespesaCaixinhaComponent;
  let fixture: ComponentFixture<DespesaCaixinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaCaixinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaCaixinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
