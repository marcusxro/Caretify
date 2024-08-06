import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchedItems: React.FC = () => {
    const location = useLocation();
    const [results, setResults] = useState<any>({ items: [] });

    useEffect(() => {
        const query = new URLSearchParams(location.search).get('q');
        if (query) {
            axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA9ND_-eMexUUINOszh_Wy-HstikB6qlZM&cx=b3f81ea3f7409464f&q=${query}`)
                .then((res) => setResults(res.data))
                .catch((err) => console.error(err));
        }
    }, [location.search]);

    useEffect(() => {
        console.log(results);
    }, [results]);




    return (
        <div className='flex gap-5 flex-col text-center'>
            {results.items?.map((itm: any) => (
                <div
                onClick={() => window.open(itm.formattedUrl, '_blank')}

                 key={itm.cacheId}>
                    {itm.title}
                </div>
            ))}
        </div>
    );
}

export default SearchedItems;
