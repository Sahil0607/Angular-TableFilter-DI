import { HttpClient } from "@angular/common/http";
import { InjectionToken } from "@angular/core";
import { CoursesService } from "./courses.service";

// This is factory function. Return instance of CoursesService. 
export function coursesServiceProvider(http: HttpClient) {
    return new CoursesService(http);
}

// InjectionToken: Uniq identifier for dependancy. Each dependancy has its own injection token. (Unique name)
// Angular create different name but it will do same under the hood.
// This token is used anywhere in project where CoursesService used.
export const COURSE_TOKEN = new InjectionToken<CoursesService>('COURSE_TOKEN');