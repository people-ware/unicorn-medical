import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { SearchService } from './core/services/search.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './core/layout/layout.module';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/services/auth.service';
import { soApiBaseUrl } from './core/services/data/so-connector.service';
import { DashboardContainerComponent } from './dashboard/dashboard-container/dashboard-container.component';
import { DashboardItemSoComponent } from './dashboard/dashboard-item-so/dashboard-item-so.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    DashboardContainerComponent,
    DashboardItemSoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
        allowedUrls: [soApiBaseUrl]
      }
    })
  ],
  providers: [SearchService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
