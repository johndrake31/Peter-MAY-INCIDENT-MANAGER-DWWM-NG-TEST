import { Component, OnInit } from '@angular/core';
import { IncidentHttpService } from '../incident-http.service';
import { Incidents } from '../model/incident.model';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  displayAllIncidents = true;
  incidentTbl: Incidents[] = []
  incidentDetials!: Incidents;

  constructor(private incidentInfo: IncidentHttpService) { }

  ngOnInit(): void {
    this.incidentInfo.getIncidents().subscribe(data => {
      this.incidentTbl = data;
    })
  }
  closeBigWindow($event:number){
    this.incidentInfo.deleteIncident($event).subscribe(data => data);
    this.incidentInfo.getIncidents().subscribe(data => {
      this.incidentTbl = data;
    })
    this.displayAllIncidents = true;

  }
  getIncidentId($event:number){
    this.displayAllIncidents = !this.displayAllIncidents;
    this.incidentInfo.findIncident($event).subscribe( data=>this.incidentDetials=data )
  }
}
