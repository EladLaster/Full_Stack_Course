import { useState } from "react";
import { List } from "./List";
import { Conversation } from "./Conversation";
import './styles.css';


export function Exercise2 (){

    const[state,setState] = useState({
    displayConversation: null,
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
}
)

const contacts = state.conversations.map((person) => person.with);
 const currentConvoObj = state.conversations.find(c => c.with === state.displayConversation);

function displayConvo (name){
     setState(prev => ({
      ...prev,
      displayConversation: name,
    }));
}

function goBack() {
    setState(prev => ({ ...prev, displayConversation: null }));
  }


return (
<div>
  {state.displayConversation === null ? (
    <List contacts={contacts} displayConvo={displayConvo} />
  ) : (
    <Conversation convo={currentConvoObj.convo} 
    sender={state.displayConversation} 
    goBack={goBack}
    />
  )}
</div>
)
}