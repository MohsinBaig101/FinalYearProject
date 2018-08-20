import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class CourseService {
  constructor(private http: Http) { }

  public get_data() {
    let client_id = SharedModule.get_client_id();
    let url = SharedModule.API_URL_local+'courses?client_ids='+client_id;
     let data;
    return this.http.get(url);
      //return data;
  }

 

  

  public course_record_inseret(credentials) {
    let client_id = SharedModule.get_client_id();
     let url = SharedModule.API_URL_local+'courses?client_id='+client_id;
      credentials ={
         'course_name' : credentials.course_name,
         'course_code' : credentials.course_code,
         'client_id' : client_id
     };
     //let data;
    return this.http.post(url,credentials);
     // return data;
  }


  public edit_course(id)
  {
    let url = SharedModule.API_URL_local+'courses'+"/"+id+"/edit";
    
    return this.http.get(url);
  }
  
 
  
  public delete_course(id)
  {
    let client_id = SharedModule.get_client_id();
    let url = SharedModule.API_URL_local+"courses/"+id+"?client_id="+client_id;
    
    return this.http.delete(url,id);
  }

  public update_course(data,id)
  {
    let client_id = SharedModule.get_client_id();
    data ={
      'course_name' : data.course_name,
      'course_code' : data.course_code,
      'client_id' : client_id
  };
   
    let url = SharedModule.API_URL_local+"courses/"+id+"?client_ids="+client_id;
    
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