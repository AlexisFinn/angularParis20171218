import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { ItemsModule } from './items/items.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollectionService } from './core/services/collection/collection.service';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ItemsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    PageNotFoundModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    if (!environment.production) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
  }
}
