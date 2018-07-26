import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutingModule } from './app.router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { FooterComponent } from './components/footer/footer.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    DashboardComponent,
    HeaderComponent,
    LeftSideComponent,
    FooterComponent,
    ControlSidebarComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
