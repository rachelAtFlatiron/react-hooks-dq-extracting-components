import React from "react";
import { messages, contacts } from "../data";
import Contact from "./Contact";
import Message from "./Message";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (
    <div className="app">
      <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          {/* <Contact contact={contacts[0]}/>
          <Contact contact={contacts[1]}/>
          <Contact contact={contacts[2]}/>
          <Contact contact={contacts[3]}/> */}
          {
            /* [<Contact />, <Contact />, <Contact />, ...] */
          }
          {
            contacts.map(el => {
              return <Contact contact={el} key={el.id} />
            })
          }
        </ul>
      </nav>
      <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
            {
              messages.map(el => {
                return <Message message={el} key={el.id}/>
              })
            }
          </ul>
        </section>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
    </div>
  );
}

export default App;
