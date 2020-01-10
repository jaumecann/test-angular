import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StillWorldComponent } from './still-world.component';

describe('StillWorldComponent', () => {
  let component: StillWorldComponent;
  let fixture: ComponentFixture<StillWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StillWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StillWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
