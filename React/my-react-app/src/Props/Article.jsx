export function Article(props){

    const sizeMap = {
    Small: '12px',
    Medium: '16px',
    Large: '20px',
  };

   const fontSize = sizeMap[props.size] || '16px';

    return  <div style={{ fontSize }}>
      {props.color} {props.type} 
    </div>
}