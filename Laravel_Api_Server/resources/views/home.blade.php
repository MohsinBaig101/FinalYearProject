@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard </div>
               
                <div class="alert alert-success allow">
                    Information has been inserted successfully
                </div>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                </div>
            
            <div class="col-md-8 form_outer">
                <h4 style="margin-bottom:30px">Access client_id and client_secret</h4>
                <form method='post'>
                    {{csrf_field()}}
                     
                  
                    <input type="hidden" value="{{Auth::id()}}" name="user_id">
                <div class="form-group form-md-line-input">
                    <input type="text" class="form-control name" name="name" id="form_control_1" placeholder="Enter the name">
                </div>
                <div class="form-group form-md-line-input">
                    <input type="url" class="form-control redirect" name="redirect" id="form_control_1" placeholder="Enter the redirect url">
                </div>
                <div class="form-group form-md-line-input">
                    <input type="submit" class="btn btn-primary" id="client_info_btn">
                </div>
                </form>
                
            </div>
                <div style=""></div>
                <div class="show_table">
                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th> # </th>
<!--                                                    <th> client_id </th>-->
                                                    <th> client_secret </th>
                                                    <th> Access Token </th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody class="tbody_inner">
                                                <tr>
<!--                                                     
                                                    <a data-toggle="modal" href="#edit_teacher_detail" data-url="" class="btn btn-outline btn-circle green btn-sm #36c6d3">
                                                           <i class="fa fa-edit"></i> Edit </a>-->
                                                </tr>
                                               
                                            </tbody>
                                        </table>
                                    </div>
                </div>
          </div>
            
        </div>
    </div>
</div>





  <div class="modal fade " id="edit_teacher_detail" tabindex="-1" role="basic" aria-hidden="true" style="display: none;">
              <div class="modal-dialog   " >
                  <div class="modal-content  " >
      
      
                      <div _ngcontent-c1="" class="modal-header">
                           <h4 class="modal-title">Copy Token </h4>
                      </div>
      
                        
                      
                      <div class="portlet light portlet-fit portlet-form bordered">
                             
                              <div class="portlet-body">
                                  <!-- BEGIN FORM-->
                                <div _ngcontent-c1="" class="form-body">
                                <div class="input-group">
                                    <input id="foo" class="form_control col-md-10 col-sm-10 col-xs-10" type="text" value="" readonly>
                                        <span class="input-group-button">
                                        <button  type="button" class="btn btn-primary" data-clipboard-demo="" data-clipboard-target="#foo">
                                        Copy
                                        </button>
                                        </span>
                                            </div>
                                    <div>
                                        <h4 style="margin-top:20px; margin-left: 2px">After Copy Click below link</h4>
                                        <a href="{{config('constants.app_url_for_token')}}" target="_blank" class="btn">Click here</a>
                                    </div>
                                    <hr>
                                             <div _ngcontent-c1="" class="modal-footer">
                                               <button _ngcontent-c1="" class="btn dark btn-outline" data-dismiss="modal" type="button">Cancel</button>
                      
                                          </div>
                                         </div>
                                  
                                  <!-- END FORM-->
                              </div>
                          </div>
  
  
                  </div>
                  <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
          </div>
     
  


@endsection
