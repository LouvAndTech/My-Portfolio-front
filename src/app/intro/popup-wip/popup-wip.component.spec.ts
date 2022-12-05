import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupWipComponent } from './popup-wip.component';

describe('PopupWipComponent', () => {
  let component: PopupWipComponent;
  let fixture: ComponentFixture<PopupWipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupWipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
