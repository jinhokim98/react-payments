import{j as t}from"./styled-components.browser.esm-DO55u7qc.js";import{F as G,M as H}from"./Message-BA-aIYFJ.js";import{I as s}from"./Input-BQ-B39iY.js";import{I as X}from"./InputField-CUVGbzRa.js";import{C as k}from"./Condition-BRmbTLfl.js";import{f as r}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:z,CAPTION:J,LABEL:K,ERROR:Q,PLACEHOLDER:a}=H,{MAX_LENGTH:e}=k,v=({cardNumberState:I,setCardNumberState:j,cardNumberErrorState:A,showNextFieldOnLastElementBlur:y})=>{const{first:u,second:c,third:m,fourth:l}=I,{setFirst:D,setSecond:R,setThird:q,setFourth:M}=j,{isFirstError:h,isSecondError:f,isThirdError:E,isFourthError:N}=A,F=h||f||E||N?Q.cardNumber:"",P=u.length===e.cardNumber&&c.length===e.cardNumber&&m.length===e.cardNumber&&l.length===e.cardNumber;return t.jsx(G,{title:z.cardNumber,caption:J.cardNumber,children:t.jsxs(X,{label:K.cardNumber,error:F,children:[t.jsx(s,{"aria-label":"첫_번째_카드번호",placeholder:a.cardNumber,value:u,maxLength:e.cardNumber,onChange:D,"aria-invalid":h,autoFocus:!0}),t.jsx(s,{"aria-label":"두_번째_카드번호",placeholder:a.cardNumber,value:c,maxLength:e.cardNumber,onChange:R,"aria-invalid":f}),t.jsx(s,{"aria-label":"세_번째_카드번호",placeholder:a.cardNumber,value:m,maxLength:e.cardNumber,onChange:q,"aria-invalid":E}),t.jsx(s,{"aria-label":"네_번째_카드번호",placeholder:a.cardNumber,value:l,maxLength:e.cardNumber,onChange:M,"aria-invalid":N,onBlur:()=>y({isFill:P,isFieldError:F!=="",nextIndex:1})})]})})};v.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumberState:{required:!0,tsType:{name:"CardNumberState"},description:""},setCardNumberState:{required:!0,tsType:{name:"SetCardNumberState"},description:""},cardNumberErrorState:{required:!0,tsType:{name:"CardNumberErrorState"},description:""},showNextFieldOnLastElementBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ShowNextFieldOnLastElementBlurParams) => void",signature:{arguments:[{type:{name:"ShowNextFieldOnLastElementBlurParams"},name:"params"}],return:{name:"void"}}},description:""}}};const er={title:"FormField_카드번호",component:v},n={args:{cardNumberState:{first:"",second:"",third:"",fourth:""},setCardNumberState:{setFirst:r(),setSecond:r(),setThird:r(),setFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!1,isThirdError:!1,isFourthError:!1},showNextFieldOnLastElementBlur:r()}},o={args:{cardNumberState:{first:"1234",second:"5678",third:"1234",fourth:"1234"},setCardNumberState:{setFirst:r(),setSecond:r(),setThird:r(),setFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!1,isThirdError:!1,isFourthError:!1},showNextFieldOnLastElementBlur:r()}},i={args:{cardNumberState:{first:"스토리북",second:"5678",third:"너무행복",fourth:"1234"},setCardNumberState:{setFirst:r(),setSecond:r(),setThird:r(),setFourth:r()},cardNumberErrorState:{isFirstError:!0,isSecondError:!1,isThirdError:!0,isFourthError:!1},showNextFieldOnLastElementBlur:r()}},d={args:{cardNumberState:{first:"1234",second:"124",third:"1234",fourth:"1"},setCardNumberState:{setFirst:r(),setSecond:r(),setThird:r(),setFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!0,isThirdError:!1,isFourthError:!0},showNextFieldOnLastElementBlur:r()}};var S,b,p;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,x,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var C,_,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var B,O,w;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(w=(O=d.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const tr=["기본","정상입력","숫자형식이_아닌경우","카드번호_자리수가_맞지_않은_경우"];export{tr as __namedExportsOrder,er as default,n as 기본,i as 숫자형식이_아닌경우,o as 정상입력,d as 카드번호_자리수가_맞지_않은_경우};
