import "./AvailableFurniture.css";

const FURNITURE = [
  {
    id: 1,
    name: "Modern Velvet Sofa",
    description:
      "Experience modern luxury with our plush velvet sofa. Its sleek design and comfortable seating make it the perfect addition to any contemporary living space.",
    price: 999,
  },
  {
    id: 2,
    name: "Rustic Wood Dining Table",
    description:
      "Gather around this rustic dining table crafted from solid wood. Its natural finish and sturdy construction create a warm and inviting atmosphere for family meals.",
    price: 599,
  },
  {
    id: 3,
    name: "Mid-Century Accent Chair",
    description:
      "Add a touch of retro charm to your home with our mid-century accent chair. Its iconic design and cushioned seat provide both style and comfort.",
    price: 299,
  },
  {
    id: 4,
    name: "Industrial Bookshelf",
    description:
      "Organize your books and display your favorite decor on our industrial-style bookshelf. The combination of metal and wood adds an edgy aesthetic to any room.",
    price: 399,
  },
  {
    id: 5,
    name: "Executive Office Desk",
    description:
      "Elevate your workspace with our executive office desk. With its sleek design and ample storage, it offers a perfect blend of functionality and style for productive workdays.",
    price: 799,
  },
];

export default function AvailableFurniture() {
  const furnitureList = FURNITURE.map((item) => <li>{item.name}</li>);
  return (
    <div>
      <ul>{furnitureList}</ul>
    </div>
  );
}
