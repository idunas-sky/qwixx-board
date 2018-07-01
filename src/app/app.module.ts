import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FaultComponent, ResultComponent, RowComponent, TileComponent} from './components';

@NgModule({
    declarations: [
        AppComponent,
        FaultComponent,
        ResultComponent,
        RowComponent,
        TileComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
