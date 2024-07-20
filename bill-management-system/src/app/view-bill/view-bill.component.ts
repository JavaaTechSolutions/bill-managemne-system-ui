import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BillingService } from '../services/billing.service';

@Component({
  selector: 'app-view-bill',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './view-bill.component.html',
  styleUrl: './view-bill.component.scss'
})
export class ViewBillComponent {
  viewBill: FormGroup;
  serviceRequestNo: any;
  billDetails: any;
  submitted = false;

  constructor(private billingService: BillingService) {
    this.viewBill =  new FormGroup({
      serviceRequestNo: new FormControl("",[Validators.required])
    })
  }

  onSubmit() {
    const isFormValid = this.viewBill.valid;
    console.log(isFormValid);
    console.log(this.viewBill.value.serviceRequestNo);

    this.billingService.getBillDetailsByServiceRequestNo(this.viewBill.value.serviceRequestNo).subscribe((billData) => {
      console.log(billData);
      this.billDetails = billData;
      this.submitted = true;
    });
  }
}
