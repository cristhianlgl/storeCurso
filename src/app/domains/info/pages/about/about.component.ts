import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/componets/counter/counter.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(0);
  message = signal('hola');

  setDuration(event:Event){
    const valor =  event.target as HTMLInputElement
    this.duration.set(valor.valueAsNumber)
  }

  setMessage(event:Event){
    const valor =  event.target as HTMLInputElement
    this.message.set(valor.value)
  }

}
