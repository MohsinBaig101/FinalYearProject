import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class RoomService {
  constructor(private http: Http) { }

  public get_data() {
   let client_id =  this.get_client_id();
    let url = SharedModule.API_URL_local+'rooms?client_ids='+client_id;
     let data;
    return this.http.get(url);
      //return data;
  }

 
  public get_client_id()
  {
    let client_id = localStorage.getItem('client_id');
    return client_id;
  }
 

  public room_record_inseret(credentials) {
    let client_id = SharedModule.get_client_id();
     let url = SharedModule.API_URL_local+'rooms';
     if(credentials.room_type == 1)
     {
      credentials ={
        'room_name' : credentials.room_name,
        'fk_db_key' : "1",
        'client_id' : client_id
    };
     }
     if(credentials.room_type == 2)
     {
      credentials ={
        'room_name' : credentials.room_name,
        'fk_db_key' : "2",
        'client_id' : client_id
    }
     } 
     
     //let data;
    return this.http.post(url,credentials);
     // return data;
  }

  public edit_room(id)
  {
    let url = SharedModule.API_URL_local+'rooms'+"/"+id+"/edit?client_id="+SharedModule.get_client_id();
    
    return this.http.get(url);
  }
   
  
  
  public delete_room(id)
  {
    let client_id = SharedModule.get_client_id();
    let url = SharedModule.API_URL_local+"rooms/"+id+"?client_id="+client_id;
    
    return this.http.delete(url,id);
  }

  public update_room(data,id)
  {
    let client_id = SharedModule.get_client_id();
    if(data.room_type == 1)
    {
      data ={
        'room_name' : data.room_name,
        'fk_db_key' : "1",
        'client_id' : client_id
    };
    }

    
    if(data.room_type == 2)
    {
      data ={
        'room_name' : data.room_name,
        'fk_db_key' : "2",
        'client_id' : client_id
    };
    }
    
    console.log(data);
  
   
    let url = SharedModule.API_URL_local+"rooms/"+id+"?client_ids="+client_id+"&& client_id="+client_id;
    
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