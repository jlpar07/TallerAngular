import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
  courses: Array<Course> = [];

  constructor(private courseService: CourseService) {}

  getCoursesList() {
  this.courseService.getCourses().subscribe((courses) => {
    this.courses = courses;
  });
}

  ngOnInit() {
    this.getCoursesList();
  }

}
