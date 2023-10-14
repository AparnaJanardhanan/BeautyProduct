import React, { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import AppHeader from "./Layout/AppHeader";
import AppFooter from "./Layout/AppFooter";
import Products from "./Products";

const ShopByType = () => {
    const [searchType, setSearchType] = useState();
    const [flag, setFlag] = useState(false);
    const productTypes = [
        "lip_liner",
        "lipstick",
        "foundation",
        "eyeliner",
        "eyeshadow",
        "blush",
        "bronzer",
        "mascara",
        "eyebrow",
        "nail_polish",
    ];

    const { isLoading, data, refetch } = useQuery(
        ['searchByType'],
        async () => {
            const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchType}`);
            const data = await response.json();
            return data;
        },
        {
            enabled: false,
            onSuccess: (data) => {
                setFlag(true);
            },
        }
    );

    const handleTypeClick = (type) => {
        setSearchType(type);
    };

    return (
        <>
            <AppHeader />
            {!flag ? (
                <div className="min-h-screen px-52 py-8 border border-gray-50">
                    <h1 className="p-2 text-2xl font-bold text-center">Shop Your Product</h1>
                    <div className="pt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {productTypes.map((type, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md h-32 text-center flex flex-col justify-center capitalize bg-orange-200 shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105"
                                onMouseOver={() => handleTypeClick(type)}
                                onClick={refetch}
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                </div>) : (
                <Products data={data} isLoading={isLoading} />)
            }
            <AppFooter />
        </>
    )
}

export default ShopByType;