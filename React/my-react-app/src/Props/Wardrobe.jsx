import {Article} from "./Article.jsx"

export function Wardrobe({wardrobe}){
    
      return (
    <div>
      {wardrobe.map((item, index) => (
        <Article
          key={index}
          type={item.type}
          color={item.color}
          size={item.size}
        />
      ))}
    </div>
  );
}