import React, { useState, useRef } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import classes from './Inputrange.module.scss';

interface InputrangeProps {
  onChange?: (value: [number, number]) => void;
}

const Inputrange: React.FC<InputrangeProps> = ({ onChange }) => {
  const [budget, setBudget] = useState<[number, number]>([0, 9000]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleInput = (newValue: [number, number]) => {
    setBudget(newValue);

    if (onChange) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onChange(newValue), 100); // задержка 100мс
    }
  };

  return (
    <div className={classes.input_range_container}>
      <RangeSlider
        min={0}
        max={9000}
        step={100}
        value={budget}
        onInput={handleInput}
        className={classes.range_slider}
      />
    </div>
  );
};

export default Inputrange;
