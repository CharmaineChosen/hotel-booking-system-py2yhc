import { Injectable } from '@angular/core';

@Injectable()
export class ServiceScriptService {
  ArrayDB :any = {};
  ArrayDB2 :any = {};
  constructor() { }

setPersonalData(array){
  this.ArrayDB=array;
}
setTransactionData(array){
  this.ArrayDB2=array;
  console.log(this.ArrayDB2)
}
getPersonalData(){
  return this.ArrayDB['name']+" "+this.ArrayDB['surname']+" "+this.ArrayDB['adress']+" "+this.ArrayDB['emailAdress']+"  "+this.ArrayDB['phoneNo']+" "+this.ArrayDB['gender']+" "+this.ArrayDB['id']
}

getRoomType(){
return this.ArrayDB['RoomType']
}

getRoomNo(){
  return this.ArrayDB['RoomNo'] 
}

getCheckInDate(){
  
    return this.ArrayDB['CheckInDate'] 
}

getCheckOutDate(){
  
   return this.ArrayDB['CheckOutDate'] 
}

getBankName(){
  
     return this.ArrayDB['BankName'] 
}
getAccountNo(){
   return this.ArrayDB['AccountNo'] 
  
}
getcvv(){
  return this.ArrayDB['cvv'] 
}
      
getExiperyDate(){
  return this.ArrayDB['ExiperyDate'] 
}
}

