import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionStoreComponent } from './asignacion-store.component';

describe('AsignacionStoreComponent', () => {
  let component: AsignacionStoreComponent;
  let fixture: ComponentFixture<AsignacionStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
