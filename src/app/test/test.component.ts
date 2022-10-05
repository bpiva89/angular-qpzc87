import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'web-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
   myMessage = 'test2';

  @Input()
  public get MyMessage(){
    return this.myMessage;
  }

  public set MyMessage(value: string){
    this.myMessage = value;
    this.updateEverything();
  }


  constructor(
  
    ) { }
    
    ngOnInit() {


    }

    updateEverything(){

    }

}

