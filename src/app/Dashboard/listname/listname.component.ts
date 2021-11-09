import { ListService } from './../../services/ListServices/list.service';
import { FormBuilder } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/Modal/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TaskService } from 'src/app/services/TaskServices/task.service';

@Component({
  selector: 'app-listname',
  templateUrl: './listname.component.html',
  styleUrls: ['./listname.component.css'],
  // styleUrls: ['../listname/Scss/listname.component.scss']
})
export class ListnameComponent implements OnInit {
  panelOpenState = false;
  collapse: boolean = true;
  modalRef!: MdbModalRef<ModalComponent>;
  listData: any = [];
  listCounter: number = 0;
  taskData:any=[]

  constructor(
    private formBuilder: FormBuilder,
    config: NgbModalConfig,
    private modal: NgbModal,
    private _modalService: NgbModal,
    private modalService: MdbModalService,
    private ListDataName: ListService,
    private showTaskAUth: TaskService
  ) {
    this.ListDataName.displayList().subscribe((response: any) => {
      this.listData = response;
      (this.listCounter = this.listData.length), console.log(this.listCounter);
    });
    this.showTaskAUth.showTask().subscribe((response:any)=>{
      this.taskData = response
      console.log(this.taskData);
      
    })
  }
  ngOnInit(): void {}
  open(content: any) {
    this.modal.open(content, { centered: true, windowClass: 'my-class' });
  }
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-dialog-centered',
    });
  }
}
