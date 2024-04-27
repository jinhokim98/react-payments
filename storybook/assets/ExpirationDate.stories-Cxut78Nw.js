import{j as t}from"./styled-components.browser.esm-DO55u7qc.js";import{I as u}from"./Input-BQ-B39iY.js";import{I as X}from"./InputField-CUVGbzRa.js";import{F as k,M as z}from"./Message-BA-aIYFJ.js";import{C as J}from"./Condition-BRmbTLfl.js";import{f as e}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:K,CAPTION:Q,LABEL:U,ERROR:c,PLACEHOLDER:d}=z,{MAX_LENGTH:r}=J,v=({expirationDateState:A,setExpirationDateState:R,expirationDateErrorState:q,showNextFieldOnLastElementBlur:P})=>{const{month:l,year:m}=A,{setMonth:b,setYear:G}=R,{isMonthError:E,isYearError:x}=q,h=E?c.month:x?c.year:"",H=l.length===r.expirationDate&&m.length===r.expirationDate;return t.jsx(k,{title:K.expirationDate,caption:Q.expirationDate,children:t.jsxs(X,{label:U.expirationDate,error:h,children:[t.jsx(u,{"aria-label":"유효기간-월",placeholder:d.month,value:l,maxLength:r.expirationDate,onChange:b,"aria-invalid":E,autoFocus:!0}),t.jsx(u,{"aria-label":"유효기간-년도",placeholder:d.year,value:m,maxLength:r.expirationDate,onChange:G,"aria-invalid":x,onBlur:()=>{P({isFill:H,isFieldError:h!=="",nextIndex:3})}})]})})};v.__docgenInfo={description:"",methods:[],displayName:"ExpirationDate",props:{expirationDateState:{required:!0,tsType:{name:"ExpirationDateState"},description:""},setExpirationDateState:{required:!0,tsType:{name:"SetExpirationDateState"},description:""},expirationDateErrorState:{required:!0,tsType:{name:"ExpirationDateErrorState"},description:""},showNextFieldOnLastElementBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ShowNextFieldOnLastElementBlurParams) => void",signature:{arguments:[{type:{name:"ShowNextFieldOnLastElementBlurParams"},name:"params"}],return:{name:"void"}}},description:""}}};const ae={title:"FormField_유효기간",component:v},a={args:{expirationDateState:{month:"",year:""},setExpirationDateState:{setMonth:e(),setYear:e()},expirationDateErrorState:{isMonthError:!1,isYearError:!1},showNextFieldOnLastElementBlur:e()}},n={args:{expirationDateState:{month:"12",year:"24"},setExpirationDateState:{setMonth:e(),setYear:e()},expirationDateErrorState:{isMonthError:!1,isYearError:!1},showNextFieldOnLastElementBlur:e()}},o={args:{expirationDateState:{month:"쿠",year:"24"},setExpirationDateState:{setMonth:e(),setYear:e()},expirationDateErrorState:{isMonthError:!0,isYearError:!1},showNextFieldOnLastElementBlur:e()}},s={args:{expirationDateState:{month:"3",year:"24"},setExpirationDateState:{setMonth:e(),setYear:e()},expirationDateErrorState:{isMonthError:!0,isYearError:!1},showNextFieldOnLastElementBlur:e()}},i={args:{expirationDateState:{month:"12",year:"쿠"},setExpirationDateState:{setMonth:e(),setYear:e()},expirationDateErrorState:{isMonthError:!1,isYearError:!0},showNextFieldOnLastElementBlur:e()}},p={args:{expirationDateState:{month:"12",year:"234"},setExpirationDateState:{setMonth:e(),setYear:e()},expirationDateErrorState:{isMonthError:!1,isYearError:!0},showNextFieldOnLastElementBlur:e()}};var D,S,f;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '',
      year: ''
    },
    setExpirationDateState: {
      setMonth: fn(),
      setYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: false,
      isYearError: false
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var _,M,g;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '12',
      year: '24'
    },
    setExpirationDateState: {
      setMonth: fn(),
      setYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: false,
      isYearError: false
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(g=(M=n.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var F,Y,L;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '쿠',
      year: '24'
    },
    setExpirationDateState: {
      setMonth: fn(),
      setYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: true,
      isYearError: false
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(L=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var y,O,N;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '3',
      year: '24'
    },
    setExpirationDateState: {
      setMonth: fn(),
      setYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: true,
      isYearError: false
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(N=(O=s.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var B,w,I;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '12',
      year: '쿠'
    },
    setExpirationDateState: {
      setMonth: fn(),
      setYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: false,
      isYearError: true
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var T,C,j;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '12',
      year: '234'
    },
    setExpirationDateState: {
      setMonth: fn(),
      setYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: false,
      isYearError: true
    },
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const ne=["기본","정상입력","월_입력의_형식이_아닌_경우","월_입력_길이가_맞지_않은_경우","년_입력의_형식이_아닌_경우","년_입력의_길이가_맞지_않은_경우"];export{ne as __namedExportsOrder,ae as default,a as 기본,p as 년_입력의_길이가_맞지_않은_경우,i as 년_입력의_형식이_아닌_경우,s as 월_입력_길이가_맞지_않은_경우,o as 월_입력의_형식이_아닌_경우,n as 정상입력};
