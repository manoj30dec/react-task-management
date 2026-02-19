import { useRef, useEffect, useState } from 'react';

// export default function SendParent({ color, getTitle })
export default function SendParent(props) {
  const headingRef = useRef(null);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    setTitle(headingRef.current.title);
  }, []);
  return (
    <div>
      <h1>Sent to parent example</h1>
      <h1 title="Dom Title Jainul" ref={headingRef}>
        Hello World {props.color} and titile is {props.getTitle(title)}
      </h1>
    </div>
  );
}
