/** @jsxImportSource https://esm.sh/react@18.2.0 */
import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

function BunkawayBookingForm() {
  /** @jsxImportSource https://esm.sh/react@18.2.0 */
import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

function BunkawayBookingForm() {
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    guests: Array(4).fill({
      name: '',
      contact: '',
      frontId: null,
      backId: null
    }),
    property: '',
    room: '',
    checkIn: '',
    checkOut: ''
  });

  // Simulated booking database
  const [bookings, setBookings] = useState([
    { 
      property: 'Bunkaway Indore', 
      room: 'Bunkaway Flat No. 302', 
      checkIn: '2024-02-10T14:00', 
      checkOut: '2024-02-15T11:00' 
    }
  ]);

  const properties = {
    'Bunkaway Chandigarh': {
      '': { 
        rooms: [], 
        price: 2500 
      }
    },
    'Bunkaway Indore': {
      '': { 
        rooms: ['Bunkaway Flat No. 302', 'Bunkaway Flat No. 202', 'Bunkaway Flat No. 101'], 
        price: 3500 
      }
    },
    'Bunkaway Mohali': {
      '': { 
        rooms: [], 
        price: 2800 
      }
    }
  };

  const isRoomAvailable = (property, room, checkIn, checkOut) => {
    return !bookings.some(booking => 
      booking.property === property && 
      booking.room === room && 
      !(new Date(checkOut) <= new Date(booking.checkIn) || 
        new Date(checkIn) >= new Date(booking.checkOut))
    );
  };

  const validateContact = (contact) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return emailRegex.test(contact) || phoneRegex.test(contact);
  };

  const handleInputChange = (field, value, guestIndex = null) => {
    if (guestIndex !== null) {
      const updatedGuests = [...formData.guests];
      updatedGuests[guestIndex] = {
        ...updatedGuests[guestIndex],
        [field]: value
      };
      setFormData(prev => ({ ...prev, guests: updatedGuests }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleFileUpload = (field, file, guestIndex) => {
    handleInputChange(field, file, guestIndex);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const invalidContacts = formData.guests.slice(0, guestCount).some(guest => 
      !validateContact(guest.contact)
    );

    if (invalidContacts) {
      alert('Please enter a valid email or phone number for each guest');
      return;
    }

    setIsSubmitting(true);

    const { email } = await import("https://esm.town/v/std/email");
    
    const uploadPromises = formData.guests.slice(0, guestCount).map(async (guest, index) => {
      if (guest.frontId instanceof File && guest.backId instanceof File) {
        const frontIdBlob = await guest.frontId.arrayBuffer();
        const backIdBlob = await guest.backId.arrayBuffer();
        
        return {
          frontIdName: guest.frontId.name,
          backIdName: guest.backId.name,
          frontIdContent: btoa(String.fromCharCode.apply(null, new Uint8Array(frontIdBlob))),
          backIdContent: btoa(String.fromCharCode.apply(null, new Uint8Array(backIdBlob)))
        };
      }
      return null;
    });

    const uploadedFiles = await Promise.all(uploadPromises);

    const emailBody = `
      🏨 Bunkaway Booking Request 🏨

      Booking Details:
      ----------------
      Property: ${formData.property}
      Room: ${formData.room
}


const styles = {
  container: {
    fontFamily: "'Circular', -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  title: {
    fontSize: '24px',
    color: '#484848',
    fontWeight: '600'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: '14px',
    color: '#717171',
    fontWeight: '600'
  },
  select: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #EBEBEB',
    fontSize: '16px'
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #EBEBEB',
    fontSize: '16px'
  },
  fileInput: {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'white'
  },
  dateGroup: {
    display: 'flex',
    gap: '15px'
  },
  dateInput: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #EBEBEB',
    fontSize: '16px',
    width: '100%'
  },
  guestSection: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '12px',
    border: '1px solid #EBEBEB'
  },
  guestTitle: {
    margin: '0 0 10px 0',
    color: '#484848'
  },
  submitButton: {
    backgroundColor: '#FF5A5F',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  helperText: {
    fontSize: '12px',
    color: '#717171',
    marginTop: '5px'
  }
};

function client() {
  createRoot(document.getElementById("root")).render(<BunkawayBookingForm />);
}

if (typeof document !== "undefined") { client(); }