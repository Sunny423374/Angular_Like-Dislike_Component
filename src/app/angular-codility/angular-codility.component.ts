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

