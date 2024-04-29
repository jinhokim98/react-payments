import{j as n}from"./styled-components.browser.esm-DO55u7qc.js";import{I as U}from"./Input-BQ-B39iY.js";import{I as O}from"./InputField-CUVGbzRa.js";import{F as w,M as v}from"./Message-BA-aIYFJ.js";import{C as M}from"./Condition-BRmbTLfl.js";import{f as e}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:T,LABEL:C,ERROR:L,PLACEHOLDER:y}=v,{MAX_LENGTH:H}=M,F=({userNameState:o,setUserNameState:h,isUserNameError:m,showNextFieldOnValid:I})=>{const i=m?L.userName:"";return n.jsx(w,{title:T.userName,children:n.jsx(O,{label:C.userName,error:i,children:n.jsx(U,{"aria-label":"소유자_이름",placeholder:y.userName,value:o,maxLength:H.userName,onChange:h,onBlur:()=>I({isFill:o!=="",isFieldError:i!=="",nextIndex:4}),"aria-invalid":m,autoFocus:!0})})})};F.__docgenInfo={description:"",methods:[],displayName:"UserName",props:{userNameState:{required:!0,tsType:{name:"string"},description:""},setUserNameState:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},isUserNameError:{required:!0,tsType:{name:"boolean"},description:""},showNextFieldOnValid:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ShowNextFieldConditionParams) => void",signature:{arguments:[{type:{name:"ShowNextFieldConditionParams"},name:"params"}],return:{name:"void"}}},description:""}}};const b={title:"FormField_소유자_이름",component:F},r={args:{userNameState:"",setUserNameState:e(),isUserNameError:!1,showNextFieldOnValid:e()}},a={args:{userNameState:"KIM JINHO",setUserNameState:e(),isUserNameError:!1,showNextFieldOnValid:e()}},s={args:{userNameState:"쿠키",setUserNameState:e(),isUserNameError:!0,showNextFieldOnValid:e()}},t={args:{userNameState:"KIMJINHO",setUserNameState:e(),isUserNameError:!0,showNextFieldOnValid:e()}};var u,d,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    userNameState: '',
    setUserNameState: fn(),
    isUserNameError: false,
    showNextFieldOnValid: fn()
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var N,p,c;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    userNameState: 'KIM JINHO',
    setUserNameState: fn(),
    isUserNameError: false,
    showNextFieldOnValid: fn()
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var E,g,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    userNameState: '쿠키',
    setUserNameState: fn(),
    isUserNameError: true,
    showNextFieldOnValid: fn()
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,_,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userNameState: 'KIMJINHO',
    setUserNameState: fn(),
    isUserNameError: true,
    showNextFieldOnValid: fn()
  }
}`,...(x=(_=t.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const D=["기본","정상입력","유저이름에_한글이_들어간_경우","유저이름_입력_사이의_공백이_없을경우"];export{D as __namedExportsOrder,b as default,r as 기본,t as 유저이름_입력_사이의_공백이_없을경우,s as 유저이름에_한글이_들어간_경우,a as 정상입력};
