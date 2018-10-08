import { PostModel } from "./posts.model";
import { CategoryModel } from "./category.model";
import { UserViewModel } from "./user.model";

export const appDemoData = {
  posts: [
    new PostModel(1, 'Post One', 0, new Date(2018, 6, 12)),
    new PostModel(2, 'Post Two', 1, new Date(2018, 6, 13)),
    new PostModel(3, 'Post Three', 0, new Date(2018, 6, 14)),
    new PostModel(4, 'Post Four', 2, new Date(2018, 6, 15)),
    new PostModel(5, 'Post Five', 0, new Date(2018, 6, 16)),
    new PostModel(6, 'Post Six', 3, new Date(2018, 6, 17)),
    new PostModel(7, 'Post Seven', 3, new Date(2018, 6, 18)),
    new PostModel(8, 'Post Eight', 1, new Date(2018, 6, 19)),
    new PostModel(9, 'Post Nine', 0, new Date(2018, 6, 20)),
    new PostModel(10, 'Hamster', 2, new Date(2018, 6, 21)),
    new PostModel(11, 'Roll Up', 0, new Date(2018, 6, 22)),
    new PostModel(12, 'Hawai', 3, new Date(2018, 6, 23)),
    new PostModel(13, 'Determined', 3, new Date(2018, 6, 24)),
    new PostModel(14, 'Motivated', 1, new Date(2018, 6, 25)),
    new PostModel(15, 'Active', 0, new Date(2018, 6, 26)),
    new PostModel(16, 'Optimistic', 2, new Date(2018, 6, 27)),
    new PostModel(17, 'Lively', 0, new Date(2018, 6, 28)),
    new PostModel(18, 'Advanturous', 3, new Date(2018, 6, 29)),
  ],
  categories: [
    new CategoryModel(0, 'Web Development'),
    new CategoryModel(1, 'Tech Gadgets'),
    new CategoryModel(2, 'Business'),
    new CategoryModel(3, 'Health & Wellness'),
  ],
  users: [
    new UserViewModel('John Doe', 'johndoe@gmail.com'),
    new UserViewModel('Brad Traversy', 'bradtraversy@gmail.com'),
    new UserViewModel('Jane Doe', 'janedoe@gmail.com'),
    new UserViewModel('Rock Clifford', 'rockclifford@gmail.com'),
  ]
};
