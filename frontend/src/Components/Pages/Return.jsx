import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const InfoForm = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [listItem, setListItem] = useState(""); // To store individual list items
    const [list, setList] = useState([]); // Array to store the list
    const [status, setStatus] = useState("active");
    const navigate = useNavigate();

    const modules = {
        toolbar: [
            [{ 'font': [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            [{ 'direction': 'rtl' }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
        }
    };

    const handleAddListItem = () => {
        if (listItem.trim()) {
            setList([...list, listItem]);
            setListItem("");
        }
    };

    const handleDeleteListItem = (index) => {
        setList(list.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3006/api/returnInfo', {
                heading,
                content,
                list,
                status,
            }, { withCredentials: true });

            // Reset form fields
            setHeading("");
            setContent("");
            setList([]);
            setStatus("active");

            // Redirect to the info list page or any other desired page
            navigate('/info');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h1 className="text-xl font-bold font-serif text-gray-700 uppercase text-center">Add Information</h1>
            <div className="mb-4">
                <label htmlFor="heading" className="block font-semibold mb-2">
                    Heading
                </label>
                <input
                    type="text"
                    id="heading"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none"

                />
            </div>
            <div className="mb-8">
                <label htmlFor="content" className="block font-semibold mb-2">
                    Content
                </label>
                <ReactQuill
                    value={content}
                    onChange={setContent}
                    modules={modules}
                    className="quill"
                />
            </div>
            <div className="mb-8">
                <label htmlFor="list" className="block font-semibold mb-2">
                    Add List Items
                </label>
                <div className="flex">
                    <input
                        type="text"
                        value={listItem}
                        onChange={(e) => setListItem(e.target.value)}
                        className="flex-grow p-2 border rounded focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={handleAddListItem}
                        className="ml-2 bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Add
                    </button>
                </div>
                {list.length > 0 && (
                    <ul className="mt-4">
                        {list.map((item, index) => (
                            <li key={index} className="flex justify-between items-center p-2 border-b">
                                {item}
                                <button
                                    type="button"
                                    onClick={() => handleDeleteListItem(index)}
                                    className="text-red-500 font-semibold"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
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
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Add Information
            </button>
        </form>
    );
};

export default InfoForm;
