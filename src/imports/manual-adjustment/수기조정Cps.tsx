import svgPaths from "./svg-vpil53h6zm";

function Close() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Close">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <path clipRule="evenodd" d={svgPaths.p2c634a80} fill="var(--fill-0, black)" fillOpacity="0.45" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Head() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Head">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.06)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative w-full">
          <div className="overflow-clip relative rounded-[4px] shrink-0 size-[20px]" data-name="Button Close">
            <Close />
          </div>
          <p className="flex-[1_0_0] font-['Pretendard_JP:SemiBold',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(0,0,0,0.88)]">청구 금액 수기 등록</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[6px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.65)]">
        <p className="leading-[22px]">대상 클리닉</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#f5222d]">
        <p className="leading-[22px]">*</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame9 />
      <button className="content-stretch cursor-pointer flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="*Select*">
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Select Input">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Pretendard_JP:Regular',sans-serif] h-[32px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.4)] text-left">
                <p className="leading-[22px]">클리닉명, 클리닉ID 검색</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / DownOutlined">
                <div className="absolute bottom-1/4 left-[12.89%] right-[12.89%] top-1/4" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8748 8">
                    <path d={svgPaths.p5044900} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.65)]">
        <p className="leading-[22px]">조정 대상 예약</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.45)]">
        <p className="leading-[22px]">선택</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / SearchOutlined">
        <div className="absolute inset-[10.94%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5001 12.5001">
            <path d={svgPaths.pfc23900} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Pretendard_JP:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.25)]">거래 ID 또는 예약 ID 검색</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="font-['Pretendard_JP:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] whitespace-nowrap">검색</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="*Input* / Basic">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[12px] relative w-full">
            <Content />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-white content-stretch flex flex-col items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="*Button*">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <Content1 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.65)]">
        <p className="leading-[22px]">시술일</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#f5222d]">
        <p className="leading-[22px]">*</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame17 />
      <button className="content-stretch cursor-pointer flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="*Select*">
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Select Input">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Pretendard_JP:Regular',sans-serif] h-[32px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.25)] text-left">
                <p className="leading-[22px]">YYYY .MM .DD</p>
              </div>
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon / CalendarOutlined">
                <div className="absolute inset-[10.94%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
                    <path d={svgPaths.p34c0e00} fill="var(--fill-0, black)" fillOpacity="0.25" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.65)]">
        <p className="leading-[22px]">시술명</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.45)]">
        <p className="leading-[22px]">선택</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame18 />
      <button className="content-stretch cursor-pointer flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="*Select*">
        <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Select Input">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Pretendard_JP:Regular',sans-serif] h-[32px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.25)] text-left">
                <p className="leading-[22px]">시술명 입력</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame11 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.65)]">
        <p className="leading-[22px]">조정 금액</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#f5222d]">
        <p className="leading-[22px]">*</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Pretendard_JP:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#4c6ef5] text-[14px] text-left whitespace-nowrap">+</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Pretendard_JP:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.88)] text-left whitespace-nowrap">-</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch cursor-pointer flex items-start relative rounded-[4px] shrink-0" data-name="*Radio Group*">
        <button className="bg-white content-stretch flex flex-col h-[32px] items-center justify-center px-[16px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Radio Button">
          <div aria-hidden="true" className="absolute border border-[#4c6ef5] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
          <Content2 />
        </button>
        <button className="bg-white content-stretch flex flex-col h-[32px] items-center justify-center px-[16px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Radio Button">
          <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.15)] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
          <Content3 />
        </button>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center leading-[22px] min-h-px min-w-px not-italic relative text-[14px]" data-name="Content">
      <p className="font-['Pretendard:Regular',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.88)] whitespace-nowrap">¥</p>
      <p className="flex-[1_0_0] font-['Pretendard_JP:Regular',sans-serif] min-h-px min-w-px relative text-[rgba(0,0,0,0.25)]">금액 입력</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="*Input* / Basic">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[12px] relative w-full">
            <Content4 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame12 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['pretendard-jp-variable:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
        <p className="leading-[22px]">조정 사유</p>
      </div>
    </div>
  );
}

function Resizer() {
  return (
    <div className="absolute bottom-[2px] h-[8px] right-[2.2px] w-[7.805px]" data-name="Resizer">
      <div className="absolute inset-[-2.18%_-2.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16277 8.34916">
          <g id="Resizer">
            <path d={svgPaths.pe3835c0} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.88" strokeWidth="0.5" />
            <path d={svgPaths.pae08f08} id="Vector 2" stroke="var(--stroke-0, black)" strokeOpacity="0.88" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10 />
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-full" data-name="*Input* / Textarea">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[12px] py-[5px] relative size-full">
            <p className="flex-[1_0_0] font-['Pretendard_JP:Regular',sans-serif] h-full leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.25)]">클리닉에 전달할 금액 조정 사유 입력</p>
            <Resizer />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Resizer1() {
  return (
    <div className="absolute bottom-[2px] h-[8px] right-[2.2px] w-[7.805px]" data-name="Resizer">
      <div className="absolute inset-[-2.18%_-2.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16277 8.34916">
          <g id="Resizer">
            <path d={svgPaths.pe3835c0} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.88" strokeWidth="0.5" />
            <path d={svgPaths.pae08f08} id="Vector 2" stroke="var(--stroke-0, black)" strokeOpacity="0.88" strokeWidth="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['pretendard-jp-variable:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] whitespace-nowrap">
        <p className="leading-[22px]">관리자용 메모</p>
      </div>
      <div className="bg-white h-[80px] relative rounded-[4px] shrink-0 w-full" data-name="*Input* / Textarea">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[12px] py-[5px] relative size-full">
            <p className="flex-[1_0_0] font-['Pretendard_JP:Regular',sans-serif] h-full leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.25)]">{`담당자명 또는 히스토리 관리를 위한 내용 입력 `}</p>
            <Resizer1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[48px] pt-[24px] px-[24px] relative w-full">
        <Frame />
        <div className="h-px relative shrink-0 w-full" data-name="*Divider Horizontal*">
          <div className="-translate-y-1/2 absolute h-0 left-0 right-0 top-1/2" data-name="Line">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
                <path d="M0 0.5H352" id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.06" />
              </svg>
            </div>
          </div>
        </div>
        <Frame3 />
        <Frame16 />
        <Frame1 />
        <div className="h-px relative shrink-0 w-full" data-name="*Divider Horizontal*">
          <div className="-translate-y-1/2 absolute h-0 left-0 right-0 top-1/2" data-name="Line">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
                <path d="M0 0.5H352" id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.06" />
              </svg>
            </div>
          </div>
        </div>
        <Frame6 />
        <Frame7 />
      </div>
    </div>
  );
}

function Cps1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative w-full" data-name="금액 보정 / CPS">
      <Head />
      <Body />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center relative shrink-0" data-name="Content">
      <p className="font-['Pretendard_JP:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">등록</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pb-[24px] pt-[16px] px-[24px] relative w-full">
          <div className="bg-[#4c6ef5] content-stretch flex flex-col items-center justify-center px-[16px] relative rounded-[4px] shrink-0" data-name="*Button*">
            <div aria-hidden="true" className="absolute border border-[#4c6ef5] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <Content5 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cps() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="수기 조정 - CPS">
      <Cps1 />
      <Frame8 />
    </div>
  );
}