import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';
const USERNAME = 'USERNAME';
const UID = 'UID';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string, username: string): void {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem(USERNAME, username);
  }

  setUID(uid: string): void {
    localStorage.setItem(UID, uid);
  }

  getUID() {
    var uid: number = +localStorage.getItem(UID);
    return uid;
  }

  getUserName() {
    return localStorage.getItem(USERNAME);
  }

  getToken() {
    return 'Bearer ' + localStorage.getItem(TOKEN);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}