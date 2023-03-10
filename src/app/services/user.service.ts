import {  Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { SendUser, login } from '../models/user.model';
import {  Observable } from 'rxjs';
import { changePassword } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly  url= 'https://backend-music-school.vercel.app/api';


noAutHeader={headers:new HttpHeaders({'noAuth':'True'})}



  constructor(private http :HttpClient ) { }



// get user
getUser():Observable<any>
{



return this.http.get<any>(this.url+'/userProfile/user');

}




login(authCredentials: login):Observable<any> {

   return this.http.post<any>(this.url+'/auth/login',authCredentials,this.noAutHeader)



 }

// Create
postUser(user :SendUser):Observable<any>
{

 return this.http.post<any>(this.url+'/auth/register',user,this.noAutHeader)
}


patchPassword(password:changePassword):Observable<changePassword>
{


return this.http.patch<changePassword>(this.url +'/userProfile/changePassword',password)


}


pathEmail(email:any):Observable<any>
{

  

return this.http.patch<any>(this.url+'/userProfile/changeEmail',email)

}

getToken():any
{


  return localStorage.getItem("token");
}


setToken(token:any)
{

localStorage.setItem("token",token)
}

delteToken()
{

  localStorage.removeItem('token');
}


logout()
{
  this.delteToken()

}





// get all users
// getUsers():Observable<any>
// {

// return this.http.get<any>(this.url);

// }

// get user with id
// getUserid(_id : String):Observable<any>
// {
//   return this.http.get<any>(this.url +`/${_id}`);


// }



// Update
// putUser(data:ReceiveUser):Observable<any>
// {



// return this.http.put(this.url +`/${data._id}`,data,{responseType:'text'})

// }










}

