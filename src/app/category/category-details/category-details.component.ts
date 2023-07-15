import { Component } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {

  categoryList: Category[] = [];

  categoryItem?: Category;
  categoryId?: number;
  
  name: string = "";
  creationDate: string = "";
  edit: boolean = false;


  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.categoryList = this.categoryService.getCategoryList();
    const params = this.route.snapshot.params;
    const categoryId = parseInt(params['categoryId']);
    this.categoryId = categoryId;
    this.categoryItem = this.categoryService.getCategoryItem(categoryId);
    if(!this.categoryId) {
      this.router.navigateByUrl('/category-list') ////////////////////////
    }
  }

  handleEditButton() {
    this.edit = true;
  }

  handleEditSaveButton() {
    const category: Category = {
      categoryId : this.categoryId!,
      name : this.name,
      creationDate: this.creationDate,
    }

    this.categoryService.updateCategoryItem(category)
    alert("Success")
    this.router.navigateByUrl('/category-list')
  }
}
