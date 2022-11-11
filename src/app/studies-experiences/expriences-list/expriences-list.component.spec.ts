import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpriencesListComponent } from './expriences-list.component';

describe('ExpriencesListComponent', () => {
  let component: ExpriencesListComponent;
  let fixture: ComponentFixture<ExpriencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpriencesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpriencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
