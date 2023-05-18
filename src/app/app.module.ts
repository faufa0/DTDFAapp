import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QlistpageComponent } from './qlistpage/qlistpage.component';
import { AddeditQouteComponent } from './addedit-qoute/addedit-qoute.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//--------------------------------------------------------------------------------------------------------------
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
//--------------------------------------------------------------------------------------------------------------
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule}  from '@angular/material/core'

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    QlistpageComponent,
    AddeditQouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
//--------------------------------------------------------------------------------------------------------------
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
 //--------------------------------------------------------------------------------------------------------------
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    
    MatCardModule,
    MatTabsModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  
   
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
