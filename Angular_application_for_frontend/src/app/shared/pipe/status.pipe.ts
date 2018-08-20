import { DatePipe } from '@angular/common';
import { Component,Pipe, PipeTransform } from '@angular/core';
import { CacheService } from '../services/cache.service';
@Pipe({
  name: 'dateTime'
})
export class StatusPipe extends DatePipe implements PipeTransform {
  private storage  = window.localStorage;
  public allStatus = this.storage['statuses'];
  // public allStatus:Array<any> = this.storage['statuses'];

  private digitsToTime(value:any){
      
      let ans      = value / 60;
      let total    = parseInt(value);
      let forCheck = parseInt(value);
      // let ans = 10.66667;
      // let ans2 = 230 / 3;
      // let remainder = 230 % 3;
      // if(ans.find('.'))
      let isFloat = ans.toString().includes('.');
      // console.log(isFloat);
      if(isFloat){
        let splited  = ans.toString().split('.');
        let newValue = parseInt(splited[0]);
        let calculatedTotal = newValue * 60;
        total = total - calculatedTotal;
        value = newValue.toString()+':'+total;
      }else{
        value = ans + ':00';
      }

      if(forCheck>=720){
        value = value + ' PM';
      }else{
        value = value + ' AM';
      }
        
      return value;
  }

  public cacheService:CacheService;

  transform(value: any, args?: any): any {
  	// console.log("in pipe :",value,args);
  	if(args.match('date')){
  		let date = new Date(value);
  		// console.log("found",date);
  		let changedDate = super.transform(date,'dd/MM/yyyy');
  		value = changedDate;
  		// console.log(value);
  	}
  	if(args.match('time')){
      value = this.digitsToTime(parseInt(value));
      // let value = 640;

        // let newValue = splited[0] * 10;
        // console.log(total,"new ",calculatedTotal,value);
  	}

    // console.log(this.storage['statuses']);
  	if(args.match('status_id')){
      //console.log(,value);
      let data = JSON.parse(this.allStatus);
      let checkForStatus = data.filter(function(data){ 
        return data.status_id == value;
      });
  		console.log(checkForStatus);
      value = checkForStatus[0].status_desc;
      // this.allStatus.forEach(item=>{
      //   console.log(item.status_id);
      // })
      //let checkForStatus   =  this.allStatus.find(x => x.status_id == value);
      // if(item.status_id && !_.isUndefined(item.status_id)){ 
      // value = this.allStatus.sta
  		// if(value==1){
  		// 	value  = 'Active';
  		// }else if(value==2){
  		// 	value  = 'InActive';
  		// }
  	}
    // switch(args){
    //   case args.match('date'):
    //     console.log("in it",value);
    //      value=value+'2';
    //   default:
    //     value=value+'1';
    // }

    return value;
  }

}
