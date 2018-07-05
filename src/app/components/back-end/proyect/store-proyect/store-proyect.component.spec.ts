import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProyectComponent } from './store-proyect.component';

describe('StoreProyectComponent', () => {
  let component: StoreProyectComponent;
  let fixture: ComponentFixture<StoreProyectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProyectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
