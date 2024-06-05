import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
@Injectable({providedIn: 'root'})
export class RequestService {
  baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.baseURL;
  }
  getResult(): Observable<any> {
    return this.http.get(this.baseURL + 'fact',)
  }
}
