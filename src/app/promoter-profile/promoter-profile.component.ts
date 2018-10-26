import { Component, OnInit } from '@angular/core';
import { AlertService, SearchService, UpdateService } from '../_services';
import { Promoter } from '../_models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-promoter-profile',
  templateUrl: './promoter-profile.component.html',
  styleUrls: ['./promoter-profile.component.css']
})
export class PromoterProfileComponent implements OnInit {

  submitted: Boolean = false;
  promoter: Promoter = new Promoter();

  constructor(
     private searchService: SearchService,
     private updateService: UpdateService,
     private router: Router,
     private alertService: AlertService
    ) { }

  ngOnInit() {

    this.searchService.getPromoterById(localStorage.getItem('currentUser'))
    .subscribe( 
      data => {
        console.log(data);
        this.promoter = data[0]; 
        this.promoter.gender = this.promoter.gender? this.promoter.gender:"";
      },
      error => {console.log(error);}
    );
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.promoter)

    this.updateService.updatePromoter(this.promoter)
      .subscribe( 
        data => {this.router.navigate(['/']);},
        error => {this.alertService.error(error);}
      );
  }

}