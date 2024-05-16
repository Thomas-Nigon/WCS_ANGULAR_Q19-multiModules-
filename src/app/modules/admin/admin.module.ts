import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { SmartAdminComponent } from './components/features/smart-admin/smart-admin.component';
import { DumbAdminComponent } from './components/ui/dumb-admin/dumb-admin.component';

@NgModule({
  declarations: [AdminHomeComponent, SmartAdminComponent, DumbAdminComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
