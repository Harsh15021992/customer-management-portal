import React from "react";
import {
  Typography,
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  TextField,
  Button,
} from "@material-ui/core";
import { customerContext } from "../../customer.context";
import { useHistory } from "react-router-dom";
import "./UpdateCustomer.css";

const UpdateCustomer = () => {
  const {
    customerDetails,
    setCurrentCustomerDetails,
    editCustomerId,
    setEditCurrentCustomerDetails,
  } = React.useContext(customerContext);

  let history = useHistory();

  const [firstNameVal, setfirstNameVal] = React.useState(
    !!editCustomerId ? customerDetails[editCustomerId].firstName : ""
  );
  const [lastNameVal, setlastNameVal] = React.useState(
    !!editCustomerId ? customerDetails[editCustomerId].lastName : ""
  );
  const [emailVal, setemailVal] = React.useState(
    !!editCustomerId ? customerDetails[editCustomerId].email : ""
  );
  const [phoneVal, setphoneVal] = React.useState(
    !!editCustomerId ? customerDetails[editCustomerId].phone : ""
  );
  const [statusVal, setStatusVal] = React.useState(
    !!editCustomerId ? customerDetails[editCustomerId].status : "Active"
  );

  const handleFirstNameChange = (event) => {
    setfirstNameVal(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setlastNameVal(event.target.value);
  };
  const handleEmailChange = (event) => {
    setemailVal(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setphoneVal(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatusVal(event.target.value);
  };

  const updateCustomerData = () => {
    let newCustomerData = [...customerDetails];
    if (!!editCustomerId) {
      newCustomerData[editCustomerId].lastName = lastNameVal;
      newCustomerData[editCustomerId].firstName = firstNameVal;
      newCustomerData[editCustomerId].email = emailVal;
      newCustomerData[editCustomerId].phone = phoneVal;
      newCustomerData[editCustomerId].status = statusVal;
    } else {
      newCustomerData.push({
        id: customerDetails[customerDetails.length - 1].id + 1,
        lastName: lastNameVal,
        firstName: firstNameVal,
        email: emailVal,
        phone: phoneVal,
        status: statusVal,
      });
    }
    setCurrentCustomerDetails(newCustomerData);
    setEditCurrentCustomerDetails(null);
    history.push("/home");
  };

  return (
    <div className="update-customer-wrapper">
      <Typography
        variant="h6"
        component="h1"
        align="center"
        className="brand-name"
      >
        Customer Management Portal
      </Typography>
      <Typography component="h2" align="center" className="brand-name">
        Customer Details Form
      </Typography>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} md={9}>
          <div className="input-wrapper">
            <TextField
              label="First Name"
              defaultValue={firstNameVal}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="input-wrapper">
            <TextField
              label="Last Name"
              defaultValue={lastNameVal}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="input-wrapper">
            <TextField
              label="E-Mail"
              defaultValue={emailVal}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-wrapper">
            <TextField
              type="number"
              label="Phone"
              defaultValue={phoneVal}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="input-wrapper">
            <FormControl component="fieldset" className="radio-container">
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup
                aria-label="customer status"
                name="status"
                value={statusVal}
                onChange={handleStatusChange}
              >
                <FormControlLabel
                  value="Active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="Inactive"
                  control={<Radio />}
                  label="Inactive"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="input-wrapper">
            <Button
              color="primary"
              variant="contained"
              onClick={updateCustomerData}
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateCustomer;
