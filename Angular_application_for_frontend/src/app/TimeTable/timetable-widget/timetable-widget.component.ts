import { Component, OnInit,ViewChild,ElementRef,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators} from '@angular/forms';
 

import { TimeTableService } from '../../shared/services/timetable.service';
import { MessageService } from '../../shared/services/message.service';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-timetable-widget',
  templateUrl: './timetable-widget.component.html',
  styleUrls: ['./timetable-widget.component.css']
})
export class TimeTableWidgetComponent implements OnInit {
  //@Input('id') userName: string;

   //@ViewChild() input: ElementRef;
  public isActive = true;
  public boolian;
  public canload = false;
  public show_html = 0;
  public show_htmls;
  public boll= 0;
  public button_bool = 0;
  public message;
  public message_bool;
  public f = "";
  public classdetails:any;
  public data:any;
  public show_msg_bool;
  public html_msg;
  public arr=[];
  public pre = [];
   public start_time =[];
   public start_date =[];
   public end_time =[];
   public end_date =[];
   public name:any;
   public room = [];
  public edits_data:any;
  public edits_teacher_detail:any;

  public data_here:any;
  public drag_drop_issue = 0;


  public verify_data_timetable = [];




  // ngAfterViewInit() {
  //   alert(this.input.nativeElement.value);
  // }

  public insupdate = new FormGroup(
    { 
      start_time: new FormControl('',Validators.required),
      start_date: new FormControl('',Validators.required),
      end_time: new FormControl('',Validators.required),
      end_date: new FormControl('',Validators.required),      
    });
 

    
  
    
    public isfetching = new FormGroup(
      {
        program_id : new FormControl('', Validators.required) ,
        smester_id : new FormControl('' , Validators.required) ,
       });
   constructor(private dragulaService: DragulaService , private _router:Router, private _timetable: TimeTableService, private _message : MessageService) {
    
     
    dragulaService.setOptions('bag-task1', {
      removeOnSpill: true,
      
    });

    dragulaService.over.subscribe((value) => { this.onOver(value.slice(1)); });
    dragulaService.out.subscribe((value) => { this.onOut(value.slice(1)); });


    dragulaService.setOptions('bags-task1', {
      removeOnSpill:true
    });
    // dragulaService.setOptions('bag-task1', {
    //   removeOnSpill: true
    // });
  }


    
    




  private onOut(args) {
    let [el, target, source] = args;
    target.classList.remove("btn_style");
}
  private onOver(args) {
    let [el, target, source] = args;
    target.classList.add("btn_style");
}
  ngOnInit() {
  //  alert(this.drag_drop_issue);

  // this.dragulaService.drop.subscribe(value => {console.log(value)});


    this.dragulaService.drag.subscribe((value:any) => {
   //  alert();
     
  });


    this.dragulaService
      .drop
      .subscribe(value => {
        if(this.drag_drop_issue === 0)
        {
          // alert(value[2].innerText);
        let val =  value[2].innerText;
        
        localStorage.setItem('before_split',val);
        let x= val.split("\n");
       // x=x.replace(/,\s*$/, "");
        localStorage.setItem('after_split',x);
        localStorage.setItem('course_name' , x[0]);
        localStorage.setItem('teacher_name', x[1]);

        let program_smester = x[2];
        let p_s= program_smester.split(" ");
        localStorage.setItem('program', p_s[0]);
        localStorage.setItem('smester', p_s[1]);

        let st_t = x[4];
        
        let cc = st_t.split(" ");
        
        localStorage.setItem('start_time', cc[0]);
        localStorage.setItem('start_date', cc[1]);
        let ed_t = x[5];
        let fg = ed_t.split(" ");
         
        localStorage.setItem('end_time', fg[0]);
        localStorage.setItem('end_date', fg[1]);

        let et = x[6];
        //localStorage.setItem('check', et);
        let fgh = et.split(" ");
       // alert(fgh[0]);
        localStorage.setItem('room', fgh[0]);
       // localStorage.setItem('end_date', fg[1]);
        this.drag_drop_issue = 1;
        }else
        {
        // alert(value[2].innerText);
        let val =  value[2].innerText;
        
        localStorage.setItem('before_split',val);
        let x= val.split("\n");
       // x=x.replace(/,\s*$/, "");
        localStorage.setItem('after_split',x);
        localStorage.setItem('course_name' , x[1]);
        localStorage.setItem('teacher_name', x[2]);

        let program_smester = x[3];
        let p_s= program_smester.split(" ");
        localStorage.setItem('program', p_s[0]);
        localStorage.setItem('smester', p_s[1]);

        let st_t = x[5];
        
        let cc = st_t.split(" ");
        
        localStorage.setItem('start_time', cc[0]);
        localStorage.setItem('start_date', cc[1]);
        let ed_t = x[6];
        let fg = ed_t.split(" ");
         
        localStorage.setItem('end_time', fg[0]);
        localStorage.setItem('end_date', fg[1]);


        let eti = x[7];
        let fggh = eti.split(" ");
        // alert(fggh[7]);
        localStorage.setItem('room', fggh[0]);
        }
       
        //console.log(bb);
        // alert("dfds");
        // console.log(this.verify_data_timetable);return false;
        this.button_bool = 1;
        
       // alert("hello");stringToSplit.split(" ")
      //  let val =  value[2].innerText;
      //   let x= val.split(" ");
      //   alert(x);
         //this.html_msg = `Dropped the ${ value[1].innerText }!`;
        // this.dragging$.next(false);
        // setTimeout(() => {
        //   this.html_msg = '';
        // }, 10000);
      });
      
     
   
      this.message_bool = 0;
      this._timetable.get_data().subscribe(response => {
      this.data = response.json();    
      this.canload = true;
      if(this.data.error)
      {
        this.show_htmls = this._message.error(this.data.error);

      }
    
    });
    
   }
  public get_class_data()
  {
    this.message_bool = 0;

    this._timetable.get_class_data(this.isfetching.value).subscribe(response => {
      this.classdetails = response.json();
      this.boll = 1;
     // console.log(this.class_details.data['0']['0']);
      this.show_html = 1;
      // if(this.classdetails.sucess)
      // {
      //   alert("Information fetched successfully please check below..");
      // }
      if(this.classdetails.error)
      {
        this.boll = 0;
        alert(this.classdetails.error);
        this.isActive = true;
        return false;
      }
      this.isActive = true;
      this.boolian = true;
      
    });
  }

