import{j as e}from"./styled-components.browser.esm-DO55u7qc.js";import{I as m}from"./Input-BQ-B39iY.js";import{I as B}from"./InputField-CUVGbzRa.js";import{F as X,M as k}from"./Message-DSbTiGbF.js";import{C as w}from"./Condition-DPDJyMct.js";import{f as r}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:z,CAPTION:J,LABEL:K,ERROR:c,PLACEHOLDER:x}=k,{MAX_LENGTH:D}=w,A=({expirationDateState:N,setExpirationDateState:R,expirationDateErrorState:v})=>{const{month:b,year:q}=N,{setMonth:G,setYear:H}=R,{isMonthError:p,isYearError:E}=v,P=p?c.month:E?c.year:"";return e.jsx(X,{title:z.expirationDate,caption:J.expirationDate,children:e.jsxs(B,{label:K.expirationDate,error:P,children:[e.jsx(m,{"aria-label":"유효기간-월",placeholder:x.month,value:b,maxLength:D.expirationDate,onChange:G,"aria-invalid":p,autoFocus:!0}),e.jsx(m,{"aria-label":"유효기간-년도",placeholder:x.year,value:q,maxLength:D.expirationDate,onChange:H,"aria-invalid":E})]})})};A.__docgenInfo={description:"",methods:[],displayName:"ExpirationDate",props:{expirationDateState:{required:!0,tsType:{name:"ExpirationDateState"},description:""},setExpirationDateState:{required:!0,tsType:{name:"SetExpirationDateState"},description:""},expirationDateErrorState:{required:!0,tsType:{name:"ExpirationDateErrorState"},description:""}}};const er={title:"FormField_유효기간",component:A},t={args:{expirationDateState:{month:"",year:""},setExpirationDateState:{setMonth:r(),setYear:r()},expirationDateErrorState:{isMonthError:!1,isYearError:!1}}},a={args:{expirationDateState:{month:"12",year:"24"},setExpirationDateState:{setMonth:r(),setYear:r()},expirationDateErrorState:{isMonthError:!1,isYearError:!1}}},n={args:{expirationDateState:{month:"쿠",year:"24"},setExpirationDateState:{setMonth:r(),setYear:r()},expirationDateErrorState:{isMonthError:!0,isYearError:!1}}},o={args:{expirationDateState:{month:"3",year:"24"},setExpirationDateState:{setMonth:r(),setYear:r()},expirationDateErrorState:{isMonthError:!0,isYearError:!1}}},s={args:{expirationDateState:{month:"12",year:"쿠"},setExpirationDateState:{setMonth:r(),setYear:r()},expirationDateErrorState:{isMonthError:!1,isYearError:!0}}},i={args:{expirationDateState:{month:"12",year:"234"},setExpirationDateState:{setMonth:r(),setYear:r()},expirationDateErrorState:{isMonthError:!1,isYearError:!0}}};var S,h,l;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    }
  }
}`,...(l=(h=t.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var u,_,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
    }
  }
}`,...(d=(_=a.parameters)==null?void 0:_.docs)==null?void 0:d.source}}};var f,M,Y;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    }
  }
}`,...(Y=(M=n.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var g,y,F;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    }
  }
}`,...(F=(y=o.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var I,C,L;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    }
  }
}`,...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var T,j,O;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    }
  }
}`,...(O=(j=i.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const tr=["기본","정상입력","월_입력의_형식이_아닌_경우","월_입력_길이가_맞지_않은_경우","년_입력의_형식이_아닌_경우","년_입력의_길이가_맞지_않은_경우"];export{tr as __namedExportsOrder,er as default,t as 기본,i as 년_입력의_길이가_맞지_않은_경우,s as 년_입력의_형식이_아닌_경우,o as 월_입력_길이가_맞지_않은_경우,n as 월_입력의_형식이_아닌_경우,a as 정상입력};
