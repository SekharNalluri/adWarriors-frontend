import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPromoterComponent } from './search-promoter.component';

describe('SearchPromoterComponent', () => {
  let component: SearchPromoterComponent;
  let fixture: ComponentFixture<SearchPromoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPromoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
