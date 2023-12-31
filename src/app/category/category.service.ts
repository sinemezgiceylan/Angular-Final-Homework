import { Injectable } from '@angular/core';
import { Category } from './category';
import { PostService } from '../post/post.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [

      {
        categoryId: 1,
        name: "The Starry Night Over the Rhône",
        creationDate: "2018-07-12"
      },
      {
        categoryId: 2,
        name: "The Starry Night",
        creationDate: "2017-10-27"
      },
      {
        categoryId: 3,
        name: "The Birth of Venus",
        creationDate: "2017-06-03"
      },
      {
        categoryId: 4,
        name: "Mona Lisa",
        creationDate: "2022-01-22"
      },
      {
        categoryId: 5,
        name: "The Persistence of Memory",
        creationDate: "2017-06-30"
      },
      {
        categoryId: 6,
        name: "The Last Supper",
        creationDate: "2020-07-13"
      },
      {
        categoryId: 7,
        name: "Memory",
        creationDate: "2021-02-05"
      },
      {
        categoryId: 8,
        name: "Starry Night",
        creationDate: "2017-01-11"
      },
      {
        categoryId: 9,
        name: "The Birth of Venus",
        creationDate: "2019-12-03"
      },
      {
        categoryId: 10,
        name: "Art Museum",
        creationDate: "2021-12-02"
      }
    
  ]

  constructor(
    private postService: PostService
  ) { }

  getCategoryList() : Category[] {
    return this.categories;
  }

  addCategoryItem(categoryItem: Category) : void {
    categoryItem.categoryId = this.categories[this.categories.length - 1].categoryId + 1;
    this.categories.push(categoryItem);
  }

  getCategoryItem(categoryId: number): Category | undefined {
    return this.categories.find((category: Category, index: number) => {
      return category.categoryId === categoryId;
    })
  }

  deleteCategoryItem(id: Number) : void {
    if(this.postService.getPostList().length === 0)
      this.postService.getPostList();
    if(this.postService.getPostList().filter(post => Number(post.categoryId) === Number(id)).length > 0)
      alert("You can not delete a category with posts");
    else {
      this.categories = this.categories.filter((category) => category.categoryId !== id);
    }

  }

  updateCategoryItem(categoryItem: Category) {
    this.categories = this.categories.map(category => {
      if(category.categoryId === categoryItem.categoryId)
        category = categoryItem;
      return category;
    })
  }
}
