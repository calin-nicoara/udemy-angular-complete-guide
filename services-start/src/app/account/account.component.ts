import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from '../shared/logging.service';
import {AccountsService} from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountsService) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }
}
