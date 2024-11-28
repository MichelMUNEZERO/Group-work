// src/DriverRegistration.js
import React, { useState } from 'react';

const DriverRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    licenseNumber: '',
    phoneNumber: '',
    vehicleType: '',
  });
  const [errors, setErrors] = useState({});

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the phone number field to ensure it has valid digits
  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/; // Validates a 10-digit phone number
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

    // Validate License Number
    if (!formData.licenseNumber) {
      formErrors.licenseNumber = 'License Number is required';
    }

    // Validate Phone Number
    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      formErrors.phoneNumber = 'Phone Number must be 10 digits';
    }

    // Validate Vehicle Type
    if (!formData.vehicleType) {
      formErrors.vehicleType = 'Please select a vehicle type';
    }

    setErrors(formErrors);

    // If there are no errors, log the form data
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
        <label>License Number</label>
        <input
          type="text"
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
          required
        />
        {errors.licenseNumber && <span>{errors.licenseNumber}</span>}
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

      <div>
        <label>Vehicle Type</label>
        <select
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="truck">Truck</option>
          <option value="motorcycle">Motorcycle</option>
        </select>
        {errors.vehicleType && <span>{errors.vehicleType}</span>}
      </div>

      <button type="submit">Register Driver</button>
    </form>
  );
};

export default DriverRegistration;
