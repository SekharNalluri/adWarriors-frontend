import { Component, OnInit } from '@angular/core';
import { AlertService, SearchService, UpdateService } from '../_services';
import { Advertiser } from '../_models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-advertiser-profile',
  templateUrl: './advertiser-profile.component.html',
  styleUrls: ['./advertiser-profile.component.css']
})
export class AdvertiserProfileComponent implements OnInit {

  submitted: Boolean = false;
  advertiser: Advertiser = new Advertiser();

  constructor(
     private searchService: SearchService,
     private updateService: UpdateService,
     private router: Router,
     private alertService: AlertService
    ) { }

  ngOnInit() {

    this.searchService.getAdvertiserById(localStorage.getItem('currentUser'))
    .subscribe( 
      data => {
        console.log(data);
        this.advertiser = data[0]; 
      },
      error => {console.log(error);}
    );
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.advertiser)

    this.updateService.updateAdvertiser(this.advertiser)
      .subscribe( 
        data => {this.router.navigate(['/']);},
        error => {this.alertService.error(error);}
      );
  }

}