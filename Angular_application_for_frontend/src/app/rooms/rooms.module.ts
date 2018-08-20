import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 import { RoomWidgetComponent } from './room-widget/room-widget.component';
 import { NewRoomAddComponent } from './new-room-add/new-room-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    RoomWidgetComponent,
    NewRoomAddComponent
  ],
  declarations: [
    RoomWidgetComponent,
    NewRoomAddComponent
    ]
})
export class RoomsModule { }
