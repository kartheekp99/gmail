import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../services/side-nav.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  entered: boolean = false;

  constructor(public sidenavservice: SideNavService) {
    
  }
  ngOnInit(): void{
    this.activate('inbox');
  }
  mouseEnter() {
    if (!this.entered && !this.sidenavservice.hideSideNav) {
      this.sidenavservice.toggleSideNav();
      this.entered = true;
    }
  }
  mouseLeave() {
    if (this.entered && this.sidenavservice.hideSideNav) {
      this.sidenavservice.toggleSideNav();
      this.entered = false;
    }
  }

  activate(item){
    let list:any = document.getElementsByClassName("nav-item");
    for (let i = 0; i < list.length; ++i) {
      list[i].classList.remove('active');
    }
    document.getElementById(item).classList.add('active');
  }
}