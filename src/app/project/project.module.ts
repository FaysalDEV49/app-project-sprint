import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSprintComponent } from './add-sprint/add-sprint.component';
import { EditSprintComponent } from './edit-sprint/edit-sprint.component';
import { ListSprintComponent } from './list-sprint/list-sprint.component';


@NgModule({
  declarations: [
    AddProjectComponent,
    EditProjectComponent,
    ListProjectComponent,
    AddSprintComponent,
    EditSprintComponent,
    ListSprintComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
