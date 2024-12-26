import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const NewBannerForm = () => {
  const [section, setSection] = useState("Home");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState(""); // State for details
  const [details2, setDetails2] = useState(""); // State for details2
  const [photos, setPhotos] = useState([]);
  const [photoAlts, setPhotoAlts] = useState([]);
  const [status, setStatus] = useState("active");
  const [priorityOptions, setPriorityOptions] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState(1); // State to hold selected priority

  const navigate = useNavigate();

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3006/api/product/getcategoriesonly', { withCredentials: true });
      // Prepend "Home" as the first section option and map categories into sections
      setCategories([{ value: "Home", label: "Home" }, ...response.data.map(category => ({
        value: category.category,
        label: category.category
      }))]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    // Limit the number of photos to 5
    if (photos.length + files.length > 5) {
      toast.error("You can only upload up to 5 photos");
      return;
    }
    setPhotos([...photos, ...files]);
    // Initialize alt text for each new photo
    const newPhotoAlts = Array.from({ length: files.length }, () => "");
    setPhotoAlts([...photoAlts, ...newPhotoAlts]);
  };

  const fetchPriorityOptions = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3006/api/banner/getCountBySection?section=${section}`, { withCredentials: true });
      const count = response.data;
      if (count > 0) {
        const options = Array.from({ length: count + 1 }, (_, i) => i + 1);
        setPriorityOptions(options);
      } else {
        setPriorityOptions([1]);
      }
    } catch (error) {
      console.error(error);
      setPriorityOptions([1]);
    }
  };

  useEffect(() => {
    fetchPriorityOptions(section);
  }, [section]);

  const handleDeleteImage = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
    setPhotoAlts((prevPhotoAlts) => prevPhotoAlts.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('section', section);
      formData.append('title', title);
      formData.append('details', details); // Append details
      formData.append('details2', details2); // Append details2
      formData.append('status', status);
      formData.append('priority', selectedPriority);
      photos.forEach((photo, index) => {
        formData.append(`photo`, photo);
        formData.append(`alt`, photoAlts[index]);
      });

      const response = await axios.post('http://localhost:3006/api/banner/insertBanner', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      });

      setSection("");
      setTitle("");
      setDetails(""); // Reset details
      setDetails2(""); // Reset details2
      setPhotos([]);
      setStatus("active");
      setPhotoAlts([]);
      navigate('/banner');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <ToastContainer />
      <h1 className="text-xl font-bold font-serif text-gray-700 uppercase text-center">Add Banner</h1>
      <div className="mb-4">
        <label htmlFor="section" className="block font-semibold mb-2">
          Section
        </label>
        <select
          value={section}
          onChange={(e) => { setSection(e.target.value) }}
          className="w-full p-2 border rounded focus:outline-none"
          required
        >
          {categories.map((section, index) => (
            <option key={index} value={section.value}>{section.label}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
         
        />
      </div>
      <div className="mb-4">
        <label htmlFor="details" className="block font-semibold mb-2">
          Details
        </label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
       
        />
      </div>
      <div className="mb-4">
        <label htmlFor="details2" className="block font-semibold mb-2">
          Details 2
        </label>
        <textarea
          id="details2"
          value={details2}
          onChange={(e) => setDetails2(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
        />
      </div>
      <div className="mt-12">
        <label htmlFor="photo" className="block font-semibold mb-2">
          Photos
        </label>
        <p>Note: Select 2 pics, 1st is for Desktop image and 2nd is for Mobile design</p> 
        <input
          type="file"
          name="photo"
          id="photo"
          multiple
          onChange={handlePhotoChange}
          className="border rounded focus:outline-none"
          accept="image/*"
        />
        {photos.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-4">
            {photos.map((photo, index) => (
              <div key={index} className="relative group flex flex-col items-center">
                <div className="relative">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Service ${index + 1}`}
                    className="h-32 w-56 object-cover"
                  />
                  <button
                    onClick={() => handleDeleteImage(index)}
                    className="absolute top-4 right-2 bg-red-500 text-white rounded-md p-1 size-6 flex items-center justify-center hover:bg-red-600 focus:outline-none"
                  >
                    X
                  </button>
                </div>
                <label className="block mt-2">
                  Alt Text:
                  <input
                    type="text"
                    value={photoAlts[index]}
                    onChange={(e) => {
                      const newPhotoAlts = [...photoAlts];
                      newPhotoAlts[index] = e.target.value;
                      setPhotoAlts(newPhotoAlts);
                    }}
                    className="w-full p-2 border rounded focus:outline-none"
                  />
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold mb-2">
          Priority
        </label>
        <select
          id="priority"
          className="w-full p-2 border rounded focus:outline-none"
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(parseInt(e.target.value))}
          required
        >
          {priorityOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block font-semibold mb-2">
          Status
        </label>
        <div className="flex items-center">
          <label className="mr-4 text-green-500">
            <input
              type="radio"
              value="active"
              checked={status === "active"}
              onChange={() => setStatus("active")}
              className="mr-2"
            />
            Active
          </label>
          <label className="text-red-500">
            <input
              type="radio"
              value="inactive"
              checked={status === "inactive"}
              onChange={() => setStatus("inactive")}
              className="mr-2"
            />
            Inactive
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
      >
        Add Banner
      </button>
    </form>
  );
};

export default NewBannerForm;
