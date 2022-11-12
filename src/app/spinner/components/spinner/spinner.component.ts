import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <section class="spinnerContainer" *ngIf="isLoading$ | async">
    <div class="spinnerContainer__spinner"></div>
  </section>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isLoading$= this.spinnerSvc.isLoading$;

  constructor(
    private spinnerSvc: SpinnerService
  ) { }

  ngOnInit(): void {
  }

}
