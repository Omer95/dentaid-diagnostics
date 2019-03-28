import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-opgpanel',
  templateUrl: './opgpanel.component.html',
  styleUrls: ['./opgpanel.component.scss']
})
export class OpgpanelComponent implements OnInit {
  patientSelect = new FormControl(undefined, Validators.required);
  mrNumber = new FormControl(undefined, Validators.required);
  patientName = new FormControl(undefined, Validators.required);
  gender = new FormControl(undefined, Validators.required);
  dob = new FormControl(undefined, Validators.required);
  patients = [
    {mrNum: '12345', name: 'Malik Ahmed'},
    {mrNum: '56787', name: 'Ali Ahmed'}
  ];
  constructor() { }

  ngOnInit() {
  }
  useCurrentPatient() {
    console.log('current patient: ', this.patientSelect.value);
  }
  useNewPatient() {
    console.log('new patient: ', this.mrNumber.value + this.patientName.value + this.gender.value + this.dob.value);
  }

}
