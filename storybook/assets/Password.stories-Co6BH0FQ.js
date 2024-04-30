import{f as o}from"./index-2ywIqtt-.js";import{j as n}from"./styled-components.browser.esm-DO55u7qc.js";import{I}from"./Input-BQ-B39iY.js";import{I as P}from"./InputField-CUVGbzRa.js";import{F as T,M as L}from"./Message-DSbTiGbF.js";import{C as v}from"./Condition-DPDJyMct.js";import"./index-CsdIBAqE.js";const{TITLE:x,CAPTION:F,LABEL:R,ERROR:y,PLACEHOLDER:A}=L,{MAX_LENGTH:M}=v,h=({passwordState:C,onChange:S,isPasswordError:t})=>n.jsx(T,{title:x.password,caption:F.password,children:n.jsx(P,{label:R.password,error:t?y.password:"",children:n.jsx(I,{type:"password","aria-label":"비밀번호",placeholder:A.password,value:C,maxLength:M.password,onChange:S,"aria-invalid":t,autoFocus:!0})})});h.__docgenInfo={description:"",methods:[],displayName:"Password",props:{passwordState:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},isPasswordError:{required:!0,tsType:{name:"boolean"},description:""}}};const G={title:"FormField_비밀번호",component:h},r={args:{passwordState:"",onChange:o(),isPasswordError:!1}},e={args:{passwordState:"12",onChange:o(),isPasswordError:!1}},s={args:{passwordState:"쿠키",onChange:o(),isPasswordError:!0}},a={args:{passwordState:"1",onChange:o(),isPasswordError:!0}};var p,d,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    passwordState: '',
    onChange: fn(),
    isPasswordError: false
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,c,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    passwordState: '12',
    onChange: fn(),
    isPasswordError: false
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,l,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    passwordState: '쿠키',
    onChange: fn(),
    isPasswordError: true
  }
}`,...(w=(l=s.parameters)==null?void 0:l.docs)==null?void 0:w.source}}};var E,_,f;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    passwordState: '1',
    onChange: fn(),
    isPasswordError: true
  }
}`,...(f=(_=a.parameters)==null?void 0:_.docs)==null?void 0:f.source}}};const B=["기본","정상입력","잘못된_문자를_입력했을_때","두_자리_숫자_입력이_아닐_때"];export{B as __namedExportsOrder,G as default,r as 기본,a as 두_자리_숫자_입력이_아닐_때,s as 잘못된_문자를_입력했을_때,e as 정상입력};
