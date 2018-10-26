import { Component, OnInit } from '@angular/core';
import { UpdateService, AlertService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  job: any = {
    "product": "",
    "shortDesc": "",
    "advertiser": localStorage.getItem('currentUser')
  };
  message: any;

  constructor(private updateService: UpdateService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
  }


  createJob() {

    this.updateService.addJob(this.job).subscribe(
      data => {
        this.message={'text':'Posted successfully', 'type':'success'};
        this.job ={};
        console.log(data);
      },
      error => {
        this.message={'text':'Failed to Post', 'type':'error'};
        console.log(error);
      });

  }

}
