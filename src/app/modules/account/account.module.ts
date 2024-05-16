import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { SmartAccountComponent } from './components/features/smart-account/smart-account.component';
import { DumbAccountComponent } from './components/ui/dumb-account/dumb-account.component';

@NgModule({
  declarations: [
    AccountHomeComponent,
    SmartAccountComponent,
    DumbAccountComponent,
  ],
  imports: [CommonModule, AccountRoutingModule],
})
export class AccountModule {}
