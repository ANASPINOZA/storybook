import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './../stories/button.component';
import { InputComponent } from './../stories/input.component';
import { TextAreaComponent } from './../stories/textArea.component';
// import { DateInputComponent } from '../stories/date.input/date.input.component';
import { DateInputComponent } from 'src/stories/date.input/date.input.component';

@NgModule({
  declarations: [
    AppComponent,
    DateInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    InputComponent,
    TextAreaComponent,
    // DateInputComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
