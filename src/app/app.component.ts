import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIDENAV';

  isSideNavCollapse= false;
  screenWith=0;

  onToggleSideNav(data: SideNavToggle){
    this.screenWith= data.screenWidth;
    this.isSideNavCollapse= data.collapsed;
  }
}
