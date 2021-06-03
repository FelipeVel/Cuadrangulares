import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosicionarEquiposComponent } from './posicionar-equipos.component';

describe('PosicionarEquiposComponent', () => {
  let component: PosicionarEquiposComponent;
  let fixture: ComponentFixture<PosicionarEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosicionarEquiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosicionarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
