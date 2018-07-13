import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { ShellComponent } from './shell/shell.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShellComponent,
  ],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
