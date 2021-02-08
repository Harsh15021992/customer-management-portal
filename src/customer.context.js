import React from "react";

export const customerContext = React.createContext({
  customerDetails: [],
  setCurrentCustomerDetails: () => { },
  editCustomerId: null,
  setEditCurrentCustomerDetails: () => { }
});