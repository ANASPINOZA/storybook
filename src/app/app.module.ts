import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './../stories/input.component';
import { TextAreaComponent } from './../stories/textArea.component';
import { SideBarComponent } from '../stories/side-bar/side-bar.component';
import { InputTextComponent } from '../stories/input-text/input-text.component';
import { ButtonComponent } from '../stories/buttonstory/button.component';
import { InputsComponent } from 'src/stories/inputs/inputs.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from '../stories/navigation/navigation.component';
import { CheckboxComponent } from '../stories/checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SideBarComponent,
   InputTextComponent,
   InputsComponent,
   NavigationComponent,
   CheckboxComponent,
   
                  
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
