import React, {useReducer, createContext, useEffect} from 'react';
import reducer from './reducer';
import find from './functions/find';
import {SET_ALL_EXPERTISES} from './reducer/actionTypes';
export const MainContext = createContext(null);

const MainContextProvider = ({children, application}) => {
  const initialState = {
    allExpertises: [],
  };
  const [{allExpertises}, dispatch] = useReducer(reducer, initialState);

  const loadExpertises = () => {
    const query = {
      query: {
        $limit: 500,
        $sort: {id: 1},
        status: 1,
      },
    };
    find(application, 'expertises', query)
      .then(response => {
        const expertises = response ? (response.data ? response.data : []) : [];
        dispatch({type: SET_ALL_EXPERTISES, value: expertises});
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    let connected = false;
    application.io.on('connect', () => {
      connected = true;
      loadExpertises();
      console.log('connected');
    });
    application.io.on('disconnect', () => {
      connected = false;
    });
    application.service('issues').on('created', createdissue => {});

    application.io.connect();
    return () => application.io.disconnect();
  }, []);

  return (
    <MainContext.Provider value={{allExpertises, dispatch, application}}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
