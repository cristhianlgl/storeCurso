import { Component, Input, SimpleChanges, signal } from '@angular/core';

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
  counter = signal(0);
  counterRef:number | undefined ;

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
    console.log("OnInit");
    this.counterRef = window.setInterval(()=>{
      console.log("run interval")
      this.counter.update(valor => ++valor);
    },1000)
  }

  ngAfterViewInit(){
    console.log("AfterViewInit")
  }

  ngOnDestroy(){
    console.log("onDestroy");
    window.clearInterval(this.counterRef);
  }

  doSomething(){
    console.log("hace algo")
  }

}
