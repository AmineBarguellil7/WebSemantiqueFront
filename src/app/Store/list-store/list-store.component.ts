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
  name: any; // Update variable names
  p: number = 1;

  constructor(private Route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getMagasins();
  }
  getMagasins() {
    this.dataService.getStores().subscribe((res) => {
      this.magasins = res;
    });
  }
  deleteMagasin(id: any) {
    this.dataService.deleteStore(id).subscribe((res) => {
      this.getMagasins();
    });
  }

  search() {
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.magasins = this.magasins.filter((res) => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  key: String = 'idMagasin'; // Update sorting key
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
