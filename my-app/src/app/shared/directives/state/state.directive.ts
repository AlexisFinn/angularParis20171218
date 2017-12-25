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

  private removeAccents(state: string): string {
    // https://stackoverflow.com/a/37511463
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private formatCssClass(state: string): string {
    return `state-${this.removeAccents(state)
      .toLowerCase()
      .replace(' ', '')}`;
  }

  ngOnChanges(): void {
    this.elementClass = this.formatCssClass(this.appState);
    this.elementText = this.appState;
  }
}
