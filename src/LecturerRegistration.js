// src/LecturerRegistration.js
import React, { useState } from 'react';

const LecturerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  // Validate phone number (numeric only)
  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]+$/; // Only numeric values
    return regex.test(phone);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validate Name
    if (!formData.name) {
      formErrors.name = 'Name is required';
    }

    // Validate Email
    if (!formData.email || !validateEmail(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }

    // Validate Subject
    if (!formData.subject) {
      formErrors.subject = 'Subject is required';
    }

    // Validate Phone Number
    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      formErrors.phoneNumber = 'Phone Number must be numeric';
    }

    setErrors(formErrors);

    // If there are no errors, log form data
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && <span>{errors.subject}</span>}
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>

      <button type="submit">Register Lecturer</button>
    </form>
  );
};

export default LecturerRegistration;
