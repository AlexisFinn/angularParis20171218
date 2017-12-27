import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  state = State;
  form: FormGroup;
  stateLibelles = Object.values(State);

  @Output() dataItem: EventEmitter<Item> = new EventEmitter(); // give this.form.value to parent component
  @Input() item: Item; // return existing item in case edit commande
  @Input() titleForm: string; // in case edit commande

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      name: [
        this.item ? this.item.name : '', // if this.item <-- case edit commande else case add commande
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        this.item ? this.item.reference : '', // if this.item <-- case edit commande else case add commande
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: [
        this.item ? this.item.state : State.ALIVRER
      ]
    });
  }

  getItem(): Item {
    const data = this.form.value as Item;
    if (!this.item) {
      return data; // in case  add commande <-- return this.form.value
    }
    const id = this.item.id;
    return {id, ...data}; // in case edit commande <-- return this.form.value and get existing id for update in bdd
  }

  process(): void {
    const datas = this.getItem();
    this.dataItem.emit(datas);
    this.reset();
  }

  reset(): void {
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  isError(champ: string) {
    return this.form.get(champ).dirty && this.form.get(champ).hasError('minlength');
  }

}
