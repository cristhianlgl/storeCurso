import { Component, signal } from '@angular/core';
import { CounterComponent } from '@/shared/componets/counter/counter.component';
import { NgIf } from '@angular/common';
import { WaveAudioComponent } from '@/info/components/wave-audio/wave-audio.component';
import { LighlightDirective } from '@/shared/directives/lighlight.directive';
import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, NgIf, WaveAudioComponent, LighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  duration = signal(0);
  message = signal('hola');
  audioUrl = 'assets/audio.mp3'
  api = environment.api;

  constructor(){
    this.api = environment.api;
  }

  setDuration(event:Event){
    const valor =  event.target as HTMLInputElement
    this.duration.set(valor.valueAsNumber)
  }

  setMessage(event:Event){
    const valor =  event.target as HTMLInputElement
    this.message.set(valor.value)
  }

}
