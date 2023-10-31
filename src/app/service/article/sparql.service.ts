import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SparqlService {

  private fusekiEndpoint = 'http://localhost:3030/ds/sparql'; 

  constructor(private http: HttpClient) {}

  getArticlesAndAuthors() {
    const queryString = `
      PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
      PREFIX Projet-sem: <http://www.semanticweb.org/aminebarguellil/ontologies/2023/9/Projet-sem#>
      SELECT ?article ?auteur
      WHERE {
        ?article rdf:type Projet-sem:Article .
        ?article Projet-sem:auteur ?auteur .
      }
    `;

    return this.http.get(this.fusekiEndpoint, {
      params: {
        query: queryString
      }
    });
  }
}
