type Item = {
  id: string;
  label: string;
  path: string;
};
export const menuItems: Item[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

type Option = {
  label: string;
  value: string;
};
export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

type FormControlItem = {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  component: string;
  options: Option[];
};

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const initialBlogFormData = {
  title :  '',
  description : '',
  image : '',
  category : '' 
 };

 export const firebaseConfig = {
  apiKey: "AIzaSyBKpoj7udkibGzFpglJM-fzcP0X5CZsRQQ",
  authDomain: "blog-app-2df5a.firebaseapp.com",
  projectId: "blog-app-2df5a",
  storageBucket: "blog-app-2df5a.appspot.com",
  messagingSenderId: "216306746329",
  appId: "1:216306746329:web:3b7c2fa98113338c934fc8"
};