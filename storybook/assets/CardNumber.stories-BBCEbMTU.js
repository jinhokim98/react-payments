import{j as e}from"./styled-components.browser.esm-DO55u7qc.js";import{F as G,M as H}from"./Message-DSbTiGbF.js";import{I as n}from"./Input-BQ-B39iY.js";import{I as P}from"./InputField-CUVGbzRa.js";import{C as X}from"./Condition-DPDJyMct.js";import{f as r}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:k,CAPTION:w,LABEL:z,ERROR:J,PLACEHOLDER:a}=H,{MAX_LENGTH:o}=X,x=({cardNumberState:L,setCardNumberState:I,cardNumberErrorState:j})=>{const{first:v,second:A,third:B,fourth:O}=L,{onChangeFirst:D,onChangeSecond:R,onChangeThird:y,onChangeFourth:M}=I,{isFirstError:u,isSecondError:c,isThirdError:h,isFourthError:m}=j,q=u||c||h||m?J.cardNumber:"";return e.jsx(G,{title:k.cardNumber,caption:w.cardNumber,children:e.jsxs(P,{label:z.cardNumber,error:q,children:[e.jsx(n,{"aria-label":"첫_번째_카드번호",placeholder:a.cardNumber,value:v,maxLength:o.cardNumber,onChange:D,"aria-invalid":u,autoFocus:!0}),e.jsx(n,{"aria-label":"두_번째_카드번호",placeholder:a.cardNumber,value:A,maxLength:o.cardNumber,onChange:R,"aria-invalid":c}),e.jsx(n,{"aria-label":"세_번째_카드번호",placeholder:a.cardNumber,value:B,maxLength:o.cardNumber,onChange:y,"aria-invalid":h}),e.jsx(n,{"aria-label":"네_번째_카드번호",placeholder:a.cardNumber,value:O,maxLength:o.cardNumber,onChange:M,"aria-invalid":m})]})})};x.__docgenInfo={description:"",methods:[],displayName:"CardNumbers",props:{cardNumberState:{required:!0,tsType:{name:"CardNumberState"},description:""},setCardNumberState:{required:!0,tsType:{name:"SetCardNumberState"},description:""},cardNumberErrorState:{required:!0,tsType:{name:"CardNumberErrorState"},description:""}}};const $={title:"FormField_카드번호",component:x},t={args:{cardNumberState:{first:"",second:"",third:"",fourth:""},setCardNumberState:{onChangeFirst:r(),onChangeSecond:r(),onChangeThird:r(),onChangeFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!1,isThirdError:!1,isFourthError:!1}}},s={args:{cardNumberState:{first:"1234",second:"5678",third:"1234",fourth:"1234"},setCardNumberState:{onChangeFirst:r(),onChangeSecond:r(),onChangeThird:r(),onChangeFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!1,isThirdError:!1,isFourthError:!1}}},i={args:{cardNumberState:{first:"스토리북",second:"5678",third:"너무행복",fourth:"1234"},setCardNumberState:{onChangeFirst:r(),onChangeSecond:r(),onChangeThird:r(),onChangeFourth:r()},cardNumberErrorState:{isFirstError:!0,isSecondError:!1,isThirdError:!0,isFourthError:!1}}},d={args:{cardNumberState:{first:"1234",second:"124",third:"1234",fourth:"1"},setCardNumberState:{onChangeFirst:r(),onChangeSecond:r(),onChangeThird:r(),onChangeFourth:r()},cardNumberErrorState:{isFirstError:!1,isSecondError:!0,isThirdError:!1,isFourthError:!0}}};var f,l,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    cardNumberState: {
      first: '',
      second: '',
      third: '',
      fourth: ''
    },
    setCardNumberState: {
      onChangeFirst: fn(),
      onChangeSecond: fn(),
      onChangeThird: fn(),
      onChangeFourth: fn()
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: false,
      isThirdError: false,
      isFourthError: false
    }
  }
}`,...(C=(l=t.parameters)==null?void 0:l.docs)==null?void 0:C.source}}};var g,E,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    cardNumberState: {
      first: '1234',
      second: '5678',
      third: '1234',
      fourth: '1234'
    },
    setCardNumberState: {
      onChangeFirst: fn(),
      onChangeSecond: fn(),
      onChangeThird: fn(),
      onChangeFourth: fn()
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: false,
      isThirdError: false,
      isFourthError: false
    }
  }
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var b,N,p;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    cardNumberState: {
      first: '스토리북',
      second: '5678',
      third: '너무행복',
      fourth: '1234'
    },
    setCardNumberState: {
      onChangeFirst: fn(),
      onChangeSecond: fn(),
      onChangeThird: fn(),
      onChangeFourth: fn()
    },
    cardNumberErrorState: {
      isFirstError: true,
      isSecondError: false,
      isThirdError: true,
      isFourthError: false
    }
  }
}`,...(p=(N=i.parameters)==null?void 0:N.docs)==null?void 0:p.source}}};var F,T,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    cardNumberState: {
      first: '1234',
      second: '124',
      third: '1234',
      fourth: '1'
    },
    setCardNumberState: {
      onChangeFirst: fn(),
      onChangeSecond: fn(),
      onChangeThird: fn(),
      onChangeFourth: fn()
    },
    cardNumberErrorState: {
      isFirstError: false,
      isSecondError: true,
      isThirdError: false,
      isFourthError: true
    }
  }
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const rr=["기본","정상입력","숫자형식이_아닌경우","카드번호_자리수가_맞지_않은_경우"];export{rr as __namedExportsOrder,$ as default,t as 기본,i as 숫자형식이_아닌경우,s as 정상입력,d as 카드번호_자리수가_맞지_않은_경우};
