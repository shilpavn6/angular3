import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
//import{HttpClient} from '@angular/http';
//import {map,catchError,tap} from 'rxjs/operators';
import { User } from 'src/app/Model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 _baseUrl="http://localhost:3000";  
  constructor(private user:UserService,private _http: HttpClient) { }
  httpOptions={
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })
}
getUsers():Observable<User>{
  return this._http.get<User>(this._baseUrl+'/users').pipe(
    retry(1),
    catchError(this.handleError)
  );
 // pipe(map(this.extractData),catchError(this.handleError<any>('user get failed')));
}
extractData(res:Response){
  let body=res;
  console.log(body);
  return body || {};
}
getUser(id):Observable<User>{
  return this._http.get<User>(this._baseUrl+'/users/'+id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )  
}
registerUser(user):Observable<User>{
    return this._http.post<User>(this._baseUrl+ '/users', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  DeleteUser(id) {
    return this._http.delete<User>(this._baseUrl + '/users/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  EditUser(id,user):Observable<User>{
    return this._http.put<User>(this._baseUrl + '/users/' + id, JSON.stringify(user), this.httpOptions) 
    .pipe(
      retry(1),
      catchError(this.handleError)
    ) 
  }
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}