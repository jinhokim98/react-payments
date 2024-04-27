import{u as o,j as e}from"./styled-components.browser.esm-DO55u7qc.js";const t=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,s=o.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
  gap: 0.4rem;
`,n=o.h2`
  ${r=>r.theme.typography.title};
  color: ${r=>r.theme.color.black};
`,d=o.p`
  ${r=>r.theme.typography.caption};
  color: ${r=>r.theme.color.gray};
`,i=({title:r,caption:a,children:c})=>e.jsxs(t,{children:[e.jsxs(s,{children:[e.jsx(n,{children:r}),e.jsx(d,{children:a})]}),c]});i.__docgenInfo={description:"",methods:[],displayName:"FormField"};const m={cardNumber:"결제할 카드 번호를 입력해 주세요",expirationDate:"카드 유효기간을 입력해 주세요",userName:"카드 소유자 이름을 입력해 주세요",cardBrand:"카드사를 선택해 주세요",cvcNumber:"CVC 번호를 입력해 주세요",password:"비밀번호를 입력해 주세요"},l={cardNumber:"본인 명의의 카드만 결제 가능합니다.",expirationDate:"월/년도(MMYY)를 순서대로 입력해 주세요.",cardBrand:"현재 국내 카드사만 가능합니다.",password:"앞의 2자리를 입력해주세요"},p={cardNumber:"카드 번호",expirationDate:"유효기간",userName:"소유자 이름",cvcNumber:"cvc",password:"비밀번호 앞 2자리"},u={cardNumber:"4자리 숫자를 입력해주세요.",month:"01~12 사이의 숫자를 입력해주세요.",year:"2자리 숫자를 입력해주세요.",userName:"성과 이름을 띄어쓰기를 포함한 대문자로만 입력해주세요.",cvcNumber:"CVC 숫자는 3자리 숫자이어야합니다.",password:"2자리 숫자를 입력해주세요."},N={cardNumber:"1234",month:"MM",year:"YY",userName:"JOHN DAE",cardBrand:"카드사를 선택해주세요",cvcNumber:"CVC 숫자를 입력해주세요.",password:"비밀번호를 입력해주세요."},x={TITLE:m,CAPTION:l,LABEL:p,ERROR:u,PLACEHOLDER:N};export{i as F,x as M};
