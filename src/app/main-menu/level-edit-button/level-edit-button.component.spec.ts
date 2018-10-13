import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelEditButtonComponent } from './level-edit-button.component';

describe('LevelEditButtonComponent', () => {
  let component: LevelEditButtonComponent;
  let fixture: ComponentFixture<LevelEditButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelEditButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
