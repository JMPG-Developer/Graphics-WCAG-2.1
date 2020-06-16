import { Injectable } from '@angular/core';
import { GraphicData } from '../models/graphic-data';

@Injectable({
  providedIn: 'root'
})
export class MicrostrategyService {

  constructor() { }

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
}
