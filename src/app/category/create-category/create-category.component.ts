import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  categoryItem!: Category;
  isSuccess: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.resetForm();
  }

  ngAfterViewInit(): void {
    
  }

  handleSaveCategoryItem() {
    if(this.categoryItem.name === "" || this.categoryItem.creationDate === "") {
      alert("Fill in all sections!")
    } else {
      this.categoryService.addCategoryItem(this.categoryItem);
      this.isSuccess = true;
      this.resetForm();
    }
  }
  handleCancelCategoryItem() {
    this.router.navigateByUrl('/category-list')
  }

  private resetForm() {
    this.categoryItem = {
      categoryId: 0,
      name: '',
      creationDate: new Date().toISOString(),
    };
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);

  }
}
