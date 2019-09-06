import { Component, OnInit } from "@angular/core";
import { HealthchekupService } from "src/app/healthchekup/healthchekup.service";
import { Mutliple, NewSale, Patient, Medicine } from "./healthchekup.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-healthchekup",
  templateUrl: "./healthchekup.component.html",
  styleUrls: ["./healthchekup.component.css"]
})
export class HealthchekupComponent implements OnInit {
  masterCheckupId: any;
  medicines: any;
  date: any;
  constructor(
    private _http: HealthchekupService,
    private toastr: ToastrService
  ) {
    this.newSale = new NewSale();
  }
  refSales = [];
  billDate: string;
  multiplePayment1: Mutliple[] = [];
  newSale: NewSale;
  patient: Patient = new Patient();
  closeResult: string;
  ngOnInit() {
    this.prepareNewBill();
  }
  findPatient(event) {
    this._http.getPatient(this.newSale.regId).subscribe(
      user => {
        this.patient.name = user.name;
        this.patient.mobile = user.mobile;
        // this.patient.type = user.type;
        // if (this.patient.type == "OUTPATIENT") {
        //   var typeColumn = ["Cash", "Card"];
        // }
        // this.createTypesList();
      },
      err => {
        this.toastr.error(
          err["error"] ? err["error"].message : "Error Occured!"
        );
      },
      () => {}
    );
  }
  prepareNewBill() {
    this._http.getBill().subscribe(response => {
      this.refSales = response;
      this.masterCheckupId = response[1].response[0].masterCheckupId;
      this.date = response[0].date;
      this.medicines = response;
    });
  }
}
