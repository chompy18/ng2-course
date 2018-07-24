import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ShowsOrchestrator} from '../state/shows/shows.orchestrator';

@Injectable()
export class ShowResolver implements Resolve<any> {

    constructor(private showOrchestrator: ShowsOrchestrator) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
        return this.showOrchestrator.getShowById(+route.params['id']);
    }

}
