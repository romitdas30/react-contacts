import React from 'react'

export const addContact = () => {
  return (
    <div className="container pt-3">
       <div className="mb-3">
        <label htmlFor="name" className="form-label">Contact Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter contacts name"/>
       </div>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">Contact Email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter contacts email"/>
        </div>
        <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Contact Mobile</label>
        <input type="number" className="form-control" id="mobile" placeholder="Enter contacts mobile number"/>
        </div>
        <button type="submit" className="btn btn-success">Add</button>
    </div>
  );
};

export default addContact;