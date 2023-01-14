import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EseoInfoComponent } from './eseo-info.component';

describe('EseoInfoComponent', () => {
  let component: EseoInfoComponent;
  let fixture: ComponentFixture<EseoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EseoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EseoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
