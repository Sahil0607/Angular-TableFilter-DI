import { Component, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG } from './config';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-dependancy-injection',
  templateUrl: './dependancy-injection.component.html',
  styleUrls: ['./dependancy-injection.component.css'],
  providers: [{
    provide: LoggerService,
    useFactory:(config: AppConfig) => {
      return config.expermentalEnabled ? new ExperimentalLoggerService() : new LoggerService();
    },
    deps: [APP_CONFIG]
  }]
})
export class DependancyInjectionComponent implements OnInit {

  constructor(private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.loggerService.prefix = 'Dependancy Injection Component';
    this.loggerService.log('Dependancy Injection init....');
  }

}
