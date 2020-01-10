import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularixComponent } from './angularix.component';

describe('AngularixComponent', () => {
  let component: AngularixComponent;
  let fixture: ComponentFixture<AngularixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
