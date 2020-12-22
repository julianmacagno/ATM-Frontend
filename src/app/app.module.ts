import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatButtonModule, MatTableModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AtmComponent } from './components/atm/atm.component';
import { LoginComponent } from './components/login/login.component';
import { MapDialogComponent } from './components/dialogs/map-dialog/map-dialog.component';

import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    LoginComponent,
    MapDialogComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MapDialogComponent]
})
export class AppModule { }
