import { Component, OnInit, Input,} from '@angular/core';

@Component({
  selector: 'app-account-title',
  templateUrl: './account-title.component.html',
  styleUrls: ['./account-title.component.scss']
})
export class AccountTitleComponent implements OnInit {
  /**
   * Utilizado para setear el primer titulo que se requiere en la pantalla que se esta viendo
   */
  @Input() label: string = "";

  /**
   * Utilizado para setear el segundo titulo que se requiere en la pantalla que se esta viendo
   */
  @Input() title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
