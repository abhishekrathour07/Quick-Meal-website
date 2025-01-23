import React, { useEffect, useState } from "react";
import { CarouselMain } from "../../components/CarouselMain";
import Menu from "../../components/Menu";
import LoadApp from "../../components/LoadApp";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const SkeletonCard = () => (
        <div className="animate-pulse flex flex-col items-center justify-center h-[340px] min-w-36 p-4 border rounded-md bg-gray-100 ">
            <div className="h-48 w-48 bg-gray-300 rounded-full mb-4"></div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="flex justify-between animate-pulse w-full mt-4">
                <div className="h-5 w-16  bg-green-300 rounded "></div>
                <div className="h-5 w-28 bg-gray-700 rounded "></div>
            </div>
        </div>
    );

    const SkeletonGrid = () => (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
            {Array.from({ length: 8 }).map((_, idx) => (
                <SkeletonCard key={idx} />
            ))}
        </div>
    );

    return (
        <div className="bg-[url('images/background.png')]">
            {loading ? (
                <div className="h-full px-16">
                    <div className=" w-75vh h-96 bg-gray-300  animate-pulse mt-12 rounded lg "></div>
                    <div className="flex h-10 w-60 mt-8 rounded bg-gray-300"></div>
                    <div className="flex gap-6 mt-6">
                        <div className="h-40 w-40 bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-40 w-40 bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-40 w-40 bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-40 w-40 bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-40 w-40 bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-40 w-40 bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-40 w-40 bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-40 w-40 bg-gray-300 rounded-full mb-4"></div>
                    </div>
                    <SkeletonGrid />
                </div>
            ) : (
                <div>
                    <CarouselMain />
                    <Menu />
                    <LoadApp />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Home;
