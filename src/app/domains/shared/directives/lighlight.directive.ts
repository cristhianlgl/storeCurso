import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[lighlight]',
  standalone: true
})
export class LighlightDirective {

  constructor() { }

  element = inject(ElementRef);

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = 'red'
  }

}
