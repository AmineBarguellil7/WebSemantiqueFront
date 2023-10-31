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


  constructor(private dataService: DataService) {}
  

ngOnInit(): void {
this.getBoutiquePromotions();
}
getBoutiquePromotions(): void {
  this.dataService.getBoutiquePromotions()
  .subscribe(
    (data: any[]) => {
      // Modify the data to extract the numeric value
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
extractNumericValue(value: string): string {
  // Extract the numeric value
  const splitValue = value.split('^^');
  return splitValue[0];
}
}
