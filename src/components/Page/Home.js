import React, { useState } from 'react';
import Display from '../Display';
import AppHeader from '../Layout/AppHeader';
import AppFooter from '../Layout/AppFooter';
import Products from '../Products';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearchResult = (data) => {
        setSearchResult(data);
    };

    return (
        <>
            <AppHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearchResult={handleSearchResult} />
            {!searchResult ? (<Display />) : (
                <Products data={searchResult.data} isLoading={searchResult.isLoading} />)}
            <AppFooter />
        </>
    );
}

export default Home;
