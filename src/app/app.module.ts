import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import { DoctorsScheduleComponent } from './doctors-schedule/doctors-schedule.component';
import {DoctorsService} from './doctors-schedule/DoctorsService';
import {NgbModule, NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import {TabsModule} from 'ngx-tabs';
import {DateFormatPipe} from './date-format.pipe';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpModule, NgbModule, TabsModule,
    RouterModule.forRoot([
        { path: 'doctors', component: DoctorsScheduleComponent}
    ])
  ],
  declarations: [AppComponent,
    DoctorsScheduleComponent],
  bootstrap: [AppComponent],
  providers: [DoctorsService, NgbTabsetConfig, DateFormatPipe]
})
export class AppModule {
}
