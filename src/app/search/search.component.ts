import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TopBarOrchestrator} from '../state/top-bar/top-bar.orchestrator';

@Component({
    selector: 'search',
    styleUrls: ['search.component.scss'],
    templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
    criteria: string;

    @Output()
    criteriaChanged: EventEmitter<string> = new EventEmitter<string>();

    constructor(public topBarOrchestrator: TopBarOrchestrator) {
    }

    ngOnInit() {
        this.criteria = this.topBarOrchestrator.store.criteria;
    }

    doSearch() {
        this.topBarOrchestrator.store.setCriteria(this.criteria);
        this.criteriaChanged.emit();
    }

}
