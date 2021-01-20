import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { Spinner } from 'reactstrap';

const LoadingScreen = () => {

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className="loading">
      <Spinner color="success" />
    </div>
  );
};

export default LoadingScreen;