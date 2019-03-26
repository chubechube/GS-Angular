import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { SwimmingPool } from '../_model/swimmingpool';


@Injectable({ providedIn: 'root' })
export class SwimmingPoolService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<SwimmingPool[]>(`${environment.apiUrl}swimmingpools`)

        }

   
}