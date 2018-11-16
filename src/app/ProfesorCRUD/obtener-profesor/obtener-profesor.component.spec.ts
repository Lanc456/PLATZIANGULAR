import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerProfesorComponent } from './obtener-profesor.component';

describe('ObtenerProfesorComponent', () => {
  let component: ObtenerProfesorComponent;
  let fixture: ComponentFixture<ObtenerProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
