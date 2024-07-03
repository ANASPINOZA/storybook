import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './../stories/button.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { IconComponent } from '../stories/icon/icon.component';
import { SidebarComponent } from '../stories/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, IconComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    TextAreaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
