import{j as n}from"./styled-components.browser.esm-DO55u7qc.js";import{I as O}from"./Input-BQ-B39iY.js";import{I as U}from"./InputField-CUVGbzRa.js";import{F as w,M as B}from"./Message-BA-aIYFJ.js";import{C as v}from"./Condition-BRmbTLfl.js";import{f as e}from"./index-2ywIqtt-.js";import"./index-CsdIBAqE.js";const{TITLE:M,LABEL:T,ERROR:y,PLACEHOLDER:H}=B,{MAX_LENGTH:C}=v,F=({userNameState:m,setUserNameState:L,isUserNameError:o,showNextFieldOnLastElementBlur:h})=>{const i=o?y.userName:"",I=m!=="";return n.jsx(w,{title:M.userName,children:n.jsx(U,{label:T.userName,error:i,children:n.jsx(O,{"aria-label":"소유자_이름",placeholder:H.userName,value:m,maxLength:C.userName,onChange:L,"aria-invalid":o,onBlur:()=>{h({isFill:I,isFieldError:i!=="",nextIndex:4})},autoFocus:!0})})})};F.__docgenInfo={description:"",methods:[],displayName:"UserName",props:{userNameState:{required:!0,tsType:{name:"string"},description:""},setUserNameState:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},isUserNameError:{required:!0,tsType:{name:"boolean"},description:""},showNextFieldOnLastElementBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ShowNextFieldOnLastElementBlurParams) => void",signature:{arguments:[{type:{name:"ShowNextFieldOnLastElementBlurParams"},name:"params"}],return:{name:"void"}}},description:""}}};const D={title:"FormField_소유자_이름",component:F},r={args:{userNameState:"",setUserNameState:e(),isUserNameError:!1,showNextFieldOnLastElementBlur:e()}},t={args:{userNameState:"KIM JINHO",setUserNameState:e(),isUserNameError:!1,showNextFieldOnLastElementBlur:e()}},s={args:{userNameState:"쿠키",setUserNameState:e(),isUserNameError:!0,showNextFieldOnLastElementBlur:e()}},a={args:{userNameState:"KIMJINHO",setUserNameState:e(),isUserNameError:!0,showNextFieldOnLastElementBlur:e()}};var u,l,N;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    userNameState: '',
    setUserNameState: fn(),
    isUserNameError: false,
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(N=(l=r.parameters)==null?void 0:l.docs)==null?void 0:N.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    userNameState: 'KIM JINHO',
    setUserNameState: fn(),
    isUserNameError: false,
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var E,g,S;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    userNameState: '쿠키',
    setUserNameState: fn(),
    isUserNameError: true,
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var f,_,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    userNameState: 'KIMJINHO',
    setUserNameState: fn(),
    isUserNameError: true,
    showNextFieldOnLastElementBlur: fn()
  }
}`,...(x=(_=a.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const P=["기본","정상입력","유저이름에_한글이_들어간_경우","유저이름_입력_사이의_공백이_없을경우"];export{P as __namedExportsOrder,D as default,r as 기본,a as 유저이름_입력_사이의_공백이_없을경우,s as 유저이름에_한글이_들어간_경우,t as 정상입력};
