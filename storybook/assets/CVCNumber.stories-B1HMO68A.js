import{j as e}from"./styled-components.browser.esm-DO55u7qc.js";import{I as x}from"./Input-BQ-B39iY.js";import{I as h}from"./InputField-CUVGbzRa.js";import{F as E,M as _}from"./Message-DSbTiGbF.js";import{C as j}from"./Condition-DPDJyMct.js";import{f as o}from"./index-2ywIqtt-.js";import{C}from"./CardInformationPreview-tay5Ia05.js";import{r as m}from"./index-CsdIBAqE.js";import"./theme-CdHeXgP_.js";const{TITLE:y,LABEL:R,ERROR:T,PLACEHOLDER:L}=_,{MAX_LENGTH:A}=j,P=({cvcNumberState:s,onChange:n,isCVCNumberError:r,setIsFocusCVCPreview:t})=>e.jsx(E,{title:y.cvcNumber,children:e.jsx(h,{label:R.cvcNumber,error:r?T.cvcNumber:"",children:e.jsx(x,{onBlur:()=>t(!1),onFocus:()=>t(!0),"aria-label":"카드인증값(CVC)",placeholder:L.cvcNumber,value:s,maxLength:A.cvcNumber,onChange:n,"aria-invalid":r,autoFocus:!0})})});P.__docgenInfo={description:"",methods:[],displayName:"CVCNumber",props:{cvcNumberState:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},isCVCNumberError:{required:!0,tsType:{name:"boolean"},description:""},setIsFocusCVCPreview:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""}}};const v={cardNumberState:{first:"",second:"",third:"",fourth:""},expirationDateState:{month:"",year:""},cardBrandState:"",userNameState:"",showImageCondition:{visaShowCondition:!1,masterCardShowCondition:!1},cvcNumberState:"",setIsFocusCVCPreview:o()},z={title:"FormField_CVC",component:P},a={decorators:[(s,n)=>{const[r,t]=m.useState(!1);return e.jsxs("div",{children:[e.jsx(C,{...v,isFocusCVCPreview:r}),e.jsx(s,{args:{...n.args,setIsFocusCVCPreview:t}})]})}],args:{cvcNumberState:"",onChange:o(),setIsFocusCVCPreview:o(),isCVCNumberError:!1}},c={decorators:[(s,n)=>{const[r,t]=m.useState(!1);return e.jsxs("div",{children:[e.jsx(C,{...v,cvcNumberState:"123",isFocusCVCPreview:r}),e.jsx(s,{args:{...n.args,setIsFocusCVCPreview:t}})]})}],args:{cvcNumberState:"123",onChange:o(),setIsFocusCVCPreview:o(),isCVCNumberError:!1}},i={decorators:[(s,n)=>{const[r,t]=m.useState(!1);return e.jsxs("div",{children:[e.jsx(C,{...v,cvcNumberState:"쿠키",isFocusCVCPreview:r}),e.jsx(s,{args:{...n.args,setIsFocusCVCPreview:t}})]})}],args:{cvcNumberState:"쿠키",onChange:o(),setIsFocusCVCPreview:o(),isCVCNumberError:!0}},u={decorators:[(s,n)=>{const[r,t]=m.useState(!1);return e.jsxs("div",{children:[e.jsx(C,{...v,cvcNumberState:"12",isFocusCVCPreview:r}),e.jsx(s,{args:{...n.args,setIsFocusCVCPreview:t}})]})}],args:{cvcNumberState:"12",onChange:o(),setIsFocusCVCPreview:o(),isCVCNumberError:!0}};var d,p,F;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  decorators: [(Story, context) => {
    const [isFront, setIsFront] = useState<boolean>(false);
    return <div>
          <CardInformationPreview {...previewProps} isFocusCVCPreview={isFront} />
          <Story args={{
        ...context.args,
        setIsFocusCVCPreview: setIsFront
      }} />
        </div>;
  }],
  args: {
    cvcNumberState: '',
    onChange: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: false
  }
}`,...(F=(p=a.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var l,S,g;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [(Story, context) => {
    const [isFront, setIsFront] = useState<boolean>(false);
    return <div>
          <CardInformationPreview {...previewProps} cvcNumberState="123" isFocusCVCPreview={isFront} />
          <Story args={{
        ...context.args,
        setIsFocusCVCPreview: setIsFront
      }} />
        </div>;
  }],
  args: {
    cvcNumberState: '123',
    onChange: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: false
  }
}`,...(g=(S=c.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var I,f,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  decorators: [(Story, context) => {
    const [isFront, setIsFront] = useState<boolean>(false);
    return <div>
          <CardInformationPreview {...previewProps} cvcNumberState="쿠키" isFocusCVCPreview={isFront} />
          <Story args={{
        ...context.args,
        setIsFocusCVCPreview: setIsFront
      }} />
        </div>;
  }],
  args: {
    cvcNumberState: '쿠키',
    onChange: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: true
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,N,V;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [(Story, context) => {
    const [isFront, setIsFront] = useState<boolean>(false);
    return <div>
          <CardInformationPreview {...previewProps} cvcNumberState="12" isFocusCVCPreview={isFront} />
          <Story args={{
        ...context.args,
        setIsFocusCVCPreview: setIsFront
      }} />
        </div>;
  }],
  args: {
    cvcNumberState: '12',
    onChange: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: true
  }
}`,...(V=(N=u.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const J=["기본","정상입력","잘못된_문자_입력","세_자리_수가_아닐_때"];export{J as __namedExportsOrder,z as default,a as 기본,u as 세_자리_수가_아닐_때,i as 잘못된_문자_입력,c as 정상입력};
