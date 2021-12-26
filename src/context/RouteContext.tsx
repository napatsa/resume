import React, { useContext } from 'react';

export interface IRouteContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  loading: false,
  setLoading: () => console.log(1),
};

const RouteContext = React.createContext<IRouteContext>(defaultState);

export const useRouteContext = () => useContext(RouteContext);

export default RouteContext;
