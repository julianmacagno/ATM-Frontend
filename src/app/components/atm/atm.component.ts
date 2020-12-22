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
    if (this.token !== undefined && this.token !== "" && this.token.startsWith("Bearer ")) {
      let fieldList: string = "";
      let qList: string = "";

      if (this.street !== undefined && this.street !== "") {
        fieldList += "street,";
        qList += this.street + ",";
      }

      if (this.housenumber !== undefined && this.housenumber !== "") {
        fieldList += "housenumber,";
        qList += this.housenumber + ",";
      }

      if (this.postalcode !== undefined && this.postalcode !== "") {
        fieldList += "postalcode,";
        qList += this.postalcode + ",";
      }

      if (this.city !== undefined && this.city !== "") {
        fieldList += "city,";
        qList += this.city + ",";
      }

      if (this.lat !== undefined && this.lat !== "") {
        fieldList += "lat,";
        qList += this.lat + ",";
      }

      if (this.lng !== undefined && this.lng !== "") {
        fieldList += "lng,";
        qList += this.lng + ",";
      }

      if (this.distance !== undefined && this.distance !== "") {
        fieldList += "distance,";
        qList += this.distance + ",";
      }

      if (this.type !== undefined && this.type !== "") {
        fieldList += "type,";
        qList += this.type + ",";
      }

      if (fieldList !== undefined && fieldList.endsWith(","))
        fieldList = fieldList.slice(0, fieldList.lastIndexOf(","));

      if (qList !== undefined && qList.endsWith(","))
        qList = qList.slice(0, qList.lastIndexOf(","));

      this.atmService.searchAtm(qList, fieldList, this.token)
        .subscribe(
          result => {
            this.result = result;
          }, error => {
            console.log(error);
          }
        );
    }
  }
}