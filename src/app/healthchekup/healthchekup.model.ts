export class Mutliple {
  // payType:string="Cash";
  payType: string;
  amount: number;
}

export class NewSale {
  name: string;
  mobileNo: number;
  regId: string;

  discount: number;

  authorisedBy: string;
  location: string = "Miyapur";
  // paymentType:string;
  referenceNumber: string;
  // multimode:any=[]
  total: number;

  multiplePayment1: Mutliple[];
  multiplePayment = [];
  //   refSales: SaleDetail[];
}
export class Patient {
  name: string;
  mobile: number;
  regId: string;
  type: string;
}
export class Medicine {
  medName: string;
  cost: number;
}
