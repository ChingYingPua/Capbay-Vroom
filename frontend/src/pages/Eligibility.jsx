import React, { useState, useEffect } from 'react';
import TopNavBlack from "../component/TopNavBlack";

const PAGE_SIZE = 10;
const MODEL_COST = 200000; // Cost of the model

const Eligibility = () => {
    const [customers, setCustomers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const hardcodedCustomers = [
            { id: 1, fullName: 'John Doe', contact: '1234567890', email: 'john@example.com', loanAmount: 250000, downPayment: 40000, purchaseStatus: 'Yes' },
            { id: 2, fullName: 'Jane Doe', contact: '9876543210', email: 'jane@example.com', loanAmount: 250000, downPayment: 18000, purchaseStatus: 'Yes' },
            { id: 3, fullName: 'Alice Smith', contact: '5556667777', email: 'alice@example.com', loanAmount: 250000, downPayment: 33000, purchaseStatus: 'Yes' },
            { id: 4, fullName: 'Bob Johnson', contact: '4443332222', email: 'bob@example.com', loanAmount: 300000, downPayment: 45000, purchaseStatus: 'Yes' },
            { id: 5, fullName: 'Emily Brown', contact: '7778889999', email: 'emily@example.com', loanAmount: 280000, downPayment: 42000, purchaseStatus: 'Yes' },
            { id: 6, fullName: 'David Wilson', contact: '2223334444', email: 'david@example.com', loanAmount: 270000, downPayment: 40500, purchaseStatus: 'Yes' },
            { id: 7, fullName: 'Sarah Taylor', contact: '6665554444', email: 'sarah@example.com', loanAmount: 310000, downPayment: 6500, purchaseStatus: 'Yes' },
            { id: 8, fullName: 'Michael Lee', contact: '9998887777', email: 'michael@example.com', loanAmount: 320000, downPayment: 48000, purchaseStatus: 'Yes' },
            { id: 9, fullName: 'Olivia Martinez', contact: '3332221111', email: 'olivia@example.com', loanAmount: 290000, downPayment: 43500, purchaseStatus: 'Yes' },
            { id: 10, fullName: 'Daniel Garcia', contact: '1112223333', email: 'daniel@example.com', loanAmount: 260000, downPayment: 39000, purchaseStatus: 'Yes' },
            { id: 11, fullName: 'Sophia Rodriguez', contact: '4445556666', email: 'sophia@example.com', loanAmount: 400000, downPayment: 60000, purchaseStatus: 'Yes' },
            { id: 12, fullName: 'William Hernandez', contact: '8887776666', email: 'william@example.com', loanAmount: 380000, downPayment: 57000, purchaseStatus: 'Yes' },
            { id: 13, fullName: 'Isabella Lopez', contact: '1110009999', email: 'isabella@example.com', loanAmount: 350000, downPayment: 52500, purchaseStatus: 'Yes' },
            { id: 14, fullName: 'Alexander Gonzales', contact: '6667778888', email: 'alexander@example.com', loanAmount: 370000, downPayment: 55500, purchaseStatus: 'Yes' },
            { id: 15, fullName: 'Mia Perez', contact: '2223334444', email: 'mia@example.com', loanAmount: 330000, downPayment: 49500, purchaseStatus: 'Yes' },
            { id: 16, fullName: 'James Sanchez', contact: '9998887777', email: 'james@example.com', loanAmount: 450000, downPayment: 67500, purchaseStatus: 'Yes' },
            { id: 17, fullName: 'Charlotte Ramirez', contact: '3334445555', email: 'charlotte@example.com', loanAmount: 420000, downPayment: 63000, purchaseStatus: 'Yes' },
            { id: 18, fullName: 'Benjamin Torres', contact: '5554443333', email: 'benjamin@example.com', loanAmount: 390000, downPayment: 58500, purchaseStatus: 'Yes' },
            { id: 19, fullName: 'Amelia Flores', contact: '7778889999', email: 'amelia@example.com', loanAmount: 480000, downPayment: 72000, purchaseStatus: 'Yes' },
            { id: 20, fullName: 'Ethan Gomez', contact: '2221110000', email: 'ethan@example.com', loanAmount: 440000, downPayment: 66000, purchaseStatus: 'Yes' },
        ];
        
        // Filter eligible customers based on the given condition
        const eligibleCustomers = hardcodedCustomers.map(customer => ({
            ...customer,
            eligible: customer.id <= 10 && customer.downPayment >= MODEL_COST * 0.1
        }));

        setCustomers(eligibleCustomers);
        setFilteredCustomers(eligibleCustomers.slice(0, PAGE_SIZE));
    }, []);

    useEffect(() => {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        setFilteredCustomers(customers.slice(startIndex, endIndex));
    }, [currentPage, customers]);

    const totalPages = Math.ceil(customers.length / PAGE_SIZE);

    const handleSearchInputChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filteredData = customers.filter(customer =>
            customer.fullName.toLowerCase().includes(query) ||
            customer.contact.includes(query) ||
            customer.email.toLowerCase().includes(query) ||
            customer.loanAmount.toString().includes(query) ||
            customer.downPayment.toString().includes(query) ||
            customer.purchaseStatus.toLowerCase().includes(query) ||
            customer.eligible.toString().toLowerCase().includes(query) ||
            (customer.eligible && (MODEL_COST - 0.15 * MODEL_COST - customer.downPayment).toFixed(2).includes(query)) || // Search by total amount payable with discount
            (!customer.eligible && (MODEL_COST - customer.downPayment).toFixed(2).includes(query)) // Search by total amount payable without discount
        );
        setFilteredCustomers(filteredData.slice(0, PAGE_SIZE));
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
                <h1 className="text-2xl font-bold">Eligibility of Customers</h1>
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
                            <th className="px-4 py-2">Loan Amount (RM)</th>
                            <th className="px-4 py-2">Down Payment (RM)</th>
                            <th className="px-4 py-2">Purchase Status</th>
                            <th className="px-4 py-2">Promotion Eligibility</th>
                            <th className="px-4 py-2">Total Amount Payable (RM)</th> {/* Added Total Amount Payable */}
                        </tr>
                    </thead>
                    <tbody className="text-sm font-normal text-gray-700">
                        {filteredCustomers.map((customer, index) => (
                            <tr key={customer.id} className={`${index % 2 === 0 ? 'bg-[#fefefe]' : 'bg-[#eaf3ff]'} px-4 py-2`}>
                                <td className="px-4 py-2">{customer.id}</td>
                                <td className="px-4 py-2">{customer.fullName}</td>
                                <td className="px-4 py-2">{customer.contact}</td>
                                <td className="px-4 py-2">{customer.email}</td>
                                <td className="px-4 py-2">{customer.loanAmount}</td>
                                <td className="px-4 py-2">{customer.downPayment}</td>
                                <td className="px-4 py-2">{customer.purchaseStatus}</td>
                                <td className="px-4 py-2">{customer.eligible ? 'Eligible' : 'Ineligible'}</td>
                                <td className="px-4 py-2">{customer.eligible ? (MODEL_COST - 0.15 * MODEL_COST - customer.downPayment).toFixed(2) : (MODEL_COST - customer.downPayment).toFixed(2)}</td> {/* Calculate and display Total Amount Payable */}
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

export default Eligibility;
