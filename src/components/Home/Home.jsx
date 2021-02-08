import React, { useContext } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Grid, Button, Typography } from "@material-ui/core";
import { customerContext } from "../../customer.context";
import { useHistory } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const {
    customerDetails,
    setCurrentCustomerDetails,
    setEditCurrentCustomerDetails,
  } = useContext(customerContext);

  let history = useHistory();

  const columns = [
    { field: "id", headerName: "ID", width: 60, sortable: false },
    {
      field: "firstName",
      headerName: "First Name",
      width: 130,
      sortable: true,
    },
    { field: "lastName", headerName: "Last Name", width: 130, sortable: true },
    {
      field: "email",
      headerName: "E-mail",
      width: 160,
      sortable: false,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      sortable: false,
    },
    {
      field: "",
      headerName: "Actions",
      width: 250,
      headerClassName: "actions-column-head",
      sortable: false,
      renderCell: (params) => {
        const getCustomer = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};
          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });
          const selectedCustomer = customerDetails.findIndex(
            (x) => x.id === thisRow.id
          );
          return selectedCustomer;
        };
        const editCustomer = () => {
          setEditCurrentCustomerDetails(getCustomer());
          history.push("/edit");
        };
        const toggleStatus = () => {
          const newCustomerData = [...customerDetails];
          newCustomerData[getCustomer()].status =
            params.getValue("status") === "Active" ? "Inactive" : "Active";
          setCurrentCustomerDetails(newCustomerData);
        };
        const removeCustomer = () => {
          const newCustomerData = [...customerDetails];
          newCustomerData.splice(getCustomer(), 1);
          setCurrentCustomerDetails(newCustomerData);
        };

        return (
          <div className="table-action-buttons">
            <Button color="primary" variant="contained" onClick={editCustomer}>
              Edit
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={removeCustomer}
            >
              Remove
            </Button>
            <Button color="primary" variant="contained" onClick={toggleStatus}>
              {params.getValue("status") === "Active"
                ? "Deactivate"
                : "Activate"}
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="customer-details-table">
      <Typography
        variant="h6"
        component="h1"
        align="center"
        className="brand-name"
      >
        Customer Management Portal
      </Typography>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} md={9}>
          <DataGrid
            rows={customerDetails}
            columns={columns}
            disableColumnMenu={true}
            hideFooter={true}
            pageSize={30}
            showColumnRightBorder={false}
            autoHeight={true}
            autoPageSize={true}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
