import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesExperiencesComponent } from './studies-experiences.component';

describe('StudiesExperiencesComponent', () => {
  let component: StudiesExperiencesComponent;
  let fixture: ComponentFixture<StudiesExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
