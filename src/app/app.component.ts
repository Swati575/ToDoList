import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ComponentApp';
  Item1 = ""
  Item2 = ""
  Price1 =""
  Price2=""
  I1 = ""
  I2 = ""
  P1 =""
  P2=""
  Total:number;
  Total1:number;
  Amt=""
  Am=""
  Checkout:boolean=false;
  C1:boolean=false;
  Inf:boolean=false;
  //CO=[];

  //Details=[];
  Invoice()
  {
    if(this.Item1==""&&this.Item2==""&&this.Price1==""&&this.Price2=="")
    {
      this.Inf=false;
    }
    else{
  this.I1="Item Name is : "+this.Item1;
  this.I2="Item Name is : "+this.Item2;
  this.P1="Price: "+this.Price1;
  this.P2="Price: "+this.Price2;
  this.Total=parseInt(this.Price1)+parseInt(this.Price2);
  this.Am="Total Price :- Rs."+this.Total+"/-";
    this.Checkout=true;
    this.Inf=true;
    }
  }
  CheckOut(){
    this.I1="Item Name is : "+this.Item1;
    this.I2="Item Name is : "+this.Item2;
    this.P1="Price: "+this.Price1;
    this.P2="Price: "+this.Price2;
    this.Total=parseInt(this.Price1)+parseInt(this.Price2);
    this.Total1=this.Total+(this.Total*0.18);
    this.Amt="Total Price with gst(18%) :- Rs."+this.Total1+"/-";
    this.C1=true;
  }
 
  ngOnInit(){
//    console.log(this.Item1);
  }
}
 