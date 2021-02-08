import { useState, useCallback} from "react";

export const useCustomerData = () => {
    const data = [
        {
            id: 1,
            lastName: "Snow",
            firstName: "Jon",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Active",
        },
        {
            id: 2,
            lastName: "Lannister",
            firstName: "Cersei",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Inactive",
        },
        {
            id: 3,
            lastName: "Lannister",
            firstName: "Jaime",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Active",
        },
        {
            id: 4,
            lastName: "Stark",
            firstName: "Arya",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Active",
        },
        {
            id: 5,
            lastName: "Targaryen",
            firstName: "Daenerys",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Active",
        },
        {
            id: 6,
            lastName: "Melisandre",
            firstName: "Melisandre",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Inctive",
        },
        {
            id: 7,
            lastName: "Clifford",
            firstName: "Ferrara",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Active",
        },
        {
            id: 8,
            lastName: "Frances",
            firstName: "Rossini",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Inctive",
        },
        {
            id: 9,
            lastName: "Roxie",
            firstName: "Harvey",
            email: "testing@mal.com",
            phone: 9876543210,
            status: "Active",
        },
    ];
  const [customerDetails, setCustomerDetails] = useState(data);
  const setCurrentCustomerDetails = useCallback((updatedCustomerDetails) => {
    setCustomerDetails(updatedCustomerDetails);
  }, []);
    const [editCustomerId, setEditCustomerId] = useState(null);
      const setEditCurrentCustomerDetails = useCallback((updatedCustomerDetails) => {
    setEditCustomerId(updatedCustomerDetails);
  }, []);
  return { customerDetails, setCurrentCustomerDetails, editCustomerId, setEditCurrentCustomerDetails };
}