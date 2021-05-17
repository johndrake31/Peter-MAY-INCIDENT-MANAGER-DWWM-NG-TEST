import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Incidents } from '../model/incident.model';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {
  @Input() incidentInfo = new Incidents( 6, "inced 6", "bobo@hot.mail", "lorem ipsum is a bad bad girl", "ERROR", "FEATURE", 89, "2021-03-31", "null", true  )
  @Output() sendId = new EventEmitter<number>();

    getId(){
      this.sendId.emit(this.incidentInfo.id);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
