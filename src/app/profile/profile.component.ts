import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from "@angular/forms";

import { ServiceScriptService } from '../service-script.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 arrayPrint:any={}
  arrayPrint2:any={}
  constructor(    
                   public apiService: ServiceScriptService
                  ) {
                    this.arrayPrint=this.apiService.getPersonalData();
                  }

  ngOnInit() {
  }

}