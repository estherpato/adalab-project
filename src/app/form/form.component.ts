import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input('isCardView') isCardView: boolean;

  @Output('getData') sendData: EventEmitter<any> = new EventEmitter<any>();

  data: any;
  nameValue: string;
  jobValue: string;
  emailValue: string;
  phoneValue: string;
  twitterValue: string;
  githubValue: string;

  isCompleted: boolean;

  constructor() {
    this.isCompleted = true;
  }

  ngOnInit() {
  }

  onSubmit(event) {
    this.data = {
      name: this.nameValue,
      job: this.jobValue,
      email: this.emailValue,
      phone: this.phoneValue,
      twitter: this.twitterValue,
      github: this.githubValue
    }

    if (this.data.name
      && this.data.job
      && this.data.email
      && this.data.phone) {
      this.isCompleted = true;
      this.sendData.emit(this.data);
    } else {
      this.isCompleted = false;
    }
  }
}
