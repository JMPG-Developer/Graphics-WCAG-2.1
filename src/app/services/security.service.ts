import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  private user:User;

  public setUser(user:User){
    this.user = user;
  }
}
