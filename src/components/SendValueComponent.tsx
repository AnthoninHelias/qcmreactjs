import React from 'react';
import {useParams} from "react-router-dom";


const SendValueComponent = () => {
    const { displayedText } = useParams();
    const valueReceived = displayedText;

  return (
    <div>
      <p>{valueReceived}</p>
    </div>
  );
};

export default SendValueComponent;