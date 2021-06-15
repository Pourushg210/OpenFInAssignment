import { Component,ElementRef,ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild('quickCash') quickCash:any;

  title = 'Open Finance';
  currentIncome:number = 0;
  currentExpense:number = 0;
  loanAmt:number = 100000;
  emiAmt:number  = 15000;
  isHover=false;
  isHover1=false;
  isHover2=false;
  isHover3=false;
  isHover4=false;
  isHover5=false;


  getCurrentIncome(val:any){
    this.currentIncome = Number(val);
    console.log(val);
  }

  getCurrentExpense(val:any){
    this.currentExpense = +val;
    console.log(val);
  }

  onFocus(){
    console.log(this.quickCash.nativeElement);
  }
}
