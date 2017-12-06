import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DoctorsService {

  constructor(private http: Http) {
  }

  public getJSONForRobot1() {
    return this.http.get('assets/doctorDataRobot1.json')
      .map(res => res.json())
      .catch(this.handleError);

  }

  public getJSONForRobot2() {
    return this.http.get('assets/doctorDataRobot2.json')
      .map(res => res.json())
      .catch(this.handleError);

  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
