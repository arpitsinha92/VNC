import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/Rx";
import { HttpClientModule } from "@angular/common/http";
import "rxjs/add/operator/map";
import { HttpModule } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class HealthchekupService {
  headers = new Headers();
  ServerUrl = environment.baseUrl;
  constructor(private _http: HttpClient) {}
  getPatient(regId: string): Observable<any> {
    return this._http.get(this.ServerUrl + "v1/patient/" + regId);
  }
  getBill(): Observable<any> {
    return this._http.get(this.ServerUrl + "v1/mastercheckup/create");
  }
}