  public get_field_name(val)
  {
    this.edits_data = "appent_html"+val;
    return this.edits_data['time_id'];
  }
  public appent_html()
  {
  //  let name = this.edits_data['time_id'];
    
    let start;
    start = this.insupdate.value.start_time;
    let end = this.insupdate.value.start_date;
    let bb;
    bb = this.insupdate.value.end_time;
    let cc = this.insupdate.value.end_date;
    this.name = end+" "+start+" To "+cc+" "+bb;
  }



  public monday(val)
  {
    localStorage.setItem('weak_day_id', "1");
    this.message_bool = 0;
      this._timetable.timetable_record_inseret().subscribe(response => {
      this.data = response.json();    
       
      if(this.data.error)
      {
        this.show_htmls = this._message.error(this.data.error);

      }
      
    });
    // console.log(localStorage.getItem()); 
    // alert("monday");
  }
  public tuesday(val)
  {
    localStorage.setItem('weak_day_id', "2");
    this.message_bool = 0;
      this._timetable.timetable_record_inseret().subscribe(response => {
      this.data = response.json();    
       
      if(this.data.error)
      {
        this.show_htmls = this._message.error(this.data.error);

      }
      
    }); 
  }
  public wednessday(val)
  {
    localStorage.setItem('weak_day_id', "3");
    this.message_bool = 0;
      this._timetable.timetable_record_inseret().subscribe(response => {
      this.data = response.json();    
       
      if(this.data.error)
      {
        this.show_htmls = this._message.error(this.data.error);

      }
      
    }); 
  }
  public thursday(val)
  {
    localStorage.setItem('weak_day_id', "4");
    this.message_bool = 0;
      this._timetable.timetable_record_inseret().subscribe(response => {
      this.data = response.json();    
       
      if(this.data.error)
      {
        this.show_htmls = this._message.error(this.data.error);

      }
      
    });
  }
  public friday(val)
  {
    localStorage.setItem('weak_day_id', "5");
    alert("friday");
  // console.log(localStorage.getItem()); 
  }
  public saturday(val)
  {
    localStorage.setItem('weak_day_id', "6");
    this.message_bool = 0;
      this._timetable.timetable_record_inseret().subscribe(response => {
      this.data = response.json();    
       
      if(this.data.error)
      {
        this.show_htmls = this._message.error(this.data.error);

      }
      
    }); 
  }

  public sunday(val)
  {
    localStorage.setItem('weak_day_id', "7");
    this.message_bool = 0;
      this._timetable.timetable_record_inseret().subscribe(response => {
      this.data = response.json();    
       
      if(this.data.error)
      {
        this.show_htmls = this._message.error(this.data.error);

      }
      
    });
  }



  
  
  


}
