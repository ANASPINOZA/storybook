import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { IconComponent } from '../stories/icon/icon.component';
import { SidebarComponent } from '../stories/sidebar/sidebar.component';
import { ButtonsComponent } from '../stories/socialmediabuttons/buttons.component';
import { InputsComponent } from '../stories/inputs/inputs.component';
import { FormsModule } from '@angular/forms';
import { MainbuttonComponent } from '../stories/mainbutton/mainbutton.component';

@NgModule({
  declarations: [AppComponent, IconComponent, SidebarComponent, ButtonsComponent, InputsComponent, MainbuttonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextAreaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
