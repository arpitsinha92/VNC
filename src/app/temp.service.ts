import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TempService {

  constructor() { }
  

  HospitalImage:any = "../../../assets/img/udbhava.png";
  Image1:any="../../../assets/img/vpulse5.png"
  getLocations() {
    return [{loc:"Miyapur"},{loc:"KPHB"}]
  }
  getLogo()
  {
    return  this.HospitalImage
  }
  getPLogo()
  {
return this.Image1
  }
 
gettitles()
{
  return {"Patient":["PATIENT REGISTRATION"],"User":["USER REGISTRATION"]} 
}
   
}

