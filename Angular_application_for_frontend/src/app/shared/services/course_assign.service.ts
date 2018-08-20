import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class CourseAssignService {
  constructor(private http: Http) { }

  public get_data() {
    
    let url = SharedModule.API_URL_local+'assign_courses?client_id='+SharedModule.get_client_id();
     let data;
    return this.http.get(url);
      //return data;
  }

  public get_data_detail() {
    
    let url = SharedModule.API_URL_local+'assign_detail?client_id='+SharedModule.get_client_id();
     let data;
    return this.http.get(url);
      //return data;
  }

  public get_teacher_detail(id)
  {
    let url = SharedModule.API_URL_local+'teacher_detail_show/'+id;
     let data;
    return this.http.get(url);
  }

  public get_teacher_availability() {
    let url = SharedModule.API_URL_local+'teacher_availability';
     let data;
    return this.http.get(url);
      //return data;
  }

  public course_assign_record_inseret(credentials) {
     let url = SharedModule.API_URL_local+'assign_courses?client_id='+SharedModule.get_client_id();
      credentials ={
         'course_id' : credentials.course_id,
         'user_id' : credentials.user_id,
         'program_id' : credentials.program_id,
         'smester_id' : credentials.smester_id,
         'client_id' : SharedModule.get_client_id(),
        
     };
     //let data;
    return this.http.post(url,credentials);
     // return data;
  }
  public teacher_detail_record_inseret(credentials,id) {
    credentials = {teach_entering_time : credentials.teach_entering_time,
                   teach_leaving_time: credentials.teach_leaving_time,
                   weak_day_id : credentials.weak_day_id,
                   user_id: id,
                  fk_user_data : "instructor_detail"};

     let url = SharedModule.API_URL_local+'teachers';
   
     //let data;
    return this.http.post(url,credentials);
     // return data;
  }

  public edit_assign_courses(id)
  {
    let url = SharedModule.API_URL_local+'assign_courses'+"/"+id+"/edit?client_id="+SharedModule.get_client_id();
    
    return this.http.get(url);
  }
  public edit_instructor_detail(id)
  {
    let url = SharedModule.API_URL_local+"teacher_detail/"+id;
    
    return this.http.get(url);
  }
  public edit_instructor_detail_time(id)
  {
    let url = SharedModule.API_URL_local+"teacher_detail_show/"+id;
    
    return this.http.get(url);
  }
  
  public delete_course(id)
  {
    let url = SharedModule.API_URL_local+"assign_courses/"+id+"?client_id="+SharedModule.get_client_id();
    
    return this.http.delete(url,id);
  }

  public update_course(data,id)
  {
    data ={
      'course_name' : data.course_name,
      'course_code' : data.course_code,
      'client_id' : "2"
  };
   
    let url = SharedModule.API_URL_local+"courses/"+id;
    
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