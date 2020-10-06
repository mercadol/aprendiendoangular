import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global';
import { strict } from 'assert';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article:Article;
  public status:string;
  public page_title: string;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: Global.url+'upload-image',
      //method:"POST",
      /*params: {
        'page': '1'
      },*/
      //responseType: 'blob',
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen del articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.article=new Article('','','',null,null);
    this.page_title= 'Crear articulo';

  }

  ngOnInit(): void {
  }
  onSubmit(){
    this._articleService.create(this.article).subscribe(
      response =>{
        if (response.status=='success'){
          this.status='success';
          this.article=response.article;
          this._router.navigate(['/blog']);
        }
      }, error =>{
        console.log(error);
        this.status= 'error';
      }
    );
  }
  imageUpload(data){
    this.article.image=data.body.image;
  }

}
