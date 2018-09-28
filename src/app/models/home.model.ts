import { PostViewModel } from "./posts.model";

export class HomeViewModel {
  posts: PostViewModel[];
  postCount: number;
  categoryCount: number;
  userCount: number;

  constructor(posts: PostViewModel[], categoryCount: number, userCount: number) {
    this.posts = posts;
    this.postCount = posts.length;
    this.categoryCount = categoryCount;
    this.userCount = userCount;
  }
}
