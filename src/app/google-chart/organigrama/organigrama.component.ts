import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrl: './organigrama.component.scss'
})
export class OrganigramaComponent {

  title = 'google-charts';
  myType = ChartType.OrgChart;
  columNames = ['Name', 'Manager', 'ToolTip'];

  charData: any[][] = [
    [{'v':'Mike', 'f':'Mike<div style="color:red; font-style:italic">President</div>'},
     '', 'The President'],
    [{'v':'Jim', 'f':'Jim<div style="color:red; font-style:italic">Vice President</div>'},
     'Mike', 'VP'],
    ['Alice', 'Mike', ''],
    ['Bob', 'Jim', 'Bob Sponge'],
    ['Carol', 'Bob', '']
  ];
}
