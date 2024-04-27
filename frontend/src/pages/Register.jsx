import React, { useEffect, useState } from 'react';
import TopNavBlack from "../component/TopNavBlack";
import axios from 'axios';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [downPayment, setDownPayment] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
    const [purchaseStatus, setPurchaseStatus] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            await axios.post("https://jsonplaceholder.typicode.com/posts", {
                fullName: fullName,
                contact: contact,
                email: email,
                dateTime: dateTime,
                downPayment: downPayment,
                loanAmount: loanAmount,
                purchaseStatus: purchaseStatus
            });
            alert("Registration for test drive submitted successfully");
            // Reset the form after successful submission
            setFullName('');
            setContact('');
            setEmail('');
            setDateTime('');
            setDownPayment(0);
            setLoanAmount(0);
            setPurchaseStatus('');
        } catch (error) {
            console.error("Error occurred while saving:", error);
            alert("Failed to submit registration. Please try again later.");
        }
    };

    return (
        <div className="relative overflow-hidden">
            <TopNavBlack />
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Register for Test Drive</h1>
                <form onSubmit={handleRegister} className="w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-gray-700 font-bold mb-2">Contact</label>
                        <input
                            type="text"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email address"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateTime" className="block text-gray-700 font-bold mb-2">Date and Time of Test Drive</label>
                        <input
                            type="datetime-local"
                            id="dateTime"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="downPayment" className="block text-gray-700 font-bold mb-2">Down Payment (RM)</label>
                        <input
                            type="number"
                            id="downPayment"
                            value={downPayment}
                            onChange={(e) => setDownPayment(parseFloat(e.target.value))}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter down payment amount"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="loanAmount" className="block text-gray-700 font-bold mb-2">Loan Amount (RM)</label>
                        <input
                            type="number"
                            id="loanAmount"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter loan amount"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="purchaseStatus" className="block text-gray-700 font-bold mb-2">Purchase Status</label>
                        <select
                            id="purchaseStatus"
                            value={purchaseStatus}
                            onChange={(e) => setPurchaseStatus(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="">Select purchase status</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
