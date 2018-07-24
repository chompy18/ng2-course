import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Observable, of} from "rxjs";

@Injectable()
export class ActorService {

    private BASE_URL: string = 'https://api.tvmaze.com/';

    constructor(private http: Http) {

    }

    getActorShows(actorId: number): Observable<any> {
        const url = this.BASE_URL + 'people/' + actorId + '/castcredits?embed=show';
        return this.http.get(url)
            .map(res => res.json());
    }
}

export class ActorServiceMock {
    private testResponse: any;
    private testError: any;

    public setTestResponse(actorShows: any) {
        this.testResponse = actorShows;
    }

    public setTestError(err: any) {
        this.testError = err;
    }

    getActorShows(actorId: number): Observable<any> {
        if (this.testError) {
            return of(this.testError);
        }

        return of(this.testResponse);
    }
}
