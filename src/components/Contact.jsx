import React, { useState, useEffect, useContext } from "react";

import FormControl from "@material-ui/core/FormControl";
import ContactsContext from "../context";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [newContact, setNewContact] = useState();

  const { state, dispatch } = useContext(ContactsContext);
  useEffect(() => {
    console.log("come in contact---current contact");
    console.log(state.CurrentContact.firstName);
    setFirstName(state.CurrentContact.firstName);
    setSurname(state.CurrentContact.surname);
    setPhoneNo(state.CurrentContact.phoneNo);
    //setId(state.CurrentContact.id);
  }, [state.CurrentContact]);

  useEffect(() => {
    console.log("use effect invoke");
    console.log(firstName);
    setNewContact({
      ...newContact,
      firstName: firstName,
      surname: surname,
      phoneNo: phoneNo,
    });
  }, [firstName, surname, phoneNo]);

  const handleAction = (props) => {
    console.log("click the button " + props);
    dispatch({ type: props, payload: newContact });
    setFirstName("");
    setSurname("");
    setPhoneNo("");
  };
  return (
    <>
      {/* <form className={classes.root} noValidate autoComplete="off"> */}
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">First Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Surname</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          label="Surname"
        />
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Phone No.</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          label="Phone No."
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={(e) => handleAction("CANCLE")}
      >
        cancle
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={(e) => handleAction("SAVE")}
      >
        Save
      </Button>
      {/* </form> */}
    </>
  );
}

export default Contact;
