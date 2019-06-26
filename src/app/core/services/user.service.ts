import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
urlApi='https://api.github.com/users';

  // Get all users
getusers(){
 return this.http.get(`${this.urlApi}?per_page=10`)
  
}
// Get single user
getuser(userName:string){
  return this.http.get(`${this.urlApi}/${userName}?per_page=10`)
}
}
