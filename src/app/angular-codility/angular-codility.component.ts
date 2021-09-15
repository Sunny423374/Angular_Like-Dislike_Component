import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-codility',
  templateUrl: './angular-codility.component.html',
  styles: [`
  .like-button, .dislike-button {
      font-size: 1rem;
      padding: 5px 10px;
      color:   #585858;
  }

  .liked, .disliked {
      font-weight: bold;
      color: #1565c0;
  }
`]
})
export class AngularCodilityComponent implements OnInit {

  constructor() { }

  likes=100;
  dislikes=25;
  buttonLike:boolean=false;
  buttonDisLike:boolean=false;
  likebutton1:boolean=true;
  dislikebutton1:boolean=true;

  ngOnInit(): void {
  }

  addLike()
  {
    if(this.buttonLike===false && this.buttonDisLike===false)
    {
      this.buttonLike=true;
      this.likes++;
    }
    else if(this.buttonLike===true && this.buttonDisLike===false)
    {
      this.buttonLike=false;
      this.likes--;

    }

    else if(this.buttonLike===false && this.buttonDisLike===true )
    {
      this.buttonDisLike=false;
      this.dislikes--;
      this.buttonLike=true;
      this.likes++;
      
    }


  }

  addDisLike()
  {

    if(this.buttonDisLike===false && this.buttonLike===false)
    {
      this.buttonDisLike=true;
      this.dislikes++;
    }

    else if(this.buttonDisLike===true && this.buttonLike===false)
    {
      this.buttonDisLike=false;
      this.dislikes--;
      
    }

    else if(this.buttonDisLike===false && this.buttonLike===true )
    {
      this.buttonLike=false;
      this.likes--;
      this.buttonDisLike=true;
      this.dislikes++;

    }

  }

}

/*
import { Component } from '@angular/core';


@Component({
  selector: 'like-dislike',
  template: `
      <div>
      
        <button (click)="addLikes()" [ngClass]="likebutton1 ? 'like-button' : 'liked'" >
        Like | <span class="likes-counter">{{likes}}   
        </span></button>
        <button (click)="addDisLikes()" [ngClass]="dislikebutton1 ? 'dislike-button' : 'disliked'" >Dislike | <span class="dislikes-counter">{{dislikes}}
        </span></button>
      </div>
  `,
  styles: [`
    .like-button, .dislike-button {
        font-size: 1rem;
        padding: 5px 10px;
        color:   #585858;
    }

    .liked, .disliked {
        font-weight: bold;
        color: #1565c0;
    }
  `]
})

export class LikeDislikeComponent {

  likes:number=100;
  dislikes:number=25;
  likebutton1:boolean=true;
  dislikebutton1:boolean=true;

  addLikes()
  {
    if(this.likebutton1===true && this.dislikebutton1===true){
      this.likes++;
      this.likebutton1=false;
    }
    else if(this.likebutton1===true && this.dislikebutton1===false){
      this.likes++;
      this.likebutton1=false;
      this.dislikes--;
      this.dislikebutton1=true;
    }
    else if(this.likebutton1===false && this.dislikebutton1===true){
      this.likes--;
      this.likebutton1=true;
    }

  }
  addDisLikes()
  {
    if(this.likebutton1===true && this.dislikebutton1===true){
      this.dislikes++;
      this.dislikebutton1=false;
    }
    else if(this.likebutton1===false && this.dislikebutton1===true){
      this.dislikes++;
      this.dislikebutton1=false;
      this.likes--;
      this.likebutton1=true;
    }
    else if(this.likebutton1===true && this.dislikebutton1===false){
      this.dislikes--;
      this.dislikebutton1=true;
    }

  }

}
*/