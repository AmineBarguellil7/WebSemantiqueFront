import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  titre:string="";
  Id:string="";
  article:Article=new Article();
  articleAmodifier={
    titreArticle:"",
    contenu:"",
    auteur:""
  };

  listArticles:any;  
  constructor(private ArticleService:DataService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.listArticles);
    this.ArticleService.getListArc().subscribe(res=>{this.listArticles=res,console.log(this.listArticles)});  
  }

  onUpdateArticle(arc) {
   this.articleAmodifier=arc;
  }

  ModifierArticle() {
    Swal.fire({
      title: 'Souhaitez-vous enregistrer les modifications ?',
      showDenyButton: true,
      confirmButtonText: 'enregistrer',
      denyButtonText: `annuler`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('modification avec succès!', '', 'success')
        this.ArticleService.UpdateArticle(this.articleAmodifier).subscribe((res)=>{console.log(res)}),
    (err)=>{console.log(err)};
      } else if (result.isDenied) {
        this.ArticleService.getListArc().subscribe((res)=>this.listArticles=res);
        Swal.fire('les modifications ne sont pas enregistrées', '', 'info')
      }
    })
  }
  deleteArticle(article:any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Vous Etes sur?',
      text: "vous ne pouvez pas revenir en arrière!",
      icon: 'warning',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler',
      showCancelButton: true,
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Supprimé!',
          'Departement supprimé',
          'success'
        )
        this.ArticleService.deleteArticle(article.idArc).subscribe((res)=>this.ArticleService.getListArc().subscribe(res=>this.listArticles=res));
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Annulé',
          'Departement non supprimé',
          'error'
        )
      }
    })
  }
  ShowDetails(id:number,titreArticle:string,contenu:string,auteur:string) {
    this.router.navigate(['/listeArticles/'+id,titreArticle,contenu,auteur]);
  }    

  SearchArticleById(id:string) {
    if (this.Id=="") {
      return true;
    }
    if (id==this.Id) {
      return true;
    }
    return false;
  }
  
  TestStatus(nomArc:string) {
    if (this.titre=="") {
      return false;
    }
    if (nomArc.startsWith(this.titre)) {
      return false;
    }
    else {
      return true;
    }
  }

  AfficherList() {
    this.ArticleService.getListArc().subscribe((res)=>this.listArticles=res);
  }

  
}
