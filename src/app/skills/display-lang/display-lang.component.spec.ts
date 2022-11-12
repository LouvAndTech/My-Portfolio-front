import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLangComponent } from './display-lang.component';

describe('DisplayLangComponent', () => {
  let component: DisplayLangComponent;
  let fixture: ComponentFixture<DisplayLangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
