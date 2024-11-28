// src/StudentRegistration.js
import React, { useState } from 'react';

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    dob: '',
  });
  const [errors, setErrors] = useState({});

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate Student ID (alphanumeric characters only)
  const validateStudentId = (studentId) => {
    const regex = /^[a-zA-Z0-9]+$/; // Alphanumeric characters only
    return regex.test(studentId);
  };

  // Validate Email using a basic regex pattern
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validate first and last name
    if (!formData.firstName) {
      formErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      formErrors.lastName = 'Last Name is required';
    }

    // Validate email
    if (!formData.email || !validateEmail(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }

    // Validate student ID
    if (!formData.studentId || !validateStudentId(formData.studentId)) {
      formErrors.studentId = 'Student ID must be alphanumeric';
    }

    // Validate Date of Birth
    if (!formData.dob) {
      formErrors.dob = 'Date of Birth is required';
    }

    setErrors(formErrors);

    // If no errors, log form data to the console (or handle further)
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <span>{errors.lastName}</span>}
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
        <label>Student ID</label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          required
        />
        {errors.studentId && <span>{errors.studentId}</span>}
      </div>

      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        {errors.dob && <span>{errors.dob}</span>}
      </div>

      <button type="submit">Register Student</button>
    </form>
  );
};

export default StudentRegistration;
