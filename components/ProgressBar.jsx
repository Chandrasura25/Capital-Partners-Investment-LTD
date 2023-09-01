import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const ProgressBar = () => {
  useEffect(() => {
    const startProgressBar = () => {
      NProgress.start();
    };

    const doneProgressBar = () => {
      NProgress.done();
    };

    NProgress.configure({ showSpinner: false });

    startProgressBar();

    window.addEventListener('load', doneProgressBar);

    return () => {
      window.removeEventListener('load', doneProgressBar);
      doneProgressBar(); // Ensure the progress bar is finished on unmount
    };
  }, []);

  return null;
};

export default ProgressBar;
