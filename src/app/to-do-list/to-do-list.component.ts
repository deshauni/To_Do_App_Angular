import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  tasks1:any;
  
  selectedRows: any[] = [];
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe((el:any)=>{
      this.tasks1 = el
     });
  }
  toggleSelected(row: any) {
    if (this.isSelected(row)) {
      const index = this.selectedRows.findIndex(r => r === row);
      this.selectedRows.splice(index, 1);
    } else {
      this.selectedRows.push(row);
    }
  }

  isSelected(row: any): boolean {
    return this.selectedRows.includes(row);
  }

}