import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  constructor(
    public router: Router
  ) { }

  navToPost (){
    this.router.navigateByUrl('/add-post')
  }
}
