import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

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

  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    this.data = {
      name: this.nameValue,
      job: this.jobValue,
      email: this.emailValue,
      phone: this.phoneValue,
      twitterValue: this.twitterValue,
      githubValue: this.githubValue
    }
    
    /* event emitter */

  }
}
