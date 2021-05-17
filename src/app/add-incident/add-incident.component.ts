import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentHttpService } from '../incident-http.service';

@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent implements OnInit {
form!: FormGroup;
formSubmitted = false;
  constructor(private addIncidentHttp: IncidentHttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      titre: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required],
      level: ['', Validators.required],
      type: ['', Validators.required],
      progress: ['', Validators.required],
      open: ['' ],
    });
  }


  addMyIncident(): void {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.addIncidentHttp.addIncident(this.form.value).subscribe();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
}
