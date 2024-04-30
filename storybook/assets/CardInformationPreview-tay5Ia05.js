import{u as o,j as r}from"./styled-components.browser.esm-DO55u7qc.js";import{t}from"./theme-CdHeXgP_.js";import{C as s}from"./Condition-DPDJyMct.js";const k=o.section`
  position: relative;
  width: 21.2rem;
  height: 13.2rem;
  perspective: 100rem;
`,S=o.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.999s;

  transform: ${e=>e.$isFocusCVCPreview?"rotateY(180deg)":"rotateY(0deg)"};
`,I=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0.8rem 1.2rem;
  box-shadow: 0.3rem 0.3rem 0.5rem 0rem ${e=>e.theme.color.dropShadow};
  border-radius: 0.4rem;

  /* z-index: ${e=>e.$isFocusCVCPreview?-1:2}; */
  background-color: ${e=>e.$brandColor};
  backface-visibility: hidden;
  transform: rotateY(0deg);
`,L=o.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0.3rem 0.3rem 0.5rem 0rem ${e=>e.theme.color.dropShadow};
  border-radius: 0.4rem;

  /* z-index: ${e=>e.$isFocusCVCPreview?2:-1}; */
  background-color: ${e=>e.theme.color.lightGray};
  backface-visibility: hidden;
  transform: rotateY(180deg);
`,N=o.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  height: 2.4rem;
  padding-right: 1.6rem;

  top: 8.4rem;
  left: 0;
  background-color: ${e=>e.$brandColor};
  ${e=>e.theme.typography.paragraph2};
  color: ${e=>e.theme.color.white};
`,H=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
`,d=o.img`
  width: 3.6rem;
  height: 2.2rem;
`,V=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  margin: 1.4rem 1.3rem 0.4rem 0.5rem;
`,F=o.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`,i=o.div`
  flex: 1;
  ${e=>e.$typo};
  color: ${e=>e.theme.color.white};
