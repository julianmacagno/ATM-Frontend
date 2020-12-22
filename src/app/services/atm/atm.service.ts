import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalConstants } from 'src/app/common/GlobalConstants';

@Injectable({
	providedIn: 'root'
})
export class AtmService {

	constructor(private http: HttpClient) { }

	searchAtm(qList: string, fieldList: string, token: string) {
		let url: string = GlobalConstants.apiURL + "atm";
		let httpParams: HttpParams = new HttpParams().set("q", qList).set("fields", fieldList);
		let httpHeaders: HttpHeaders = new HttpHeaders().set("authorization", token);
		return this.http.get(url, { params: httpParams, headers: httpHeaders });
	}

}
