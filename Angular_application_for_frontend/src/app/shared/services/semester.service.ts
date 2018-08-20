import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class SemesterService {
  constructor(private http: Http) { }

  public get_data() {
    let client_id = this.get_client_id();
    let url = SharedModule.API_URL_local+'semesters?client_ids='+client_id;
      
    return this.http.get(url);
      //return data;
  }

  public get_client_id()
  {
    let client_id = localStorage.getItem('client_id');
    return client_id;
  }
   

  

  public semester_record_inseret(credentials) {
    let client_id = SharedModule.get_client_id();
     let url = SharedModule.API_URL_local+'semesters';
      credentials ={
         'semester_name' : credentials.semester_name,
         'semester_no' : credentials.semester_no,
         'client_id' : client_id
     };
     //let data;
    return this.http.post(url,credentials);
     // return data;
  }
 

  public edit_semester(id)
  {
    let client_id = this.get_client_id();
    let url = SharedModule.API_URL_local+'semesters'+"/"+id+"/edit?client_id="+client_id;
    
    return this.http.get(url);
  }
  
   
  
  public delete_semester(id)
  {
    let client_id = SharedModule.get_client_id();
    let url = SharedModule.API_URL_local+"semesters/"+id+"?client_id="+client_id;
    
    return this.http.delete(url,id);
  }

  public update_semester(data,id)
  {
    let client_id = SharedModule.get_client_id();
    data ={
      'semester_name' : data.semester_name,
      'semester_no' : data.semester_no,
      'client_id' : client_id
  };
   
    let url = SharedModule.API_URL_local+"semesters/"+id+"?client_ids="+client_id;
    
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