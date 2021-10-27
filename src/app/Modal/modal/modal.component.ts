import { ListService } from './../../services/ListServices/list.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  // styleUrls: ['./modal.component.css']
  styleUrls: ['../modal/Scss/modal.component.scss']
})
export class ModalComponent implements OnInit {
  NewListTask!: FormGroup
  
  constructor(public modalRef: MdbModalRef<ModalComponent>,
    private formBuilder: FormBuilder,
    private modalAuth: ListService
    ) { }

  ngOnInit(): void {
    this.NewListTask = this.formBuilder.group({
      ListName:["",[Validators.required]]
    })
  }


  listData(listdata: any) {
    console.log(listdata);
    if (this.NewListTask.valid) {
    this.modalAuth.createList(this.NewListTask.value.ListName)
    .subscribe(
      (response)=>{
        console.log(response);
      }
    )
    }
    else{
      console.log("Error");
      
    }
   
  }
}
