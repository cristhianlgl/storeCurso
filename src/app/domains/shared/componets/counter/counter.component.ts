import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required : true}) duration:number  = 0;
  @Input({required : true}) message:string  = '';

  constructor(){
    console.log('esta en el counter en constructor')
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("OnChanges")
    console.log(changes);
    const duration = changes['duration'];
    if(duration){
      this.doSomething();
    }
  }

  ngOnInit(){
    console.log("OnInit")
  }

  ngAfterViewInit(){
    console.log("AfterViewInit")
  }

  ngOnDestroy(){
    console.log("onDestroy")
  }

  doSomething(){
    console.log("hace algo")
  }

}
