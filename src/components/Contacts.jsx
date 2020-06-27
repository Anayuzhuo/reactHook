import React, { useContext } from "react";
import MaterialTable from "material-table";

import ContactsContext from "../context";
function Contacts() {
  console.log("test branchB --add this in contacts");
  const { state, dispatch } = useContext(ContactsContext);

  return (
    <div>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "FirstName", field: "firstName" },
            { title: "Surname", field: "surname" },
            { title: "Phone No", field: "phoneNo", type: "numeric" },
          ]}
          data={state.Contacts}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit User",
              onClick: (event, rowData) =>
                dispatch({ type: "EDIT", payload: rowData }),
            },
          ]}
          title="Contact List"
        />
      </div>
    </div>
  );
}

export default Contacts;
