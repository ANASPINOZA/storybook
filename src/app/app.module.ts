import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './../stories/button.component';
import { InputComponent } from './../stories/input.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { IconComponent } from './../stories/icon/icon.component'
import { DateInputComponent } from '../stories/date.input/date.input.component';

// import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    DateInputComponent,
    IconComponent,
    // TestComponent,
  ],
  imports: [
    FormsModule,
    // IconComponent,
    ButtonComponent,
    BrowserModule,
    AppRoutingModule,
    InputComponent,
    TextAreaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
