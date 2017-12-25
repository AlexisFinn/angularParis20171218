import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { State } from '../../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input('appState') appState: State;
  @HostBinding('class') elementClass: string;
  @HostBinding('textContent') elementText: string;

  constructor() { }

  ngOnChanges(): void {
    this.elementClass = `state-${this.appState}`;
    this.elementText = State.label(this.appState);
  }
}
