import { Component, OnInit } from '@angular/core';
import { AlertService, SearchService } from '../_services';

@Component({
  selector: 'app-promoter-jobsearch',
  templateUrl: './promoter-jobsearch.component.html',
  styleUrls: ['./promoter-jobsearch.component.css']
})
export class PromoterJobsearchComponent implements OnInit {
  submitted: boolean = false;
  jobs: any;
  products: String;

  constructor(
    
    private searchService: SearchService,
    private alertService: AlertService) {  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;

    
    this.searchService.getJobsByProducts(this.products)
    .subscribe( 
      data => {this.jobs = data;},
      error => {console.log(error);}
    );
  }

}





  








