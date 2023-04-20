import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  http: any;
  task:any
  constructor(private httpclient:HttpClient) { }
  getData(){

    return this.httpclient.get('https://jsonplaceholder.typicode.com/todos')
  }

  postData(){
     return this.httpclient.post('https://jsonplaceholder.typicode.com/todos' , this.task).subscribe(
         (response: any) => {
          console.log('Item transferred successfully');
        },
        (error: any) => {
          console.log('Item transfer failed');
        }
      );
  }
}
