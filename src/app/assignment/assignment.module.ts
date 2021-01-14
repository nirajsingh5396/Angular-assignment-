import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentRoutingModule } from './assignment-routing.module';



import { HeaderComponent } from './header/header.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { MediaComponent } from './media/media.component';
import { CardMediaComponent } from './card-media/card-media.component';



@NgModule({
  declarations: [HeaderComponent, AssignmentComponent, MediaComponent, CardMediaComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
  ],
})
export class AssignmentModule { }
