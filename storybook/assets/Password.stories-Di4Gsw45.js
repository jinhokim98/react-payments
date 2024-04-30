import{f as t}from"./index-2ywIqtt-.js";import{j as o}from"./styled-components.browser.esm-DO55u7qc.js";import{I as T}from"./Input-BQ-B39iY.js";import{I as L}from"./InputField-CUVGbzRa.js";import{F as h,M as v}from"./Message-DSbTiGbF.js";import{C}from"./Condition-DPDJyMct.js";import"./index-CsdIBAqE.js";const{TITLE:x,CAPTION:F,LABEL:R,ERROR:y,PLACEHOLDER:A}=v,{MAX_LENGTH:M}=C,P=({passwordState:f,setPasswordState:I,isPasswordError:n})=>o.jsx(h,{title:x.password,caption:F.password,children:o.jsx(L,{label:R.password,error:n?y.password:"",children:o.jsx(T,{type:"password","aria-label":"비밀번호",placeholder:A.password,value:f,maxLength:M.password,onChange:I,"aria-invalid":n,autoFocus:!0})})});P.__docgenInfo={description:"",methods:[],displayName:"Password",props:{passwordState:{required:!0,tsType:{name:"string"},description:""},setPasswordState:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},isPasswordError:{required:!0,tsType:{name:"boolean"},description:""}}};const G={title:"FormField_비밀번호",component:P},s={args:{passwordState:"",setPasswordState:t(),isPasswordError:!1}},r={args:{passwordState:"12",setPasswordState:t(),isPasswordError:!1}},e={args:{passwordState:"쿠키",setPasswordState:t(),isPasswordError:!0}},a={args:{passwordState:"1",setPasswordState:t(),isPasswordError:!0}};var d,p,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    passwordState: '',
    setPasswordState: fn(),
    isPasswordError: false
  }
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    passwordState: '12',
    setPasswordState: fn(),
    isPasswordError: false
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var w,l,E;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    passwordState: '쿠키',
    setPasswordState: fn(),
    isPasswordError: true
  }
}`,...(E=(l=e.parameters)==null?void 0:l.docs)==null?void 0:E.source}}};var S,g,_;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    passwordState: '1',
    setPasswordState: fn(),
    isPasswordError: true
  }
}`,...(_=(g=a.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};const B=["기본","정상입력","잘못된_문자를_입력했을_때","두_자리_숫자_입력이_아닐_때"];export{B as __namedExportsOrder,G as default,s as 기본,a as 두_자리_숫자_입력이_아닐_때,e as 잘못된_문자를_입력했을_때,r as 정상입력};
