import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';

import { AppComponent }                     from './app.component';

//import { routing, appRoutingProviders }     from './app.routing';
//
//import { SiteModule }         from './site/site.module';
import { SiteComponent }         from './site.component';
//import { AdminModule }        from './admin/admin.module';

@NgModule({
    //imports:      [ BrowserModule, routing , SiteModule, AdminModule ],
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, SiteComponent ],
    bootstrap:    [ AppComponent ],
    providers: [
        //appRoutingProviders
    ]
})
export class AppModule { }
