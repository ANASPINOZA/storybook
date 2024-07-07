import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { IconComponent } from '../stories/icon/icon.component';
import { SidebarComponent } from '../stories/sidebar/sidebar.component';
import { ButtonsComponent } from '../stories/buttons/buttons.component';

@NgModule({
  declarations: [AppComponent, IconComponent, SidebarComponent, ButtonsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextAreaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
