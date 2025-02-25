/** @jsxImportSource https://esm.sh/react@18.2.0 */
import React, { useState, useEffect } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

// Your existing code for BunkawayBookingForm here...

// The client function that renders the app to the DOM
function client() {
  createRoot(document.getElementById("root")).render(<BunkawayBookingForm />);
}

// Ensure this only runs in the browser (on the client side)
if (typeof document !== "undefined") {
  client();
}
