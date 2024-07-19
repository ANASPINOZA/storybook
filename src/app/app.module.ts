import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './../stories/input.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { SideBarComponent } from '../stories/side-bar/side-bar.component';
import { ButtonComponent } from '../stories/buttonstory/button.component';
import { InputsComponent } from 'src/stories/inputs/inputs.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../stories/checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { dropdownComponent } from '../stories/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SideBarComponent,
   InputsComponent,
   CheckboxComponent,
   dropdownComponent,                
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputComponent,
    TextAreaComponent,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
