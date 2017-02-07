webpackJsonp([0,4],{1084:function(t,e,o){t.exports=o(513)},172:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(69),s=o(247),a=o(485),p=function(){function t(t){this.showService=t,this.shows=[],this.currentShow={}}return t.prototype.setShows=function(t){this.shows=t.map(function(t){return t.show}).filter(function(t){return null!==t.image})},t.prototype.setCurrentShow=function(t){this.currentShow=t},t.prototype.getShows=function(t){var e=this;this.showService.getShows(t).subscribe(function(t){return e.setShows(t)})},t.prototype.getShowById=function(t){var e=this;return this.currentShow.id===t?a.Observable.of(this.currentShow):this.showService.getShowById(t).map(function(t){return e.setCurrentShow(t),t})},Object.defineProperty(t.prototype,"currentShowCast",{get:function(){return this.currentShow._embedded.cast.filter(function(t){return null!==t.character.image})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentShowSeasons",{get:function(){return this.currentShow._embedded.seasons},enumerable:!0,configurable:!0}),n([c.observable,r("design:type",Array)],t.prototype,"shows",void 0),n([c.observable,r("design:type",Object)],t.prototype,"currentShow",void 0),n([c.action,r("design:type",Function),r("design:paramtypes",[Array]),r("design:returntype",void 0)],t.prototype,"setShows",null),n([c.action,r("design:type",Function),r("design:paramtypes",[Object]),r("design:returntype",void 0)],t.prototype,"setCurrentShow",null),n([c.action,r("design:type",Function),r("design:paramtypes",[String]),r("design:returntype",void 0)],t.prototype,"getShows",null),n([c.action,r("design:type",Function),r("design:paramtypes",[Number]),r("design:returntype","function"==typeof(e="undefined"!=typeof a.Observable&&a.Observable)&&e||Object)],t.prototype,"getShowById",null),n([c.computed,r("design:type",Object)],t.prototype,"currentShowCast",null),n([c.computed,r("design:type",Object)],t.prototype,"currentShowSeasons",null),t=n([i.Injectable(),r("design:paramtypes",["function"==typeof(o="undefined"!=typeof s.ShowService&&s.ShowService)&&o||Object])],t);var e,o}();e.ShowStore=p},173:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(69),s=function(){function t(){this.isLoggedIn=!1,this.isBlocked=!1}return t.prototype.setCriteria=function(t){this.criteria=t},t.prototype.setLoggedInState=function(t){this.isLoggedIn=t},t.prototype.setIsBlocked=function(t){this.isBlocked=t},n([c.observable,r("design:type",String)],t.prototype,"criteria",void 0),n([c.observable,r("design:type",Boolean)],t.prototype,"isLoggedIn",void 0),n([c.observable,r("design:type",Boolean)],t.prototype,"isBlocked",void 0),n([c.action,r("design:type",Function),r("design:paramtypes",[String]),r("design:returntype",void 0)],t.prototype,"setCriteria",null),n([c.action,r("design:type",Function),r("design:paramtypes",[Object]),r("design:returntype",void 0)],t.prototype,"setLoggedInState",null),n([c.action,r("design:type",Function),r("design:paramtypes",[Boolean]),r("design:returntype",void 0)],t.prototype,"setIsBlocked",null),t=n([i.Injectable(),r("design:paramtypes",[])],t)}();e.TopBarStore=s},247:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(233),s=o(173),a=function(){function t(t,e){this.http=t,this.topBarStore=e,this.BASE_URL="https://api.tvmaze.com/"}return t.prototype.canActivate=function(t,e){return this.topBarStore.setIsBlocked(!this.topBarStore.isLoggedIn),this.topBarStore.isLoggedIn},t.prototype.getShows=function(t){var e=this.BASE_URL+"search/shows?q="+encodeURI(t);return this.http.get(e).map(function(t){return t.json()})},t.prototype.getShowWithCast=function(t){var e=this.BASE_URL+"singlesearch/shows?q="+encodeURI(t)+"&embed=cast";return this.http.get(e).map(function(t){return t.json()})},t.prototype.getShowById=function(t){var e=this.BASE_URL+"shows/"+t+"?embed[]=cast&embed[]=seasons";return this.http.get(e).map(function(t){return t.json()})},t=n([i.Injectable(),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.Http&&c.Http)&&e||Object,"function"==typeof(o="undefined"!=typeof s.TopBarStore&&s.TopBarStore)&&o||Object])],t);var e,o}();e.ShowService=a},248:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(444),s=o(69),a=function(){function t(t){this.actorService=t,this.currentActorShows=[]}return t.prototype.setActor=function(t){this.currentActor=t},t.prototype.setActorShows=function(t){this.currentActorShows=t},t.prototype.getActorShows=function(){var t=this;this.currentActor&&this.actorService.getActorShows(this.currentActor.id).subscribe(function(e){var o=e.map(function(t){return t._embedded.show});t.setActorShows(o)})},n([s.observable,r("design:type",Object)],t.prototype,"currentActor",void 0),n([s.observable,r("design:type",Array)],t.prototype,"currentActorShows",void 0),n([s.action,r("design:type",Function),r("design:paramtypes",[Object]),r("design:returntype",void 0)],t.prototype,"setActor",null),n([s.action,r("design:type",Function),r("design:paramtypes",[Object]),r("design:returntype",void 0)],t.prototype,"setActorShows",null),n([s.action,r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],t.prototype,"getActorShows",null),t=n([i.Injectable(),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.ActorService&&c.ActorService)&&e||Object])],t);var e}();e.ActorStore=a},441:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(248),s=o(93),a=function(){function t(t,e){this.router=t,this.actorStore=e}return t.prototype.ngOnInit=function(){this.actorStore.getActorShows()},t.prototype.navigate=function(t){this.router.navigate(["show",t.id])},t=n([i.Component({selector:"actor-details",template:o(813),styles:[o(806)]}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Router&&s.Router)&&e||Object,"function"==typeof(a="undefined"!=typeof c.ActorStore&&c.ActorStore)&&a||Object])],t);var e,a}();e.ActorDetailsComponent=a},442:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(93),s=o(69);s.useStrict(!0);var a=function(){function t(t){this.router=t}return t=n([i.Component({selector:"my-app",template:o(814),styles:[o(807)]}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.Router&&c.Router)&&e||Object])],t);var e}();e.AppComponent=a},443:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(172),s=function(){function t(t){this.showStore=t}return t.prototype.resolve=function(t,e){return this.showStore.getShowById(+t.params.id)},t=n([i.Injectable(),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.ShowStore&&c.ShowStore)&&e||Object])],t);var e}();e.ShowResolver=s},444:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(233),s=function(){function t(t){this.http=t,this.BASE_URL="https://api.tvmaze.com/"}return t.prototype.getActorShows=function(t){var e=this.BASE_URL+"people/"+t+"/castcredits?embed=show";return this.http.get(e).map(function(t){return t.json()})},t=n([i.Injectable(),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.Http&&c.Http)&&e||Object])],t);var e}();e.ActorService=s},445:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(172),s=o(248),a=o(93),p=function(){function t(t,e,o){this.router=t,this.showStore=e,this.actorStore=o}return t.prototype.navigate=function(t){this.actorStore.setActor(t.person),this.router.navigate(["actor",t.person.id])},t=n([i.Component({selector:"show-details",template:o(817),styles:[o(810)]}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.Router&&a.Router)&&e||Object,"function"==typeof(p="undefined"!=typeof c.ShowStore&&c.ShowStore)&&p||Object,"function"==typeof(f="undefined"!=typeof s.ActorStore&&s.ActorStore)&&f||Object])],t);var e,p,f}();e.ShowDetailsComponent=p},446:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(172),s=o(93),a=o(173),p=function(){function t(t,e,o){this.router=t,this.showStore=e,this.topBarStore=o}return t.prototype.ngOnInit=function(){""!==this.topBarStore.criteria&&this.showStore.getShows(this.topBarStore.criteria)},t.prototype.navigate=function(t){this.router.navigate(["show",t.id])},t.prototype.doSearch=function(){this.topBarStore.setIsBlocked(!1),this.showStore.getShows(this.topBarStore.criteria)},t.prototype.setLoggedIn=function(t){this.topBarStore.setLoggedInState(t)},t=n([i.Component({selector:"show",template:o(818),styles:[o(811)]}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof s.Router&&s.Router)&&e||Object,"function"==typeof(p="undefined"!=typeof c.ShowStore&&c.ShowStore)&&p||Object,"function"==typeof(f="undefined"!=typeof a.TopBarStore&&a.TopBarStore)&&f||Object])],t);var e,p,f}();e.ShowListComponent=p},512:function(t,e){function o(t){throw new Error("Cannot find module '"+t+"'.")}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=512},513:function(t,e,o){"use strict";o(644);var n=o(607),r=o(0),i=o(643),c=o(641);i.environment.production&&r.enableProdMode(),n.platformBrowserDynamic().bootstrapModule(c.AppModule)},638:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(121),c=o(0),s=o(337),a=o(233),p=o(645),f=o(442),u=o(639),d=o(446),l=o(172),h=o(247),y=o(798),g=o(800),m=o(445),v=o(173),S=o(642),b=o(443),w=o(441),R=o(248),j=o(444),O=o(640),_=function(){function t(){}return t=n([c.NgModule({declarations:[f.AppComponent,d.ShowListComponent,m.ShowDetailsComponent,S.SearchComponent,w.ActorDetailsComponent,O.NavComponent],imports:[i.BrowserModule,s.FormsModule,a.HttpModule,y.Ng2MobxModule,g.NgPipesModule,p.ClarityModule.forRoot(),u.ROUTING],providers:[l.ShowStore,h.ShowService,v.TopBarStore,b.ShowResolver,R.ActorStore,j.ActorService],bootstrap:[f.AppComponent]}),r("design:paramtypes",[])],t)}();e.AppModule=_},639:function(t,e,o){"use strict";var n=o(93),r=o(446),i=o(445),c=o(443),s=o(247),a=o(441);e.ROUTES=[{path:"",redirectTo:"showlist",pathMatch:"full"},{path:"showlist",component:r.ShowListComponent},{path:"show/:id",component:i.ShowDetailsComponent,canActivate:[s.ShowService],resolve:{show:c.ShowResolver}},{path:"actor/:id",component:a.ActorDetailsComponent},{path:"**",redirectTo:"showlist"}],e.ROUTING=n.RouterModule.forRoot(e.ROUTES)},640:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(85),s=o(93),a=function(){function t(t,e){this.location=t,this.router=e}return t.prototype.back=function(){this.location.back()},t.prototype.home=function(){this.router.navigate([""])},t=n([i.Component({selector:"nav",template:o(815),styles:[o(808)]}),r("design:paramtypes",["function"==typeof(e="undefined"!=typeof c.Location&&c.Location)&&e||Object,"function"==typeof(a="undefined"!=typeof s.Router&&s.Router)&&a||Object])],t);var e,a}();e.NavComponent=a},641:function(t,e,o){"use strict";function n(t){for(var o in t)e.hasOwnProperty(o)||(e[o]=t[o])}n(o(442)),n(o(638))},642:function(t,e,o){"use strict";var n=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=o(0),c=o(173),s=function(){function t(t){this.topBarStore=t,this.criteriaChanged=new i.EventEmitter}return t.prototype.ngOnInit=function(){this.criteria=this.topBarStore.criteria},t.prototype.doSearch=function(){this.topBarStore.setCriteria(this.criteria),this.criteriaChanged.emit()},n([i.Output(),r("design:type","function"==typeof(e="undefined"!=typeof i.EventEmitter&&i.EventEmitter)&&e||Object)],t.prototype,"criteriaChanged",void 0),t=n([i.Component({selector:"search",styles:[o(809)],template:o(816)}),r("design:paramtypes",["function"==typeof(s="undefined"!=typeof c.TopBarStore&&c.TopBarStore)&&s||Object])],t);var e,s}();e.SearchComponent=s},643:function(t,e){"use strict";e.environment={production:!0}},644:function(t,e,o){"use strict";o(659),o(652),o(648),o(654),o(653),o(651),o(650),o(658),o(647),o(646),o(656),o(649),o(657),o(655),o(660),o(1083)},806:function(t,e){t.exports=".show-item{\n  margin:10px;\n  cursor:pointer; }\n\n.actor-image{\n  max-height:1000px;\n  margin:auto; }\n"},807:function(t,e){t.exports=""},808:function(t,e){t.exports="clr-icon{\n  cursor:pointer; }\n"},809:function(t,e){t.exports=".main{\n  display:flex;\n  align-items:baseline; }\n  .main input{\n    margin-right:10px;\n    height:36px; }\n"},810:function(t,e){t.exports=".cast-item{\n  margin:10px;\n  cursor:pointer; }\n\n.show-image{\n  max-height:1000px;\n  margin:auto; }\n\n.season-item img{\n  float:left;\n  margin:10px; }\n"},811:function(t,e){t.exports=".show{\n  margin:10px; }\n\n.topbar{\n  display:flex;\n  align-items:center; }\n\n.blocked{\n  z-index:999;\n  width:100%;\n  display:block; }\n  .blocked .blocked-content{\n    border-radius:7px;\n    background:rgba(255, 255, 255, 0.9);\n    margin:30px auto 0;\n    padding:6px;\n    position:absolute;\n    width:800px;\n    top:25%;\n    left:50%;\n    margin-left:-400px;\n    margin-top:-40px;\n    border:1px solid black; }\n"},813:function(t,e){t.exports='<div *mobxAutorun>\n    <nav></nav>\n    <div class="row">\n        <div class="col-md-5 offset-md-1">\n            <p>{{actorStore.currentActor.name}}</p>\n        </div>\n        <img class="actor-image" [src]="actorStore.currentActor.image?.original">\n    </div>\n    <div class="row offset-md-1">\n        <div class="show-item" *ngFor="let show of actorStore.currentActorShows" (click)="navigate(show)">\n            {{show.name}}<br>\n            <img [src]="show.image?.medium">\n        </div>\n    </div>\n</div>\n'},814:function(t,e){t.exports="<router-outlet></router-outlet>"},815:function(t,e){t.exports='<div class="row">\n    <div class="offset-md-1">\n        <clr-icon shape="caret left" size="30" (click)="back()"></clr-icon>\n        <clr-icon shape="home" size="24" (click)="home()"></clr-icon>\n    </div>\n</div>\n'},816:function(t,e){t.exports='<div class="row offset-md-1 main">\n    <input [(ngModel)]="criteria" type="text" placeholder="search for a show" (keydown.enter)="doSearch()">\n    <button type="submit" class="btn btn-success-outline" (click)="doSearch()">search</button>\n</div>\n'},817:function(t,e){t.exports='<div *ngIf="showStore.currentShow.image">\n    <nav></nav>\n    <div *mobxAutorun>\n        <div class="row">\n            <div class="col-md-5 offset-md-1">\n                <p>{{showStore.currentShow.name}}</p>\n                <p>Genres: <span *ngFor="let genre of showStore.currentShow.genres">{{genre}},</span></p>\n                <p>{{showStore.currentShow.summary | stripTags}}</p>\n            </div>\n            <img class="show-image" [src]="showStore.currentShow.image?.original">\n        </div>\n        <div class="row offset-md-1 season-item" *ngFor="let season of showStore.currentShowSeasons">\n            <div *ngIf="season.premiereDate">\n                <img *ngIf="season.image?.medium" [src]="season.image?.medium">\n                <div class="col-md-12">\n                    <span>Season {{season.number}}: {{season.name}} ({{season.premiereDate}} - {{season.endDate}}), {{season.episodeOrder}} Episodes</span>\n                    <p *ngIf="season.summary">{{season.summary | stripTags}}</p>\n                </div>\n            </div>\n        </div>\n        <div class="row offset-md-1">\n            <div class="cast-item" *ngFor="let castMember of showStore.currentShowCast" (click)="navigate(castMember)">\n                {{castMember.character.name}}<br>\n                <img [src]="castMember.character.image?.medium">\n            </div>\n        </div>\n    </div>\n</div>'},818:function(t,e){t.exports='<div *mobxAutorun>\n    <div class="topbar row offset-md-1">\n        <search class="col-md-5" (criteriaChanged)="doSearch()"></search>\n        <div class="col-md-5 toggle-switch">\n            <input #loggedIn type="checkbox" id="toggle_1" [checked]="topBarStore.isLoggedIn"\n                   (change)="setLoggedIn(loggedIn.checked)">\n            <label for="toggle_1">Act as logged in</label>\n        </div>\n    </div>\n    <div class="row offset-md-1">\n        <div class="show" *ngFor="let show of showStore.shows" (click)="navigate(show)">\n            <img [src]="show.image.medium"><br>\n            <span>{{show.name}}</span><br>\n            <span *ngFor="let genre of show.genres">{{genre}}, </span>\n        </div>\n    </div>\n\n    <div class="blocked" *ngIf="topBarStore.isBlocked" (click)="topBarStore.setIsBlocked(false)">\n        <div class="blocked-content">\n            User is blocked! Please log in!\n        </div>\n    </div>\n</div>\n\n\n'}},[1084]);
//# sourceMappingURL=main.5766dc96c8f1de226020.bundle.map