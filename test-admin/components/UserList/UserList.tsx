import React from "react";

import { List, Datagrid, TextField, EmailField } from "react-admin";

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
    </Datagrid>
  </List>
);
export default UserList;
