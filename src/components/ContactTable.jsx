import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, IconButton } from '@mui/material';
import '../index.css';  

const ContactTable = ({ contacts, onSelectContact }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentContacts = contacts.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto', margin: '20px auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="contact table" className="contact-table">
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentContacts.map((contact) => (
              <TableRow key={contact.id} sx={{ '&:hover': { backgroundColor: '#f1f1f1' } }}>
                <TableCell>
                  <input
                    type="radio"
                    name="selectContact"
                    onChange={() => onSelectContact(contact)}
                  />
                </TableCell>
                <TableCell>{contact.firstName} {contact.lastName}</TableCell>
                <TableCell>{contact.dob}</TableCell>
                <TableCell>{contact.address}</TableCell>
                <TableCell>{contact.city}</TableCell>
                <TableCell>{contact.state}</TableCell>
                <TableCell>{contact.zip}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box className="pagination">
  <ReactPaginate
    previousLabel={
      <IconButton className="paginationButton" aria-label="Previous Page">
        <span>&laquo;</span> {/* Replace with MUI icon if preferred */}
      </IconButton>
    }
    nextLabel={
      <IconButton className="paginationButton" aria-label="Next Page">
        <span>&raquo;</span> {/* Replace with MUI icon if preferred */}
      </IconButton>
    }
    pageCount={Math.ceil(contacts.length / itemsPerPage)}
    onPageChange={handlePageClick}
    containerClassName="pagination"
    activeClassName="active"
    pageClassName="paginationButton"
    previousClassName="paginationButton"
    nextClassName="paginationButton"
    disabledClassName="paginationButton"
    breakClassName="paginationButton"
    pageRangeDisplayed={5}
    marginPagesDisplayed={2}
  />
</Box>

    </div>
  );
};

export default ContactTable;
