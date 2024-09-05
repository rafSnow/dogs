import React from 'react';

const useMedia = (media) => {
  const [match, setMactch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMactch(matches);
    }
    window.addEventListener('resize', changeMatch);
    return () => window.removeEventListener('resize', changeMatch);
  }, [media]);
  return match;
};

export default useMedia;
