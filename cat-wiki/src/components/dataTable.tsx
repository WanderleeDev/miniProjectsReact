import RangeIndicator from "./rangeIndicator";

interface Props {
  rowTable: Record<string, number>;
}

export default function DataTable({ rowTable }: Props) {
  return (
    <div className="grid gap-4">
      {Object.entries(rowTable).map(([key, value]) => (
        <div
          key={key}
          className="grid gap-4 sm:gap-0 sm:grid-cols-[12rem_1fr] items-center"
        >
          <span className="font-semibold first-letter:uppercase">
            {key.replace("_", " ")}:
          </span>
          <RangeIndicator numberRange={value} />
        </div>
      ))}
    </div>
  );
}
