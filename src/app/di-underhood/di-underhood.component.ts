import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { coursesServiceProvider, COURSE_TOKEN } from './courses.service.provider';
import { MyCoursesService } from './my-courses.service';

@Component({
  selector: 'app-di-underhood',
  templateUrl: './di-underhood.component.html',
  styleUrls: ['./di-underhood.component.css'],
  providers: [
    {
      provide: COURSE_TOKEN,   // When token called it will return coursesServiceProvider with dependancy.
      useFactory: coursesServiceProvider,  // This function call when di called. will call CoursesService.
      deps: [HttpClient]   // Dependancy need by CoursesService.
    }
  ],
})
export class DiUnderhoodComponent implements OnInit {
  courses: any = [];

  // We cannot directly use CoursesService. Aceess uniq indentifier name to inject dep. 
  // We have to inject token first then we can access CoursesService
  constructor(@Inject(COURSE_TOKEN) private coursesService: CoursesService,
    private myCoursesService: MyCoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(course => {
      this.courses = course;
      this.courses = this.courses.slice(0,10);
    });
    this.myCoursesService.log();
  }

}
