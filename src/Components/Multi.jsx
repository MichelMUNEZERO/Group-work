import React, { useState } from "react";

const Multi = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentInfo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    alert("Form submitted!");
    console.log(formData);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Multi-Step Form</h1>
      {step === 1 && (
        <div>
          <h2>Step 1: Name</h2>
          <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Address</h2>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Payment Info</h2>
          <input type="text" name="paymentInfo" placeholder="Enter payment info" value={formData.paymentInfo} onChange={handleChange}/>
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Review</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Review</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Payment Info:</strong> {formData.paymentInfo}</p>
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Multi;
