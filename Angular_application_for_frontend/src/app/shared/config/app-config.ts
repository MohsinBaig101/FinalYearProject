// import { OpaqueToken, Injectable, OnInit } from "@angular/core";
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';

export class AppConfig{
    
    constructor(){}

    public page:number   = 1;
    public start:number  = 0;
    public limit:number  = 50;
    public is_new:number = 1;

    public paraMetersArray={

      Modules:{
        title:'Modules',
        viewApi:null,
        addApi:'Modules/Insert',
        params:'package_id',
        updateApi:'Modules/Update?_dc=1515004002384',
        delApi:'Modules/Delete?_dc=1515004002269',
        viewFields:'module_name,dir_name,abbrv,status_id',
        formFields:[
           { label: 'Module Name', name: 'module_name', type: 'text', value: null },
           { label: 'Directory Name', name: 'dir_name', type: 'text', value: null },
           { label: 'Abbrevation', name: 'abbrv', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
           }
        ],
        widgets:{
          title:'package',
          index:'package_id',
          viewApi:'Modules/Get?_dc=1515003690556',
          onClick:'data'
        },
        pdfUrl:'Modules/pdf',
        pdfParameters:[
          {name:'package_id',value:'packageWidgetValue'} 
        ]
      },
      //tobediscussed...api need a join
      Nodes:{
        title:'Nodes',
        viewApi:null,
        addApi:'Nodes/Insert?_dc=1520230573520',
        params:'module_id',
        updateApi:'Nodes/Update?_dc=1520230573520',
        delApi:'Nodes/Delete?_dc=1515004002269',
        viewFields:'function_name,parent_id,status_id',
        formFields:'function_name,parent_id,status_id',
        widgets:{
          title:'package',
          index:'package_id',
          onClick:'widget',
          widgets:{
            title:'module',
            index:'module_id',
            onClick:'data',
            viewApi:'Nodes/Get?_dc=1515004290236'
          }
        },
        pdfUrl:'Nodes/pdf',
        pdfParameters:[
          {name:'package_id',value:'packageWidgetValue'},{name:'module_id',value:'moduleWidgetValue'}
        ]
      },
      Periods:{
        title:'Periods',
        viewApi:null,
        addApi:'Batches/InsertBatch?_dc=1515084478222',
        params:'course_id,session_id',
        updateApi:'Batches/Update?_dc=1515084330129',
        delApi:'Batches/Delete?_dc=1515084329929',
        viewFields:'batch_display,subject_name,teacher_name,start_date,end_date,from_time,to_time,room_desc,day_set_desc',
        formFields:[
           { label: 'Batch Display', name: 'batch_display', type: 'text', value: null },
           { label: 'Subject Id', name: 'subject_id', type: 'text', value: null },
           { label: 'Teacher Id', name: 'teacher_id', type: 'text', value: null },
           { label: 'Start Date', name: 'start_date', type: 'date', value: null },
           { label: 'End Date', name: 'start_date', type: 'date', value: null },
           { label: 'From Time', name: 'from_time', type: 'text', value: null },
           { label: 'To Time', name: 'to_time', type: 'text', value: null },
           { label: 'Room Id', name: 'room_id', type: 'text', value: null },
           { label: 'Day Set Id', name: 'day_set_id', type: 'text', value: null },
          ],
        widgets:{
          title:'class',
          index:'course_id',
          onClick:'widget',
          widgets:{
            title:'session',
            index:'session_type_id',
            onClick:'widget',
            widgets:{
              title:'section',
              index:'session_id',
              onClick:'data',
              viewApi:'Batches/Get?_dc=1515083889388'
            }
          }
        },
        pdfUrl:'Batches/pdf',
        //pdfUrl:'Batches/pdf?course_id=#$classWidgetValue&session_type_id=#$sessionWidgetValue&session_id=#$3'
        //pdfParameters:[{'course_id'},{'session_type_id'},{'session_id'}]
         pdfParameters:[
          {name:'course_id',value:'classWidgetValue'},
          {name:'session_type_id',value:'sessionWidgetValue'},
          {name:'session_id',value:'sectionWidgetValue'}
        ]
      },
      Objects:{
        title:'Objects',
        viewApi:null,
        addApi:'Objects/Insert',
        params:'function_id',
        updateApi:'Objects/Update?_dc=1515004827338',
        delApi:'Objects/Delete?_dc=1515004924683',
        viewFields:'name,title,type_id',
        formFields:[
          { label: 'Name', name: 'name', type: 'text', value: null },
          { label: 'Title', name: 'title', type: 'text', value: null },
          { label: 'Type Id', name: 'type_id', type: 'text', value: null },
        ],
        widgets:{
          title:'package',
          index:'package_id',
          onClick:'widget',
          widgets:{
            title:'module',
            index:'module_id',
            onClick:'widget',
            widgets:{
              title:'function',
              index:'function_id',
              onClick:'data',
              viewApi:'Objects/Get?_dc=1515004744193'
            }
          }
        },
        pdfUrl:'Nodes/pdf',
        pdfParameters:[
          {name:'package_id',value:'packageWidgetValue'},
          {name:'module_id',value:'moduleWidgetValue'},
          {name:'function_id',value:'functionWidgetValue'}
        ]
      },
      Session:{
        title:'Session',
        viewApi:null,
        addApi:'SessionTypes/Insert?_dc=1514999036447',
        params:'course_id',
        // updateApi:'SessionTypes/Update?_dc=1514997727780',
        delApi:'SessionTypes/Delete?_dc=1514999091819',
        updateApi:'SessionTypes/Update?_dc=1514999092023',
        viewFields:'session_type,start_date,end_date,status_id',
        formFields:[
           { label: 'Session Type Desc.', name: 'session_type', type: 'text', value: null },
           { label: 'Start Date', name: 'start_date', type: 'date', value: null },
           { label: 'End Date', name: 'end_date', type: 'date', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ],
        widgets:{
          title:'class',
          index:'course_id',
          viewApi:'SessionTypes/Get?_dc=1514998920465',
          onClick:'data'
        },
        pdfUrl:'SessionTypes/pdf',
        pdfParameters:[
          {name:'course_id',value:'classWidgetValue'}
        ]
      },
      //tobediscussed 
      BrowsingLogs:{
        title:'Browsing Logs',
        viewApi:null,
        addApi:null,
        params:'course_id',
        updateApi:null,
        delApi:null,
        viewFields:'user_name,entry_time,updt_time,email,branch_id,status_id',
        formFields:null,
        widgets:{
          title:'user',
          viewApi:'Users/Get?_dc=1515005184117',
          onClick:'data'
        }
      },
      LoginLogs:{
        title:'Login Logs',
        viewApi:'Logins/Get?_dc=1520395293629',
        addApi:null,
        params:'course_id',
        updateApi:null,
        delApi:null,
        viewFields:'login_time,logout_time,success,ip_address,browser',
        formFields:null,
        widgets:{
          title:'user',
          viewApi:'Logins/Get?_dc=1515005805540',
          onClick:'data'
        },
        pdfUrl:'Logins/pdf',
        pdfParameters:[
          {name:'user_id',value:'userWidgetValue'}
        ]
      },
      Subjects:{
        title:'Subjects',
        viewApi:null,
        delApi:'Subjects/Delete?_dc=1514998137661',
        addApi:'Subjects/Insert?_dc=1514998137832',
        updateApi:'Subjects/Update?_dc=1514999367463',
        viewFields:'subject_name,total_marks,passing_marks,status_id',
        formFields:[
           { label: 'Subject Name', name: 'subject_name', type: 'text', value: null },
           { label: 'Total Marks', name: 'total_marks', type: 'number', value: null },
           { label: 'Passing Marks', name: 'passing_marks', type: 'number', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ],
        widgets : {
          title: 'class',
          onClick: 'data',
          viewApi : 'Subjects/Get?_dc=1514999219534'
        },
        pdfUrl:'Subjects/pdf',
        pdfParameters:[
            {name:'course_id',value:'classWidgetValue'}
        ]
        //pdfParameters:[{'course_id'}]

      },
      Sections:{
        title:'Sections',
        viewApi:null,//'Courses/Get?_dc=1514208355915',
        addApi:'Sessions/Insert?_dc=1514998597636',
        delApi:'Sessions/Delete?_dc=1514998753950',
        updateApi:'Sessions/Update?_dc=1514998754193',
        params:'future,course_id,session_type_id',
        viewFields:'session_desc,start_date,end_date,status_id',
        formFields:[
           { label: 'Course Name', name: 'course_name', type: 'text', value: null },
           { label: 'Start Date', name: 'start_date', type: 'date', value: null },
           { label: 'End Date', name: 'end_date', type: 'date', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ],
        widgets : {
          title: 'class',
          onClick: 'widget',
          // viewApi : 'SessionTypes/Get?_dc=1514998',
          widgets : {
            title: 'session',
            onClick: 'data',
            viewApi : 'Sessions/Get?_dc=1519708908096'
          }
        },
        pdfUrl:'Sessions/pdf',
        pdfParameters:[
            {name:'course_id',value:'classWidgetValue'},{name:'session_type_id',value:'sessionWidgetValue'}
        ]
      },
      //params needed to be set tobediscussed
      TimeTable:{
        title:'Time Table',
        viewApi:'Batches/Get?_dc=1514209420818',
        addApi:'TimeTable/Insert?_dc=1515000916713',
        delApi:null,
        updateApi:'notfound',
        widgets:{
          title:'date',
          onClick:'widget',
            widgets:{
              title:'teacher',
              onClick:'widget',
              widgets:{
                title:'from_time',
                onClick:'widget',
                widgets:{
                  title:'to_time',
                  onClick:'widget',
                  widgets:{
                    title:'room',
                    onClick:'widget',
                    widgets:{
                      title:'remarks',
                      onClick:'widget',
                      widgets:{
                        title:'period',
                        onClick:'data',
                        viewApi:'TimeTable/Get?_dc=1515000813855'
                      }
                    }
                  }
                }
              }
            }
          },
        viewFields:'tt_date,from_time,to_time,teacher_id,room_id,lecture_desc,lecture_date,lecture_from_time,lecture_to_time,end_date,status_id',
        formFields:[
        //tobediscussed widget fields
           { label: 'Date', name: 'tt_date', type: 'date', value: null },
           { label: 'From Time', name: 'from_time', type: 'text', value: null },
           { label: 'To Time', name: 'to_time', type: 'text', value: null },
           { label: 'From Time', name: 'from_time', type: 'text', value: null },
           { label: 'End Date', name: 'end_date', type: 'date', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
      },
      //tobediscussed
      StudentResult:{
           title:'StudentResult',
           viewApi:'Sessions/Get?_dc=1514209969322',
           addApi:null,
           delApi:null,
           widgets:{
            title:'class',
            index:'course_id',
            onClick:'widget',
            widgets:{
              title:'session',
              index:'session_type_id',
              onClick:'widget',
              widgets:{
                title:'section',
                index:'session_id',
                onClick:'data',
                viewApi:'StudentResult/Get?_dc=1515001419969',
                widgets:{
                 title:'student',
                 onClick:'data',
                 viewApi:'StudentResult/Get?_dc=1515001419969'
                }
              }
            }
           },
           viewFields:'subject_name,session_desc,total_marks,obtain_marks,grade_desc,result',
           // formFields:'subject_name,session_desc,total_marks,obtain_marks,grade_desc,result'
      },
      StudentList:{
        title:'Student List',
        viewApi:'Students/Get?_dc=1522821258247',
        addApi:'Students/Insert?_dc=1522821868442',
        // params:'course_id,session_id',
        updateApi:'Students/Update?_dc=1522821920012',
        delApi:'Students/Delete?_dc=1515084329929',
        viewFields:'student_name,roll_no,perm_address,mobile_no,gender,birth_date,city_id,status_id',
        formFields:[
           { label: 'Student Name', name: 'student_name', type: 'text', value: null },
           { label: 'Roll No.', name: 'roll_no', type: 'text', value: null },
           { label: 'Address', name: 'perm_address', type: 'text', value: null },
           { label: 'Mobile No.', name: 'mobile_no', type: 'number', value: null },
           {
                type: 'select',
                label: 'Gender',
                name: 'gender',
                value: "",
                options: [{title:'Male', value:1},{title:'Female', value:2}],
                placeholder: 'Select an option',
            },
           { label: 'Date of Birth', name: 'birth_date', type: 'date', value: null },
           { label: 'City', name: 'city_id', type: 'text', value: null },
           { label: 'Status Id', name: 'status_id', type: 'text', value: null },
          ],
        widgets:{
          title:'class',
          index:'course_id',
          onClick:'widget',
          widgets:{
            title:'session',
            index:'session_type_id',
            onClick:'widget',
            widgets:{
              title:'section',
              index:'session_id',
              onClick:'data',
              viewApi:'Students/Get?_dc=1522821258247'
            }
          }
        },
        pdfUrl:'Students/pdf',
        //pdfUrl:'Batches/pdf?course_id=#$classWidgetValue&session_type_id=#$sessionWidgetValue&session_id=#$3'
        //pdfParameters:[{'course_id'},{'session_type_id'},{'session_id'}]
         pdfParameters:[
          {name:'course_id',value:'classWidgetValue'},
          {name:'session_type_id',value:'sessionWidgetValue'},
          {name:'session_id',value:'sectionWidgetValue'}
        ]
      },
      //tobediscussed => api returning false
      Sibling:{
           title:'Sibling',
           viewApi:'Sibling/Get?_dc=1522824648460',
           viewFields:'student_id,student_name',
           // formFields:'student_id,student_name',
           widgets:{
            title:'student',
            onClick:'data',
            viewApi:'Sibling/Get?_dc=1522824648460',
           },
           pdfUrl:'Siblings/pdf',
           pdfParameters:[{name:'std_id',value:'studentWidgetValue'}]           
      },
      Contacts:{
           title:'Contacts',
           viewApi:'Employees/Get?_dc=1514293008342',
           viewFields:'contact_no,remarks',
           formFields:'contact_no,remarks',
           widgets:{
            title:'employee',
            onClick:'data',
            viewApi:'EmployeeContacts/Get?_dc=1520399221591',
           },
           pdfUrl:'EmployeeContacts/pdf',
           pdfParameters:[{name:'employee_id',value:'employeeWidgetValue'}]           
      },
      //need to be discussed...ICONS NOT WORKING
      EmployeeSalaries:{
           title:'Employee Salaries',
           viewApi:'',
           widgets:{
            title:'employee',
            onClick:'data',
            viewApi:'EmployeeSalaries/Get?_dc=1515002062322'
           },
           viewFields:'employee_id,from_date,to_date,salary_amount,status_id,pdfIcon',
           formFields:[
           { label: 'Employee Id', name: 'employee_id', type: 'text', value: null },
           { label: 'From Date', name: 'from_date', type: 'date', value: null },
           { label: 'To Date', name: 'to_date', type: 'date', value: null },
           { label: 'Salary Amount', name: 'salary_amount', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              },
          ],
          pdfUrl:'EmployeeSalaries/pdf',
          pdfParameters:[{name:'employee_id',value:'employeeWidgetValue'}]
      },
      UserRights:{
           title:'User Rights',
           viewApi:null,
           delApi:null,
           updateApi:null,
           addApi:null,
           widgets:{
            title:'user',
            onClick:'widget',
            viewApi:'Scope/GetIn?_dc=1515006634140',
            widgets:{
              title:'package',
              index:'package_id',
              onClick:'widget',
              widgets:{
                title:'module',
                index:'module_id',
                onClick:'data',
                viewApi:'Scope/GetIn?_dc=1515006634140'
              }
            }
           },
           viewFields:'function_name,view_rights,insert_rights,update_rights,delete_rights',
           formFields:null
      },
      UserRightsCloning:{
           title:'UserRightsCloning',
           viewApi:null,
           delApi:null,
           updateApi:null,
           addApi:null,
           widgets:{
            title:'from_user',
            onClick:'data',
            viewApi:'Scope/GetIn?_dc=1515007294539',
            widgets:{
              title:'to_user',
              onClick:'data',
              viewApi:'Scope/GetIn?_dc=1515007328269'
            }
           },
           viewFields:'function_name,view_rights,insert_rights,update_rights,delete_rights',
           formFields:null
      },
      //all the scoped tabs are tobediscussed
      ScopedBatches:{
           title:'ScopedBatches',
           viewApi:null,
           delApi:'ScopedBatches/Delete?_dc=1515008208084',
           updateApi:'ScopedBatches/Update?_dc=1515008153640',
           addApi:'ScopedBatches/Insert?_dc=1515008208260',
           widgets:{
            title:'user',
            onClick:'data',
            viewApi:'Batches/Get?_dc=1515007684331',
           },
           viewFields:'batch_display,batch_desc',
           formFields:[
           { label: 'Batch Display', name: 'batch_display', type: 'text', value: null },
           { label: 'Batch Desc.', name: 'batch_desc', type: 'text', value: null },
          ]
      },
      ScopedBranches:{
           title:'Scoped Branches',
           viewApi:null,
           delApi:'ScopedBranches/Delete?_dc=1515008540565',
           updateApi:'ScopedBranches/Update?_dc=1515008540565',
           addApi:'ScopedBranches/Insert?_dc=1515008540565',
           widgets:{
            title:'user',
            onClick:'data',
            viewApi:'ScopedBranches/Get?_dc=1515008371906'
           },
           viewFields:'branch_id,branch_name',
           formFields:[
             { label: 'Branch Id', name: 'branch_id', type: 'text', value: null },
             { label: 'Branch Name', name: 'branch_name', type: 'text', value: null },
          ]
      },
      // ScopedSessions:{
      //      title:'Scoped Sessions',
      //      viewApi:null,
      //      delApi:'ScopedSessions/Delete?_dc=1515008696849',
      //      updateApi:'ScopedSessions/Update?_dc=1515008696849',
      //      addApi:'ScopedSessions/Insert?_dc=1515008696849',
      //      widgets:{
      //       title:'user',
      //       onClick:'data',
      //       viewApi:'Sessions/Get?_dc=1515008808444',
      //      },
      //      viewFields:'session_desc',
      //      formFields:'session_desc'
      // },
      ScopedSessions:{
           title:'Scoped Sessions',
           viewApi:null,
           delApi:'ScopedUsers/Delete?_dc=1515008997858',
           updateApi:'ScopedUsers/Update?_dc=1515008997858',
           addApi:'ScopedUsers/Insert?_dc=1515008997858',
           widgets:{
            title:'user',
            onClick:'data',
            viewApi:'ScopedUsers/Get?_dc=1515008997858'
           },
           viewFields:'function_name',
           formFields:[
           { label: 'Function Name', name: 'function_name', type: 'text', value: null },
          ]
      },
      Attendance:{
           title:'Attendance',
           viewApi:null,
           addApi:'Attendance/Insert?_dc=1515002534309',
           updateApi:'Attendance/Update',
           delApi:'Attendance/Delete',
           params:'employee_id,att_date',
           widgets:{
            title:'employee',
            onClick:'data',
            viewApi:'Attendance/Get?_dc=1515002235329'
           },
           viewFields:'date,from_time,to_time,status_id',
           formFields:[
           { label: 'Date', name: 'date', type: 'date', value: null },
           { label: 'From Time', name: 'from_time', type: 'text', value: null },
           { label: 'To Time', name: 'to_time', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ],
          pdfUrl:'Attendance/pdf',
          pdfParameters:[
            {name:'employee_id',value:'employeeWidgetValue'}
          ]
      },
      LeaveDays:{ //need a join with leave days
           title:'Leave Days',
           viewApi:null,
           widgets:{
             title:'employee',
             onClick:'data',
             viewApi:'LeaveDays/Get?_dc=1515002789040',
             addApi:'LeaveDays/Insert?_dc=1519881111521',
             updateApi:'LeaveDays/Update?_dc=1519881498895',
             delApi:'LeaveDays/Delete?_dc=1519881498895',
           },
           viewFields:'leave_date,type_desc,remarks,status_id',
           formFields:[
           { label: 'Leave Date', name: 'leave_date', type: 'date', value: null },
              { 
                type: 'select', 
                label: 'Leave Type',
                name: 'leave_type_id', //tobediscussed
                value: "",
                options:[{title:"Leave Type",value:1},{title:"Leave Type",value:2}],
                placeholder:'Select Leave Type'
              },
           { label: 'Remarks', name: 'remarks', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ],
          pdfUrl:'LeaveDays/pdf',
          pdfParameters:[
            {name:'employee_id',value:'employeeWidgetValue'}
          ]
      },
      //to be discussed...need a join in api's
      LeaveEntitlement:{
           title:'Leave Entitlement',
           viewApi:'',
           widgets:{
           title:'employee',
           onClick:'data',
           viewApi:'LeaveEntitlement/Get?_dc=1515003179575'
           },
           viewFields:'type_desc,no_of_leaves,from_date,to_date,status_id',
           formFields:[
           { label: 'Type Desc.', name: 'type_desc', type: 'text', value: null },
           { label: 'No of Leaves', name: 'no_of_leaves', type: 'number', value: null },
           { label: 'From Date', name: 'from_date', type: 'date', value: null },
           { label: 'To Date', name: 'to_date', type: 'date', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ],
          pdfUrl:'LeaveEntitlement',
          pdfParameters:[
            {name:'employee_id',value:'employeeWidgetValue'}
          ]
      }
    }
    
    public mainArray={
        Classes:{
           title:'Classes',
           viewApi:'Courses/Get?_dc=1514991795933',
           addApi:'Courses/Insert?_dc=1514992050426',
           delApi:'Courses/Delete?_dc=1514993349086',
           updateApi:'Courses/Update?_dc=1514991940521',
           viewFields:'course_name,status_id',
           formFields: [
            { label: 'Course Name', name: 'course_name', type: 'text', value: null },
            {
              type: 'select',
              label: 'Status',
              name: 'status_id',
              value: "",
              options: [{title:'Active', value:1},{title:'Inactive', value:2}],
              placeholder: 'Select an option',
            }
           ],
        },
        Banks:{
           title:'Banks',
           viewApi:'Banks/Get?_dc=1510759740875',
           addApi:'Banks/Insert?_dc=1514992432230',
           updateApi:'Update?_dc=1514992498634',
           delApi:'Banks/Delete?_dc=1514993312606',
           viewFields:'bank_name,location,account_no,status_id',
           formFields: [
            { label: 'Bank Name', name: 'bank_name', type: 'text', value: null },
            { label: 'Location', name: 'location', type: 'text', value: null },
            { label: 'Account#', name: 'account_no', type: 'text', value: null },
            // { label: 'Status ID', name: 'status_id', type: 'text', value: null },
            // { label: 'Notify', name: 'notify', type: 'checkbox', value: false },
            {
              type: 'select',
              label: 'Status',
              name: 'status_id',
              value: "",
              options: [{title:'Active', value:1},{title:'Inactive', value:2}],
              placeholder: 'Select an option',
            }
          ],
        // {
        //   type: 'select',
        //   label: 'Bank Type',
        //   name: 'bank_type',
        //   value: "",
        //   options: ['head office', 'branch', 'main branch'],
        //   placeholder: 'Select an option',
        // },
        // {
        //   type: 'radio',
        //   label: 'bank type',
        //   name: 'radio',
        //   value: null,
        //   options: ['head office', 'branch', 'main branch'],
        //   placeholder: 'Select an option',
        // },
      // submitUrl: "Banks/Insert?_dc=1515692932043"
        },
        BloodGroups:{
           title:'BloodGroups',
           viewApi:'BloodGroups/Get?_dc=1510761652254',
           addApi:null,
           updateApi:'BloodGroups/Update?_dc=1514992579986',
           delApi:null,
           viewFields:'blood_group_id,blood_group_name',
      formFields: [
        { label: 'Blood Group ID', name: 'blood_group_id', type: 'number', value: null },
        { label: 'Blood Group Name', name: 'blood_group_name', type: 'text', value: null },
      ]
        },
        Branches:{
           title:'Branches',
           viewApi:'Branches/Get?_dc=1510761899453',
           updateApi:'Branches/Update?_dc=1514992639644',
           addApi:'Branches/Insert?_dc=1514992698832',
           delApi:'Branches/Delete?_dc=1514993055143',
           viewFields:'branch_name,address,tel,status_id',
           formFields: [
              { label: 'Branch Name', name: 'branch_name', type: 'text', value: null },
              { label: 'Address', name: 'address', type: 'text', value: null },
              { label: 'Tel.No', name: 'tel', type: 'number', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
            ],
        },
        Cities:{
           title:'Cities',
           viewApi:'Cities/Get?_dc=1510837623255',
           updateApi:'Cities/Update?_dc=1514992762818',
           addApi:'Cities/Insert?_dc=1514992834495',
           delApi:'Cities/Delete?_dc=1514992834108',
           viewFields:'city_name,status_id',
      formFields: [
        { label: 'City Name', name: 'city_name', type: 'text', value: null },
        {
          type: 'select',
          label: 'Status ID',
          name: 'status_id',
          value: "",
          options: [{title:'Active', value:1},{title:'Inactive', value:2}],
          placeholder: 'Select an option',
        }
      ],
      submitUrl: "Cities/Insert?_dc=1514992834495"
        },
        Companies:{
           title:'Companies',
           viewApi:'Companies/Get?_dc=1510837737366',
           updateApi:'Companies/Update?_dc=1514992901382',
           addApi:'Companies/Insert?_dc=1514992954766',
           delApi:'Companies/Delete?_dc=1514992997554',
           viewFields:'company_name,status_id',
           formFields:[
           { label: 'Company Name', name: 'company_name', type: 'text', value: null },
            {
              type: 'select',
              label: 'Status',
              name: 'status_id',
              value: "",
              options: [{title:'Active', value:1},{title:'Inactive', value:2}],
              placeholder: 'Select an option',
            }
          ]
        },
        ContactTypes:{
           title:'ContactTypes',
           viewApi:'ContactTypes/Get?_dc=1510837789253',
           delApi:'ContactTypes/Delete?_dc=1514993124171',
           addApi:'ContactTypes/Insert?_dc=1514993124386',
           updateApi:'ContactTypes/Update?_dc=1514993247903',
           viewFields:'type_desc,status_id',
           formFields:[
           { label: 'Type Desc.', name: 'type_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        CroneJobTypes:{
           title:'CroneJobTypes',
           viewApi:'CroneJobTypes/Get?_dc=1510837891744',
           addApi:null,
           delApi:null,
           updateApi:'CroneJobTypes/Update?_dc=15149934353',
           viewFields:'job_type_desc',
           formFields:[
           { label: 'Job Type Desc.', name: 'job_type_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Currency:{
           title:'Currency',
           viewApi:'Currency/Get?_dc=1510838002367',
           delApi:'Currency/Delete?_dc=1514993791252',
           addApi:'Currency/Insert?_dc=1514993834522',
           updateApi:'Currency/Update?_dc=1514993874275',
           viewFields:'description,rate_pkr,currency_sign,status_id',
           formFields:[
           { label: 'Type Desc.', name: 'description', type: 'text', value: null },
           { label: 'Rate Pkr.', name: 'rate_pkr', type: 'text', value: null },
           { label: 'Currency Sign', name: 'currency_sign', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Departments:{
           title:'Departments',
           viewApi:'Departments/Get?_dc=1510838129436',
           addApi:'Departments/Insert?_dc=1514993914087',
           updateApi:'Departments/Update?_dc=1514993974689',
           delApi:'notfound',
           viewFields:'department_name,status_id',
           formFields:[
           { label: 'Department Name.', name: 'department_name', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Exams:{
           title:'Exams',
           viewApi:'Exams/Get?_dc=1510838225423',
           delApi:'Exams/Delete?_dc=1514994031601',
           addApi:'Exams/Insert?_dc=1514994031799',
           updateApi:'Exams/Update?_dc=1514994086461',
           viewFields:'exam_desc,status_id',
           formFields:[
           { label: 'Exam Desc.', name: 'exam_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        ObjectTypes:{
           title:'ObjectTypes',
           viewApi:'ObjectTypes/Get?_dc=1511177930927',
           delApi:'ObjectTypes/Delete?_dc=1514994123970',
           addApi:'ObjectTypes/Insert?_dc=1514994124190',
           updateApi:'ObjectTypes/Update?_dc=1514994178896',
           viewFields:'object_type',
           formFields:[
           { label: 'Object Type', name: 'object_type', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        //name is set as inquiry while api has enquiry
        InquiryReferer:{
           title:'InquiryReferer',
           viewApi:'EnquiryReferer/Get?_dc=1520396614072',
           viewFields:'referer_desc,status_id',
           formFields:[
           { label: 'Referer Desc.', name: 'referer_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Grades:{
           title:'Grades',
           viewApi:'Grades/Get?_dc=1514209867861',
           viewFields:'grade_desc,from_marks,to_marks',
           formFields:[
           { label: 'Grade Desc.', name: 'grade_desc', type: 'text', value: null },
           { label: 'From Marks', name: 'from_marks', type: 'number', value: null },
           { label: 'To Marks', name: 'to_marks', type: 'number', value: null }
          ]
        },
        SectionSummary:{
           title:'Section Summary',
           viewApi:'SessionSummary/Get?_dc=1514208628302',
           viewFields:'student_name,student_id,gender,payables,paid_amount,absents,presents,gross_amount',
           formFields:[
           { label: 'Student Name', name: 'student_name', type: 'text', value: null },
           { label: 'Student Id', name: 'student_id', type: 'text', value: null },
              {
                type: 'select',
                label: 'Gender',
                name: 'gender',
                value: "",
                options: [{title:'Male', value:1},{title:'Female', value:2}],
                placeholder: 'Select an option',
              },
           { label: 'Payables', name: 'payables', type: 'text', value: null },
           { label: 'Paid Amount', name: 'paid_amount', type: 'number', value: null },
           { label: 'Absents', name: 'absents', type: 'text', value: null },
           { label: 'Presents', name: 'presents', type: 'text', value: null },
           { label: 'Gross Amount', name: 'gross_amount', type: 'number', value: null },
          ]
        },
        //no response so as add update del
        CroneSchedules:{
           title:'Crone Schedules',
           viewApi:'Schedules/Get?_dc=1515006202300',
           // viewFields:'student_name,student_id,gender,payables,paid_amount,absents,presents,gross_amount',
           // formFields:'student_name,student_id,gender,payables,paid_amount,absents,presents,gross_amount'
        },
        Relations:{
           title:'Relations',
           viewApi:'Relations/Get?_dc=1511178030201',
           delApi:'Relations/Delete?_dc=1514994242968',
           updateApi:'Relations/Update?_dc=1514994243081',
           addApi:'Relations/Insert?_dc=1514994327529',
           viewFields:'relation_desc,status_id',
           formFields:[
           { label: 'Relation Desc.', name: 'relation_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Religions:{
           title:'Religions',
           viewApi:'Religions/Get?_dc=1511178103349',
           delApi:'Religions/Delete?_dc=1514994474070',
           addApi:'Religions/Insert?_dc=1514994474269',
           updateApi:'Religions/Update?_dc=1514994526641',
           viewFields:'religion_name,status_id',
           formFields:[
           { label: 'Religion Name', name: 'religion_name', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        StatusTypes:{
          //about changes
           title:'StatusTypes',
           viewApi:'StatusTypes/Get?_dc=1511178241219',
           addApi:'StatusTypes/Insert?_dc=1514994561901',
           updateApi:'StatusTypes/Update?_dc=1514994596959',
           delApi:'notfound',
           viewFields:'type_desc',
           formFields:[
           { label: 'Type Desc.', name: 'type_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Statuses:{
           title:'Statuses',
           viewApi:'Statuses/Get?_dc=1511178331310',
           delApi:'Statuses/Delete?_dc=1514994670534',
           addApi:'Statuses/Insert?_dc=1514994670857',
           updateApi:'Statuses/Update?_dc=1514994732528',
           viewFields:'status_desc,status_id',
           formFields:[
           { label: 'Statuses Desc.', name: 'status_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        //name verification needed
        IssueTypes:{
           title:'Student Issue Types',
           viewApi:'IssueTypes/Get?_dc=1511178393920',
           addApi:'IssueTypes/Insert?_dc=1514994801688',
           updateApi:'IssueTypes/Update?_dc=1514994855082',
           delApi:'IssueTypes/Delete?_dc=1514994854875',
           viewFields:'issue_desc,status_id',
           formFields:[
           { label: 'Issue Desc.', name: 'issue_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        FeeTypes:{
           title:'FeeTypes',
           viewApi:'FeeTypes/Get?_dc=1514210325181',
           viewFields:'description,amount,status_id',
           formFields:[
           { label: 'Description', name: 'description', type: 'text', value: null },
           { label: 'Amount', name: 'amount', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Themes:{
           title:'Themes',
           viewApi:'Themes/Get?_dc=1511178472954',
           delApi:'Themes/Delete?_dc=1514994987447',
           updateApi:'Themes/Update?_dc=1514995034326',
           addApi:'Themes/Insert?_dc=1514994987576',
           viewFields:'file_name,theme_name,status_id',
           formFields:[
           { label: 'File Name', name: 'file_name', type: 'text', value: null },
           { label: 'Theme Name', name: 'theme_name', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Times:{
           title:'Times',
           viewApi:'Times/Get?_dc=1511178635399',
           delApi:'notfound',
           addApi:null,
           updateApi:'',
           viewFields:'time_desc,time_display,status_id',
           formFields:[
           { label: 'Time Desc.', name: 'time_desc', type: 'text', value: null },
           { label: 'Time Display.', name: 'time_display', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        UserTypes:{
           title:'UserTypes',
           addApi:'UserTypes/Insert?_dc=1514995165709',
           delApi:'UserTypes/Delete?_dc=1514995211730',
           updateApi:'UserTypes/Update?_dc=1514995217418',
           viewApi:'UserTypes/Get?_dc=1511178816662',
           viewFields:'name,status_id',
           formFields:[
           { label: 'Name', name: 'name', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Packages:{
           title:'Packages',
           viewApi:'Packages/Get?_dc=1511178963854',
           delApi:'Packages/Delete?_dc=1514995384765',
           updateApi:'Packages/Update?_dc=1514995384999',
           addApi:'Packages/Insert?_dc=1514995494366',
           viewFields:'package_name,icon_cls,db_name,dir_name,status_id',//sort_by if needed
           formFields:[
           { label: 'Package Name', name: 'package_namea', type: 'text', value: null },
           { label: 'Icon', name: 'icon_cls', type: 'text', value: null },
           { label: 'Database Name', name: 'db_name', type: 'text', value: null },
           { label: 'Directory Name', name: 'dir_name', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        //notfound
        // Courses:{
        //    title:'Courses',
        //    viewApi:'Courses/Get?_dc=1511179192592',
        //    viewFields:'course_name,status_id',
        //    formFields:'course_name,status_id'
        // },
        DaySets:{
           title:'DaySets',
           viewApi:'DaySets/Get?_dc=1511179286912',
           delApi:'DaySets/Delete?_dc=1514995778884',
           addApi:'DaySets/Insert?_dc=1514995838761',
           updateApi:'DaySets/Update?_dc=1514995779098',
           viewFields:'day_set_desc,sdays,status_id',
           formFields:[
           { label: 'Set Desc.', name: 'day_set_desc', type: 'text', value: null },
           { label: 'SDays', name: 'sdays', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },

        NoticeCategories:{
           title:'Notice Categories',
           viewApi:'NoticeCategories/Get?_dc=1519712751927',
           delApi:'NoticeCategories/Delete?_dc=1519713041321',
           addApi:'NoticeCategories/Insert?_dc=1519713000374',
           updateApi:'NoticeCategories/Update?_dc=1519713041321',
           viewFields:'category_desc,status_id',
           formFields:[
           { label: 'Category', name: 'category_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Rooms:{
           title:'Rooms',
           viewApi:'Rooms/Get?_dc=1511179401223',
           delApi:'Rooms/Delete?_dc=1514995887726',
           updateApi:'Rooms/Update?_dc=1514995887926',
           addApi:'Rooms/Insert?_dc=1514995946478',
           viewFields:'room_desc,status_id',
           formFields:[
           { label: 'Room Desc.', name: 'room_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Teachers:{
           title:'Teachers',
           viewApi:'Teachers/Get?_dc=1511179480732',
           delApi:'Teachers/Delete?_dc=1514995994460',
           updateApi:'Teachers/Update?_dc=1514995994656',
           addApi:'Teachers/Insert?_dc=1514996077848',
           viewFields:'teacher_name,status_id',
           formFields:[
           { label: 'Teacher Name', name: 'teacher_name', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Categories:{
           title:'Employee Categories',
           viewApi:'Categories/Get?_dc=1511181837148',
           delApi:'Categories/Delete?_dc=1514996198116',
           addApi:'Categories/Insert?_dc=1514996198370',
           updateApi:'Categories/Update?_dc=1514996259801',
           viewFields:'categ_desc,status_id',
           formFields:[
           { label: 'Category Desc.', name: 'categ_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Designations:{
           title:'Designations',
           viewApi:'Designations/Get?_dc=1514293138329',
           delApi:'Designations/Delete?_dc=1514996306423',
           addApi:'Designations/Insert?_dc=1514996306632',
           updateApi:'Designations/Update?_dc=1514996358831',
           viewFields:'desig_desc,status_id',
           formFields:[
           { label: 'Designation Desc.', name: 'desig_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        /*this service has links(joins) with two other services for categ. and depart.*/
        Employees:{
           title:'Employees',
           viewApi:'Employees/Get?_dc=1514294382546',
           delApi:'Employees/Delete?_dc=1514996422351',
           updateApi:'Employees/Update?_dc=1514996422657',
           addApi:'Employees/Insert?_dc=1514996537515',
           viewFields:'employee_name,department_id,categ_id,desig_id,cell,email_id',
           formFields:[
             { label: 'Employee Name', name: 'employee_name', type: 'text', value: null },
             { label: 'Department Id', name: 'department_id', type: 'text', value: null },
             { label: 'Category Id', name: 'categ_id', type: 'text', value: null },
             { label: 'Designation Id', name: 'desig_id', type: 'text', value: null },
             { label: 'Cell Phone No.', name: 'cell', type: 'number', value: null },
             { label: 'Email', name: 'email_id', type: 'email', value: null },
          ]
        },
        LeaveType:{
           title:'Leave Type',
           viewApi:'LeaveType/Get?_dc=1514295839740',
           delApi:'LeaveType/Delete?_dc=1514996595629',
           addApi:'LeaveType/Insert?_dc=1514996595828',
           updateApi:'LeaveType/Update?_dc=1514996647155',
           viewFields:'type_desc,no_of_leaves,status_id',
           formFields:[
           { label: 'Type Desc.', name: 'type_desc', type: 'text', value: null },
           { label: 'No of Leaves', name: 'no_of_leaves', type: 'number', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Expences:{
           title:'Expences',
           viewApi:'Expences/Get?_dc=1514296596638',
           delApi:'Expences/Delete?_dc=1514996691968',
           updateApi:'Expences/Update?_dc=1514996692190',
           addApi:'Expences/Insert?_dc=1514996856084',
           viewFields:'exp_date,expence_type_id,exp_amount,status_id',
           formFields:[
           { label: 'Expence Date', name: 'exp_date', type: 'text', value: null },
           { label: 'Expence Type Id', name: 'expence_type_id', type: 'text', value: null },
           { label: 'Expence Amount', name: 'exp_amount', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        ExpenceTypes:{
           title:'Expence Types',
           viewApi:'ExpenceTypes/Get?_dc=1514296957309',
           delApi:'ExpenceTypes/Delete?_dc=1514996894076',
           addApi:'ExpenceTypes/Insert?_dc=1514996894330',
           updateApi:'ExpenceTypes/Update?_dc=1514996945563',
           viewFields:'expence_type_desc,status_id',
           formFields:[
           { label: 'Expence Type Desc.', name: 'expence_type_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        //din't know about the url(sorce)
        StudentFees:{
           title:'Student Fees',
           viewApi:null,
           addApi:null,
           updateApi:null,
           delApi:null,
           viewFields:'inv_no,date',
           formFields:[
           { label: 'Invoice Number', name: 'inv_no', type: 'text', value: null },
           { label: 'Date', name: 'date', type: 'date', value: null }
          ]
        },
        Customers:{
           title:'Customers',
           viewApi:'Customers/Get?_dc=1514297671340',
           addApi:'Customers/Insert?_dc=1514997042036',
           delApi:'Customers/Delete?_dc=1514997081235',
           updateApi:'Customers/Update?_dc=1514997081357',
           viewFields:'customer_name,cell,status_id',
           formFields:[
           { label: 'Customer Name', name: 'customer_name', type: 'text', value: null },
           { label: 'Cell Phone No.', name: 'cell', type: 'number', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Products:{
           title:'Products',
           viewApi:'Products/Get?_dc=1514297806286',
           addApi:'Products/Insert?_dc=1514997132842',
           delApi:'Products/Delete?_dc=1514997183070',
           updateApi:'Products/Update?_dc=1514997183231',
           viewFields:'product_name,unit_price,status_id',
           formFields:[
           { label: 'Product Name', name: 'product_name', type: 'text', value: null },
           { label: 'Unit Price', name: 'unit_price', type: 'number', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        Vendors:{
           title:'Vendors',
           viewApi:'Vendors/Get?_dc=1514298080359',
           addApi:'Vendors/Insert?_dc=1514997256879',
           delApi:'Vendors/Delete?_dc=1514997275487',
           updateApi:'Vendors/Update?_dc=1514997275699',
           viewFields:'vendor_name,mobile_no,email,status_id',
           formFields:[
           { label: 'Vendor Name', name: 'vendor_name', type: 'text', value: null },
           { label: 'Mobile Number', name: 'mobile_no', type: 'number', value: null },
           { label: 'Email Id', name: 'email', type: 'email', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        },
        AssetTypes:{
           title:'Asset Types',
           viewApi:'AssetTypes/Get?_dc=1514298193888',
           addApi:'AssetTypes/Insert?_dc=1514997353341',
           updateApi:'AssetTypes/Update?_dc=1514997390304',
           delApi:'AssetTypes/Delete?_dc=1514997459954',
           viewFields:'asset_type_desc,status_id',
           formFields:[
           { label: 'Asset Type Desc.', name: 'asset_type_desc', type: 'text', value: null },
              {
                type: 'select',
                label: 'Status',
                name: 'status_id',
                value: "",
                options: [{title:'Active', value:1},{title:'Inactive', value:2}],
                placeholder: 'Select an option',
              }
          ]
        }
}
}
/*un handeled requests 
Time Table insert/save button
Student -> Payments->Fee & Payments 
Student ->Student Affairs->All Tabs,Inactive students
Inventory -> Purchase
Inventory -> Sales
Inventory -> Stock
Assets    -> Asset Purchase
Setting   => Core=>Function Objects
Setting   => Core=>Functions
Setting   => User=>Users
Setting   => User=>Scope=>Scoped Student


*/