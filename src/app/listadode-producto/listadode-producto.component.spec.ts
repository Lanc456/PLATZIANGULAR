import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadodeProductoComponent } from './listadode-producto.component';

describe('ListadodeProductoComponent', () => {
  let component: ListadodeProductoComponent;
  let fixture: ComponentFixture<ListadodeProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadodeProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadodeProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
