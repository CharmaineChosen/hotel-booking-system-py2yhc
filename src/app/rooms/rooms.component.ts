import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from "@angular/forms";

import { ServiceScriptService } from '../service-script.service';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

 
 
 submitted = false;
 detailsForm:FormGroup;
  constructor(    public fb: FormBuilder,
                  private router: Router,
                  private ngZone: NgZone,
                   private apiService: ServiceScriptService
                  ) { 
                    this.mainForm();
                  }
 mainForm() {
    this.detailsForm = this.fb.group({
      RoomType: [''],
      RoomNo:[''],
      CheckInDate:[''],
      CheckOutDate:[''],
      BankName:[''],
      AccountNo:[''],
      cvv:[''],
      ExiperyDate:['']
    })



RoomType: new FormControl('',Validators.required)
RoomNo: new FormControl('',Validators.required)     
CheckInDate: new FormControl('',Validators.required)     
CheckOutDate: new FormControl('',Validators.required) 
BankName: new FormControl('',Validators.required) 
AccountNo: new FormControl('',Validators.required) 
cvv: new FormControl('',Validators.required) 
ExiperyDate: new FormControl('',Validators.required) 



  }

get RoomType(){return this.detailsForm.get('RoomType')}
get RoomNo(){return this.detailsForm.get('RoomNo')}
get CheckInDate(){return this.detailsForm.get('CheckInDate')}
get CheckOutDate(){return this.detailsForm.get('CheckOutDate')}
get BankName(){return this.detailsForm.get('BankName')}
get AccountNo(){return this.detailsForm.get('AccountNo')}
get cvv(){return this.detailsForm.get('cvv')}
get ExiperyDate(){return this.detailsForm.get('ExiperyDate')}




  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
   this.apiService.setPersonalData(this.detailsForm.value);
  console.log(this.apiService.getPersonalData()) 
  this.router.navigate(['/transactiondata']);

this.RoomType.reset();
this.RoomNo.reset();
this.CheckInDate.reset();
this.CheckOutDate.reset();
this.BankName.reset();
this.AccountNo.reset();
this.cvv.reset();
this.ExiperyDate.reset();

    }


}