import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoExalunoComponent } from './novo-exaluno.component';

describe('NovoExalunoComponent', () => {
  let component: NovoExalunoComponent;
  let fixture: ComponentFixture<NovoExalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoExalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoExalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
