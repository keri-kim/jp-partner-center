import svgPaths from "./svg-w02s9274lo";

function Frame8() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.65)]">
        <p className="leading-[22px]">조정 예약 내역</p>
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
      <p className="flex-[1_0_0] font-['Pretendard_JP:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.88)]">1657f69a-ade3-484e-b602-dbab43a66e6a</p>
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

function Frame9() {
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[6px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.65)]">
        <p className="leading-[22px]">시술일</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#f5222d]">
        <p className="leading-[22px]">*</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame13 />
      <button className="content-stretch cursor-pointer flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="*Select*">
        <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[6px] shrink-0 w-full" data-name="Select Input">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Pretendard_JP:Regular',sans-serif] h-[32px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.25)] text-left">
                <p className="leading-[22px]">2026. 04. 10</p>
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

function Frame14() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[6px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.65)]">
        <p className="leading-[22px]">시술명</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,0,0,0.45)]">
        <p className="leading-[22px]">선택</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame14 />
      <button className="content-stretch cursor-pointer flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="*Select*">
        <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[6px] shrink-0 w-full" data-name="Select Input">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center px-[12px] relative w-full">
              <div className="flex flex-[1_0_0] flex-col font-['Pretendard_JP:Regular',sans-serif] h-[32px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(0,0,0,0.25)] text-left">
                <p className="leading-[22px]">풀페이스 이벤트</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame7 />
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex font-['pretendard-jp-variable:medium',sans-serif] gap-[6px] items-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
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

function Frame4() {
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

function Frame3() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame6 />
    </div>
  );
}

function ValueCurrency() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center justify-end min-h-px min-w-px relative" data-name="value+currency">
      <p className="relative shrink-0 text-center w-[16px]">¥</p>
      <p className="relative shrink-0 whitespace-nowrap">187,500</p>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex font-['Pretendard_JP:Regular',sans-serif] gap-[12px] items-start leading-[22px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.65)] w-full" data-name="Item">
      <p className="relative shrink-0 w-[110px]">시술 금액</p>
      <ValueCurrency />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Item />
    </div>
  );
}

function Id() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-0 p-[10px] top-0 w-[372px]" data-name="ID 선택 - 기존 청구건 수정">
      <Frame10 />
      <Frame11 />
      <Frame />
    </div>
  );
}

export default function Frame16() {
  return (
    <div className="relative size-full">
      <Id />
    </div>
  );
}