import { Article } from "./Article.jsx";

export function Wardrobe2({wardrobe}) {
  

  let blueClothes = wardrobe.filter(item => item.color === "blue");

  return (
    <div>
      {blueClothes.map((item, index) => (
        <Article
          key={item.color + item.type + index}
          type={item.type}
          color={item.color}
          size={item.size}
        />
      ))}
    </div>
  );
}
