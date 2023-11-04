import React, {createContext, useState} from 'react';

type Props = {
  children: React.ReactNode;
};

export const GlobalContext = createContext({
  region: {},
  setRegion: (region: string) => {},
});

const GlobalProvider = (props: Props) => {
  const [region, setRegion] = useState({});

  return (
    <GlobalContext.Provider value={{region, setRegion}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
