import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { IUniversityListItem } from '../model/universities.models';

@Component({
  selector: 'app-universitilist',
  templateUrl: './universitilist.component.html',
  styleUrls: ['./universitilist.component.css'],
})
export class UniversitilistComponent implements OnInit {
  universitiListItems: IUniversityListItem[];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service.getsearchuniversiti().subscribe((Result) => {
      this.universitiListItems = Result;
      console.log(Result);
    });
  }
}
