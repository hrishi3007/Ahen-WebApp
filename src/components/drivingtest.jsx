import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore'; // Firebase Firestore

const driving = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [vehicleType, setVehicleType] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const db = getFirestore(); // Get Firestore instance

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!name || !age || !vehicleType || !paymentType || !paymentMethod) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const bookingRef = await addDoc(collection(db, 'bookings'), {
        name,
        age,
        vehicleType,
        paymentType,
        paymentMethod,
      });
      console.log('Booking created:', bookingRef.id);

      if (paymentMethod === 'online' && paymentType === 'pre day basis') {
        // Redirect to payment page with booking details
        navigate('/payment', { state: { bookingDetails: { ...bookingRef.data(), id: bookingRef.id } } });
      } else {
        // Handle offline payment or confirmation (optional)
        alert('Booking confirmed! (Offline payment)');
        // Implement additional logic for offline payments
      }
    } catch (error) {
      console.error('Error adding booking:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleBooking}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <label htmlFor="vehicleType">Vehicle Type:</label>
        <select id="vehicleType" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="">Select</option>
          <option value="2 wheeler">2 Wheeler</option>
          <option value="4 wheeler">4 Wheeler</option>
        </select>
        <label htmlFor="paymentType">Payment Type:</label>
        <select id="paymentType" value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
          <option value="">Select</option>
          <option value="pre day basis">Pre Day Basis</option>
          <option value="monthly basis">Monthly Basis</option>
        </select>
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default driving;
