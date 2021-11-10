import { ListService } from '../../services/ListServices/list.service';
import { FormBuilder } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/Modal/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TaskService } from 'src/app/services/TaskServices/task.service';
import { list, task } from 'src/app/services/user';

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
  listData: list[] = [];
  listCounter: number = 0;
  taskData: task[] = [];

  constructor(
    private formBuilder: FormBuilder,
    config: NgbModalConfig,
    private modal: NgbModal,
    private _modalService: NgbModal,
    private modalService: MdbModalService,
    private listaDataname: ListService,
    private showTaskauth: TaskService
  ) {
    this.listaDataname.displayList().subscribe((response: any) => {
      this.listData = response;
      (this.listCounter = this.listData.length)
    });
    this.showTaskauth.showTask().subscribe((response: any) => {
      this.taskData = response;
    });
  }
  ngOnInit(): void {}
  open(content:string):void {
    this.modal.open(content, { centered: true, windowClass: 'my-class' });
  }
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-dialog-centered',
    });
  }
}
