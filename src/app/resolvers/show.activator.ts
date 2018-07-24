import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TopBarOrchestrator} from '../state/top-bar/top-bar.orchestrator';

@Injectable()
export class ShowActivator implements CanActivate {

    constructor(private topBarOrchestrator: TopBarOrchestrator) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        this.topBarOrchestrator.store.setIsBlocked(!this.topBarOrchestrator.store.isLoggedIn);
        return this.topBarOrchestrator.store.isLoggedIn;
    }

}
