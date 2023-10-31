import { Component, OnInit } from '@angular/core';
import { Avis } from 'src/app/models/Avis';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-avis-list',
  templateUrl: './avis-list.component.html',
  styleUrls: ['./avis-list.component.css']
})
export class AvisListComponent implements OnInit {
 
 avisList:any;
 avis=new Avis();
  p:number=1;
  constructor(private avisService:DataService) { }

  ngOnInit(): void {
    this.avisService.getListAvis().subscribe(
      (response) => {
        this.avisList = response;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );}

  getAvis() {
    this.avisService.getListAvis().subscribe((res) => {
      this.avisList = res;
    });
  }
  deleteAvis(avis: Avis) {
    if (confirm('Are you sure you want to delete this avis?')) {
      this.avisService.deleteAvis(avis).subscribe(
        () => {
          // Remove the order from the local list
          const index = this.avisList.indexOf(avis);
          if (index !== -1) {
            this.avisList.splice(index, 1);
          }
        },
        (error) => {
          console.error('Error deleting avis', error);
        }
      );
    }
  }
  key: String = 'idAvis'; // Update sorting key
  reverse: boolean = false;

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  refresh() {
    this.avisService.getListAvis().subscribe((res) => {
      this.avisList = res;
    });
  }

}
