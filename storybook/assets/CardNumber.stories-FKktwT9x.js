import{j as e}from"./styled-components.browser.esm-DO55u7qc.js";import{F as G,M as H}from"./Message-DSbTiGbF.js";import{I as t}from"./Input-BQ-B39iY.js";import{I as P}from"./InputField-CUVGbzRa.js";import{C as X}from"./Condition-DPDJyMct.js";import{f as r}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:k,CAPTION:w,LABEL:z,ERROR:J,PLACEHOLDER:s}=H,{MAX_LENGTH:a}=X,x=({cardNumberState:L,setCardNumberState:I,cardNumberErrorState:j})=>{const{first:v,second:A,third:B,fourth:O}=L,{setFirst:D,setSecond:R,setThird:y,setFourth:M}=I,{isFirstError:u,isSecondError:c,isThirdError:m,isFourthError:h}=j,q=u||c||m||h?J.cardNumber:"";return e.jsx(G,{title:k.cardNumber,caption:w.cardNumber,children:e.jsxs(P,{label:z.cardNumber,error:q,children:[e.jsx(t,{"aria-label":"첫_번째_카드번호",placeholder:s.cardNumber,value:v,maxLength:a.cardNumber,onChange:D,"aria-invalid":u,autoFocus:!0}),e.jsx(t,{"aria-label":"두_번째_카드번호",placeholder:s.cardNumber,value:A,maxLength:a.cardNumber,onChange:R,"aria-invalid":c}),e.jsx(t,{"aria-label":"세_번째_카드번호",placeholder:s.cardNumber,value:B,maxLength:a.cardNumber,onChange:y,"aria-invalid":m}),e.jsx(t,{"aria-label":"네_번째_카드번호",placeholder:s.cardNumber,value:O,maxLength:a.cardNumber,onChange:M,"aria-invalid":h})]})})};x.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumberState:{required:!0,tsType:{name:"CardNumberState"},description:""},setCardNumberState:{required:!0,tsType:{name:"SetCardNumberState"},description:""},cardNumberErrorState:{required:!0,tsType:{name:"CardNumberErrorState"},description:""}}};const $={title:"FormField_카드번호",component:x},o={args:{cardNumberState:{first:"",second:"",third:"",fourth:""},setCardNumberState:{setFirst:r(),setSecond:r(),setThird:r(),setFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!1,isThirdError:!1,isFourthError:!1}}},n={args:{cardNumberState:{first:"1234",second:"5678",third:"1234",fourth:"1234"},setCardNumberState:{setFirst:r(),setSecond:r(),setThird:r(),setFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!1,isThirdError:!1,isFourthError:!1}}},i={args:{cardNumberState:{first:"스토리북",second:"5678",third:"너무행복",fourth:"1234"},setCardNumberState:{setFirst:r(),setSecond:r(),setThird:r(),setFourth:r()},cardNumberErrorState:{isFirstError:!0,isSecondError:!1,isThirdError:!0,isFourthError:!1}}},d={args:{cardNumberState:{first:"1234",second:"124",third:"1234",fourth:"1"},setCardNumberState:{setFirst:r(),setSecond:r(),setThird:r(),setFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!0,isThirdError:!1,isFourthError:!0}}};var f,l,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    cardNumberState: {
      first: '',
      second: '',
      third: '',
      fourth: ''
    },
    setCardNumberState: {
      setFirst: fn(),
      setSecond: fn(),
      setThird: fn(),
      setFourth: fn()
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: false,
      isThirdError: false,
      isFourthError: false
    }
  }
}`,...(E=(l=o.parameters)==null?void 0:l.docs)==null?void 0:E.source}}};var S,b,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    cardNumberState: {
      first: '1234',
      second: '5678',
      third: '1234',
      fourth: '1234'
    },
    setCardNumberState: {
      setFirst: fn(),
      setSecond: fn(),
      setThird: fn(),
      setFourth: fn()
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: false,
      isThirdError: false,
      isFourthError: false
    }
  }
}`,...(N=(b=n.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var p,F,T;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    cardNumberState: {
      first: '스토리북',
      second: '5678',
      third: '너무행복',
      fourth: '1234'
    },
    setCardNumberState: {
      setFirst: fn(),
      setSecond: fn(),
      setThird: fn(),
      setFourth: fn()
    },
    cardNumberErrorState: {
      isFirstError: true,
      isSecondError: false,
      isThirdError: true,
      isFourthError: false
    }
  }
}`,...(T=(F=i.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var C,_,g;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cardNumberState: {
      first: '1234',
      second: '124',
      third: '1234',
      fourth: '1'
    },
    setCardNumberState: {
      setFirst: fn(),
      setSecond: fn(),
      setThird: fn(),
      setFourth: fn()
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: true,
      isThirdError: false,
      isFourthError: true
    }
  }
}`,...(g=(_=d.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const rr=["기본","정상입력","숫자형식이_아닌경우","카드번호_자리수가_맞지_않은_경우"];export{rr as __namedExportsOrder,$ as default,o as 기본,i as 숫자형식이_아닌경우,n as 정상입력,d as 카드번호_자리수가_맞지_않은_경우};
