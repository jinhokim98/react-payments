import{j as e}from"./styled-components.browser.esm-DO55u7qc.js";import{I as E}from"./Input-BQ-B39iY.js";import{I as B}from"./InputField-CUVGbzRa.js";import{F as X,M as k}from"./Message-DSbTiGbF.js";import{C as w}from"./Condition-DPDJyMct.js";import{f as r}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:z,CAPTION:J,LABEL:K,ERROR:m,PLACEHOLDER:c}=k,{MAX_LENGTH:x}=w,A=({expirationDateState:N,setExpirationDateState:R,expirationDateErrorState:v})=>{const{month:b,year:q}=N,{onChangeMonth:G,onChangeYear:H}=R,{isMonthError:p,isYearError:h}=v,P=p?m.month:h?m.year:"";return e.jsx(X,{title:z.expirationDate,caption:J.expirationDate,children:e.jsxs(B,{label:K.expirationDate,error:P,children:[e.jsx(E,{"aria-label":"유효기간-월",placeholder:c.month,value:b,maxLength:x.expirationDate,onChange:G,"aria-invalid":p,autoFocus:!0}),e.jsx(E,{"aria-label":"유효기간-년도",placeholder:c.year,value:q,maxLength:x.expirationDate,onChange:H,"aria-invalid":h})]})})};A.__docgenInfo={description:"",methods:[],displayName:"ExpirationDate",props:{expirationDateState:{required:!0,tsType:{name:"ExpirationDateState"},description:""},setExpirationDateState:{required:!0,tsType:{name:"SetExpirationDateState"},description:""},expirationDateErrorState:{required:!0,tsType:{name:"ExpirationDateErrorState"},description:""}}};const er={title:"FormField_유효기간",component:A},a={args:{expirationDateState:{month:"",year:""},setExpirationDateState:{onChangeMonth:r(),onChangeYear:r()},expirationDateErrorState:{isMonthError:!1,isYearError:!1}}},t={args:{expirationDateState:{month:"12",year:"24"},setExpirationDateState:{onChangeMonth:r(),onChangeYear:r()},expirationDateErrorState:{isMonthError:!1,isYearError:!1}}},n={args:{expirationDateState:{month:"쿠",year:"24"},setExpirationDateState:{onChangeMonth:r(),onChangeYear:r()},expirationDateErrorState:{isMonthError:!0,isYearError:!1}}},o={args:{expirationDateState:{month:"3",year:"24"},setExpirationDateState:{onChangeMonth:r(),onChangeYear:r()},expirationDateErrorState:{isMonthError:!0,isYearError:!1}}},i={args:{expirationDateState:{month:"12",year:"쿠"},setExpirationDateState:{onChangeMonth:r(),onChangeYear:r()},expirationDateErrorState:{isMonthError:!1,isYearError:!0}}},s={args:{expirationDateState:{month:"12",year:"234"},setExpirationDateState:{onChangeMonth:r(),onChangeYear:r()},expirationDateErrorState:{isMonthError:!1,isYearError:!0}}};var D,S,g;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '',
      year: ''
    },
    setExpirationDateState: {
      onChangeMonth: fn(),
      onChangeYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: false,
      isYearError: false
    }
  }
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var l,u,_;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '12',
      year: '24'
    },
    setExpirationDateState: {
      onChangeMonth: fn(),
      onChangeYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: false,
      isYearError: false
    }
  }
}`,...(_=(u=t.parameters)==null?void 0:u.docs)==null?void 0:_.source}}};var d,f,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '쿠',
      year: '24'
    },
    setExpirationDateState: {
      onChangeMonth: fn(),
      onChangeYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: true,
      isYearError: false
    }
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var M,Y,y;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '3',
      year: '24'
    },
    setExpirationDateState: {
      onChangeMonth: fn(),
      onChangeYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: true,
      isYearError: false
    }
  }
}`,...(y=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:y.source}}};var F,I,L;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '12',
      year: '쿠'
    },
    setExpirationDateState: {
      onChangeMonth: fn(),
      onChangeYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: false,
      isYearError: true
    }
  }
}`,...(L=(I=i.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var T,j,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    expirationDateState: {
      month: '12',
      year: '234'
    },
    setExpirationDateState: {
      onChangeMonth: fn(),
      onChangeYear: fn()
    },
    expirationDateErrorState: {
      isMonthError: false,
      isYearError: true
    }
  }
}`,...(O=(j=s.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const ar=["기본","정상입력","월_입력의_형식이_아닌_경우","월_입력_길이가_맞지_않은_경우","년_입력의_형식이_아닌_경우","년_입력의_길이가_맞지_않은_경우"];export{ar as __namedExportsOrder,er as default,a as 기본,s as 년_입력의_길이가_맞지_않은_경우,i as 년_입력의_형식이_아닌_경우,o as 월_입력_길이가_맞지_않은_경우,n as 월_입력의_형식이_아닌_경우,t as 정상입력};
