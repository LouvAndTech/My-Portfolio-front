import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesExperiencesMainComponent } from './studies-experiences-main.component';

describe('StudiesExperiencesMainComponent', () => {
  let component: StudiesExperiencesMainComponent;
  let fixture: ComponentFixture<StudiesExperiencesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesExperiencesMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesExperiencesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
