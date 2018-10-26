import { Component, OnInit } from '@angular/core';
import { AlertService, SearchService } from '../_services';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  messages:any=[];

  constructor(
    
    private searchService: SearchService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.searchService.getInboxById(localStorage.getItem('currentUser'))
    .subscribe( 
      data => {this.messages = data;},
      error => {console.log(error);}
    );
  }
}