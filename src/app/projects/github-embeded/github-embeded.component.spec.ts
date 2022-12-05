import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubEmbededComponent } from './github-embeded.component';

describe('GithubEmbededComponent', () => {
  let component: GithubEmbededComponent;
  let fixture: ComponentFixture<GithubEmbededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubEmbededComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubEmbededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
