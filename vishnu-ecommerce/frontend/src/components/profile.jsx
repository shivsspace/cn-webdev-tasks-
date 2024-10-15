import React, { useState, useEffect } from 'react';
import './profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setName(parsedUser.name);
      setEmail(parsedUser.email);
      setPhoneNumber(parsedUser.phoneNumber || '');
      setAddress(parsedUser.address || '');
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedUser = { ...user, name, email, phoneNumber, address };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>User Profile</h2>
        {user ? (
          <div className="profile-info">
            {isEditing ? (
              <div className="edit-profile">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                />
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
                <div className="button-group">
                  <button className="save-btn" onClick={handleSave}>Save</button>
                  <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">{user.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{user.email}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">{user.phoneNumber || 'Not provided'}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Address:</span>
                  <span className="info-value">{user.address || 'Not provided'}</span>
                </div>
                <button className="edit-btn" onClick={handleEdit}>Edit Profile</button>
              </>
            )}
          </div>
        ) : (
          <p className="no-user">No user data found. Please log in.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;