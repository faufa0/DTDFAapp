import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

 Getclient() {
    return this.http.get(' http://localhost:3000/clientDb');
  }
  Getemployee() {
    return this.http.get('http://localhost:3000/employeeDb');
  }
  Getport() {
    return this.http.get('http://localhost:3000/portDb');
  }
  Getcommodities() {
    return this.http.get('http://localhost:3000/commoditiesDb');
  }
  Getcharges() {
    return this.http.get('http://localhost:3000/chargesDb');
  }






  Getclientbyclientno(clientno: any) {
    return this.http.get(' http://localhost:3000/clientDb/'+clientno);
  }

  Getcommoditiesbyid(id: any) {
    return this.http.get(' http://localhost:3000/commoditiesDb?id='+id);
  }

  Getservicebyid(service: any) {
    return this.http.get('http://localhost:3000/chargesDb/'+service);
  }


}
