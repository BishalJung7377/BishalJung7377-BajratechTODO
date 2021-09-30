import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-mmodal-addnew-task',
  templateUrl: './mmodal-addnew-task.component.html',
  styleUrls: ['./mmodal-addnew-task.component.css']
})

export class MmodalAddnewTaskComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor( public modalRef: MdbModalRef<MmodalAddnewTaskComponent>) { }

  ngOnInit(): void {
  }

}
