import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StillWorldComponent } from './still-world/still-world.component';
import { AngularixComponent } from './angularix/angularix.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    StillWorldComponent,
    AngularixComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
