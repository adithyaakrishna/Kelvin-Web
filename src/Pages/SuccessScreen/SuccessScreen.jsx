import React,{useEffect} from 'react';

export default function SuccessScreen() {
    useEffect(() => {
      window.close();
    }, [])
  return (
    <>
      <h3>Success!</h3>
      <h4>You Can Now Close The Browser!</h4>
    </>
  );
}
