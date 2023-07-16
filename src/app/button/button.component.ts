import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() buttonText: String = "";
  @Input() id: number = 0;
  @Output() onButtonClick = new EventEmitter<number>();

  handleButtonClicked(id: number) {
    this.onButtonClick.emit(id);
  }
}


