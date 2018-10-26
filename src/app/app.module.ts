import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { 
        AlertService, 
        AuthenticationService, 
        UserService, 
        SearchService, 
        UpdateService 
    } from './_services';
import { AdvertiserHomeComponent } from './advertiser-home';
import { PromoterHomeComponent } from './promoter-home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { InboxComponent } from './inbox/inbox.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { SearchAdvertiserComponent } from './search-advertiser/search-advertiser.component';
import { PromoterProfileComponent } from './promoter-profile/promoter-profile.component';
import { PromoterJobsearchComponent } from './promoter-jobsearch/promoter-jobsearch.component';
import { AdvertiserProfileComponent } from './advertiser-profile/advertiser-profile.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SearchPromoterComponent } from './search-promoter/search-promoter.component';


@NgModule({
    imports: [
        NgbModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        AdvertiserHomeComponent,
        PromoterHomeComponent,
        LoginComponent,
        RegisterComponent,
        InboxComponent,
        SendMessageComponent ,
        SearchAdvertiserComponent,
        PromoterProfileComponent,
        PromoterJobsearchComponent ,
        AdvertiserProfileComponent ,
        PostJobComponent ,
        SearchPromoterComponent ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        SearchService,
        UpdateService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }