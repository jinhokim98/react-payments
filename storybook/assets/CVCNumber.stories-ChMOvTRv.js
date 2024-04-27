import{j as e}from"./styled-components.browser.esm-DO55u7qc.js";import{I as y}from"./Input-BQ-B39iY.js";import{I as _}from"./InputField-CUVGbzRa.js";import{F as j,M as O}from"./Message-BA-aIYFJ.js";import{C as B}from"./Condition-BRmbTLfl.js";import{f as r}from"./index-2ywIqtt-.js";import{C as m}from"./CardInformationPreview-qzKBp2dI.js";import{r as C}from"./index-CsdIBAqE.js";import"./theme-CdHeXgP_.js";const{TITLE:R,LABEL:T,ERROR:A,PLACEHOLDER:D}=O,{MAX_LENGTH:d}=B,E=({cvcNumberState:s,setCVCNumberState:o,isCVCNumberError:t,setIsFocusCVCPreview:n,showNextFieldOnLastElementBlur:P})=>{const h=s.length===d.cvcNumber,L=()=>{n(!1),P({isFill:h,isFieldError:t,nextIndex:5})};return e.jsx(j,{title:R.cvcNumber,children:e.jsx(_,{label:T.cvcNumber,error:t?A.cvcNumber:"",children:e.jsx(y,{onBlur:L,onFocus:()=>n(!0),"aria-label":"카드인증값(CVC)",placeholder:D.cvcNumber,value:s,maxLength:d.cvcNumber,onChange:o,"aria-invalid":t,autoFocus:!0})})})};E.__docgenInfo={description:"",methods:[],displayName:"CVCNumber",props:{cvcNumberState:{required:!0,tsType:{name:"string"},description:""},setCVCNumberState:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},isCVCNumberError:{required:!0,tsType:{name:"boolean"},description:""},setIsFocusCVCPreview:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<boolean>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<boolean>",elements:[{name:"boolean"}]}]},description:""},showNextFieldOnLastElementBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ShowNextFieldOnLastElementBlurParams) => void",signature:{arguments:[{type:{name:"ShowNextFieldOnLastElementBlurParams"},name:"params"}],return:{name:"void"}}},description:""}}};const l={cardNumberState:{first:"",second:"",third:"",fourth:""},expirationDateState:{month:"",year:""},cardBrandState:null,userNameState:"",showImageCondition:{visaShowCondition:!1,masterCardShowCondition:!1},cvcNumberState:"",setIsFocusCVCPreview:r()},Q={title:"FormField_CVC",component:E},a={decorators:[(s,o)=>{const[t,n]=C.useState(!1);return e.jsxs("div",{children:[e.jsx(m,{...l,isFocusCVCPreview:t}),e.jsx(s,{args:{...o.args,setIsFocusCVCPreview:n}})]})}],args:{cvcNumberState:"",setCVCNumberState:r(),setIsFocusCVCPreview:r(),isCVCNumberError:!1,showNextFieldOnLastElementBlur:r()}},i={decorators:[(s,o)=>{const[t,n]=C.useState(!1);return e.jsxs("div",{children:[e.jsx(m,{...l,cvcNumberState:"123",isFocusCVCPreview:t}),e.jsx(s,{args:{...o.args,setIsFocusCVCPreview:n}})]})}],args:{cvcNumberState:"123",setCVCNumberState:r(),setIsFocusCVCPreview:r(),isCVCNumberError:!1,showNextFieldOnLastElementBlur:r()}},c={decorators:[(s,o)=>{const[t,n]=C.useState(!1);return e.jsxs("div",{children:[e.jsx(m,{...l,cvcNumberState:"쿠키",isFocusCVCPreview:t}),e.jsx(s,{args:{...o.args,setIsFocusCVCPreview:n}})]})}],args:{cvcNumberState:"쿠키",setCVCNumberState:r(),setIsFocusCVCPreview:r(),isCVCNumberError:!0,showNextFieldOnLastElementBlur:r()}},u={decorators:[(s,o)=>{const[t,n]=C.useState(!1);return e.jsxs("div",{children:[e.jsx(m,{...l,cvcNumberState:"12",isFocusCVCPreview:t}),e.jsx(s,{args:{...o.args,setIsFocusCVCPreview:n}})]})}],args:{cvcNumberState:"12",setCVCNumberState:r(),setIsFocusCVCPreview:r(),isCVCNumberError:!0,showNextFieldOnLastElementBlur:r()}};var v,F,p;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    setCVCNumberState: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: false,
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(p=(F=a.parameters)==null?void 0:F.docs)==null?void 0:p.source}}};var S,N,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    setCVCNumberState: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: false,
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var b,f,I;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    setCVCNumberState: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: true,
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(I=(f=c.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var V,g,x;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    setCVCNumberState: fn(),
    setIsFocusCVCPreview: fn(),
    isCVCNumberError: true,
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(x=(g=u.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const U=["기본","정상입력","잘못된_문자_입력","세_자리_수가_아닐_때"];export{U as __namedExportsOrder,Q as default,a as 기본,u as 세_자리_수가_아닐_때,c as 잘못된_문자_입력,i as 정상입력};
