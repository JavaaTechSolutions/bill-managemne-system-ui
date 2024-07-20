import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bill-management-system';
}
