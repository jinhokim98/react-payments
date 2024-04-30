import{j as t}from"./styled-components.browser.esm-DO55u7qc.js";import{I as O}from"./Input-BQ-B39iY.js";import{I as S}from"./InputField-CUVGbzRa.js";import{F as w,M as v}from"./Message-DSbTiGbF.js";import{C as M}from"./Condition-DPDJyMct.js";import{f as e}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:T,LABEL:L,ERROR:U,PLACEHOLDER:y}=v,{MAX_LENGTH:H}=M,F=({userNameState:o,onChange:I,isUserNameError:i,showNextFieldOnValid:C})=>{const m=i?U.userName:"";return t.jsx(w,{title:T.userName,children:t.jsx(S,{label:L.userName,error:m,children:t.jsx(O,{"aria-label":"소유자_이름",placeholder:y.userName,value:o,maxLength:H.userName,onChange:I,onBlur:()=>C({isFill:o!=="",isFieldError:m!=="",nextIndex:4}),"aria-invalid":i,autoFocus:!0})})})};F.__docgenInfo={description:"",methods:[],displayName:"UserName",props:{userNameState:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},isUserNameError:{required:!0,tsType:{name:"boolean"},description:""},showNextFieldOnValid:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ShowNextFieldConditionParams) => void",signature:{arguments:[{type:{name:"ShowNextFieldConditionParams"},name:"params"}],return:{name:"void"}}},description:""}}};const b={title:"FormField_소유자_이름",component:F},r={args:{userNameState:"",onChange:e(),isUserNameError:!1,showNextFieldOnValid:e()}},a={args:{userNameState:"KIM JINHO",onChange:e(),isUserNameError:!1,showNextFieldOnValid:e()}},n={args:{userNameState:"쿠키",onChange:e(),isUserNameError:!0,showNextFieldOnValid:e()}},s={args:{userNameState:"KIMJINHO",onChange:e(),isUserNameError:!0,showNextFieldOnValid:e()}};var u,d,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    userNameState: '',
    onChange: fn(),
    isUserNameError: false,
    showNextFieldOnValid: fn()
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,c,N;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    userNameState: 'KIM JINHO',
    onChange: fn(),
    isUserNameError: false,
    showNextFieldOnValid: fn()
  }
}`,...(N=(c=a.parameters)==null?void 0:c.docs)==null?void 0:N.source}}};var g,h,E;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    userNameState: '쿠키',
    onChange: fn(),
    isUserNameError: true,
    showNextFieldOnValid: fn()
  }
}`,...(E=(h=n.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var f,_,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userNameState: 'KIMJINHO',
    onChange: fn(),
    isUserNameError: true,
    showNextFieldOnValid: fn()
  }
}`,...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const D=["기본","정상입력","유저이름에_한글이_들어간_경우","유저이름_입력_사이의_공백이_없을경우"];export{D as __namedExportsOrder,b as default,r as 기본,s as 유저이름_입력_사이의_공백이_없을경우,n as 유저이름에_한글이_들어간_경우,a as 정상입력};
