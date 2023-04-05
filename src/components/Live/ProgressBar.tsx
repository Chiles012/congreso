import React, { useState, useEffect } from "react";


interface CircularProgressProps {
  size: number;
  progress: number;
  title:string;
  stroke: string;
  color:string;
}

const ProgressBar: React.FC<CircularProgressProps> = ({
  size,
  progress,
  stroke,
  color,
  title,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((60 - progress) / 60) * size * Math.PI;
    setOffset(progressOffset);
  }, [setOffset, size, progress]);

  return (
    <div className="circular-progress" style={{ height: size, width: size , stroke: stroke , color:color }}>
      <svg>
        <circle
          className="background"
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 4}
        />
        <circle
          className="progress"
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 4}
          strokeDasharray={`${size * Math.PI - 8} ${size * Math.PI - 8}`}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="progress-text">{progress}
      <div className="progress-title">{title}</div></div>
     
    </div>
  );
};

export default ProgressBar;
