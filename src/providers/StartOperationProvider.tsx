import {useEffect} from 'react';

const StartOperationProvider = ({children}: {children: React.ReactNode}) => {
  useEffect(() => {
    console.log('StartOperationProvider');
  }, []);
  return children;
};

export default StartOperationProvider;
