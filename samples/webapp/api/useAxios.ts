import  {useState, useReducer, useCallback, useEffect } from 'react';
import axios from 'axios';

const axiosReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
};

function useAxios(initialQuery: string) {
    const [ state, setState ] = useReducer(axiosReducer, {
        isLoading: false,
        isError: false,
        data: { nbHits: 0 },
    });

    const [ search, setSearch ] = useState(initialQuery);

    const getFetchUrl = useCallback((search) => {
        return 'https://hn.algolia.com/api/v1/search?query=' + search;
    }, []);

    useEffect(() => {
        let didCancel = false;

        async function doFetch() {
            setState({ type: 'FETCH_INIT' });

            try {
                const result = await axios(getFetchUrl(search));
                if (!didCancel) {
                    setState({ type: 'FETCH_SUCCESS', payload: result.data });
                }
            } catch (error) {
                if (!didCancel) {
                    setState({ type: 'FETCH_FAILURE' });
                }
            }
        }

        doFetch();

    }, [ getFetchUrl, search ]);

    return [ state, setSearch ];
};

export default useAxios;
