import{j as e}from"./styled-components.browser.esm-DO55u7qc.js";import{F as u,M as p}from"./Message-BA-aIYFJ.js";import{I as S}from"./InputField-CUVGbzRa.js";import{S as C}from"./Select-DOb530ed.js";import{f as l}from"./index-2ywIqtt-.js";import{C as g}from"./CardInformationPreview-qzKBp2dI.js";import{r as x}from"./index-CsdIBAqE.js";import"./theme-CdHeXgP_.js";import"./Condition-BRmbTLfl.js";const{TITLE:B,CAPTION:h,PLACEHOLDER:f}=p,v=[{label:"BC카드",value:"BC카드"},{label:"신한카드",value:"신한카드"},{label:"카카오뱅크",value:"카카오뱅크"},{label:"현대카드",value:"현대카드"},{label:"우리카드",value:"우리카드"},{label:"롯데카드",value:"롯데카드"},{label:"하나카드",value:"하나카드"},{label:"국민카드",value:"국민카드"}],c=({cardBrandState:n,setCardBrandState:s,showNextFieldOnLastElementBlur:a})=>{const o=t=>{s(t.currentTarget.textContent+""),a({isFill:t.currentTarget.textContent!==null,isFieldError:t.currentTarget.textContent===null,nextIndex:2})};return e.jsx(u,{title:B.cardBrand,caption:h.cardBrand,children:e.jsx(S,{children:e.jsx(C,{label:"카드브랜드",value:n,onChange:t=>o(t),placeholder:f.cardBrand,options:v})})})};c.__docgenInfo={description:"",methods:[],displayName:"CardBrand",props:{cardBrandState:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},setCardBrandState:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<string | null>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<string | null>",elements:[{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]}]}]},description:""},showNextFieldOnLastElementBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ShowNextFieldOnLastElementBlurParams) => void",signature:{arguments:[{type:{name:"ShowNextFieldOnLastElementBlurParams"},name:"params"}],return:{name:"void"}}},description:""}}};const w={cardNumberState:{first:"",second:"",third:"",fourth:""},expirationDateState:{month:"",year:""},userNameState:"",showImageCondition:{visaShowCondition:!1,masterCardShowCondition:!1},cvcNumberState:"",isFocusCVCPreview:!1,setIsFocusCVCPreview:l()},L={title:"FormField_카드브랜드",component:c,decorators:[(n,s)=>{const[a,o]=x.useState(null);return e.jsxs("div",{children:[e.jsx(g,{...w,cardBrandState:a}),e.jsx(n,{args:{...s.args,cardBrandState:a,setCardBrandState:o}})]})}],args:{setCardBrandState:l(),showNextFieldOnLastElementBlur:l()}},r={args:{cardBrandState:null}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    cardBrandState: null
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const O=["카드브랜드와_셀렉트"];export{O as __namedExportsOrder,L as default,r as 카드브랜드와_셀렉트};
