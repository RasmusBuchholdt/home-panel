import { LayoutModule } from '@angular/cdk/layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
  HammerModule,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import * as Hammer from 'hammerjs';
import { DynamicModule } from 'ng-dynamic-component';
import { ColorCircleModule } from 'ngx-color/circle';
import { ColorHueModule } from 'ngx-color/hue';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LightControlCardComponent,
} from './cards/light-control-card/light-control-card.component';
import {
  MovieModeCardComponent,
} from './cards/movie-mode-card/movie-mode-card.component';
import {
  PiholeControlCardComponent,
} from './cards/pihole-control-card/pihole-control-card.component';
import { SpacerCardComponent } from './cards/spacer-card/spacer-card.component';
import {
  SpotifyControlCardComponent,
} from './cards/spotify-control-card/spotify-control-card.component';
import { TextCardComponent } from './cards/text-card/text-card.component';
import {
  VoiceControlCardComponent,
} from './cards/voice-control-card/voice-control-card.component';
import {
  LightConfigDialogComponent,
} from './dialogs/light-config-dialog/light-config-dialog.component';
import {
  TextCardDialogComponent,
} from './dialogs/text-card-dialog/text-card-dialog.component';
import { GridsterComponent } from './gridster/gridster.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LightsComponent } from './pages/lights/lights.component';
import { PiholeComponent } from './pages/pihole/pihole.component';
import { SpotifyComponent } from './pages/spotify/spotify.component';
import { WidgetComponent } from './widget/widget.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_HORIZONTAL },
    pinch: { enable: false },
    rotate: { enable: false },
    pan: { enable: false }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    SpotifyComponent,
    LightsComponent,
    SpotifyControlCardComponent,
    VoiceControlCardComponent,
    LightControlCardComponent,
    PiholeComponent,
    PiholeControlCardComponent,
    TextCardComponent,
    GridsterComponent,
    WidgetComponent,
    SpacerCardComponent,
    TextCardDialogComponent,
    LightConfigDialogComponent,
    MovieModeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ColorHueModule,
    ColorCircleModule,
    DynamicModule,
    GridsterModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HammerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule
  ],
  providers: [
    HttpClient,
    CookieService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
