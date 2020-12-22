import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AtmService {

	constructor(private http: HttpClient) { }

	searchAtm(qList: string, fieldList: string, token: string) {
		let url: string = "http://localhost:8080/atm";
		let httpParams: HttpParams = new HttpParams().set("q", qList).set("fields", fieldList);
		let httpHeaders: HttpHeaders = new HttpHeaders().set("authorization", token);
		return this.http.get(url, { params: httpParams, headers: httpHeaders });
	}

}
