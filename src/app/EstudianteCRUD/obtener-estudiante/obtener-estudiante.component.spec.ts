import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerEstudianteComponent } from './obtener-estudiante.component';

describe('ObtenerEstudianteComponent', () => {
  let component: ObtenerEstudianteComponent;
  let fixture: ComponentFixture<ObtenerEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
