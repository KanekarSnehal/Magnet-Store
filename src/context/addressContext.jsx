import { useState, createContext, useContext } from "react";

const AddressContext = createContext();

const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editAddress, setEditAddress] = useState(null);

  return (
    <AddressContext.Provider
      value={{
        showAddressModal,
        setShowAddressModal,
        editAddress,
        setEditAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { useAddress, AddressProvider };
