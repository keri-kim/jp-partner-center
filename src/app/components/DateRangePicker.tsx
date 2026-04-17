import { useState, useRef, useEffect } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

interface DateRangePickerProps {
  value: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
}

export default function DateRangePicker({ value, onChange }: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const label = value?.from
    ? value.to
      ? `${format(value.from, 'yyyy-MM-dd')} → ${format(value.to, 'yyyy-MM-dd')}`
      : format(value.from, 'yyyy-MM-dd')
    : '날짜 선택';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="h-[40px] w-[260px] px-[12px] bg-input-background border border-border border-l-0 rounded-r-md flex items-center gap-[6px] text-sm"
      >
        <span className={value?.from ? 'text-foreground' : 'text-muted-foreground'}>
          {label}
        </span>
        <svg className="w-[14px] h-[14px] ml-auto flex-shrink-0" fill="none" viewBox="0 0 12.5 12.5">
          <path
            d="M1 3.5H11.5M1 1H11.5V11.5H1V1ZM4.5 1V3.5M8.5 1V3.5M1 6H11.5M4.5 8.5H4.508M8 8.5H8.008"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="text-muted-foreground"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-[4px] z-50 bg-card border border-border rounded-md shadow-lg rdp-custom">
          <DayPicker
            mode="range"
            selected={value}
            onSelect={(range) => {
              onChange(range);
              if (range?.from && range?.to) setOpen(false);
            }}
            locale={ja}
            numberOfMonths={2}
            showOutsideDays
          />
          <div className="flex justify-end gap-[8px] px-[16px] pb-[12px]">
            <button
              onClick={() => { onChange(undefined); setOpen(false); }}
              className="h-[32px] px-[12px] text-sm border border-border rounded-md hover:bg-muted"
            >
              リセット
            </button>
            <button
              onClick={() => setOpen(false)}
              className="h-[32px] px-[12px] text-sm bg-primary text-primary-foreground rounded-md"
            >
              確認
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
