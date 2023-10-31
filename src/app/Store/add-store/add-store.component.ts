import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/app/models/store';
import { DataService } from 'src/app/service/data.service'; 

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.css']
})
export class AddStoreComponent implements OnInit {
  boutiquePromotions: any[] = [];
  latestPromotion: any = null;

  constructor(private dataService: DataService) {}
     
  ngOnInit(): void {
  this.getBoutiquePromotions();
  }
  getBoutiquePromotions(): void {
    this.dataService.getBoutiquePromotions()
    .subscribe(
      (data: any[]) => {
        this.boutiquePromotions = data.map(boutiquePromotions => ({
          nameStore: boutiquePromotions.nameStore,
          percentage: this.extractNumericValue(boutiquePromotions.percentage),
          startDate: this.extractNumericValue(boutiquePromotions.startDate),
          endDate: this.extractNumericValue(boutiquePromotions.endDate),
        }));
      },
      error => {
        console.error('Error fetching promotions', error);
      }
    );
  }

  openAlertWithPromotionDetails(): void {
    if (!this.latestPromotion) {
      this.dataService.getLatestPromotion().subscribe(
        (data: any) => {
          if (data && data.length > 0) {
            const latest = data[0];
            const percentageValue = this.extractNumericValue(latest.percentage);
            const date = this.extractNumericValue(latest.endDate);
            this.latestPromotion = {
              nameStore: latest.nameStore,
              percentage: percentageValue,
              endDate: date,
            };

            const alertMessage = `Latest Promotion Details:\n\n` +
              `Name Store: ${this.latestPromotion.nameStore}\n` +
              `Percentage: ${this.latestPromotion.percentage}\n` +
              `End Date: ${this.latestPromotion.endDate}`;

            window.alert(alertMessage);
          } else {
            console.error('No promotion data available.');
          }
        },
        error => {
          console.error('Error fetching latest promotion', error);
        }
      );
    } else {
      const alertMessage = `Latest Promotion Details:\n\n` +
        `Name Store: ${this.latestPromotion.nameStore}\n` +
        `Percentage: ${this.latestPromotion.percentage}\n` +
        `End Date: ${this.latestPromotion.endDate}`;

      window.alert(alertMessage);
    }
  }
  
  
  

extractNumericValue(value: string): string {
  const splitValue = value.split('^^');
  return splitValue[0];
}
}
