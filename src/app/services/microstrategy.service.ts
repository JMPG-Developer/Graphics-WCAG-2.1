import { Injectable } from '@angular/core';
import { GraphicData } from '../models/graphic-data';

import { HttpClient } from '@angular/common/http';
import { SecurityService } from './security.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicrostrategyService {

  constructor(
    private httpClient: HttpClient, 
    private securityService:SecurityService
  ){}

  public getValues():Array<GraphicData>{
    let list:Array<GraphicData> = new Array<GraphicData>();

    let numberOfElements:number = (Math.random() * 12);
    numberOfElements = parseInt(numberOfElements.toString());

    for( var i=0; i < numberOfElements ; i ++ ){
      let title:string = "Valor " + i;
      let value:number = (Math.random() * 1000);
      list.push( {
        title: title,
        value: value,
        position: i,
      })
    }

    return list;
  }

  public login(username:string, password:string):Promise<Object>{
    return this.httpClient.get("assets/json/login.json").toPromise();
  }

  public reports():Promise<Object>{
    return this.httpClient.get("assets/json/reports.json").toPromise();
  }

  public instances():Promise<Object>{
    return this.httpClient.get("assets/json/instances.json").toPromise();
  }
}
