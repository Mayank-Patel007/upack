import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditFooter = () => {
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [workingHours, setWorkingHours] = useState("");  // Updated field
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchFooter();
  }, []);

  const notify = () => {
    toast.success("Updated Successfully!");
  };

  const fetchFooter = async () => {
    try {
      const response = await axios.get('http://localhost:3006/api/footer/getFooter', { withCredentials: true });
      const footer = response.data;

      // Ensure fields are initialized as empty string if data is not available
      setInstagramLink(footer.instagramLink || "");
      setFacebookLink(footer.facebookLink || "");
      setTwitterLink(footer.twitterLink || "");
      setWorkingHours(footer.workingHours || "");  // Updated field
      setPhoneNo(footer.phoneNo || "");
      setEmail(footer.email || "");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const footerData = {
        instagramLink,
        facebookLink,
        twitterLink,
        workingHours,  // Updated field
        phoneNo,
        email,
      };

      const response = await axios.put('http://localhost:3006/api/footer/updateFooter', footerData, { withCredentials: true });
      notify();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-xl font-bold font-serif text-gray-700 uppercase text-center">Footer Settings</h1>
      <ToastContainer/>
      <div className="mb-4">
        <label htmlFor="phoneNo" className="block font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNo"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="facebookLink" className="block font-semibold mb-2">
          Facebook Link
        </label>
        <input
          type="text"
          id="facebookLink"
          value={facebookLink}
          onChange={(e) => setFacebookLink(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="instagramLink" className="block font-semibold mb-2">
          Instagram Link
        </label>
        <input
          type="text"
          id="instagramLink"
          value={instagramLink}
          onChange={(e) => setInstagramLink(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="twitterLink" className="block font-semibold mb-2">
          Twitter Link
        </label>
        <input
          type="text"
          id="twitterLink"
          value={twitterLink}
          onChange={(e) => setTwitterLink(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="workingHours" className="block font-semibold mb-2">
          Working Days/Hours
        </label>
        <input
          type="text"
          id="workingHours"  // Updated field
          value={workingHours}
          onChange={(e) => setWorkingHours(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      
      <div className="mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditFooter;
