import { MmodalAddnewTaskComponent } from 'src/app/Modal/mmodal-addnew-task/mmodal-addnew-task.component';
import { FormBuilder } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/Modal/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['SCSS/dashboardcomp.scss']
})
export class DashboardComponent implements OnInit {
  date =new Date().toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})
  modalRef!: MdbModalRef<MmodalAddnewTaskComponent>;
  constructor(private formBuilder: FormBuilder, 
    config: NgbModalConfig,
    private modal: NgbModal,
    private _modalService: NgbModal,
    private modalService: MdbModalService) { 
      
    }
  ngOnInit(): void {
  }
  openModal() {
    this.modalRef = this.modalService.open(MmodalAddnewTaskComponent, {modalClass: 'modal-dialog-centered' })
  }
  
}
