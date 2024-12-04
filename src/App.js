import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import contactsData from "./contacts.json";
import "./index.css";

const App = () => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    state: ""
  });

  const [selectedContact, setSelectedContact] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [isSearched, setIsSearched] = useState(false); // Track if search is performed

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const isAnyFilterApplied = Object.values(filters).some((filter) => filter.trim() !== "");
  
    if (!isAnyFilterApplied) {
      setFilteredContacts([]); // Clear filtered contacts
      setSelectedContact(null); // Clear selected contact
      setIsSearched(false); // Prevent the table from rendering
      alert("Please enter at least one search criterion.");
      return;
    }
  
    const filtered = contactsData.filter((contact) => {
      return (
        (!filters.firstName || contact.firstName.toLowerCase().includes(filters.firstName.toLowerCase())) &&
        (!filters.lastName || contact.lastName.toLowerCase().includes(filters.lastName.toLowerCase())) &&
        (!filters.dob || contact.dob.includes(filters.dob)) &&
        (!filters.email || contact.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.phone || contact.phone.includes(filters.phone)) &&
        (!filters.address || contact.address.toLowerCase().includes(filters.address.toLowerCase())) &&
        (!filters.city || contact.city.toLowerCase().includes(filters.city.toLowerCase())) &&
        (!filters.zip || contact.zip.toLowerCase().includes(filters.zip.toLowerCase())) &&
        (!filters.state || contact.state.toLowerCase().includes(filters.state.toLowerCase()))
      );
    });
  
    setFilteredContacts(filtered);
    setSelectedContact(null); // Clear selected contact
    setIsSearched(true); // Set to true after search is performed
  };
  
  

  return (
    <div className="app">
      <h1>Contact Search Feature</h1>
      <ContactForm filters={filters} onFilterChange={handleFilterChange} onSearch={handleSearch} />
      
      {/* Show table or message based on search results */}
      {isSearched && (
        <>
          {filteredContacts.length > 0 ? (
            <ContactTable contacts={filteredContacts} onSelectContact={setSelectedContact} />
          ) : (
            <p className="no-contacts-message">No contacts available for the given search criteria.</p>
            
          )}
        </>
      )}
  
      {selectedContact && (
        <div className="selected-contact">
          <h2 className="selected-contact-title">Selected Contact</h2>
          <div className="selected-contact-card">
            <div className="selected-contact-item">
              <strong>Name:</strong> {selectedContact.firstName} {selectedContact.lastName}
            </div>
            <div className="selected-contact-item">
              <strong>Email:</strong> {selectedContact.email}
            </div>
            <div className="selected-contact-item">
              <strong>Phone:</strong> {selectedContact.phone}
            </div>
            <div className="selected-contact-item">
              <strong>Address:</strong> {selectedContact.address}
            </div>
            <div className="selected-contact-item">
              <strong>City:</strong> {selectedContact.city}
            </div>
            <div className="selected-contact-item">
              <strong>Zip Code:</strong> {selectedContact.zip}
            </div>
            <div className="selected-contact-item">
              <strong>State:</strong> {selectedContact.state}
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default App;
