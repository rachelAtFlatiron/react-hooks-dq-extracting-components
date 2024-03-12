import React from "react";

//prop is going to contain variable information
//in this case or prop will be our contact name
function Contact({contact}) {
	return (
        <li className="contact">
            <div className="icon">{contact.name[0]}</div>
            {contact.name}
        </li>
	);
}

export default Contact
