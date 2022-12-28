import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input-form-group',
  templateUrl: './input-form-group.component.html',
  styleUrls: ['./input-form-group.component.scss']
})
export class InputFormGroupComponent implements OnInit {

  @Input() label: string = '';
  @Input() errorMessage: string = '';
  @ContentChild(FormControlName) control: FormControlName | undefined;

  constructor() { }

  ngAfterContentInit(): void {
    if (!this.control)
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
  }

  ngOnInit(): void {
  }

  public hasError(): boolean {
    return (this.control?.invalid ?? false) && (this.control?.touched ?? false);
  }

}
