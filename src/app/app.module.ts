import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AtmComponent } from './components/atm/atm.component';
import { LoginComponent } from './components/login/login.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    LoginComponent,
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
