import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  lastWeekOpg: number;
  personalUploads: number;
  patients: number;
  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.lastWeekOpg = 0; // to-do: count the number of images uploaded to firebase storage in the last week
    this.personalUploads = 0; // How many OPGs the dentist has uploaded
    this.patients = 0; // count opg images with the same patient MR number
    this.searchForm = this.formBuilder.group({
      search: [undefined, Validators.required]
    });
  }
  logout() {
    this.loginService.logout();
  }
  search() {
    if (this.searchForm.get('search').value !== null) {
      // search all images with this mr number and open on another page
    }
  }

}
