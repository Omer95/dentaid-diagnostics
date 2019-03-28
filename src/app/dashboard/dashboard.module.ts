import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';
import { OpgpanelComponent } from './opgpanel/opgpanel.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    OpgpanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class DashboardModule { }
