import { Inject, Injectable } from '@angular/core';
import { CoursesService } from './courses.service';
import { COURSE_TOKEN } from './courses.service.provider';

@Injectable({
  providedIn: 'root'
})
export class MyCoursesService {

  constructor(private coursesService: CoursesService) { }

  log() {
    this.coursesService.getCourses().subscribe(course => console.log(course));
  }
}
