import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCaixinhaComponent } from './receita-caixinha.component';

describe('ReceitaCaixinhaComponent', () => {
  let component: ReceitaCaixinhaComponent;
  let fixture: ComponentFixture<ReceitaCaixinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitaCaixinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaCaixinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
