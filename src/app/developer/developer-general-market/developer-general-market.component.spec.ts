import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperGeneralMarketComponent } from './developer-general-market.component';

describe('DeveloperGeneralMarketComponent', () => {
  let component: DeveloperGeneralMarketComponent;
  let fixture: ComponentFixture<DeveloperGeneralMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperGeneralMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperGeneralMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
