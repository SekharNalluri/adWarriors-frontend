import { Routes, RouterModule } from '@angular/router';

import { AdvertiserHomeComponent } from './advertiser-home';
import { PromoterHomeComponent } from './promoter-home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { SearchAdvertiserComponent } from './search-advertiser/search-advertiser.component'
import { PromoterProfileComponent } from './promoter-profile/promoter-profile.component'
import { PromoterJobsearchComponent } from './promoter-jobsearch/promoter-jobsearch.component'
import { InboxComponent } from './inbox/inbox.component'
import { SendMessageComponent } from './send-message/send-message.component';
import { AdvertiserProfileComponent} from './advertiser-profile/advertiser-profile.component';
import { SearchPromoterComponent } from './search-promoter/search-promoter.component';
import { PostJobComponent } from './post-job/post-job.component';



const appRoutes: Routes = [
    //Check for better solution to redirect
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { 
        path: 'advertiser', 
        component: AdvertiserHomeComponent, 
        canActivate: [AuthGuard],
        children: [
            { path: 'search-promoters', component: SearchPromoterComponent, canActivate: [AuthGuard] },
            { path: 'profile', component: AdvertiserProfileComponent, canActivate: [AuthGuard] },
            { path: 'post-jobs', component: PostJobComponent, canActivate: [AuthGuard] },
            { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard] },
            { path: 'send-message', component: SendMessageComponent, canActivate: [AuthGuard]},

            { path: '**', redirectTo: 'inbox' }
        ] 
    },
    {
        path: 'promoter', 
        component: PromoterHomeComponent, 
        canActivate: [AuthGuard],
        children: [
            { path: 'search-advertisers', component: SearchAdvertiserComponent, canActivate: [AuthGuard] },
            { path: 'profile', component: PromoterProfileComponent, canActivate: [AuthGuard] },
            { path: 'search-jobs', component: PromoterJobsearchComponent, canActivate: [AuthGuard] },
            { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard] },
            { path: 'send-message', component: SendMessageComponent, canActivate: [AuthGuard]},

            { path: '**', redirectTo: 'inbox' }
        ]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);