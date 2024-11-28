import { Component, inject, OnInit } from '@angular/core';
import { PostRequest } from '../../class/PostRequest';
import { PostService } from '../../service/post.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
import { PostResponse } from '../../interface/PostResponse';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

 posts: PostResponse[] = [];
 show: boolean= false;
 
 postRequest: PostRequest= new PostRequest();

 postService= inject(PostService);


 ngOnInit() {
   this.postService.getPosts().subscribe(posts => {
     this.posts = posts; 
   });
   
  
 }
 getPosts(){
  this.postService.getPosts().subscribe(posts => {
    this.posts = posts; 
  });
 }

  savePost(){
    this.postService.addPost(this.postRequest).subscribe((res: PostResponse)=>{
      console.log(res);
      alert("Task created successfully");
      this.postRequest=new PostRequest();  //clear the fields after saving
    this.getPosts();
    });
   

  }


  updatePost(postId: number, post: PostRequest){
    this.postService.updatePost(postId, post).subscribe((response: any) => {
      console.log(response);
      alert('Task updated successfully');
      this.getPosts();
      
    });
  
    
  }

  deletePost(postId: number){
    const index = this.posts.findIndex(post => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
    this.postService.deletePost(postId) .subscribe(response => {
      console.log(response);
      alert('Task deleted successfully');
      this.getPosts();
     
      
    });
    
    
  }

  
  showPosts(){
    this.show=true;

  }
  hidePosts(){
    this.show=false;

  }

}
