import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-processing-status-table',
  templateUrl: './processing-status-table.component.html',
  styleUrls: ['./processing-status-table.component.css']
})
export class ProcessingStatusTableComponent {
  type: string = 'table 1';

  table1Data = [
    { processing: 'Cleaning', element: 'Imane_2', status: 'Completed' }
  ];

  informations = [
    { field: 'id', value: '1186661731713487' },
    { field: 'id', value: '1186661731713487' },
    { field: 'id', value: '1186661731713487' },


  ];
}
