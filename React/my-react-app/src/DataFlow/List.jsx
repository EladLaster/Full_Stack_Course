import { Contact } from "./Contact";

export function List({contacts, displayConvo }){


    return (
    <ul>
      {contacts.map((name, index) => (
        <Contact key ={index} name = {name}  displayConvo={displayConvo}/>
      ))}
    </ul>
  );
}