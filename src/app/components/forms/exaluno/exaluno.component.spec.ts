import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExalunoComponent } from './exaluno.component';

describe('ExalunoComponent', () => {
  let component: ExalunoComponent;
  let fixture: ComponentFixture<ExalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
