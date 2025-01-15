import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

const Order: React.FC = () => {
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

      const response = await axios.get('http://localhost:3005/api/all-orders', {
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

  useEffect(() => {
    fetchOrders();
  }, [navigate]);

  if (loading) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Loading Orders...</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 h-[88vh] overflow-y-scroll scrollbar-hide">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Order Summary</h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                Order ID: <span className="text-blue-600">{order._id}</span>
              </h3>
              <p className="text-gray-600">
                Status: <span className="font-medium">{order.status}</span>
              </p>
              <p className="text-gray-600">
                Total Amount: <span className="font-medium">{order.totalAmount}</span>
              </p>
              <Link
                to={`/order-detail/${order._id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
