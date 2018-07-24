import {Injectable} from '@angular/core';
import {TopBarStore} from './top-bar.store';

@Injectable()
export class TopBarOrchestrator {

    constructor(public store: TopBarStore) {

    }

}
