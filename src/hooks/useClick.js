import { useState } from 'react';

export const useClick = () => {
  const [good, setGood] = useState(0);
  const handleGood = () => setGood(good + 1);

  const [neutral, setNeutral] = useState(0);
  const handleNeutral = () => setNeutral(neutral + 1);

  const [bad, setBad] = useState(0);
  const handleBad = () => setBad(bad + 1);

  return { good, neutral, bad, handleGood, handleNeutral, handleBad };
};
