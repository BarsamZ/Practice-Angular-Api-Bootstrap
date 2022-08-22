import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  viewProviders: [ LoggingService ]
})
export class UsersComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  public log() {
    console.log(this.loggingService.title);
    this.loggingService.log("Log from Users Component");
  }

}
