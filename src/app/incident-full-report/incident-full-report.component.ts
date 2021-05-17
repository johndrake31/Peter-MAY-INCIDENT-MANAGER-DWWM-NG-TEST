import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IncidentHttpService } from '../incident-http.service';
import { Incidents } from '../model/incident.model';

@Component({
  selector: 'app-incident-full-report',
  templateUrl: './incident-full-report.component.html',
  styleUrls: ['./incident-full-report.component.css']
})
export class IncidentFullReportComponent implements OnInit {
@Input() fullIncidentInfo = new Incidents( 6, "inced 6", "bobo@hot.mail", "lorem ipsum is a bad bad girl", "ERROR", "FEATURE", 89, "2021-03-31", "null", true)
  deleteBool = false;

  constructor(private deleteHttp: IncidentHttpService) { }

  @Output() sendTruthy = new EventEmitter<number>();

  ngOnInit(): void {
  }
  deleteMyIncident():void{
    // this.deleteHttp.deleteIncident(this.fullIncidentInfo.id).subscribe(data => data);
    this.sendTruthy.emit(this.fullIncidentInfo.id);
  }
}
