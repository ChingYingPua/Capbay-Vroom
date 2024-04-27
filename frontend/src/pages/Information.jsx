import React, { useState, useEffect } from 'react';
import TopNavBlack from "../component/TopNavBlack";

const Register = () => {
    const [customers, setCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    useEffect(() => {
        const hardcodedCustomers = [
            { id: 1, fullName: 'John Doe', contact: '1234567890', email: 'john@example.com', dateTime: '2024-04-27 09:00:00' },
            { id: 2, fullName: 'Jane Doe', contact: '9876543210', email: 'jane@example.com', dateTime: '2024-04-28 10:00:00' },
            { id: 3, fullName: 'Alice Smith', contact: '5556667777', email: 'alice@example.com', dateTime: '2024-04-29 11:00:00' },
            { id: 4, fullName: 'Bob Johnson', contact: '4443332222', email: 'bob@example.com', dateTime: '2024-04-30 12:00:00' },
            { id: 5, fullName: 'Emily Brown', contact: '7778889999', email: 'emily@example.com', dateTime: '2024-05-01 13:00:00' },
            { id: 6, fullName: 'David Wilson', contact: '2223334444', email: 'david@example.com', dateTime: '2024-05-02 14:00:00' },
            { id: 7, fullName: 'Sarah Taylor', contact: '6665554444', email: 'sarah@example.com', dateTime: '2024-05-03 15:00:00' },
            { id: 8, fullName: 'Michael Lee', contact: '9998887777', email: 'michael@example.com', dateTime: '2024-05-04 16:00:00' },
            { id: 9, fullName: 'Olivia Martinez', contact: '3332221111', email: 'olivia@example.com', dateTime: '2024-05-05 17:00:00' },
            { id: 10, fullName: 'Daniel Garcia', contact: '1112223333', email: 'daniel@example.com', dateTime: '2024-05-06 18:00:00' },
            { id: 11, fullName: 'Sophia Rodriguez', contact: '4445556666', email: 'sophia@example.com', dateTime: '2024-05-07 19:00:00' },
            { id: 12, fullName: 'William Hernandez', contact: '8887776666', email: 'william@example.com', dateTime: '2024-05-08 20:00:00' },
            { id: 13, fullName: 'Isabella Lopez', contact: '1110009999', email: 'isabella@example.com', dateTime: '2024-05-09 21:00:00' },
            { id: 14, fullName: 'Alexander Gonzales', contact: '6667778888', email: 'alexander@example.com', dateTime: '2024-05-10 22:00:00' },
            { id: 15, fullName: 'Mia Perez', contact: '2223334444', email: 'mia@example.com', dateTime: '2024-05-11 23:00:00' },
            { id: 16, fullName: 'James Sanchez', contact: '9998887777', email: 'james@example.com', dateTime: '2024-05-12 00:00:00' },
            { id: 17, fullName: 'Charlotte Ramirez', contact: '3334445555', email: 'charlotte@example.com', dateTime: '2024-05-13 01:00:00' },
            { id: 18, fullName: 'Benjamin Torres', contact: '5554443333', email: 'benjamin@example.com', dateTime: '2024-05-14 02:00:00' },
            { id: 19, fullName: 'Amelia Flores', contact: '7778889999', email: 'amelia@example.com', dateTime: '2024-05-15 03:00:00' },
            { id: 20, fullName: 'Ethan Gomez', contact: '2221110000', email: 'ethan@example.com', dateTime: '2024-05-16 04:00:00' },

        ];

        setCustomers(hardcodedCustomers);
        setFilteredCustomers(hardcodedCustomers.slice(0, pageSize));
    }, []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        setFilteredCustomers(customers.slice(startIndex, endIndex));
    }, [currentPage, customers]);

    const totalPages = Math.ceil(customers.length / pageSize);

    const handleSearchInputChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredData = customers.filter(customer =>
            customer.fullName.toLowerCase().includes(query) ||
            customer.contact.includes(query) ||
            customer.email.toLowerCase().includes(query) ||
            customer.dateTime.toString().includes(query) 
        );
        setFilteredCustomers(filteredData.slice(0, pageSize));
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="p-8">
            <div className="mt-[-32px] ml-[-32px] mr-[-32px]">
                <TopNavBlack />
            </div>
            <div className="mt-8 mb-4 text-left">
                <h1 className="text-2xl font-bold">Customer Registration List</h1>
            </div>
            <div className="flex items-center mb-4">
                <label className="mr-2">Search:</label>
                <input type="text" value={searchQuery} onChange={handleSearchInputChange} className="border p-1 rounded mr-2" />
            </div>
            <div className="overflow-x-auto mt-2">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-sm font-medium text-left text-gray-700 bg-gray-200 rounded-lg">
                            <th className="px-4 py-2">Customer ID</th>
                            <th className="px-4 py-2">Full Name</th>
                            <th className="px-4 py-2">Contact</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-normal text-gray-700">
                    {filteredCustomers.map((customer, index) => (
                            <tr key={customer.id} className={`${index % 2 === 0 ? 'bg-[#fefefe]' : 'bg-[#eaf3ff]'} px-4 py-2`}>
                                <td className="px-4 py-2">{customer.id}</td>
                                <td className="px-4 py-2">{customer.fullName}</td>
                                <td className="px-4 py-2">{customer.contact}</td>
                                <td className="px-4 py-2">{customer.email}</td>
                                <td className="px-4 py-2">{customer.dateTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center items-center mt-6">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 text-sm text-white bg-gray-500 rounded">Previous</button>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button key={i} onClick={() => handlePageChange(i + 1)} className={`px-4 py-2 ml-2 text-sm rounded ${currentPage === i + 1 ? 'bg-[#2C74D8] text-white' : 'text-black bg-gray-300'}`}>{i + 1}</button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 ml-2 text-sm text-white bg-gray-500 rounded">Next</button>
                </div>
            </div>
        </div>
    );
};

export default Register;
