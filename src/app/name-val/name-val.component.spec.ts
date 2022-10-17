import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameValComponent } from './name-val.component';

describe('NameValComponent', () => {
  let component: NameValComponent;
  let fixture: ComponentFixture<NameValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameValComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
