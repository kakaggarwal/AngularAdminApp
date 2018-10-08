
export class CategoryModel {
  cateogryId: number;
  title: string;

  constructor(categoryId: number, title: string) {
    this.cateogryId = categoryId;
    this.title = title;
  }
}

export class CategoryViewModel extends CategoryModel {
  datePosted: Date;

  constructor(category: CategoryModel, datePosted: Date) {
    super(category.cateogryId, category.title);

    this.datePosted = datePosted;
  }
}
