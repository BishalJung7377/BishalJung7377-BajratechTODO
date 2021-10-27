import { FormBuilder } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/Modal/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MmodalAddnewTaskComponent } from 'src/app/Modal/mmodal-addnew-task/mmodal-addnew-task.component';
import { TaskService } from 'src/app/services/TaskServices/task.service';


@Component({
  selector: 'app-todaytasklist',
  templateUrl: './todaytasklist.component.html',
  styleUrls: ['./todaytasklist.component.css']
  // styleUrls: ['../todaytasklist/SCss/todaytasklist.component.scss']

})
export class TodaytasklistComponent implements OnInit {

  taskData:any=[]
  modalRef!: MdbModalRef<MmodalAddnewTaskComponent>;
  constructor(private modal: NgbModal,
    private modalService: MdbModalService,
    private showTaskAUth: TaskService) {}

  ngOnInit(): void {
    this.showTaskAUth.showTask().subscribe((response:any)=>{
      this.taskData = response
      console.log(this.taskData);
      
    })

  }
  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }

}
