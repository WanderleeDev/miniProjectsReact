interface Props {
  numberRange: number;
}

export default function RangeIndicator({ numberRange }: Props) {
  
  return (
    <div className="flex gap-2">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <span
            className={`bg-gray-200 rounded-lg min-w-10 sm:w-16 h-3 inline-block ${i < numberRange && 'bg-red-950'}`}
            key={i}
          ></span>
        ))}
    </div>
  );
}
