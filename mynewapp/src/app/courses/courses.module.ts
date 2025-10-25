import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseList } from './course-list/course-list';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoursesComponent, CourseList],
  exports: [CourseList]
})
export class CoursesModule { }
