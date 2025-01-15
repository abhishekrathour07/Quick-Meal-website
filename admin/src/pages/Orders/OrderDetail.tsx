import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const fetchOrderDetail = async () => {
    try {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await axios.get(`http://localhost:3005/api/order/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrder(response?.data?.data || null);
    } catch (error: any) {
      toast.error('Error fetching order details:', error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderDetail();
  }, [id, navigate]);

  if (loading) {
    return <p>Loading order details...</p>;
  }

  if (!order) {
    return <p>Order not found.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Order Details</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">
          Order ID: <span className="text-blue-600">{order._id}</span>
        </h3>
        <p className="text-gray-600">
          Status: <span className="font-medium">{order.status}</span>
        </p>
        <p className="text-gray-600">
          Total Amount: <span className="font-medium">{order.totalAmount}</span>
        </p>
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
    </div>
  );
};

export default OrderDetail;
