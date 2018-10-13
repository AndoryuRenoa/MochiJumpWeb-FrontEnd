import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawLevelComponent } from './draw-level.component';

describe('DrawLevelComponent', () => {
  let component: DrawLevelComponent;
  let fixture: ComponentFixture<DrawLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
