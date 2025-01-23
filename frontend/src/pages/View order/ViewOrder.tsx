import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const ViewOrder: React.FC = () => {
    const [orders, setOrders] = useState<any[]>([]); // To store orders
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const navigate = useNavigate();

    // Function to fetch orders
    const fetchOrders = async () => {
        try {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                navigate('/login');
                return;
            }

            const response = await axios.get('http://localhost:3005/api/order-list', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setOrders(response?.data?.data || []); // Set orders in the state
        } catch (error: any) {
            toast.error('Error fetching orders:', error.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    // Call the fetchOrders function when the component is mounted
    useEffect(() => {
        fetchOrders();
    }, [navigate]);

    if (loading) {
        return <div>Loading...</div>; // Show loading message until orders are fetched
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">My Orders</h2>

            {orders.length === 0 ? (
                <p className="text-gray-500">No orders found.</p>
            ) : (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order._id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Order ID: <span className="text-blue-600">{order._id}</span>
                            </h3>
                            <p className="text-gray-600">Status: <span className="font-medium">{order.status}</span></p>
                            <p className="text-gray-600">Total Amount: <span className="font-medium">{order.totalAmount}</span></p>
                            <p className="text-gray-600">
                                Created At: <span className="font-medium">{new Date(order.createdAt).toLocaleString()}</span>
                            </p>
                            <h4 className="font-semibold mt-2 text-gray-700">Items:</h4>
                            <ul className="divide-y divide-gray-200">
                                {order.items.map((item: any, index: number) => (
                                    <li key={index} className="flex justify-between py-1">
                                        <div>
                                            <span>{item.name}</span>
                                            <span className="ml-2 text-sm text-gray-500"> X {item.quantity}</span>
                                        </div>
                                        <span className="text-gray-600">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewOrder;
