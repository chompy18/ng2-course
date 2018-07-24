import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ROUTING} from "./app.routing";
import {ShowListComponent} from "./show-list/show-list.component";
import {ShowDetailsComponent} from "./show-details/show-details.component";
import {ActorDetailsComponent} from "./actor-details/actor-details.component";
import {ShowsCommonModule} from "./common/common.module";
import {SearchComponent} from "./search/search.component";
import {ShowResolver} from "./resolvers/show.resolver";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule} from "ngx-pipes";
import {ShowActivator} from "./resolvers/show.activator";
import {MobxAngularModule} from "mobx-angular";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ShowListComponent,
        ShowDetailsComponent,
        ActorDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        MobxAngularModule,
        NgPipesModule,
        ShowsCommonModule,
        ROUTING
    ],
    providers: [
        ShowResolver,
        ShowActivator
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
