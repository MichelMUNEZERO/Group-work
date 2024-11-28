// src/Registration.js
import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateYear = (year) => {
    return /^\d{4}$/.test(year); // Checks for a four-digit number
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!validateYear(formData.publishedYear)) {
      formErrors.publishedYear = 'Published Year must be a four-digit number';
    }
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Book Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>ISBN</label>
        <input
          type="text"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Published Year</label>
        <input
          type="text"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
          required
        />
        {errors.publishedYear && <span>{errors.publishedYear}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration; // Make sure this matches the component name
