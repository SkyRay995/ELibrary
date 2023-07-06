import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatInputModule} from '@angular/material/input'
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import{MatFormFieldModule} from '@angular/material/form-field';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  exports:[
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeLoggedInComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class LoginFormMaterial{ }
