type Item = {
    id : string;
    label :string;
    path : string;
}
export const menuItems: Item[]  = [
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