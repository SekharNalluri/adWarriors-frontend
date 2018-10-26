import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Advertiser } from '../_models';

@Injectable()
export class SearchService {
    constructor(private http: HttpClient) { }

    getAdvertiserById(id:String) {
        return this.http.get('/advertisers/' + id);
    }

    getAdvertiserByProduct(products:String) {
        return this.http.get<Advertiser[]>('/advertisers/products/' + products,{});
    }

    getPromoterByProduct(products:String) {
        return this.http.get<Advertiser[]>('/promoters/products/' + products,{});
    }

    getPromoterById(id:String) {
        return this.http.get('/promoters/' + id);
    }

    getJobsByProducts(products:String){
        return this.http.get('/jobs/products/' + products,{});
    }

    getInboxById(id: String) {
        return this.http.get('/messages/view/' + id);
    }

    // register(user: Advertiser) {
    //     return this.http.post('/auth/signup', Advertiser);
    // }

    // update(user: User) {
    //     return this.http.put('/users/' + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete('/users/' + id);
    // }
}