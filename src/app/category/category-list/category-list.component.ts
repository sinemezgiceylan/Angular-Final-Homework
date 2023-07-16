import { Component } from '@angular/core';
import { Category } from '../category';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categoryList: Category[] = [];

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;

  constructor(
    private route: Router,
    private categoryService: CategoryService
    ) {
    this.categoryList = this.categoryService.getCategoryList();
    this.calculateTotalPage();
  }

  // Toplam sayfa sayısı kontrol edildi.
  private calculateTotalPage() {
    let totalPage = this.categoryList.length / this.pageSize;

    const remainingItems = this.categoryList.length % this.pageSize;

    if(remainingItems > 0) {
      totalPage++;
    }
    this.totalPage = totalPage;
  }

  handleNewCategoryItemClicked() {
    this.route.navigateByUrl('/create-category')
  }

  // Bir önceki sayfaya geçiş butonu oluşturuldu.
  handlePreviousPageButton() {
    if(this.pageIndex > 0) {
      this.pageIndex--;
    }
    
  }
  // Bir sonraki sayfaya geçiş butonu oluşturuldu.
  handleNextPageButton() {

    if(this.pageIndex < this.totalPage - 1) {
      this.pageIndex++;
    }
  }

  // Kategori silme butonu oluşturuldu.
  handleDeleteButton($event: Number) {
    this.categoryService.deleteCategoryItem($event);
    this.categoryList = this.categoryService.getCategoryList();
  }

}
