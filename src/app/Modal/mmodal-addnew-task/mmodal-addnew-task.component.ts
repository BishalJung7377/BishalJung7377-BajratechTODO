import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { TaskService } from 'src/app/services/TaskServices/task.service';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-mmodal-addnew-task',
  templateUrl: './mmodal-addnew-task.component.html',
  // styleUrls: ['./mmodal-addnew-task.component.css']
  styleUrls: ['../mmodal-addnew-task/Scss/mmodal-addnew-task.component.scss']
})

export class MmodalAddnewTaskComponent implements OnInit {
  TaskForm !: FormGroup
  formSubmit = false;
  
  startDate = new Date(2010, 0, 1);
  endDate = new Date(2020, 6, 16,0,0,0,0)
  
  
  constructor(public modalRef: MdbModalRef<MmodalAddnewTaskComponent>,
    private formBuilder: FormBuilder,
    private taskAuth: TaskService) { }

  ngOnInit(): void {
    this.TaskForm = this.formBuilder.group({
      taskName: ["",[Validators.required]],
      listName:["",[Validators.required]],
      priority:["",[Validators.required]],
      date: ["", [Validators.required]],
    })
  }
  get formValidation(){
    return this.TaskForm.controls
  }

  taskformsubmit(taskdata: any) {
    console.log(taskdata );
    if(this.TaskForm.valid){
      this.taskAuth.createTask(this.TaskForm.value.taskName,
        this.TaskForm.value.listName,
        this.TaskForm.value.priority,
        this.TaskForm.value.date
        ).subscribe(
          (response)=>{
            console.log(response);
            
          }
        )
    }
    else{
      console.log("Error on SUbmitting");
      
    }
  }
}
