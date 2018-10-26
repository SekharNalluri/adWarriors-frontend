import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Advertiser, Promoter } from '../_models';

@Injectable()
export class UpdateService {
    constructor(private http: HttpClient) { }

    updateAdvertiser(advertiser: Advertiser) {
        return this.http.post('/advertisers/update', advertiser);
    }

    updatePromoter(promoter: Promoter) {
        return this.http.post('/promoters/update', promoter);
    }

    addJob(job: any) {
        return this.http.post('/jobs/create', job);
    }

    sendMessage(receiver: string, message: any, sender: string) {
        let body = { "receiver": receiver, "message": message, "sender": sender }
        return this.http.post('/messages/send', body);
    }
}