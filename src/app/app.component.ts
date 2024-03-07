import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay } from 'rxjs';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'graficos';
  panelOpenState = false;

  @ViewChild(MatSidenav) sidenav!:MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router){

  }

  ngAfterViewInit(){
    this.observer
    .observe(['(max-width: 800px)'])
    .pipe(delay(1), untilDestroyed(this))
    .subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
