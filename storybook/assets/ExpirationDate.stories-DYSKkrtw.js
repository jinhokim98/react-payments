import{j as e}from"./styled-components.browser.esm-DO55u7qc.js";import{I as n}from"./InputField-DEceznV5.js";import{I as a}from"./Input-BQ-B39iY.js";import{F as y,M}from"./Message-BJbwxNb_.js";import{C as G}from"./Condition-C2q5nO4d.js";import"./index-CsdIBAqE.js";const{TITLE:i,CAPTION:o,LABEL:l,PLACEHOLDER:r,ERROR:m}=M,{MAX_LENGTH:t}=G,q={title:"FormField_유효기간",component:y},p={args:{title:i.expirationDate,caption:o.expirationDate,children:e.jsx(n,{label:l.expirationDate,error:"",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:r.month,value:"",maxLength:t.expirationDate}),e.jsx(a,{placeholder:r.year,value:"",maxLength:t.expirationDate})]})})}},s={args:{title:i.expirationDate,caption:o.expirationDate,children:e.jsx(n,{label:l.expirationDate,error:"",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:r.month,value:"04",maxLength:t.expirationDate}),e.jsx(a,{placeholder:r.year,value:"24",maxLength:t.expirationDate})]})})}},x={args:{title:i.expirationDate,caption:o.expirationDate,children:e.jsx(n,{label:l.expirationDate,error:m.month,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:r.month,value:"13",maxLength:t.expirationDate,"aria-aria-invalid":!0}),e.jsx(a,{placeholder:r.year,value:"24",maxLength:t.expirationDate})]})})}},c={args:{title:i.expirationDate,caption:o.expirationDate,children:e.jsx(n,{label:l.expirationDate,error:m.month,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:r.month,value:"1",maxLength:t.expirationDate,"aria-aria-invalid":!0}),e.jsx(a,{placeholder:r.year,value:"24",maxLength:t.expirationDate})]})})}},d={args:{title:i.expirationDate,caption:o.expirationDate,children:e.jsx(n,{label:l.expirationDate,error:m.year,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:r.month,value:"04",maxLength:t.expirationDate}),e.jsx(a,{placeholder:r.year,value:"2d",maxLength:t.expirationDate,"aria-invalid":!0})]})})}},h={args:{title:i.expirationDate,caption:o.expirationDate,children:e.jsx(n,{label:l.expirationDate,error:m.year,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:r.month,value:"04",maxLength:t.expirationDate}),e.jsx(a,{placeholder:r.year,value:"1",maxLength:t.expirationDate,"aria-invalid":!0})]})})}};var L,u,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: <InputField label={LABEL.expirationDate} error="">
        <>
          <Input placeholder={PLACEHOLDER.month} value="" maxLength={MAX_LENGTH.expirationDate} />
          <Input placeholder={PLACEHOLDER.year} value="" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
  }
}`,...(D=(u=p.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var E,_,g;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: <InputField label={LABEL.expirationDate} error="">
        <>
          <Input placeholder={PLACEHOLDER.month} value="04" maxLength={MAX_LENGTH.expirationDate} />
          <Input placeholder={PLACEHOLDER.year} value="24" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
  }
}`,...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var I,A,T;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: <InputField label={LABEL.expirationDate} error={ERROR.month}>
        <>
          <Input placeholder={PLACEHOLDER.month} value="13" maxLength={MAX_LENGTH.expirationDate} aria-aria-invalid />
          <Input placeholder={PLACEHOLDER.year} value="24" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
  }
}`,...(T=(A=x.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var v,R,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: <InputField label={LABEL.expirationDate} error={ERROR.month}>
        <>
          <Input placeholder={PLACEHOLDER.month} value="1" maxLength={MAX_LENGTH.expirationDate} aria-aria-invalid />
          <Input placeholder={PLACEHOLDER.year} value="24" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
  }
}`,...(O=(R=c.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var j,H,F;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: <InputField label={LABEL.expirationDate} error={ERROR.year}>
        <>
          <Input placeholder={PLACEHOLDER.month} value="04" maxLength={MAX_LENGTH.expirationDate} />
          <Input placeholder={PLACEHOLDER.year} value="2d" maxLength={MAX_LENGTH.expirationDate} aria-invalid />
        </>
      </InputField>
  }
}`,...(F=(H=d.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var C,N,P;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: <InputField label={LABEL.expirationDate} error={ERROR.year}>
        <>
          <Input placeholder={PLACEHOLDER.month} value="04" maxLength={MAX_LENGTH.expirationDate} />
          <Input placeholder={PLACEHOLDER.year} value="1" maxLength={MAX_LENGTH.expirationDate} aria-invalid />
        </>
      </InputField>
  }
}`,...(P=(N=h.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const w=["기본","정상입력","월_입력의_형식이_아닌_경우","월_입력_길이가_맞지_않은_경우","년_입력의_형식이_아닌_경우","년_입력의_길이가_맞지_않은_경우"];export{w as __namedExportsOrder,q as default,p as 기본,h as 년_입력의_길이가_맞지_않은_경우,d as 년_입력의_형식이_아닌_경우,c as 월_입력_길이가_맞지_않은_경우,x as 월_입력의_형식이_아닌_경우,s as 정상입력};
