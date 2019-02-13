export class NewPost {
  title: string;
  categoryId: number;
  body: string;
}

export class PostModel {
  postId: number;
  title: string;
  category: number;
  body: string;
  datePosted: Date;

  constructor(postId: number, title: string, category: number, datePosted: Date) {
    this.postId = postId;
    this.title = title;
    this.category = category;
    this.datePosted = datePosted;
    this.body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus labore, repudiandae ad exercitationem totam expedita incidunt praesentium, voluptas necessitatibus beatae possimus architecto? Culpa vel ipsa aspernatur eligendi sequi eaque recusandae.";
  }
}

export class PostViewModel extends PostModel {
  categoryName: string;

  constructor(post: PostModel, categoryName: string) {
    super(post.postId, post.title, post.category, post.datePosted);

    this.categoryName = categoryName;
  }
}

export class PostDetailViewModel extends PostModel {

}
