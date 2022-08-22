import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    getMiddleUniversity() {
      //throw new Error('Method not implemented.');
    }

    public title: string = "default";

    constructor(private http: HttpClient) { }

    public log(message: string) {
        
        console.log(message);
    }

    
    

        
    }