`,M="data:image/svg+xml,%3csvg%20width='38'%20height='24'%20viewBox='0%200%2038%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M33.9362%201H4.06383C2.37172%201%201%202.27093%201%203.83871V20.1613C1%2021.7291%202.37172%2023%204.06383%2023H33.9362C35.6283%2023%2037%2021.7291%2037%2020.1613V3.83871C37%202.27093%2035.6283%201%2033.9362%201Z'%20fill='%23DDCD78'%20stroke='%23DDCD78'%20stroke-opacity='0.1'%20stroke-width='0.5'/%3e%3c/svg%3e",P="data:image/svg+xml,%3csvg%20width='83'%20height='57'%20viewBox='0%200%2083%2057'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.592863'%20y='0.592863'%20width='81.815'%20height='55.7291'%20rx='6.52149'%20fill='white'%20stroke='%23D9D9D9'%20stroke-width='1.18573'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.1973%2038.5556H20.169L16.3985%2024.1707C16.2195%2023.509%2015.8395%2022.924%2015.2805%2022.6483C13.8856%2021.9554%2012.3484%2021.404%2010.6715%2021.1259V20.5721H18.7716C19.8895%2020.5721%2020.728%2021.404%2020.8677%2022.3702L22.8241%2032.7465L27.8499%2020.5721H32.7384L25.1973%2038.5556ZM35.5332%2038.5556H30.7844L34.6947%2020.5721H39.4435L35.5332%2038.5556ZM45.5873%2025.5541C45.727%2024.5855%2046.5655%2024.0317%2047.5436%2024.0317C49.0808%2023.8926%2050.7552%2024.1707%2052.1527%2024.8612L52.9911%2020.9892C51.5937%2020.4354%2050.0565%2020.1573%2048.6616%2020.1573C44.0526%2020.1573%2040.6988%2022.6483%2040.6988%2026.1055C40.6988%2028.7355%2043.0744%2030.1165%2044.7513%2030.9484C46.5655%2031.7779%2047.2642%2032.3318%2047.1244%2033.1613C47.1244%2034.4056%2045.727%2034.9594%2044.332%2034.9594C42.6551%2034.9594%2040.9782%2034.5446%2039.4435%2033.8518L38.6051%2037.7261C40.282%2038.4166%2042.0962%2038.6947%2043.7731%2038.6947C48.9411%2038.8313%2052.1527%2036.3428%2052.1527%2032.6075C52.1527%2027.9036%2045.5873%2027.6279%2045.5873%2025.5541ZM68.772%2038.5556L65.0014%2020.5721H60.9514C60.1129%2020.5721%2059.2745%2021.1259%2058.995%2021.9554L52.0128%2038.5556H56.9013L57.8771%2035.928H63.8835L64.4425%2038.5556H68.772ZM61.6502%2025.415L63.0452%2032.1927H59.1348L61.6502%2025.415Z'%20fill='%23172B85'/%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20width='83'%20height='57'%20viewBox='0%200%2083%2057'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.592863'%20y='0.592863'%20width='81.815'%20height='55.7291'%20rx='6.52149'%20fill='white'%20stroke='%23D9D9D9'%20stroke-width='1.18573'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M42.0933%2040.6868C39.2675%2043.1253%2035.602%2044.5974%2031.5967%2044.5974C22.6595%2044.5974%2015.4144%2037.2683%2015.4144%2028.2273C15.4144%2019.1864%2022.6595%2011.8572%2031.5967%2011.8572C35.602%2011.8572%2039.2675%2013.3293%2042.0933%2015.7679C44.919%2013.3293%2048.5845%2011.8573%2052.5899%2011.8573C61.5271%2011.8573%2068.7721%2019.1864%2068.7721%2028.2273C68.7721%2037.2683%2061.5271%2044.5974%2052.5899%2044.5974C48.5845%2044.5974%2044.919%2043.1253%2042.0933%2040.6868Z'%20fill='%23ED0006'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M42.0933%2040.6868C45.5726%2037.6842%2047.7789%2033.2164%2047.7789%2028.2273C47.7789%2023.2382%2045.5726%2018.7704%2042.0933%2015.7679C44.919%2013.3293%2048.5845%2011.8572%2052.5899%2011.8572C61.5271%2011.8572%2068.7721%2019.1864%2068.7721%2028.2273C68.7721%2037.2683%2061.5271%2044.5974%2052.5899%2044.5974C48.5845%2044.5974%2044.919%2043.1253%2042.0933%2040.6868Z'%20fill='%23F9A000'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M42.0934%2015.7679C45.5727%2018.7705%2047.7789%2023.2383%2047.7789%2028.2273C47.7789%2033.2164%2045.5727%2037.6842%2042.0934%2040.6867C38.6141%2037.6842%2036.4078%2033.2164%2036.4078%2028.2273C36.4078%2023.2383%2038.614%2018.7705%2042.0934%2015.7679Z'%20fill='%23FF5E00'/%3e%3c/svg%3e",l={default:t.color.darkGray,BC카드:t.color.brand.bc,신한카드:t.color.brand.shinhan,카카오뱅크:t.color.brand.kakao,현대카드:t.color.brand.hyundai,우리카드:t.color.brand.woori,롯데카드:t.color.brand.lotte,하나카드:t.color.brand.hana,국민카드:t.color.brand.kookmin},T=({cardNumberState:e,expirationDateState:p,userNameState:m,showImageCondition:C,cardBrandState:a,cvcNumberState:g,isFocusCVCPreview:n,setIsFocusCVCPreview:u})=>{const{first:w,second:v,third:f,fourth:x}=e,{month:c,year:h}=p,y=c&&h,{visaShowCondition:b,masterCardShowCondition:$}=C,j=()=>{u(D=>!D)};return r.jsx(k,{children:r.jsxs(S,{onClick:j,$isFocusCVCPreview:n,children:[r.jsxs(I,{$brandColor:a!==""?l[a]:l.default,$isFocusCVCPreview:n,children:[r.jsxs(H,{children:[r.jsx(d,{src:M,alt:""}),$&&r.jsx(d,{src:R,alt:"masterCard"}),b&&r.jsx(d,{src:P,alt:"visa"})]}),r.jsxs(V,{children:[r.jsxs(F,{children:[r.jsx(i,{$typo:t.typography.paragraph1,children:w}),r.jsx(i,{$typo:t.typography.paragraph1,children:v}),r.jsx(i,{$typo:t.typography.paragraph1,children:s.hiddenCardNumber.repeat(String(f??"").length)}),r.jsx(i,{$typo:t.typography.paragraph1,children:s.hiddenCardNumber.repeat(String(x??"").length)})]}),r.jsx(i,{$typo:t.typography.paragraph2,children:`${c??""}${y?s.splitSlash:""}${h??""}`}),r.jsx(i,{$typo:t.typography.paragraph2,children:m??""})]})]}),r.jsx(L,{$isFocusCVCPreview:n,children:r.jsx(N,{$brandColor:l[a??"default"],children:g})})]})})};T.__docgenInfo={description:"",methods:[],displayName:"CardInformationPreview",props:{cardNumberState:{required:!0,tsType:{name:"CardNumberState"},description:""},expirationDateState:{required:!0,tsType:{name:"ExpirationDateState"},description:""},userNameState:{required:!0,tsType:{name:"string"},description:""},showImageCondition:{required:!0,tsType:{name:"ShowImageCondition"},description:""},cardBrandState:{required:!0,tsType:{name:"string"},description:""},cvcNumberState:{required:!0,tsType:{name:"string"},description:""},isFocusCVCPreview:{required:!0,tsType:{name:"boolean"},description:""},setIsFocusCVCPreview:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""}}};export{T as C};