import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '../../models/store'; // Import the Magasin model
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-list-store',
  templateUrl: './list-store.component.html',
  styleUrls: ['./list-store.component.css']
})
export class ListStoreComponent implements OnInit {
  magasins: any; // Update variable names and types
  magasin = new Store(); // Update variable names and types
  details: any;
  nameStore: any; // Update variable names
  p: number = 1;

  constructor(private Route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getMagasins();
  }
  parseRDFValue(value: string): any {
    const separatorIndex = value.indexOf('^^');
    if (separatorIndex !== -1) {
      return value.substring(0, separatorIndex);
    }
    return value; // Return the original value if no datatype info is found
  }
  getMagasins() {
    this.dataService.getBoutiqueData()
    .subscribe((data: any[]) => {
      this.magasins = data.map(boutique => ({
        idStore: this.parseRDFValue(boutique.idStore),
        nameStore: boutique.nameStore,
        description: boutique.description,
        phoneNumber: this.parseRDFValue(boutique.phoneNumber)
      }));;
    });
  }
  getBoutiquesByName(nameStore: string): void {
    this.dataService.getBoutiqueByName(nameStore)
      .subscribe((data: any[]) => {
        this.magasins = data.map(boutique => ({
          idStore: this.parseRDFValue(boutique.idStore),
          nameStore: boutique.nameStore,
          description: boutique.description,
          phoneNumber: this.parseRDFValue(boutique.phoneNumber)
        }));;
      });
  }
  search() {
    if (this.nameStore == "") {
      this.ngOnInit();
    } else {
      this.magasins = this.magasins.filter((res) => {
        return res.nameStore.toLocaleLowerCase().match(this.nameStore.toLocaleLowerCase());
      });
    }
  }

  key: String = 'idStore'; // Update sorting key
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  refresh() {
    this.dataService.getStores().subscribe((res) => {
      this.magasins = res;
    });
  }
}
