import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicationService } from '../HttpCommunication/http-communication.service';
import { User } from '../model/user';

@Injectable()
export class AuthService {

  constructor(private httpCommunications: HttpCommunicationService) { }

  doLogin(username: string): Observable<User[]>{
    return this.httpCommunications.retrieveGetCall<User[]>("users", {username});
  }
}
