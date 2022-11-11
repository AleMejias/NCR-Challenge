import { Component, OnInit, Input,} from '@angular/core';

@Component({
  selector: 'app-account-title',
  templateUrl: './account-title.component.html',
  styleUrls: ['./account-title.component.scss']
})
export class AccountTitleComponent implements OnInit {
  @Input() label: string = "";
  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
