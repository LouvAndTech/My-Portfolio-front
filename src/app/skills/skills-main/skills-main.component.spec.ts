import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMainComponent } from './skills-main.component';

describe('SkillsMainComponent', () => {
  let component: SkillsMainComponent;
  let fixture: ComponentFixture<SkillsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
