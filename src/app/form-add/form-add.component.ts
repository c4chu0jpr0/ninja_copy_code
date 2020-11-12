import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent {
  @Output() saveChange= new EventEmitter();

  infor: Object= {
    firstName: "",
    lastName: ""
  }
  
  saveData= () =>{
    this.saveChange.emit(this.infor);
  }
}
