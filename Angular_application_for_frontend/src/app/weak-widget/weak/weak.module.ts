import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeakdaysComponent } from '../weakdays/weakdays.component';
import { NewdaysAddComponent} from '../newdays-add/newdays-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    WeakdaysComponent,
    NewdaysAddComponent
  ],
  declarations: [
    WeakdaysComponent,
    NewdaysAddComponent
  ]
})
export class WeakModule { }
