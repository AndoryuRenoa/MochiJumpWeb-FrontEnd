import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperTechnicalComponent } from './developer-technical.component';

describe('DeveloperTechnicalComponent', () => {
  let component: DeveloperTechnicalComponent;
  let fixture: ComponentFixture<DeveloperTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
