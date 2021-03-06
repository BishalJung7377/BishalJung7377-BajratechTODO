import { ListService } from './../../services/ListServices/list.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  // styleUrls: ['./modal.component.css']
  styleUrls: ['../modal/Scss/modal.component.scss'],
})
export class ModalComponent implements OnInit {
  newListtask!: FormGroup;

  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private formBuilder: FormBuilder,
    private modalAuth: ListService
  ) {
    this.newListtask = this.formBuilder.group({
      ListName: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.newListtask.valid) {
      this.modalAuth
        .createList(this.newListtask.value.ListName)
        .subscribe((response) => {
          console.log(response);
        });
    } else {
      console.log('Error');
    }
  }
}
