// src/ModuleRegistration.js
import React, { useState } from 'react';

const ModuleRegistration = () => {
  const [formData, setFormData] = useState({
    moduleName: '',
    moduleCode: '',
    description: '',
    credits: '',
  });
  const [errors, setErrors] = useState({});

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate Credits to ensure it's a numeric value
  const validateCredits = (credits) => {
    return /^\d+$/.test(credits); // Only numeric values (positive integers)
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validate Credits field
    if (!formData.credits || !validateCredits(formData.credits)) {
      formErrors.credits = 'Credits must be a valid number';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Module Name</label>
        <input
          type="text"
          name="moduleName"
          value={formData.moduleName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Module Code</label>
        <input
          type="text"
          name="moduleCode"
          value={formData.moduleCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Credits</label>
        <input
          type="text"
          name="credits"
          value={formData.credits}
          onChange={handleChange}
          required
        />
        {errors.credits && <span>{errors.credits}</span>}
      </div>
      <button type="submit">Register Module</button>
    </form>
  );
};

export default ModuleRegistration;
