import React from "react";

const ContactsContext = React.createContext({
  Contacts: [
    { id: 1, firstName: "lily", surname: "Master", phoneNo: 123456778 },
    { id: 2, firstName: "Sam", surname: "Master", phoneNo: 123456778 },
    { id: 3, firstName: "Grace", surname: "Master", phoneNo: 123456778 },
  ],
  CurrentContact: {},
});
export default ContactsContext;
