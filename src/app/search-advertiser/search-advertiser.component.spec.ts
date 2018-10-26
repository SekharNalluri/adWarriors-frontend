import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAdvertiserComponent } from './search-advertiser.component';

describe('SearchAdvertiserComponent', () => {
  let component: SearchAdvertiserComponent;
  let fixture: ComponentFixture<SearchAdvertiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAdvertiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAdvertiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
