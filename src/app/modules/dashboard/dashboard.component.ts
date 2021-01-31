import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  hours = 0;
  minutes = 0;
  seconds = 0;
  tracking: boolean = false;
  buttonText: string = 'Start';
  interval:any;
  workedToday: string = 'inka start cheyneledu';
  ngOnInit(): void {

    
  }

  onToggle(){
    this.tracking = !this.tracking
    this.buttonText = this.tracking ? 'Pause' : 'Start'
    this.processTracking()
  }
  processTracking(){
    if(this.tracking){
     this.interval= setInterval(()=>{
        this.seconds++
        this.minutes = Math.floor(this.seconds/60)
        this.hours = Math.floor(this.minutes/60)
        this.workedToday = this.minutes < 1 ? 'Less than a minute' :
            this.minutes >= 1 && this.minutes < 60 ? this.minutes + ' minutes' :
            this.minutes >=60 && this.hours <24 ? this.hours + ' hours' : 'days'
      },1000)
    }else{
      if(this.interval){
        clearInterval(this.interval)
      }
    }
  
  }

}
