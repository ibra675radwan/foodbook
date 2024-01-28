import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() openBar = new EventEmitter<void>
  isButtonClicked(){
    this.openBar.emit()
  }
}
