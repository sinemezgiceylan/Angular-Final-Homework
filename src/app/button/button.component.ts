import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() buttonText: String = "";
  @Input() id: Number = 0;
  @Output() onButtonClick = new EventEmitter<Number>();

  handleButtonClicked(id: Number) {
    this.onButtonClick.emit(id);
  }
}


