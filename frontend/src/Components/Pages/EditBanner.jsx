import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBanner = () => {
  const { id: bannerId } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [details2, setDetails2] = useState(""); // New state for second description
  const [photo, setPhoto] = useState([]);
  const [status, setStatus] = useState("active");
  const [initialPhotos, setInitialPhotos] = useState([]);
  const [photoAlts, setPhotoAlts] = useState([]);
  const [initialphotoAlts, setInitialPhotoAlts] = useState([]);
  const [priority, setPriority] = useState(); // State to store selected priority
  const [priorityOptions, setPriorityOptions] = useState([]);

  const fetchPriorityOptions = async (section) => {
    try {
      const response = await axios.get(`http://localhost:3006/api/banner/getCountBySection?section=${section}`, { withCredentials: true });
      const count = response.data;
      if (count > 0) {
        const options = Array.from({ length: count }, (_, i) => i + 1);
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

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/api/banner/getBannerById?id=${bannerId}`, { withCredentials: true });
        const bannerData = response.data.data;
        setSection(bannerData.section);
        setTitle(bannerData.title);
        setDetails(bannerData.details);
        setDetails2(bannerData.details2); // Set new description field
        setInitialPhotos(bannerData.photo);
        setInitialPhotoAlts(bannerData.alt);
        setStatus(bannerData.status);
        setPriority(bannerData.priority);
      } catch (error) {
        console.error('Error fetching banner:', error);
        // Handle error (e.g., redirect to an error page or show a message)
      }
    };

    fetchBannerData();
  }, [bannerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('section', section);
      formData.append('title', title);
      formData.append('details', details);
      formData.append('details2', details2); // Append new description field
      formData.append('status', status);
      formData.append('priority', priority);

      // Combine initial and new photo alts into a single array
      const combinedAlts = [...initialphotoAlts, ...photoAlts];

      // Append photos and their respective alts to FormData
      photo.forEach((p) => {
        formData.append('photo', p);
      });

      combinedAlts.forEach((a) => {
        formData.append('alt', a);
      });

      // Construct the endpoint URL with section as a query parameter
      const endpoint = `http://localhost:3006/api/banner/updateBanner?id=${bannerId}`;

      // Make the PUT request
      const response = await axios.put(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });

      // Navigate to the banner listing page on successful update
      navigate('/banner');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        console.error('Error updating banner:', error);
      }
    }
  };

  const handleFileChange = (e) => {
    const newPhotos = Array.from(e.target.files);
    setPhoto([...photo, ...newPhotos]);
  };

  const handleInitialAltTextChange = (e, index) => {
    const newPhotoAlts = [...initialphotoAlts];
    newPhotoAlts[index] = e.target.value;

    setInitialPhotoAlts(newPhotoAlts);
  };

  const handleNewAltTextChange = (e, index) => {
    const newPhotoAlts = [...photoAlts];
    newPhotoAlts[index] = e.target.value;

    setPhotoAlts(newPhotoAlts);
  };

  const handleDeleteInitialPhoto = (e, photoFilename, index) => {
    e.preventDefault();
    axios.delete(`http://localhost:3006/api/banner/${bannerId}/image/${photoFilename}/${index}`, { withCredentials: true })
      .then(response => {
        const updatedPhotos = initialPhotos.filter(photo => photo !== photoFilename);
        setInitialPhotos(updatedPhotos);
        const updatedPhotoAlts = [...initialphotoAlts];
        updatedPhotoAlts.splice(index, 1);
        setInitialPhotoAlts(updatedPhotoAlts);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeleteNewPhoto = (e, index) => {
    e.preventDefault();
    const updatedPhotos = [...photo];
    updatedPhotos.splice(index, 1);
    setPhoto(updatedPhotos);
    const updatedPhotoAlts = [...photoAlts];
    updatedPhotoAlts.splice(index, 1);
    setPhotoAlts(updatedPhotoAlts);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <ToastContainer />
      <h1 className="text-xl font-bold font-serif text-gray-700 uppercase text-center">Edit Banner</h1>
      <div className="mb-4">
        <label htmlFor="section" className="block font-semibold mb-2">
          Section
        </label>
        <select
          id="section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        >
          {categories.map((categoryOption, index) => (
            <option key={index} value={categoryOption.value}>{categoryOption.label}</option>
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
      <div className="mb-8">
        <label htmlFor="details" className="block font-semibold mb-2">
          Details
        </label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          rows="4"
   
        />
      </div>
      <div className="mb-8">
        <label htmlFor="details2" className="block font-semibold mb-2">
          Details2
        </label>
        <textarea
          id="details2"
          value={details2}
          onChange={(e) => setDetails2(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          rows="4"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Current Photos</label>
        <div className="flex flex-wrap gap-4">
          {initialPhotos.length > 0 ? (
            initialPhotos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={`http://localhost:3006/api/image/download/${photo}`}
                  alt={`Banner Image ${index}`}
                  className="h-32 w-32 object-cover rounded-md shadow-md"
                />
                <input
                  type="text"
                  value={initialphotoAlts[index] || ''}
                  onChange={(e) => handleInitialAltTextChange(e, index)}
                  className="mt-1 p-1 w-full border rounded focus:outline-none"
                  placeholder="Alt text"
                />
                <button
                  onClick={(e) => handleDeleteInitialPhoto(e, photo, index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center focus:outline-none"
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <p>No photos uploaded yet.</p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Add New Photos</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border rounded focus:outline-none"
          accept="image/*"
          multiple
        />
        <div className="flex flex-wrap gap-4 mt-2">
          {photo.length > 0 &&
            photo.map((newPhoto, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(newPhoto)}
                  alt={`New Image ${index}`}
                  className="h-32 w-32 object-cover rounded-md shadow-md"
                />
                <input
                  type="text"
                  value={photoAlts[index] || ''}
                  onChange={(e) => handleNewAltTextChange(e, index)}
                  className="mt-1 p-1 w-full border rounded focus:outline-none"
                  placeholder="Alt text"
                />
                <button
                  onClick={(e) => handleDeleteNewPhoto(e, index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center focus:outline-none"
                >
                  &times;
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block font-semibold mb-2">
          Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold mb-2">
          Priority
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
          required
        >
          {priorityOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className=" bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Update Banner
      </button>
    </form>
  );
};

export default EditBanner;
