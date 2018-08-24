import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExAlunoTableComponent } from './ex-aluno-table.component';

describe('ExAlunoTableComponent', () => {
  let component: ExAlunoTableComponent;
  let fixture: ComponentFixture<ExAlunoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExAlunoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExAlunoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
