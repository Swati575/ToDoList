import { Component, OnInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'todo';
 

    items = ""
    itemDetails=""
  
     list = [];
     
    onClick(){
      const x ={
        name:this.items,
        details:this.itemDetails
      }
      this.list.push(x)
      this.items=""
      this.itemDetails=""
      
      console.log(this.list);
    }
  
    delete(index){
      this.list.splice(index,1);
    }
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }


