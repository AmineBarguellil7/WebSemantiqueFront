import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from '../models/Article';
import { DataService } from '../service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @ViewChild("f") signupForm:NgForm;
  article:Article=new Article();
  constructor(private ArticleService:DataService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.signupForm);
  }

  addArticle() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ajout avec succés',
      showConfirmButton: false,
      timer: 1000
    })
    console.log(this.article);
    this.ArticleService.addArticle(this.article).subscribe();
    this.signupForm.reset();
  }

  afficherListeArc() {
    this.router.navigate(['/afficher-liste']);
  }

}
