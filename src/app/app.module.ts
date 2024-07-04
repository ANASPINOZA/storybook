import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './../stories/button.component';
import { InputComponent } from './../stories/input.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { DateInputComponent } from '../stories/date.input/date.input.component';

@NgModule({
  declarations: [
    AppComponent,
    DateInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    InputComponent,
    TextAreaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
