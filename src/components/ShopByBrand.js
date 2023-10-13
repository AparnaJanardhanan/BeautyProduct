import React, { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import Products from "./Products";
import AppHeader from "./Layout/AppHeader";
import AppFooter from "./Layout/AppFooter";

const ShopByBrand = () => {
    const [searchBrand, setSearchBrand] = useState();
    const [flag, setFlag] = useState(false);
    const brandItems = [
        "maybelline",
        "l'oreal",
        "nyx",
        "dior",
        "clinique",
        "fenty",
        "Charlotte",
        "glossier",
        "revlon",
        "colourpop",
        "marienatie",
        "deciem",
    ];

    const { isLoading, data, refetch } = useQuery(
        ['searchByBrand'],
        async () => {
            const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchBrand}`);
            const data = await response.json();
            return data;
        },
        {
            enabled: false,
            onSuccess: (data) => {
                console.log('data in brand', data);
                setFlag(true);
            },
        }
    );

    const handleBrandClick = (brand) => {
        setSearchBrand(brand);
    };

    return (
        <>
            <AppHeader />
            {!flag ? (
                <div className="min-h-screen px-52 py-8 border border-gray-50">
                    <h1 className="p-2 text-2xl font-bold text-center">Shop by brand</h1>
                    <div className="pt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {brandItems.map((brand, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md h-32 text-center flex flex-col justify-center capitalize bg-orange-200 shadow-lg border border-transparent hover:border-amber-400 transition-transform hover:scale-105"
                                onMouseOver={() => handleBrandClick(brand)}
                                onClick={refetch}
                            >
                                {brand}
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

export default ShopByBrand;