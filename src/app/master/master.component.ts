import { Component } from '@angular/core';
import { DesignationComponent } from '../components/designation/designation.component';
import { RolesComponent } from '../components/roles/roles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [DesignationComponent, RolesComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComponent: string = "Roles";

  changeTab(tabName: string){
    this.currentComponent = tabName;
  }

}
