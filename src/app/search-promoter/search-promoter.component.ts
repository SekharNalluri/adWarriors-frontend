import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AlertService, SearchService, UpdateService } from '../_services';

@Component({
  selector: 'app-search-promoter',
  templateUrl: './search-promoter.component.html',
  styleUrls: ['./search-promoter.component.css']
})
export class SearchPromoterComponent implements OnInit {
    searchForm: FormGroup;
    submitted:boolean = false;
    promoters:any;
    closeResult: string;
    currentUserId: string;
    currentUserName :string;
    message: string;
    modalReference: NgbModalRef;
    
    constructor(
        private modalService: NgbModal,        
        private formBuilder: FormBuilder,
        private updateService: UpdateService,
        private searchService: SearchService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            products: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.searchForm.controls; }

    onSubmit() {
        this.submitted = true;

        this.searchService.getPromoterByProduct(this.f.products.value)

            .subscribe(
                data => {
                    console.log(data);
                    this.promoters = data;
                },
                error => {
                    console.log(error);
                });
    }

    open(content, id, fName:string, lName:string) {
        console.log(id);
        this.currentUserId = id;
        this.currentUserName = fName +" "+lName;

        this.modalReference = this.modalService.open(content);
      }

    sendMessage() {
       
        this.updateService.sendMessage(this.currentUserId, this.message, localStorage.getItem('currentUser'))

            .subscribe(
                data => {
                    console.log(data);
                    this.modalReference.close();
                },
                error => {
                    console.log(error);
                    this.modalReference.close();
                });

      }
}
