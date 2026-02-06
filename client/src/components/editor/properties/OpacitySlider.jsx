import clsx from "clsx";

export const OpacitySlider = ({ value = 1, onChange }) => {
  const percentage = Math.round(value * 100);
  const fillPercent = `${percentage}%`;

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value) / 100;
    onChange?.(newValue);
  };

  return (
    <div className='properties-section'>
      <div className='properties-section-title'>Opacity</div>

      <div className='properties-row'>
        <input
          type='range'
          min='0'
          max='100'
          value={percentage}
          onChange={handleChange}
          className={clsx("properties-slider", "properties-slider-filled")}
          style={{ "--fill-percent": fillPercent }}
        />
        <span className='properties-label w-12 text-right'>{percentage}%</span>
      </div>
    </div>
  );
};
