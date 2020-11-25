import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  index: number;
  array = [2,3,10,15,26,35];
  result: number;
  remTime: number = 5;
  
  onSubmit(){
    if(this.index==undefined){
      return;
    }
    while(this.index>=this.array.length){
      this.array.push(8+4*(this.array.length-2) + this.array[this.array.length-2]);
    }
    this.result = this.array[this.index];
    
    // Reset after 5 seconds
    let interval = setInterval(() => {
      this.remTime--;
    }, 1000)
    
    setTimeout(() => {
      clearInterval(interval);
      this.index = undefined;
      this.result = undefined;
      this.remTime = 5;
    }, 5000);
  }

}
