(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[54],{1561:function(e,t,n){"use strict";var r=n(9),o=n(1558),i=n(2);t.a=function(e){return Object(i.jsx)(o.a,Object(r.a)({},e))}},1567:function(e,t,n){"use strict";var r=n(9),o=n(63),i=n(616),a=n(544),c=n(417),s=n(12),d=n(2),l=["name","onChange","value"],u=["input","inputAdornment","meta","multiline","rows","testId","text"],b={overflow:"hidden",width:"100%"},j=Object(c.a)((function(){return Object(a.a)({root:{paddingTop:s.lg,paddingBottom:"12px",lineHeight:0}})}));t.a=function(e){var t=e.input,n=t.name,a=t.onChange,c=t.value,s=Object(o.a)(t,l),O=e.inputAdornment,x=e.meta,f=e.multiline,p=e.rows,h=e.testId,m=e.text,g=Object(o.a)(e,u),v=j(),y=c?m:void 0,C=(x.touched||!x.pristine)&&!x.valid,w=!!x.error||!x.modifiedSinceLastSubmit&&!!x.submitError,S=x.error||x.submitError,k=!x.active&&(x.pristine||!x.touched),B="undefined"===typeof x.error||!x.touched,E=k&&B,P=y?v.root:"",T=x.valid?"isValid":w&&C?"isInvalid":"",R=Object(r.a)(Object(r.a)({},s),{},{autoComplete:"off","data-testid":h}),I=Object(r.a)(Object(r.a)({},O),{},{className:"".concat(P," ").concat(T),disableUnderline:E});return Object(d.jsx)(i.a,Object(r.a)({error:w&&C,helperText:w&&C?S:y||" ",inputProps:R,InputProps:I,multiline:f,name:n,onChange:a,rows:p,style:b,value:c},g))}},1576:function(e,t,n){"use strict";var r=n(63),o=n(1558),i=n(2),a=["handleSubmit"],c=function(e){return{padding:"0 ".concat(e,"%"),flexDirection:"column",flex:"1 0 auto"}};t.a=function(e){var t=e.children,n=e.decorators,s=e.formMutators,d=e.initialValues,l=e.onSubmit,u=e.padding,b=void 0===u?0:u,j=e.subscription,O=e.testId,x=void 0===O?"":O,f=e.validation;return Object(i.jsx)(o.b,{decorators:n,initialValues:d,mutators:s,onSubmit:l,render:function(e){var n=e.handleSubmit,o=Object(r.a)(e,a);return Object(i.jsx)("form",{"data-testid":x,onSubmit:n,style:c(b),children:t(o.submitting,o.validating,o,o.form.mutators)})},subscription:j,validate:f})}},1586:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var r=n(43),o=n(417),i=n(0),a=n.p+"static/media/qrcode.fec1b6d8.svg",c=n(426),s=n(344),d=n.n(s),l=n(1621),u=n.n(l),b=n(12),j=n(544),O=Object(j.a)({heading:{padding:b.lg,justifyContent:"space-between",maxHeight:"75px",boxSizing:"border-box"},loaderContainer:{width:"100%",height:"100%"},close:{height:"25px",width:"25px",color:b.secondaryText},detailsContainer:{backgroundColor:b.background,maxHeight:"450px"},buttonRow:{height:"84px",justifyContent:"center"},button:{"&:last-child":{marginLeft:b.sm}}}),x=n(341),f=n(150),p=n(295),h=n(127),m=n(173),g=n(86),v=n(110),y=n(2),C=Object(o.a)(O),w=function(e){var t=e.isOpen,n=e.onClose,o=e.onScan,a=C(),s=Object(i.useState)(!1),l=Object(r.a)(s,2),b=l[0],j=l[1],O=Object(i.useState)(null),w=Object(r.a)(O,2),S=w[0],k=w[1],B=Object(i.useState)(!1),E=Object(r.a)(B,2),P=E[0],T=E[1],R=i.createRef(),I=i.useCallback((function(){R.current.openImageDialog()}),[R]);Object(i.useEffect)((function(){b||!P||S||(j(!0),I())}),[P,I,b,j,S]);var z=function(e,t){if(e)return console.error("QR code error",e),void("NotAllowedError"===e.name||"PermissionDismissedError"===e.name?(T(!0),j(!1)):k("The QR could not be read"));t?o(t):P&&k("The QR could not be read")};return Object(y.jsxs)(x.c,{description:"Receive Tokens Form",handleClose:n,open:t,title:"Receive Tokens",children:[Object(y.jsxs)(v.a,{align:"center",className:a.heading,grow:!0,children:[Object(y.jsx)(g.a,{noMargin:!0,size:"xl",children:"Scan QR"}),Object(y.jsx)(c.a,{disableRipple:!0,onClick:n,children:Object(y.jsx)(d.a,{className:a.close})})]}),Object(y.jsx)(m.a,{}),Object(y.jsxs)(h.a,{className:a.detailsContainer,layout:"column",middle:"xs",children:[S&&Object(y.jsx)(f.a,{padding:"md",margin:"md",children:S}),Object(y.jsx)(u.a,{legacyMode:P,onError:function(e){return z(e,null)},onScan:function(e){return z(null,e)},ref:R,style:{width:"400px",height:"400px"},facingMode:"user"})]}),Object(y.jsx)(m.a,{}),Object(y.jsxs)(v.a,{align:"center",className:a.buttonRow,children:[Object(y.jsx)(p.a,{className:a.button,color:"secondary",minWidth:154,onClick:n,children:"Close"}),Object(y.jsx)(p.a,{className:a.button,color:"primary",minWidth:154,onClick:function(){T(!0),k(null),j(!1)},variant:"contained",children:"Upload an image"})]})]})},S=n(128),k=Object(o.a)({qrCodeBtn:{cursor:"pointer"}}),B=function(e){var t=e.handleScan,n=e.testId,o=k(),c=Object(i.useState)(!1),s=Object(r.a)(c,2),d=s[0],l=s[1],u=function(){l(!1)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(S.a,{alt:"Scan QR",className:o.qrCodeBtn,height:20,onClick:function(){l(!0)},role:"button",src:a,testId:n||"qr-icon"}),d&&Object(y.jsx)(w,{isOpen:d,onClose:u,onScan:function(e){t(e,u)}})]})}},1606:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(7),o=n(8),i=n(10),a=n(11),c=n(587),s=n(590),d=n(588),l=n(783),u=n(0),b=n(2),j=function(e){if(e)return{maxWidth:"".concat(e,"px")}},O=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).changeSort=function(t,n){return function(){(0,e.props.onSort)(t,n)}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.columns,r=t.order,o=t.orderBy;return Object(b.jsx)(s.a,{children:Object(b.jsx)(d.a,{children:n.map((function(t){return Object(b.jsx)(c.a,{align:t.align,padding:t.disablePadding?"none":"normal",sortDirection:o===t.id&&r,children:t.static?Object(b.jsx)("div",{style:t.style,children:t.label}):Object(b.jsx)(l.a,{active:o===t.id,direction:r,onClick:e.changeSort(t.id,t.order),style:t.style,children:t.label})},t.id)}))})})}}]),n}(u.PureComponent);t.b=O},1627:function(e,t,n){"use strict";var r=n(7),o=n(8),i=n(10),a=n(11),c=n(27),s=n(618),d=n(589),l=n(1752),u=n(17),b=n(0),j=n(1606),O=n(74),x=function(e,t,n,r,o){var i=r?"".concat(n,"Order"):n;return o(t[i])<o(e[i])?-1:o(t[i])>o(e[i])?1:0},f=n(110),p=n(12),h=n(2),m={root:{backgroundColor:"white",borderTopRightRadius:p.sm,borderTopLeftRadius:p.sm,boxShadow:"1px 2px 10px 0 rgba(212, 212, 211, 0.59)"},selectRoot:{lineHeight:p.xxl,backgroundColor:"white"},white:{backgroundColor:"white"},paginationRoot:{backgroundColor:"white",boxShadow:"1px 2px 10px 0 rgba(212, 212, 211, 0.59)",marginBottom:"90px",borderBottomRightRadius:p.sm,borderBottomLeftRadius:p.sm},loader:{boxShadow:"1px 2px 10px 0 rgba(212, 212, 211, 0.59)"}},g={"aria-label":"Previous Page"},v={"aria-label":"Next Page"},y=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).onSort=function(e,t){var n=o.state,r=n.order,i=n.orderBy,a=o.props.defaultOrder,c="desc";r&&i===e&&"desc"===r?c="asc":r||"desc"!==a||(c="asc"),o.setState((function(){return{order:c,orderBy:e,orderProp:t,fixed:!1}}))},o.getEmptyStyle=function(){return{height:"calc(100vh - ".concat(255,"px)"),borderTopRightRadius:p.sm,borderTopLeftRadius:p.sm,backgroundColor:"white",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},o.handleChangePage=function(e,t){o.setState({page:t})},o.handleChangeRowsPerPage=function(e){var t=Number(e.target.value);o.setState({rowsPerPage:t})},o.state={page:0,order:void 0,orderBy:void 0,fixed:void 0,orderProp:!1,rowsPerPage:void 0},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.columns,n=e.defaultOrderBy;n&&t&&(t.find((function(e){return e.id===n})).order&&this.setState({orderProp:!0}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,r=e.columns,o=e.data,i=e.defaultFixed,a=e.defaultOrder,u=e.defaultOrderBy,b=e.defaultRowsPerPage,p=e.disableLoadingOnEmptyTable,m=e.disablePagination,y=e.label,C=e.noBorder,w=e.size,S=this.state,k=S.fixed,B=S.order,E=S.orderBy,P=S.orderProp,T=S.page,R=S.rowsPerPage,I=E||u,z=B||a,N=R||b,A="undefined"!==typeof k?k:!!i,D={selectRoot:n.selectRoot,root:!C&&n.paginationRoot,input:n.white},H=r.find((function(e){return e.id===I})),M=function(e,t,n){var r=n?e.filter((function(e){return e.fixed})):Object(O.a)([]),o=(n?e.filter((function(e){return!e.fixed})):e).map((function(e,t){return[e,t]})),i=(o=o.sort((function(e,n){var r=t(e[0],n[0]);return 0!==r?r:e[1]-n[1]}))).map((function(e){return e[0]}));return r.concat(i)}(o,function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e};return"desc"===e?function(e,o){return x(e,o,t,n,r)}:function(e,o){return-x(e,o,t,n,r)}}(z,I,P,null===H||void 0===H?void 0:H.formatTypeSort),A);m||(M=M.slice(T*N,T*N+N));var F=0===w&&!p;return Object(h.jsxs)(h.Fragment,{children:[!F&&Object(h.jsxs)(s.a,{"aria-labelledby":y,className:C?"":n.root,children:[Object(h.jsx)(j.b,{columns:r,onSort:this.onSort,order:B,orderBy:I}),Object(h.jsx)(d.a,{children:t(M)})]}),F&&Object(h.jsx)(f.a,{className:n.loader,style:this.getEmptyStyle(),children:Object(h.jsx)(c.Loader,{size:"sm"})}),!m&&Object(h.jsx)(l.a,{backIconButtonProps:g,classes:D,component:"div",count:w,nextIconButtonProps:v,onPageChange:this.handleChangePage,onRowsPerPageChange:this.handleChangeRowsPerPage,page:T,rowsPerPage:N,rowsPerPageOptions:[5,10,25,50,100]})]})}}]),n}(b.Component);y.defaultProps={defaultOrder:"asc",disablePagination:!1,defaultRowsPerPage:5};t.a=Object(u.a)(m)(y)},1634:function(e,t,n){"use strict";var r=n(16),o=n(9),i=n(90),a=n(43),c=n(0),s=n(1558),d=n(1622),l=n(624),u=n(617),b=n(1567),j=n(565),O=n(160),x=n(31),f=n(46),p=n(66),h=n(22),m=n(191),g=n(2);t.a=function(e){var t=e.className,n=void 0===t?"":t,v=e.name,y=void 0===v?"recipientAddress":v,C=e.text,w=void 0===C?"Recipient*":C,S=e.placeholder,k=void 0===S?"Recipient*":S,B=e.fieldMutator,E=e.testId,P=e.inputAdornment,T=e.validators,R=void 0===T?[]:T,I=e.defaultValue,z=e.disabled,N=Object(c.useState)(""),A=Object(a.a)(N,2),D=A[0],H=A[1],M=Object(c.useState)({}),F=Object(a.a)(M,2),L=F[0],V=F[1],W=L[D],_=""===W,q=Object(c.useCallback)((function(e){var t=Object(m.b)(e);return j.d.apply(void 0,Object(i.a)(R))(t.address)}),[R]),Q=Object(c.useMemo)((function(){return Object(j.d)(j.p,j.k,q)}),[q]),U=Object(c.useCallback)((function(e){var t=Object(O.c)(e);if(H(e),Object(f.e)(t)||Object(f.d)(t))V((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,""))})),Object(x.c)(t).then((function(t){var n=Object(p.a)(t);V((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,n))}))})).catch((function(t){V((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(r.a)({},e,void 0))})),Object(h.c)(h.b._101,t.message)}));else if(!Object(j.k)(t)){var n=Object(m.b)(t),i=Object(p.a)(n.address)||n.address;B(i)}}),[H,V,B]);Object(c.useEffect)((function(){W&&U(W)}),[W,U]);var J=_?{endAdornment:Object(g.jsx)(l.a,{position:"end",children:Object(g.jsx)(u.a,{size:"16px"})})}:P;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(s.a,{className:n,component:b.a,defaultValue:I,disabled:z,inputAdornment:J,name:y,placeholder:k,text:w,spellCheck:!1,validate:Q,inputProps:{"data-testid":E}}),Object(g.jsx)(d.a,{name:y,children:U})]})}},2975:function(e,t,n){"use strict";n.r(t);var r,o,i,a,c,s,d,l,u=n(9),b=n(43),j=n(26),O=n(27),x=n(587),f=n(619),p=n(588),h=n(417),m=n(299),g=n.n(m),v=n(24),y=n(0),C=n(38),w=n(12),S=n(544),k=Object(S.a)({formContainer:{minHeight:"250px"},title:{padding:w.lg,paddingBottom:0},annotation:{paddingLeft:w.lg},hide:{"&:hover":{backgroundColor:"#f7f5f5"},"&:hover $actions":{visibility:"initial"}},actions:{justifyContent:"flex-end",alignItems:"center",visibility:"hidden",minWidth:"100px",gap:w.md},noBorderBottom:{"& > td":{borderBottom:"none"}},controlsRow:{backgroundColor:"white",padding:w.lg,borderRadius:w.sm},editEntryButton:{cursor:"pointer"},editEntryButtonNonOwner:{cursor:"pointer"},removeEntryButton:{cursor:"pointer"},removeEntryButtonDisabled:{cursor:"default"},removeEntryButtonNonOwner:{cursor:"pointer"},leftIcon:{marginRight:w.sm},iconSmall:{fontSize:16}}),B=n(19),E=n(351),P=n(1627),T=n(1606),R=n(150),I=n(127),z=n(110),N=n(158),A=n(346),D=n(132),H=n(342),M=n(46),F=n(63),L=Object(h.a)(Object(S.a)({heading:{padding:w.lg,justifyContent:"space-between",boxSizing:"border-box",height:"74px"},manage:{fontSize:w.lg},container:{padding:"".concat(w.md," ").concat(w.lg)},close:{height:"35px",width:"35px"}})),V=n(341),W=n(1586),_=n(1634),q=n(1561),Q=n(1576),U=n(1567),J=n(565),K=n(2),Y=["isNew"],$="create-entry-input-name",G="create-entry-input-address",X="save-new-entry-btn-id",Z={setOwnerAddress:function(e,t,n){n.changeValue(t,"address",(function(){return e[0]}))}},ee=function(e){var t=e.editEntryModalHandler,n=e.entryToEdit,r=e.isOpen,o=e.newEntryModalHandler,i=e.onClose,a=L(),c=n.entry,s=c.isNew,d=Object(F.a)(c,Y),l=Object(C.e)(H.e),u=Object(J.q)(l);return Object(K.jsxs)(V.b,{description:s?"Create new addressBook entry":"Edit addressBook entry",handleClose:i,open:r,title:s?"Create new entry":"Edit entry",children:[Object(K.jsx)(V.b.Header,{onClose:i,children:Object(K.jsx)(V.b.Header.Title,{children:s?"Create entry":"Edit entry"})}),Object(K.jsx)(V.b.Body,{withoutPadding:!0,children:Object(K.jsx)(Q.a,{formMutators:Z,onSubmit:function(e){s?o(e):t(e)},initialValues:d,children:function(){var e=arguments.length<=2?void 0:arguments[2],t=arguments.length<=3?void 0:arguments[3],n=function(e,n){var r=e;r.startsWith("ethereum:")&&(r=r.replace("ethereum:","")),t.setOwnerAddress(r),n()};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(R.a,{className:a.container,children:[Object(K.jsx)(z.a,{margin:"md",children:Object(K.jsx)(I.a,{xs:11,children:Object(K.jsx)(q.a,{component:U.a,name:"name",placeholder:"Name*",testId:$,text:"Name*",type:"text",validate:Object(J.d)(J.p,J.r)})})}),Object(K.jsxs)(z.a,{margin:"md",children:[Object(K.jsx)(I.a,{xs:11,children:Object(K.jsx)(_.a,{disabled:!s,fieldMutator:t.setOwnerAddress,name:"address",placeholder:"Address*",testId:G,text:"Address*",validators:[function(e){return s?u(e):void 0}]})}),s?Object(K.jsx)(I.a,{center:"xs",className:a,middle:"xs",xs:1,children:Object(K.jsx)(W.a,{handleScan:n})}):null]})]}),Object(K.jsx)(V.b.Footer,{children:Object(K.jsx)(V.b.Footer.Buttons,{cancelButtonProps:{onClick:i},confirmButtonProps:{disabled:!e.valid,testId:X,text:s?"Create":"Save"}})})]})}})})]})},te=n(450),ne=n(2099),re=n(87),oe=n(112),ie=n(64),ae=n(128),ce=Object(v.default)(O.Icon)(r||(r=Object(j.a)(["\n  svg {\n    position: relative;\n    top: 4px;\n    left: 4px;\n  }\n"]))),se=function(){return Object(K.jsxs)(O.Link,{href:"https://help.gnosis-safe.io/en/articles/5299068-address-book-export-and-import",target:"_blank",rel:"noreferrer",title:"Export & import info",children:[Object(K.jsx)(O.Text,{size:"xl",as:"span",color:"primary",children:"Learn about the address book import and export"}),Object(K.jsx)(ce,{size:"sm",type:"externalLink",color:"primary"})]})},de=n.p+"static/media/success.05cfb920.svg",le=n.p+"static/media/error.b0f27278.svg",ue=n.p+"static/media/wait.8fd3356d.svg",be=Object(v.default)(z.a)(o||(o=Object(j.a)(["\n  padding: "," ",";\n  justify-content: center;\n"])),w.md,w.lg),je=Object(v.default)(z.a)(i||(i=Object(j.a)(["\n  background-color: ",";\n  flex-direction: column;\n  justify-content: center;\n  padding: ",";\n  text-align: center;\n"])),w.background,w.lg),Oe=v.default.div(a||(a=Object(j.a)(["\n  grid-row: 1;\n"]))),xe=Object(v.default)(O.Loader)(c||(c=Object(j.a)(["\n  margin-right: 5px;\n"]))),fe=function(e){var t=e.isOpen,n=e.onClose,r=Object(C.d)(),o=Object(C.e)(H.c),i=Object(y.useState)(!0),a=Object(b.a)(i,2),c=a[0],s=a[1],d=Object(y.useState)(""),l=Object(b.a)(d,2),u=l[0],j=l[1],x=Object(y.useState)(""),f=Object(b.a)(x,2),p=f[0],h=f[1],m=Object(y.useState)(!1),g=Object(b.a)(m,2),v=g[0],w=g[1],S=Object(te.a)(new Date,"yyyy-MM-dd");return Object(y.useEffect)((function(){!function(){if(t||v){s(!0),j("");try{h(Object(ne.c)(o))}catch(e){return s(!1),void j(e.message)}s(!1),w(!1)}}()}),[o,t,v,p]),Object(K.jsxs)(V.b,{description:"Export address book",handleClose:n,open:t,title:"Export address book",children:[Object(K.jsx)(V.b.Header,{onClose:n,children:Object(K.jsx)(V.b.Header.Title,{withoutMargin:!0,children:"Export address book"})}),Object(K.jsxs)(V.b.Body,{withoutPadding:!0,children:[Object(K.jsx)(be,{children:Object(K.jsx)(Oe,{children:Object(K.jsx)(ae.a,{alt:"Export",height:92,src:u?le:c?ue:de})})}),Object(K.jsx)(je,{children:Object(K.jsx)(O.Text,{color:"primary",as:"p",size:"xl",children:u?Object(K.jsx)(O.Text,{size:"xl",as:"span",children:"An error occurred while generating the address book CSV."}):Object(K.jsxs)(O.Text,{size:"xl",as:"span",children:["You're about to export a CSV file with"," ",Object(K.jsxs)(O.Text,{size:"xl",strong:!0,as:"span",children:[o.length," address book entries. ",Object(K.jsx)("br",{}),Object(K.jsx)(se,{})]}),"."]})})})]}),Object(K.jsxs)(V.b.Footer,{withoutBorder:!0,children:[Object(K.jsx)(O.Button,{size:"md",variant:"outlined",onClick:n,children:"Cancel"}),u?Object(K.jsx)(O.Button,{color:"primary",size:"md",disabled:c,onClick:function(){return w(!0)},children:"Retry"}):Object(K.jsx)(ne.a,{data:p,bom:!0,filename:"gnosis-safe-address-book-".concat(S),type:"link",children:Object(K.jsxs)(O.Button,{color:"primary",size:"md",disabled:c,onClick:function(){s(!0),setTimeout((function(){if(!c){var e=Object(re.d)(ie.a.ADDRESS_BOOK_EXPORT_ENTRIES),t=u?e.afterExecution.afterExecutionError:e.afterExecution.noMoreConfirmationsNeeded;r(Object(oe.b)(Object(re.c)(t)))}n()}),600)},children:[c&&Object(K.jsx)(xe,{color:"secondaryLight",size:"xs"}),"Download"]})})]})]})},pe=function(e){var t=e.deleteEntryModalHandler,n=e.entryToDelete,r=e.isOpen,o=e.onClose;return Object(K.jsxs)(V.b,{description:"Delete entry",handleClose:o,open:r,title:"Delete entry",children:[Object(K.jsx)(V.b.Header,{onClose:o,children:Object(K.jsx)(V.b.Header.Title,{children:"Delete entry"})}),Object(K.jsx)(Q.a,{onSubmit:function(){t()},children:function(){return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(V.b.Body,{children:Object(K.jsxs)(O.Text,{size:"xl",children:["This action will delete"," ",Object(K.jsx)(O.Text,{size:"xl",strong:!0,as:"span",children:n.entry.name})," ","from the address book."]})}),Object(K.jsx)(V.b.Footer,{children:Object(K.jsx)(V.b.Footer.Buttons,{cancelButtonProps:{onClick:o},confirmButtonProps:{color:"error",testId:"delete-entry-btn-id",text:"Delete"}})})]})}})]})},he=n(74),me="name",ge="address",ve=n(585),ye=n(79),Ce=n(66),we=n(242),Se=n(190),ke=n(249),Be=["","text/csv","text/plain","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],Ee=/[^.]+\.(txt|csv|tsv|ods|xls|xlsx)$/,Pe=v.default.div(s||(s=Object(j.a)(["\n  flex-direction: column;\n  justify-content: center;\n  margin: 24px;\n  align-items: center;\n  min-height: 100px;\n  display: flex;\n"]))),Te=v.default.div(d||(d=Object(j.a)(["\n  background-color: ",";\n  flex-direction: column;\n  justify-content: center;\n  padding: 24px;\n  text-align: center;\n  margin-top: 16px;\n"])),(function(e){return e.theme.colors.background})),Re=function(e){var t=e.importEntryModalHandler,n=e.isOpen,r=e.onClose,o=Object(y.useState)(!1),i=Object(b.a)(o,2),a=i[0],c=i[1],s=Object(y.useState)(""),d=Object(b.a)(s,2),l=d[0],u=d[1],j=Object(y.useState)([]),x=Object(b.a)(j,2),f=x[0],p=x[1],h=function(){c(!1),p([]),u(""),r()};return Object(K.jsxs)(V.b,{description:"Import address book",handleClose:h,open:n,title:"Import address book",children:[Object(K.jsx)(V.b.Header,{onClose:h,children:Object(K.jsx)(V.b.Header.Title,{children:"Import address book"})}),Object(K.jsxs)(V.b.Body,{withoutPadding:!0,children:[Object(K.jsx)(Pe,{children:Object(K.jsx)(ne.b,{onDrop:function(e,t){var n=e.slice(1),r=function(e){return Be.includes(e.type)&&Ee.test(e.name.toLowerCase())?e.size>=1e6?"The size of the file is over 1 MB":void 0:"Only CSV files are allowed"}(t);if(r)u(r);else{var o=[];n.forEach((function(e){(1!==e.data.length||e.data[0])&&o.push(e)}));var i=function(e){for(var t=0;t<e.length;t++){var n=e[t],r=Object(b.a)(n.data,3),o=r[0],i=r[1],a=r[2];if(3!==n.data.length)return"Invalid amount of columns on row ".concat(t+1);if("string"!==typeof o||"string"!==typeof i||"string"!==typeof a)return"Invalid amount of columns on row ".concat(t+1);if(!o.trim()||!i.trim()||!a.trim())return"Invalid amount of columns on row ".concat(t+1);var c=o.toLowerCase();if(!Object(ke.a)(c))return"Invalid address on row ".concat(t+1);if(!Object(B.t)(a.trim()))return"Invalid chain id on row ".concat(t+1)}}(o);if(i)u(i);else{var a=o.map((function(e){var t=e.data;return{address:Object(Ce.a)(t[0].trim()),name:t[1].trim(),chainId:t[2].trim()}}));p(a),u(""),c(!0)}}},onError:function(e){u(e.message)},addRemoveButton:!0,onRemoveFile:function(){c(!1),u("")},style:{dropArea:{borderColor:"#B2B5B2",borderRadius:8},dropAreaActive:{borderColor:"#008C73"},dropFile:{width:200,height:100,background:"#fff",boxShadow:"rgb(40 54 61 / 18%) 1px 2px 10px 0px",borderRadius:8},fileSizeInfo:{color:"#001428",lineHeight:1,position:"absolute",left:"10px",top:"12px"},fileNameInfo:{color:""===l?"#008C73":"#DB3A3D",backgroundColor:"#fff",fontSize:14,lineHeight:1.4,padding:"0 0.4em",margin:"1.2em 0 0.5em 0",maxHeight:"59px",overflow:"hidden"},progressBar:{backgroundColor:"#008C73"},removeButton:{color:"#DB3A3D"}},children:Object(K.jsxs)(O.Text,{size:"xl",children:["Drop your CSV file here ",Object(K.jsx)("br",{}),"or click to upload."]})})}),Object(K.jsxs)(Te,{children:[""!==l&&Object(K.jsx)(O.Text,{size:"xl",color:"error",children:l}),!a&&""===l&&Object(K.jsxs)(O.Text,{color:"text",as:"p",size:"xl",children:["Only CSV files exported from Gnosis Safe are allowed. ",Object(K.jsx)("br",{}),Object(K.jsx)(se,{})]}),a&&""===l&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(O.Text,{size:"xl",as:"span",children:"You're about to import"}),Object(K.jsx)(O.Text,{size:"xl",strong:!0,as:"span",children:" ".concat(f.length," entries to your address book")})]})]})]}),Object(K.jsx)(V.b.Footer,{withoutBorder:!0,children:Object(K.jsx)(V.b.Footer.Buttons,{cancelButtonProps:{onClick:function(){return h()}},confirmButtonProps:{color:"primary",disabled:!a||""!==l,onClick:function(){c(!1),t(f)},text:"Import"}})})]})},Ie=n(58),ze=n(59),Ne=Object(v.default)(O.Button)(l||(l=Object(j.a)(["\n  &&.MuiButton-root {\n    margin: 4px 12px 4px 0px;\n    padding: 0 12px;\n    min-width: auto;\n  }\n\n  svg {\n    margin: 0 6px 0 0;\n  }\n"]))),Ae=Object(h.a)(k);t.default=function(){var e,t,n=Ae(),r=function(){var e={id:me,order:!1,disablePadding:!1,label:"Name",width:150,custom:!1,align:"left"},t={id:ge,order:!1,disablePadding:!1,label:"Address",custom:!1,align:"left"},n={id:"actions",order:!1,disablePadding:!1,label:"",custom:!0};return Object(he.a)([e,t,n])}(),o=r.filter((function(e){return!e.custom})),i=Object(C.d)(),a=Object(C.e)(ye.l),c=Object(C.e)(H.d),s=Object(C.e)(ze.a),d=Object(C.e)(we.b),l=Object(C.e)(ze.a),j={entry:{address:"",name:"",chainId:l,isNew:!0}},h=Object(y.useState)(j),m=Object(b.a)(h,2),v=m[0],w=m[1],S=Object(y.useState)(!1),k=Object(b.a)(S,2),F=k[0],L=k[1],V=Object(y.useState)(!1),W=Object(b.a)(V,2),_=W[0],q=W[1],Q=Object(y.useState)(!1),U=Object(b.a)(Q,2),J=U[0],Y=U[1],$=Object(y.useState)(!1),G=Object(b.a)($,2),X=G[0],Z=G[1],te=Object(y.useState)(!1),ne=Object(b.a)(te,2),re=ne[0],oe=ne[1],ie=Object(Se.g)().trackEvent,ae=Object(Ie.h)(),ce=Object.fromEntries(new URLSearchParams(ae.location.search)),se=null===ce||void 0===ce?void 0:ce.entryAddress;Object(y.useEffect)((function(){ie(Se.b.ADDRESS_BOOK)}),[ie]),Object(y.useEffect)((function(){se&&L(!0)}),[se]),Object(y.useEffect)((function(){if(Object(ke.a)(se)){var e=Object(Ce.a)(se),t=c.findIndex((function(t){return Object(M.f)(t.address,e)}));w(t>=0?{entry:c[t],index:t}:{entry:{name:"",address:e,chainId:s,isNew:!0}})}}),[c,se,s]);return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(O.Menu,{children:[Object(K.jsx)(I.a,{start:"sm",sm:6,xs:12,children:Object(K.jsx)(O.Breadcrumb,{children:Object(K.jsx)(O.BreadcrumbElement,{iconType:"addressBook",text:"Address Book",counter:null===c||void 0===c?void 0:c.length.toString()})})}),Object(K.jsxs)(I.a,{end:"sm",sm:6,xs:12,children:[Object(K.jsx)(O.ButtonLink,{onClick:function(){w(j),Z(!0)},color:"primary",iconType:"exportImg",iconSize:"sm",textSize:"xl",children:"Export"}),Object(K.jsx)(O.ButtonLink,{onClick:function(){q(!0)},color:"primary",iconType:"importImg",iconSize:"sm",textSize:"xl",children:"Import"}),Object(K.jsx)(O.ButtonLink,{onClick:function(){w(j),L(!0)},color:"primary",iconType:"add",iconSize:"sm",textSize:"xl",children:"Create entry"})]})]}),Object(K.jsx)(R.a,{className:n.formContainer,children:Object(K.jsx)(f.a,{children:Object(K.jsx)(P.a,{columns:r,data:c,defaultFixed:!0,defaultOrderBy:me,defaultRowsPerPage:25,disableLoadingOnEmptyTable:!0,label:"Owners",size:(null===c||void 0===c?void 0:c.length)||0,children:function(e){return e.map((function(t,r){var i=Object(M.c)(a,t.address),c=r>=3&&r===e.size-1&&n.noBorderBottom;return Object(K.jsxs)(p.a,{className:g()(n.hide,c),"data-testid":"address-book-row",tabIndex:-1,children:[o.map((function(e){return Object(K.jsx)(x.a,{align:e.align,component:"td",style:Object(T.a)(e.width),children:e.id===ge?Object(K.jsx)(R.a,{justify:"left",children:Object(K.jsx)(N.a,{hash:t[e.id],showCopyBtn:!0,showAvatar:!0,explorerUrl:Object(B.i)(t[e.id])})}):t[e.id]},e.id)})),Object(K.jsx)(x.a,{component:"td",children:Object(K.jsxs)(z.a,{align:"end",className:n.actions,children:[Object(K.jsx)(E.a,{onClick:function(){w({entry:t,isOwnerAddress:i}),L(!0)},children:Object(K.jsx)(O.Icon,{size:"sm",type:"edit",tooltip:"Edit entry",className:d?n.editEntryButton:n.editEntryButtonNonOwner})}),Object(K.jsx)(E.a,{onClick:function(){w({entry:t}),Y(!0)},children:Object(K.jsx)(O.Icon,{size:"sm",type:"delete",color:"error",tooltip:"Delete entry",className:d?n.removeEntryButton:n.removeEntryButtonNonOwner})}),d?Object(K.jsxs)(Ne,{color:"primary",onClick:function(){w({entry:t}),oe(!0)},size:"md",variant:"contained","data-testid":"send-entry-btn",children:[Object(K.jsx)(O.FixedIcon,{type:"arrowSentWhite"}),Object(K.jsx)(O.Text,{size:"xl",color:"white",children:"Send"})]}):null]})})]},r)}))}})})}),Object(K.jsx)(ee,{editEntryModalHandler:function(e){w(j),L(!1),i(Object(D.b)(Object(A.b)(Object(u.a)(Object(u.a)({},e),{},{address:Object(Ce.a)(e.address),chainId:l}))))},entryToEdit:v,isOpen:F,newEntryModalHandler:function(e){L(!1),i(Object(D.b)(Object(A.b)(Object(u.a)(Object(u.a)({},e),{},{address:Object(Ce.a)(e.address),chainId:l}))))},onClose:function(){return L(!1)}}),Object(K.jsx)(pe,{deleteEntryModalHandler:function(){w(j),Y(!1),(null===v||void 0===v?void 0:v.entry)&&i(Object(D.d)(v.entry))},entryToDelete:v,isOpen:J,onClose:function(){return Y(!1)}}),Object(K.jsx)(fe,{isOpen:X,onClose:function(){return Z(!1)}}),Object(K.jsx)(Re,{importEntryModalHandler:function(e){i(Object(D.c)(e)),q(!1)},isOpen:_,onClose:function(){return q(!1)}}),Object(K.jsx)(ve.a,{activeScreenType:"chooseTxType",isOpen:re,onClose:function(){return oe(!1)},recipientAddress:null===v||void 0===v||null===(e=v.entry)||void 0===e?void 0:e.address,recipientName:null===v||void 0===v||null===(t=v.entry)||void 0===t?void 0:t.name})]})}}}]);
//# sourceMappingURL=54.641c0fdb.chunk.js.map