import { v4 as uuidv4 } from "uuid";
function reducer(state, action) {
  console.log("------ state, action", state, action);
  switch (action.type) {
    case "SAVE":
      if (!state.CurrentContact.id) {
        //console.log("#######");
        console.log(action.payload.firstName);
        console.log("test branch A--add");
        const newContact = { ...action.payload, id: uuidv4() };
        const addContacts = [...state.Contacts, newContact];
        return {
          ...state,
          Contacts: addContacts,
        };
      } else {
        console.log(
          `come in reducer to update user ${state.CurrentContact.id}`
        );
        const updateContact = { ...action.payload };
        const index = state.Contacts.findIndex(
          (contact) => contact.id === state.CurrentContact.id
        );
        console.log(`the index is ${index}`);
        const updateContacts = state.Contacts.map((_state, idx) => {
          if (idx === index) {
            return {
              ...updateContact,
            };
          } else {
            return _state;
          }
        });
        return {
          ...state,
          Contacts: updateContacts,
          CurrentContact: {},
        };
      }
    case "EDIT":
      return {
        ...state,
        CurrentContact: action.payload,
      };

    case "CANCLE":
      console.log("come in reducer body CANCLE");
      return state;
    default:
      return state;
  }
}

export default reducer;
