import React, { useState } from 'react';

const PostingAds = () => {
  const [adDetails, setAdDetails] = useState({
    adTitle: '',
    description: '',
    price: '',
    photos: [],
    state: 'Rajasthan',
    city: 'Jaipur',
    neighborhood: 'Jai Jawan Colony',
    name: 'Rahul Kumar',
    phoneNumber: '+917739474422',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    // Logic to handle photo uploads
    console.log(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Ad details submitted:', adDetails);
  };

  return (
    <div className="container mt-4">
      <h1>OLX - Post Your Ad</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="adTitle">Ad title *</label>
          <input
            type="text"
            className="form-control"
            id="adTitle"
            name="adTitle"
            value={adDetails.adTitle}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={adDetails.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price *</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">₹</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              value={adDetails.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="photos">Upload up to 12 photos</label>
          <input
            type="file"
            className="form-control-file"
            id="photos"
            name="photos"
            onChange={handlePhotoUpload}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State *</label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={adDetails.state}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City *</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={adDetails.city}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="neighborhood">Neighbourhood *</label>
          <input
            type="text"
            className="form-control"
            id="neighborhood"
            name="neighborhood"
            value={adDetails.neighborhood}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={adDetails.name}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Your phone number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={adDetails.phoneNumber}
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post now
        </button>
      </form>
    </div>
  );
};

export default PostingAds;
