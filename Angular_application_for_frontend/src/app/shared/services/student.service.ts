import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class StudentService {
  constructor(private http: Http) { }

  public get_data() {
    let client_id = SharedModule.get_client_id();
    let url = SharedModule.API_URL_local+'students?client_id='+client_id+"&& client_ids="+client_id;
     let data;
    return this.http.get(url);
      //return data;
  }

 


  public student_record_inseret(credentials) {
    let client_id = SharedModule.get_client_id();
     let url = SharedModule.API_URL_local+'students?client_id='+client_id;
      credentials ={
         'name' : credentials.name,
         'email' : credentials.email,
         'password' : credentials.password,
         'fk_db_key' : "3"
     };
     //let data;
    return this.http.post(url,credentials);
     // return data;
  }
 

  public edit_student(id)
  {
  
    let url = SharedModule.API_URL_local+'students'+"/"+id+"/edit";
    
    return this.http.get(url);
  }
 
 
  
  public delete_student(id)
  {
    let client_id = SharedModule.get_client_id();
    let url = SharedModule.API_URL_local+"students/"+id+"?client_id="+client_id;
    
    return this.http.delete(url,id);
  }

  public update_student(data,id)
  {
    let client_id = SharedModule.get_client_id();
     data ={
      'name' : data.name,
      'password' : data.password,
      'email' : data.email,
      'client_id' : client_id,
      'fk_db_key' : "3"
  };
   
    let url = SharedModule.API_URL_local+"students/"+id+"?client_id="+client_id+"&& client_ids="+client_id;
    
    return this.http.put(url,data);
  }


  private getRequestOptions(): RequestOptions {
    const requestOptions = new RequestOptions({
        headers: new Headers({
            'content-type': 'application/json',
            'X-CRFF-Token' : 'frerwers'
        })
    });

    return requestOptions;
}

}