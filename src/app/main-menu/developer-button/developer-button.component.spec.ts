import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperButtonComponent } from './developer-button.component';

describe('DeveloperButtonComponent', () => {
  let component: DeveloperButtonComponent;
  let fixture: ComponentFixture<DeveloperButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
