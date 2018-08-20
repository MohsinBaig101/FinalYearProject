import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class ProgramService {
  constructor(private http: Http) { }

  public get_data() {
    let client_id = SharedModule.get_client_id();
    let url = SharedModule.API_URL_local+'programs?client_ids='+client_id;
     let data;
    return this.http.get(url);
      //return data;
  }


  public program_record_inseret(credentials) {
    let client_id = SharedModule.get_client_id();
     let url = SharedModule.API_URL_local+'programs?client_id='+client_id;
      credentials ={
         'program_name' : credentials.program_name,
         'client_id' : client_id
     };
     //let data;
    return this.http.post(url,credentials);
     // return data;
  }
 

  public edit_program(id)
  {
    let url = SharedModule.API_URL_local+'programs'+"/"+id+"/edit";
    
    return this.http.get(url);
  }
  
 
  
  public delete_program(id)
  {
    let client_id = SharedModule.get_client_id();
    let url = SharedModule.API_URL_local+"programs/"+id+"?client_id="+client_id;
    
    return this.http.delete(url,id);
  }

  public update_program(data,id)
  {
    let client_id = SharedModule.get_client_id();
    data ={
      'program_name' : data.program_name,
      'client_id' : client_id
  };
   
    let url = SharedModule.API_URL_local+"programs/"+id+"?client_ids="+client_id;
    
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