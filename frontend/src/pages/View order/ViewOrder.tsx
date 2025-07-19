import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Lottie from "lottie-react";
import NoOrder from "../../Lootie/img3.json";
import { ShoppingBag, Clock, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Skeleton } from '../../components/ui/skeleton';
import { motion } from "framer-motion"
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const ViewOrder: React.FC = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const fetchOrders = async () => {
        try {
            const token = localStorage.getItem('jwtToken');
            if (!token) {
                navigate('/login');
                return;
            }

            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3005";
            const response = await axios.get(`${apiUrl}/api/order-list`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setOrders(response?.data?.data || []);
        } catch (error: any) {
            toast.error('Error fetching orders:', error.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending': return 'bg-yellow-500';
            case 'completed': return 'bg-green-500';
            case 'cancelled': return 'bg-red-500';
            default: return 'bg-blue-500';
        }
    };

    if (loading) {
        return (
            <div className="p-6 bg-gray-100 min-h-screen">
                <h2 className="text-3xl font-bold text-gray-700 mb-6">My Orders</h2>
                <div className="space-y-4">
                    {[1, 2, 3].map((_, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <Skeleton className="h-4 w-[250px]" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-4 w-[200px] mb-2" />
                                <Skeleton className="h-4 w-[150px] mb-2" />
                                <Skeleton className="h-4 w-[100px]" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">My Orders</h2>

            {orders.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 flex flex-col items-center gap-4"
                >
                    <Lottie animationData={NoOrder} loop={true} style={{ height: "440px" }} />
                    <p className="text-red-600 text-lg text-center">Oops!! No Order Found</p>
                    <Button onClick={() => navigate("/")} className='w-48 text-center'>
                        Add Food
                    </Button>
                </motion.div>
            ) : (
                <div className="space-y-4">
                    {orders.map((order, index) => (
                        <motion.div
                            key={order._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardHeader className='flex flex-col gap-4'>
                                    <CardTitle className="flex justify-between items-center">
                                        <span className="text-md md:text-xl font-semibold text-gray-800">
                                            Order ID: <span className="text-orange-600 uppercase">{order._id}</span>
                                        </span>  
                                        
                                    </CardTitle>
                                    <CardTitle className="flex justify-between items-center">
                                        <span className="text-xl font-semibold text-gray-800">
                                            Total Amount: <span className="text-orange-600 uppercase">{order.totalAmount}</span>
                                        </span>
                                        <Badge className={`${getStatusColor(order.status)}`}>{order.status}</Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2">
                                            <Clock className="text-gray-500" />
                                            <span className="text-gray-600">
                                                Created: <span className="font-medium">{new Date(order.createdAt).toLocaleString()}</span>
                                            </span>
                                        </div>
                                       
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                                            <Package className="text-gray-500" />
                                            Items:
                                        </h4>
                                        <ul className="divide-y divide-gray-200">
                                            {order.items.map((item: any, itemIndex: number) => (
                                                <li key={itemIndex} className="flex justify-between py-2">
                                                    <div className="flex items-center gap-2">
                                                        <ShoppingBag className="text-gray-500" size={16} />
                                                        <span>{item.name}</span>
                                                        <span className="text-sm text-gray-500">x {item.quantity}</span>
                                                    </div>
                                                    <span className="text-red-600">{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewOrder;
