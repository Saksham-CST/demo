import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class APIs {
    baseEndpoint: string = 'https://650a79e7dfd73d1fab086849.mockapi.io/';
    constructor(private httpclient: HttpClient) {}
    getAPI() {
        let url = this.baseEndpoint + 'books';
        return this.httpclient.get(url);
    }
    postAPI(imp:any) {
        let url = this.baseEndpoint + 'books';
        return this.httpclient.post(url , imp);
    }
}
