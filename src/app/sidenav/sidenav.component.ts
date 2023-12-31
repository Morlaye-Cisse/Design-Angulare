import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWith=0;
  navData = navbarData;

  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.screenWith = window.innerWidth;
    if(this.screenWith < 768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWith});
    }

  }
  ngOnInit(): void {
      this.screenWith = window.innerWidth;
  }
  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWith});
  }

  closeSidenav(){
    this.collapsed =false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWith});
  }
}
