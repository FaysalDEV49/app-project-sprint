import { Component,OnInit } from '@angular/core';
import { SprintService } from 'src/app/services/sprint.service';
import { Route, Router } from '@angular/router';
import { Sprint } from 'src/app/models/sprint';

@Component({
  selector: 'app-list-sprint',
  templateUrl: './list-sprint.component.html',
  styleUrls: ['./list-sprint.component.css']
})
export class ListSprintComponent implements OnInit{

  sprints: Sprint[] = [];
  constructor(private sprinttService: SprintService, private router : Router){}
  
  ngOnInit(): void {
    console.log("test");  }

    fetchSprints() {
      this.sprinttService.getSprints().subscribe({
        next: (sprint) => {
          console.log("kaywsl hna  : )");
          this.sprints = sprint;
        },
        error: this.handleError.bind(this)
     });
    }
    private handleError(error: any) {
      // Error callback
      console.error('Error adding Sprint:', error);
      // Handle error, display error message, etc.
    }
}
