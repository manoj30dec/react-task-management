import React, { useState, useEffect } from 'react';
function WindowDimensions() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log('window width ', dimensions.width);
  console.log('window height ', dimensions.height);

  return (
    <span>
      {dimensions.width} x {dimensions.height}
    </span>
  );
}
// console.log(WindowDimensions)
export default WindowDimensions;
