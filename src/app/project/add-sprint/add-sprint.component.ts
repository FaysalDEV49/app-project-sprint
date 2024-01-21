import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { Sprint } from 'src/app/models/sprint';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.css']
})

export class AddSprintComponent implements OnInit {
  SprintFrom : FormGroup  ; 
  SprintData: Sprint | undefined; 
  constructor(private springService: SprintService, private fb: FormBuilder) {

    this.SprintFrom = this.fb.group({
      SprintName: [''],
      SprintGoal: [''],
      DateDebut: [''],
      DateFin: [''],
  
      
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    const SprintData: Sprint = this.SprintFrom.value;

    this.springService.addSprint(SprintData).subscribe({
      next: (data: Sprint) => {
        // Success callback
        this.SprintData=data;
        console.log(data);
      },
      error: this.handleError.bind(this)
   });
}

private handleError(error: any) {
  // Error callback
  console.error('Error adding project:', error);
  // Handle error, display error message, etc.
}

}
