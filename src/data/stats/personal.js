import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-10-07T12:00:00');
    setAge(Math.floor((Date.now() - birthTime) / divisor));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};
const Army = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 30; // ms in an average year
    const birthTime = new Date('2023-10-07T12:00:00');
    setAge(Math.floor((birthTime - Date.now()) / divisor));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age (international)',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Military Service (Left Months)',
    value: <Army />,
  },
  {
    key: 'countries',
    label: 'Hometown',
    value: 'HamPyeong, Jeollanam-do',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Suwon, Gyeonggi-do',
  },
];

export default data;
