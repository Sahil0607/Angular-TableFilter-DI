import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()

export class EmployeeService {
    getEmployees():IEmployee[]{
        return [
          { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1988' },
           { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
           { code: 'emp103', name: 'Mike', gender: 'Female', annualSalary: 5900, dateOfBirth: '12/8/1979' },
           { code: 'emp104', name: 'Gary', gender: 'Male', annualSalary: 6500.826, dateOfBirth: '14/10/1980' },
           { code: 'emp105', name: 'Mary', gender: 'Female', annualSalary: 8500.826, dateOfBirth: '18/2/1985' },
           { code: 'emp106', name: 'Mark', gender: 'Male', annualSalary: 4500.826, dateOfBirth: '26/8/1990' },
           { code: 'emp107', name: 'Lisa', gender: 'Female', annualSalary: 5600.826, dateOfBirth: '2/2/1975' },
        ];
    }
}
