import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoterJobsearchComponent } from './promoter-jobsearch.component';

describe('PromoterJobsearchComponent', () => {
  let component: PromoterJobsearchComponent;
  let fixture: ComponentFixture<PromoterJobsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoterJobsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoterJobsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
