import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from '../../models/equipe';
import { DataService } from '../../service/data.service';


@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
equipes:any;
equipe = new Equipe();
details:any;
nomEquipe:any;
p:number=1 ;

  constructor(private Route:ActivatedRoute, private dataService: DataService, private router:Router) { }

  
  ngOnInit(): void {
    this.getEquipes();
    
  
  }
  getEquipes(){
    this.dataService.getEquipes().subscribe(res => {
      this.equipes=res;
    }
      );
  }
  deleteEquipe(id:any) {
    this.dataService.deleteEquipe(id).subscribe(res => {
    this.getEquipes();
    });
  }
  search(){
    if(this.nomEquipe == ""){
      this.ngOnInit();
    }else{
      this.equipes=this.equipes.filter(res =>{
        return res.nomEquipe.toLocaleLowerCase().match(this.nomEquipe.toLocaleLowerCase());
      })
    }
  }
  key : String = 'id';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;

  }
  refresh(){
    this.dataService.getEquipes().subscribe(res => {
      this.equipes=res;
    }
      );
  }
}
