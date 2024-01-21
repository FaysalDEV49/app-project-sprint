import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  constructor(private router: Router) {
    // Constructor code...
  }
  navigateToProject() :void{
    this.router.navigate(['/project/list']);
  }
  navigateToSprintt() :void{
    this.router.navigate(['/project/ListSprints']);
  }
}
