export function Contact({name, displayConvo }){
    return (
         <li onClick={() => displayConvo(name)}>
      {name}
    </li>
    )
}