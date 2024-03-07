interface InputLimitTrackerProps {
  limit: number;
  current: number;
}

export default function InputLimitTracker({ current, limit }: InputLimitTrackerProps) {
  return (
    <div className="input-limit-tracker">
      {current}/{limit}
    </div>
  );
}
