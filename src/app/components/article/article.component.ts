import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})

export class ArticleComponent implements OnInit {
  public article: Article;
  public url: string;


  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        Response => {
          if(Response.article){
            this.article= Response.article;
          }else{
            this._router.navigate(['/home']);
          }
          
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id){
    this._articleService.delete(id).subscribe(
      Response =>{
        this._router.navigate(['/blog']);
      },
      error =>{
        console.log(error);
        
      }
    );
  }

}
