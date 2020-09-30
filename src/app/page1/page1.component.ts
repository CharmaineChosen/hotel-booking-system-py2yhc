import { Component, OnInit } from '@angular/core';

import { ServiceScriptService } from '../service-script.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

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