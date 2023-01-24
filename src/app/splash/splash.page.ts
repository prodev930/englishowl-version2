import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class splashComponent implements OnInit{
  constructor(public router: Router) {
  }
 
  ngOnInit() {
    // Router.navigate();
    // setTimeout(function(){
    //   location.href="http://localhost:8100/signin";
    //   this.router.navigate(['signin']);
    // },5000)
  }
}
