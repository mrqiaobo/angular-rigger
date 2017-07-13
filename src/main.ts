import { NgModule, Injector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoot } from './app';
import Routers from './routers';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(Routers)],
    providers: [],
    declarations: [AppRoot],
    bootstrap: [AppRoot]
})

export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);