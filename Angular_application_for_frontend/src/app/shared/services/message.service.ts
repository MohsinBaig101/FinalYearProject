import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class MessageService {
  constructor(private http: Http) { }

  success(data)
  {

        return '<div class="custom-alerts alert alert-success fade in" id="prefix_134719653591"><button aria-hidden="true" class="close" data-dismiss="alert" type="button" value="X"></button>'+data+'</div>';
      
  }
  error(data)
  {
      
        return '<div class="custom-alerts alert alert-danger fade in" id="prefix_134719653591"><button aria-hidden="true" class="close" data-dismiss="alert" type="button" value="X"></button>'+data+'</div>';
      
  }

}