import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwiiterComponent } from './twiiter.component';

describe('TwiiterComponent', () => {
  let component: TwiiterComponent;
  let fixture: ComponentFixture<TwiiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwiiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwiiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
