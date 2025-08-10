import { Contact } from "./Contact";

export function List({contacts}){


    return (
    <ul>
      {contacts.map((name, index) => (
        <Contact key ={index} name = {name}/>
      ))}
    </ul>
  );
}