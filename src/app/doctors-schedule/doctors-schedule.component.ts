import { Component, OnInit } from '@angular/core';
import {DoctorsService} from './DoctorsService';
import {Http} from '@angular/http';
import * as moment from 'moment';

@Component({
  selector: 'app-doctors-schedule',
  templateUrl: './doctors-schedule.component.html',
  styleUrls: ['./doctors-schedule.component.css']
})
export class DoctorsScheduleComponent implements OnInit {
  currentJustify = 'start';
  welcome: string;
  doctorScheduleRobot1: any;
  doctorScheduleRobot2: any;
  doctors: any;
  weekDays: any;
  weekDaysArray: any;
  week1: any;
  week2: any;
  week3: any;
  week4: any;
  week5: any;
  myMoment: string = moment().format('MM/DD/YYYY');
  constructor(private doctorService: DoctorsService, private http: Http) {
    this.welcome = 'Doctor Schedule';
    this.getScheduleConfig();
    this.getScheduleConfigRobot2();
    this.doctors = ['Timothy Bradford', 'Blake Moore',	'Meghana Gowda',	'Jason Szobota',
      'Eric Cote',	'Kinloch Nelson',	'Charlie Jung',	'Cameron Barnes',
      'Michael Franks',	'Robert Nelson',	'Mark Monahan',	'David Miller',
      'David Glazier',	'Bruce Rowe'];
    this.weekDaysArray = this.getDaysInMonth();
    console.log(this.weekDaysArray);
  }

  ngOnInit(): void {}

  getDaysInMonth() {
    const currentDate = moment();
    console.log(currentDate);
    const yearStart = currentDate.clone().startOf('year');
    const weekStart = currentDate.clone().startOf('isoWeek');
    const end = currentDate.clone().endOf('isoWeek');
    console.log('this.currentWeek end: ' + moment(end).format('MM/DD/YYYY'));
    this.week1 = moment(weekStart).format('MM/DD/YYYY') + ' to ' + moment(weekStart).weekday(5).format('MM/DD/YYYY');
    console.log('this.currentWeek : ' + this.week1);
    this.week2 = moment(weekStart).weekday(8).format('MM/DD/YYYY') + ' to ' + moment(weekStart).weekday(12).format('MM/DD/YYYY');
    console.log('this.week2 : ' + this.week2);
    this.week3 = moment(weekStart).weekday(15).format('MM/DD/YYYY') + ' to ' + moment(weekStart).weekday(19).format('MM/DD/YYYY');
    console.log('this.week3 : ' + this.week3);
    this.week4 = moment(weekStart).weekday(22).format('MM/DD/YYYY') + ' to ' + moment(weekStart).weekday(26).format('MM/DD/YYYY');
    console.log('this.week4 : ' + this.week4);
    this.week5 = moment(weekStart).weekday(29).format('MM/DD/YYYY') + ' to ' + moment(weekStart).weekday(33).format('MM/DD/YYYY');
    console.log('this.week5 : ' + this.week5);
    const yearEnd = currentDate.clone().endOf('year');
    const days = [];
    for (let i = 0; i <= 365; i++) {
      const weekVal = moment(yearStart).add(i, 'days').format('MM, dddd, YYYY');
      if (weekVal.toString().toUpperCase().includes('SATURDAY') || weekVal.toString().toUpperCase().includes('SUNDAY')) {
      } else {
        days.push(moment(yearStart).add(i, 'days').format('MM/DD/YYYY'));
       // days.push(moment(weekStart).add(i, 'days').format('MMMM Do,dddd'));
      }

    }
    return this.weekDays = days;
  }


  getScheduleConfig() {
    this.doctorService.getJSONForRobot1().subscribe(
      docSchedule => {
        this.doctorScheduleRobot1 = docSchedule;
        console.log(docSchedule);
      });
  }

  getScheduleConfigRobot2() {
    this.doctorService.getJSONForRobot2().subscribe(
      docSchedule => {
        this.doctorScheduleRobot2 = docSchedule;
        console.log(docSchedule);
      });
  }

}
