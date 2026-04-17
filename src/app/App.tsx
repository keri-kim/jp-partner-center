import { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-day-picker';
import { parse, isWithinInterval, startOfDay, endOfDay } from 'date-fns';
import svgPaths from '../imports/billing-list/svg-3b1x6j567m';
import drawerSvgPaths from '../imports/manual-adjustment/svg-vpil53h6zm';
import DateRangePicker from './components/DateRangePicker';
import logoJp from '../assets/logo-jp.png';

// ─── Clinic context (logged-in clinic) ───────────────────────────────────────
const CLINIC_NAME = '銀座ラインクリニック';

// ─── Types ───────────────────────────────────────────────────────────────────
interface AppPaymentRow {
  id: string;
  chargeId: string;
  paymentNumber: string;
  clinicId: string;
  clinicName: string;
  status: string;
  paymentDate: string;
  usageProcessDate: string;
  disbursementDate: string;
  settlementAmount: string;
  fee: string;
  feeRate: string;
  usedPoints: string;
  payer: string;
  paymentAmount?: string;
  paymentDatetime?: string;
  usageProcessDatetime?: string;
  phoneNumber?: string;
  paymentMeans?: string;
  productName?: string;
  productOriginalPrice?: string;
  productSalePrice?: string;
  failureReason?: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const initialAppPaymentData: AppPaymentRow[] = [
  {
    id: '1',
    chargeId: '87392847',
    paymentNumber: '1001',
    clinicId: '1234',
    clinicName: '銀座ラインクリニック',
    status: '完了',
    paymentDate: '2026. 04. 01',
    usageProcessDate: '2026. 04. 02',
    disbursementDate: '2026. 04. 05',
    settlementAmount: '￥55,250',
    fee: '￥9,750',
    feeRate: '15%',
    usedPoints: '￥0',
    payer: 'tanaka.sakura',
    paymentAmount: '￥65,000',
    paymentDatetime: '2026-04-01 14:32:00',
    usageProcessDatetime: '2026-04-02 09:15:00',
    phoneNumber: '090-3921-5847',
    paymentMeans: 'カード決済',
    productName: '(40201) リフティング施術',
    productOriginalPrice: '￥70,000',
    productSalePrice: '￥65,000',
  },
  {
    id: '2',
    chargeId: '92847563',
    paymentNumber: '1002',
    clinicId: '1234',
    clinicName: '銀座ラインクリニック',
    status: '完了',
    paymentDate: '2026. 04. 02',
    usageProcessDate: '2026. 04. 03',
    disbursementDate: '2026. 04. 06',
    settlementAmount: '￥68,000',
    fee: '￥12,000',
    feeRate: '15%',
    usedPoints: '￥0',
    payer: 'yamada.hana',
    paymentAmount: '￥80,000',
    paymentDatetime: '2026-04-02 11:05:00',
    usageProcessDatetime: '2026-04-03 10:00:00',
    phoneNumber: '080-5512-3378',
    paymentMeans: 'カード決済',
    productName: '(50302) ボトックス200unit',
    productOriginalPrice: '￥85,000',
    productSalePrice: '￥80,000',
  },
  {
    id: '3',
    chargeId: '73829561',
    paymentNumber: '1003',
    clinicId: '1234',
    clinicName: '銀座ラインクリニック',
    status: '予定',
    paymentDate: '2026. 04. 05',
    usageProcessDate: '2026. 04. 06',
    disbursementDate: '2026. 04. 09',
    settlementAmount: '￥25,500',
    fee: '￥4,500',
    feeRate: '15%',
    usedPoints: '￥0',
    payer: 'suzuki.yui',
    paymentAmount: '￥30,000',
    paymentDatetime: '2026-04-05 16:44:00',
    usageProcessDatetime: '2026-04-06 09:30:00',
    phoneNumber: '070-7743-9921',
    paymentMeans: 'カード決済',
    productName: '(32101) 肌スケーリング',
    productOriginalPrice: '￥32,000',
    productSalePrice: '￥30,000',
  },
  {
    id: '4',
    chargeId: '45678901',
    paymentNumber: '1004',
    clinicId: '1234',
    clinicName: '銀座ラインクリニック',
    status: '失敗',
    paymentDate: '2026. 04. 08',
    usageProcessDate: '2026. 04. 09',
    disbursementDate: '-',
    settlementAmount: '￥63,000',
    fee: '￥7,000',
    feeRate: '10%',
    usedPoints: '￥5,000',
    payer: 'sato.haru',
    paymentAmount: '￥65,000',
    paymentDatetime: '2026-04-08 13:20:00',
    usageProcessDatetime: '2026-04-09 11:00:00',
    phoneNumber: '090-8834-2265',
    paymentMeans: 'カード決済',
    productName: '(60604) フルフェイスフィラー',
    productOriginalPrice: '￥80,000',
    productSalePrice: '￥75,000',
    failureReason: 'カード決済の承認が拒否されました。',
  },
  {
    id: '5',
    chargeId: '23456789',
    paymentNumber: '1005',
    clinicId: '1234',
    clinicName: '銀座ラインクリニック',
    status: '完了',
    paymentDate: '2026. 04. 10',
    usageProcessDate: '2026. 04. 11',
    disbursementDate: '2026. 04. 14',
    settlementAmount: '￥22,500',
    fee: '￥2,500',
    feeRate: '10%',
    usedPoints: '￥0',
    payer: 'kobayashi.sana',
    paymentAmount: '￥25,000',
    paymentDatetime: '2026-04-10 10:58:00',
    usageProcessDatetime: '2026-04-11 09:45:00',
    phoneNumber: '080-2291-6634',
    paymentMeans: 'カード決済',
    productName: '(21505) 脱毛レーザー',
    productOriginalPrice: '￥28,000',
    productSalePrice: '￥25,000',
  },
];

// ─── Sidebar menu ─────────────────────────────────────────────────────────────
const sidebarMenus = [
  { label: 'クリニック' },
  { label: 'クリニックポイント' },
  { label: 'イベント管理' },
  { label: '症例写真の管理' },
  { label: '予約管理' },
  { label: '予約枠管理' },
  { label: '口コミの管理' },
  { label: '請求一覧' },
  { label: 'ポイント利用履歴' },
  { label: 'カード決済精算通知書' },
  { label: 'カード決済精算履歴', active: true },
  { label: '入札形広告' },
];

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [allData, setAllData] = useState<AppPaymentRow[]>(initialAppPaymentData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Detail sheet
  const [isDetailSheetOpen, setIsDetailSheetOpen] = useState(false);
  const [detailRow, setDetailRow] = useState<AppPaymentRow | null>(null);

  // Tooltip
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number; align?: 'center' | 'right' } | null>(null);
  const showTooltip = (text: string, e: React.MouseEvent, align?: 'center' | 'right') => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltip({ text, x: rect.left + rect.width / 2, y: rect.top, align });
  };

  // Filters
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [dateType, setDateType] = useState<string>('決済日');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [searchIdType, setSearchIdType] = useState<string>('決済番号');
  const [searchIdValue, setSearchIdValue] = useState<string>('');

  const statusDropdownRef = useRef<HTMLDivElement>(null);
  const statusOptions = ['完了', '予定', '失敗'];

  const parseRowDate = (str: string): Date | null => {
    try {
      return parse(str.replace(/\.\s*/g, '-').replace(/-$/, '').trim(), 'yyyy-MM-dd', new Date());
    } catch { return null; }
  };

  const inDateRange = (dateStr: string, range: DateRange | undefined): boolean => {
    if (!range?.from) return true;
    const d = parseRowDate(dateStr);
    if (!d) return true;
    const from = startOfDay(range.from);
    const to = range.to ? endOfDay(range.to) : endOfDay(range.from);
    return isWithinInterval(d, { start: from, end: to });
  };

  const filteredData = allData.filter(row => {
    if (selectedStatuses.length > 0 && !selectedStatuses.includes(row.status)) return false;
    const dateTarget =
      dateType === '利用処理日' ? row.usageProcessDate
      : dateType === '支払日' ? row.disbursementDate
      : row.paymentDate;
    if (!inDateRange(dateTarget, dateRange)) return false;
    if (searchIdValue) {
      if (searchIdType === '決済番号' && !row.paymentNumber.includes(searchIdValue)) return false;
      if (searchIdType === '取引ID' && !row.chargeId.includes(searchIdValue)) return false;
    }
    return true;
  });

  const handleReset = () => {
    setSelectedStatuses([]);
    setDateType('決済日');
    setDateRange(undefined);
    setSearchIdType('決済番号');
    setSearchIdValue('');
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (statusDropdownRef.current && !statusDropdownRef.current.contains(e.target as Node)) {
        setShowStatusDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">

      {/* ── Header ── */}
      <div className="bg-card h-[56px] shrink-0 w-full border-b border-sidebar-border">
        <div className="flex items-center size-full px-[16px] gap-[48px]">
          {/* Hamburger + Logo */}
          <div className="flex items-center gap-[8px]">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="size-[40px] flex items-center justify-center rounded-md hover:bg-muted"
            >
              <div className="size-[18px]">
                <svg className="size-full" fill="none" viewBox="0 0 14.0625 12.375">
                  <path d={svgPaths.p247bae00} fill="currentColor" className="text-foreground" />
                </svg>
              </div>
            </button>
            <img src={logoJp} alt="カンナムオンニ" className="h-[18px] w-auto" />
            <p className="text-muted-foreground">パートナーセンター</p>
          </div>

          {/* Clinic name */}
          <div className="ml-auto flex items-center gap-[16px]">
            <div className="bg-card flex items-center px-[16px] h-[32px] rounded-md border border-border">
              <div className="flex items-center gap-[8px]">
                <div className="size-[16px]">
                  <svg className="size-full" fill="none" viewBox="0 0 11.7501 12.4375">
                    <path d={svgPaths.p2b600c80} fill="currentColor" className="text-muted-foreground" />
                  </svg>
                </div>
                <p className="text-muted-foreground">{CLINIC_NAME}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 min-h-0">

        {/* ── Sidebar ── */}
        <div className={`bg-sidebar shrink-0 border-r border-sidebar-border transition-all duration-300 ${
          isSidebarOpen ? 'w-[220px]' : 'w-0 border-r-0'
        }`}>
          {isSidebarOpen && (
            <div className="pt-[12px] pb-[24px] px-[8px] flex flex-col gap-[4px]">
              {sidebarMenus.map((menu) => (
                <button
                  key={menu.label}
                  className={`w-full h-[32px] px-[12px] rounded-md text-left text-sm ${
                    menu.active
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-muted-foreground cursor-default'
                  }`}
                >
                  {menu.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Main Content ── */}
        <div className="flex-1 min-w-0 flex flex-col overflow-y-auto bg-background">

          {/* Page Header */}
          <div className="px-[32px] py-[16px] border-b border-sidebar-border">
            <div className="flex items-center gap-[4px] mb-[8px]">
              <span className="text-muted-foreground px-[4px]">ホーム</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground px-[4px]">カード決済精算履歴</span>
            </div>
            <div className="flex items-center gap-[12px]">
              <h4>カード決済精算履歴</h4>
              <p className="text-muted-foreground">カード決済で処理された精算データを確認できます。</p>
            </div>
          </div>

          {/* Filters */}
          <div className="px-[32px] py-[16px]">
            <div className="flex flex-wrap gap-[8px] mb-[8px]">

              {/* 日付フィルター */}
              <div className="flex">
                <div className="relative">
                  <select
                    className="h-[40px] w-[120px] px-[12px] pr-[32px] bg-input-background border border-border rounded-l-md appearance-none text-sm"
                    value={dateType}
                    onChange={(e) => setDateType(e.target.value)}
                  >
                    <option>決済日</option>
                    <option>利用処理日</option>
                    <option>支払日</option>
                  </select>
                  <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none w-[16px] h-[16px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 11.8748 8">
                      <path d={svgPaths.p5044900} fill="currentColor" className="text-muted-foreground" />
                    </svg>
                  </div>
                </div>
                <DateRangePicker value={dateRange} onChange={setDateRange} />
              </div>

              {/* ステータス */}
              <div ref={statusDropdownRef} className="relative">
                <button
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  className="h-[40px] w-[160px] px-[12px] pr-[32px] bg-input-background border border-border rounded-md flex items-center justify-between text-left text-sm"
                >
                  <span className={selectedStatuses.length === 0 ? 'text-muted-foreground' : ''}>
                    {selectedStatuses.length === 0
                      ? 'ステータス'
                      : selectedStatuses.length === 1
                      ? selectedStatuses[0]
                      : `${selectedStatuses.length}件選択済み`}
                  </span>
                  <div className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[16px] h-[16px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 11.8748 8">
                      <path d={svgPaths.p5044900} fill="currentColor" className="text-muted-foreground" />
                    </svg>
                  </div>
                </button>
                {showStatusDropdown && (
                  <div className="absolute top-full left-0 mt-[4px] w-full bg-popover border border-border rounded-md shadow-lg z-10">
                    {statusOptions.map((option) => (
                      <label key={option} className="flex items-center gap-[8px] px-[12px] py-[8px] hover:bg-muted cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          checked={selectedStatuses.includes(option)}
                          onChange={() => setSelectedStatuses(prev =>
                            prev.includes(option) ? prev.filter(s => s !== option) : [...prev, option]
                          )}
                          className="size-[16px] rounded-sm border border-border accent-primary"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* ID 検索 */}
              <div className="flex">
                <div className="relative">
                  <select
                    className="h-[40px] w-[100px] px-[12px] pr-[32px] bg-input-background border border-border rounded-l-md appearance-none text-sm"
                    value={searchIdType}
                    onChange={(e) => setSearchIdType(e.target.value)}
                  >
                    <option>決済番号</option>
                    <option>取引ID</option>
                  </select>
                  <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none w-[16px] h-[16px]">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 11.8748 8">
                      <path d={svgPaths.p5044900} fill="currentColor" className="text-muted-foreground" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="ID検索"
                  value={searchIdValue}
                  onChange={(e) => setSearchIdValue(e.target.value)}
                  className="h-[40px] w-[200px] px-[12px] bg-input-background border border-border border-l-0 rounded-r-md placeholder:text-muted-foreground text-sm"
                />
              </div>

              <button
                className="h-[40px] px-[16px] bg-primary text-primary-foreground rounded-md text-sm"
                onClick={() => {}}
              >
                検索
              </button>
              <button
                className="h-[40px] px-[16px] bg-secondary border border-border rounded-md text-secondary-foreground text-sm"
                onClick={handleReset}
              >
                リセット
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="px-[32px] pt-[8px] pb-[16px]">
            <div className="mb-[8px] flex items-center justify-between">
              <p className="text-muted-foreground text-sm">
                <span className="text-[16px] font-semibold text-foreground">{filteredData.length}件</span> · データはリアルタイムではありません。
              </p>
              <button className="px-[16px] py-[8px] text-foreground hover:bg-muted rounded-md text-sm">
                Excelダウンロード
              </button>
            </div>

            <div className="border border-sidebar-border rounded-md overflow-x-auto">
              {/* Table Header */}
              <div className="bg-muted border-b border-sidebar-border flex text-sm">
                <div className="w-[100px] p-[8px] border-r border-sidebar-border">決済番号</div>
                <div className="w-[90px] p-[8px] border-r border-sidebar-border">ステータス</div>
                <div className="w-[120px] p-[8px] border-r border-sidebar-border">支払日</div>
                <div className="w-[120px] p-[8px] border-r border-sidebar-border">利用処理日</div>
                <div className="w-[120px] p-[8px] border-r border-sidebar-border">決済日</div>
                <div className="w-[130px] p-[8px] border-r border-sidebar-border text-right flex items-center justify-end gap-[4px]">
                  精算金額
                  <span
                    className="inline-flex items-center justify-center w-[14px] h-[14px] rounded-full border text-[9px] leading-none cursor-default flex-shrink-0"
                    style={{ borderColor: 'rgba(0,0,0,0.5)', color: 'rgba(0,0,0,0.5)' }}
                    onMouseEnter={(e) => showTooltip('精算口座に入金される最終金額です。\n(決済金額 + 使用ポイント - 手数料)', e)}
                    onMouseLeave={() => setTooltip(null)}
                  >i</span>
                </div>
                <div className="w-[110px] p-[8px] border-r border-sidebar-border text-right">使用ポイント</div>
                <div className="w-[110px] p-[8px] border-r border-sidebar-border text-right flex items-center justify-end gap-[4px]">
                  手数料
                  <span
                    className="inline-flex items-center justify-center w-[14px] h-[14px] rounded-full border text-[9px] leading-none cursor-default flex-shrink-0"
                    style={{ borderColor: 'rgba(0,0,0,0.5)', color: 'rgba(0,0,0,0.5)' }}
                    onMouseEnter={(e) => showTooltip('PG社手数料', e)}
                    onMouseLeave={() => setTooltip(null)}
                  >i</span>
                </div>
                <div className="w-[90px] p-[8px] border-r border-sidebar-border text-right">手数料率</div>
                <div className="w-[100px] p-[8px]">決済者</div>
              </div>

              {/* Table Body */}
              {filteredData.map((row) => (
                <div key={row.id} className="border-b border-sidebar-border flex hover:bg-muted transition-colors text-sm">
                  <div className="w-[100px] p-[8px] border-r border-sidebar-border">
                    <button
                      className="text-accent-foreground underline hover:opacity-80 transition-opacity truncate w-full text-left"
                      onClick={() => { setDetailRow(row); setIsDetailSheetOpen(true); }}
                    >
                      {row.paymentNumber}
                    </button>
                  </div>
                  <div className="w-[90px] p-[8px] border-r border-sidebar-border">
                    <span className="flex items-center gap-[6px]">
                      <span className={`w-[7px] h-[7px] rounded-full flex-shrink-0 ${
                        row.status === '完了' ? 'bg-green-500' :
                        row.status === '予定' ? 'bg-blue-500' :
                        row.status === '失敗' ? 'bg-red-500' : 'bg-gray-400'
                      }`} />
                      <span
                        className="underline cursor-default"
                        onMouseEnter={(e) => showTooltip(
                          row.status === '完了' ? '精算金のお支払いが完了しました。' :
                          row.status === '予定' ? '施術券を使用処理し、まもなくお支払いの予定です。' :
                          row.status === '失敗' ? '(失敗事由)' : row.status,
                          e
                        )}
                        onMouseLeave={() => setTooltip(null)}
                      >{row.status}</span>
                    </span>
                  </div>
                  <div className="w-[120px] p-[8px] border-r border-sidebar-border truncate">{row.disbursementDate}</div>
                  <div className="w-[120px] p-[8px] border-r border-sidebar-border truncate">{row.usageProcessDate}</div>
                  <div className="w-[120px] p-[8px] border-r border-sidebar-border truncate">{row.paymentDate}</div>
                  <div className="w-[130px] p-[8px] border-r border-sidebar-border text-right truncate">{row.settlementAmount}</div>
                  <div className="w-[110px] p-[8px] border-r border-sidebar-border text-right truncate">{row.usedPoints}</div>
                  <div className="w-[110px] p-[8px] border-r border-sidebar-border text-right truncate">{row.fee}</div>
                  <div className="w-[90px] p-[8px] border-r border-sidebar-border text-right truncate">{row.feeRate}</div>
                  <div className="w-[100px] p-[8px] truncate" onMouseEnter={(e) => showTooltip(row.payer, e)} onMouseLeave={() => setTooltip(null)}>{row.payer}</div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-[8px] mt-[16px]">
              <button className="w-[32px] h-[32px] flex items-center justify-center rounded-md border border-border hover:bg-muted">
                <svg className="size-[12px]" fill="none" viewBox="0 0 6.50783 10.4528">
                  <path d={svgPaths.p7026b80} fill="currentColor" className="text-muted-foreground" />
                </svg>
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-[32px] h-[32px] rounded-md ${
                    currentPage === page ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-[32px] h-[32px] flex items-center justify-center rounded-md border border-border hover:bg-muted">
                <svg className="size-[12px]" fill="none" viewBox="0 0 6.50783 10.4528">
                  <path d={svgPaths.p262cf000} fill="currentColor" className="text-muted-foreground" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Detail Sheet ── */}
      {isDetailSheetOpen && detailRow && (
        <>
          <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setIsDetailSheetOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-[400px] bg-card z-50 flex flex-col shadow-xl">
            {/* Header */}
            <div className="flex items-center gap-[12px] px-[24px] py-[16px] border-b border-sidebar-border">
              <button
                onClick={() => setIsDetailSheetOpen(false)}
                className="w-[24px] h-[24px] flex items-center justify-center hover:opacity-70"
              >
                <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <span className="text-base font-medium">精算情報</span>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col px-[24px] py-[24px] gap-[24px] text-sm">

                {/* 決済番号 / 取引ID / ステータス */}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>決済番号</span>
                    <span
                      className="text-accent-foreground underline truncate max-w-[220px] text-right"
                      onMouseEnter={(e) => showTooltip(detailRow.paymentNumber, e)}
                      onMouseLeave={() => setTooltip(null)}
                    >{detailRow.paymentNumber}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>取引ID</span>
                    <span
                      className="text-accent-foreground underline truncate max-w-[220px] text-right"
                      onMouseEnter={(e) => showTooltip(detailRow.chargeId, e)}
                      onMouseLeave={() => setTooltip(null)}
                    >{detailRow.chargeId}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>ステータス</span>
                    <span className="flex items-center gap-[6px]">
                      <span className={`w-[7px] h-[7px] rounded-full flex-shrink-0 ${
                        detailRow.status === '完了' ? 'bg-green-500' :
                        detailRow.status === '予定' ? 'bg-blue-500' :
                        detailRow.status === '失敗' ? 'bg-red-500' : 'bg-gray-400'
                      }`} />
                      <span
                        className="underline cursor-default"
                        onMouseEnter={(e) => showTooltip(
                          detailRow.status === '完了' ? '精算金のお支払いが完了しました。' :
                          detailRow.status === '予定' ? '施術券を使用処理し、まもなくお支払いの予定です。' :
                          detailRow.status === '失敗' ? '(失敗事由)' : detailRow.status,
                          e, 'right'
                        )}
                        onMouseLeave={() => setTooltip(null)}
                      >{detailRow.status}</span>
                    </span>
                  </div>
                </div>

                <div className="h-px bg-sidebar-border" />

                {/* 支払日 / 利用処理日時 / 決済日時 */}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>支払日</span>
                    <span className="text-right">{detailRow.disbursementDate}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>利用処理日時</span>
                    <span className="text-right">{detailRow.usageProcessDatetime ?? '-'}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>決済日時</span>
                    <span className="text-right">{detailRow.paymentDatetime ?? '-'}</span>
                  </div>
                </div>

                <div className="h-px bg-sidebar-border" />

                {/* 決済金額 / 使用ポイント / 手数料 / 手数料率 / 精算金額 */}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>決済金額</span>
                    <span className="text-right">{detailRow.paymentAmount ?? '-'}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>使用ポイント</span>
                    <span className="text-right">{detailRow.usedPoints}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>手数料</span>
                    <span className="text-right">{detailRow.fee}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>手数料率</span>
                    <span className="text-right">{detailRow.feeRate}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap font-semibold">精算金額</span>
                    <span className="text-right font-semibold">{detailRow.settlementAmount}</span>
                  </div>
                </div>

                <div className="h-px bg-sidebar-border" />

                {/* 決済者 / 携帯電話番号 / 決済手段 */}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>決済者</span>
                    <span className="text-right">{detailRow.payer}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>携帯電話番号</span>
                    <span className="text-right">{detailRow.phoneNumber ?? '-'}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>決済手段</span>
                    <span className="text-right">{detailRow.paymentMeans ?? '-'}</span>
                  </div>
                </div>

                <div className="h-px bg-sidebar-border" />

                {/* 決済商品 / 商品定価 / 商品販売価格 */}
                <div className="flex flex-col gap-[12px]">
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>決済商品</span>
                    <span className="text-right">{detailRow.productName ?? '-'}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>商品定価</span>
                    <span className="text-right">{detailRow.productOriginalPrice ?? '-'}</span>
                  </div>
                  <div className="flex justify-between gap-[8px]">
                    <span className="whitespace-nowrap" style={{ color: 'rgba(0,0,0,0.88)' }}>商品販売価格</span>
                    <span className="text-right">{detailRow.productSalePrice ?? '-'}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Tooltip ── */}
      {tooltip && (
        <div
          className="fixed z-[200] bg-foreground text-background text-[14px] rounded-md px-[10px] py-[6px] pointer-events-none shadow-md"
          style={{
            left: tooltip.x,
            top: tooltip.y - 8,
            transform: tooltip.align === 'right' ? 'translate(-100%, -100%)' : 'translate(-50%, -100%)',
            whiteSpace: 'pre-line',
            maxWidth: '220px',
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}
