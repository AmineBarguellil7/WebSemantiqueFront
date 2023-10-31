import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { AfficherListeComponent } from "./afficher-liste/afficher-liste.component";
import { ArticleComponent } from "./article.component";
import { DetailArticleComponent } from "./liste-article/detail-article/detail-article.component";
import { ListeArticleComponent } from "./liste-article/liste-article.component";



const routes:Routes=[
{path:"listeArticles",component:ListeArticleComponent},{path:"article",component:ArticleComponent}
,{ path: "afficher-liste", component: AfficherListeComponent,children:[{path:"search",component:DetailArticleComponent}] },
]

@NgModule({
imports:[
    RouterModule.forChild(routes)
],
exports:[RouterModule]
})
export class ArticleRoutingModule {

}