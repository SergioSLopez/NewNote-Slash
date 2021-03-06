import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTasksPageRoutingModule } from './add-tasks-routing.module';

import { AddTasksPage } from './add-tasks.page';

import { PopoverComponent } from '../popover/popover.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTasksPageRoutingModule
  ],
  declarations: [AddTasksPage, PopoverComponent]
})
export class AddTasksPageModule {}
