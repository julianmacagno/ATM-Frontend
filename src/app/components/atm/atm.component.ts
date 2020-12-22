import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AtmService } from 'src/app/services/atm/atm.service';
import { MapDialogComponent } from '../dialogs/map-dialog/map-dialog.component';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})

export class AtmComponent implements OnInit {
  token: string;
  street: string;
  housenumber: string;
  postalcode: string;
  city: string;
  lat: string;
  lng: string;
  distance: string;
  type: string;
  result: Object;
  mapsUrl: string;
  columns: string[] = ["Street", "Housenumber", "Postalcode", "City", "Latitude", "Longitude", "Distance", "Type", "Show Map"];
  fieldList: string = "";
  qList: string = "";
  
  @ViewChild(MatTable, {static: false}) tabla1: MatTable<any>;

  constructor(
    private atmService: AtmService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem("token");
  }

  openDialog(lat: string, lng: string): void {
    this.mapsUrl = "https://www.google.com/maps/embed/v1/view?zoom=14&center=" + lat + "%2C" + lng + "&key=AIzaSyAx-NOpMYLMfjSsoEaURegKR-HA81gVg_I";
    const mapDialog = this.dialog.open(MapDialogComponent, {data: this.mapsUrl, height: "60%", width: "60%"});
  }
  
  searchAtm(): void {
    this.qList = "";
    this.fieldList = "";

    if (this.token !== undefined && this.token !== "" && this.token.startsWith("Bearer ")) {
      
      this.formParameter(this.street, "street");
      this.formParameter(this.housenumber, "housenumber");
      this.formParameter(this.postalcode,"postalcode");
      this.formParameter(this.city,"city");
      this.formParameter(this.lat,"lat");
      this.formParameter(this.lng,"lng");
      this.formParameter(this.distance,"distance");
      this.formParameter(this.type,"type");

      if (this.fieldList !== undefined && this.fieldList.endsWith(","))
        this.fieldList = this.fieldList.slice(0, this.fieldList.lastIndexOf(","));

      if (this.qList !== undefined && this.qList.endsWith(","))
        this.qList = this.qList.slice(0, this.qList.lastIndexOf(","));

      this.atmService.searchAtm(this.qList, this.fieldList, this.token)
        .subscribe(
          result => {
            this.result = result;
            console.log(result);
          }, error => {
            console.log(error);
          }
        );
    }
  }

  formParameter(param: string, paramName: string) {
    if (param !== undefined && param !== "") {
      this.fieldList += paramName + ",";
      this.qList += param + ",";
    }
  }
}