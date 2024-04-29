import { useState } from 'react';

function UseWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  return <div>UseWindowResize</div>;
}

export default UseWindowResize;
