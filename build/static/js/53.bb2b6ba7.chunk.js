(this["webpackJsonpsafe-react"]=this["webpackJsonpsafe-react"]||[]).push([[53],{1520:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(15),i=n(43),s=n(417),o=n(0),u=n(38),d=n(296),b=n(19),j=n(1588),l=n(150),O=n(127),x=n(173),f=n(128),m=n(86),p=n(110),h=n(158),v=n(286),g=n(567),w=n(64),k=n(1790),S=n(46),C=n(94),T=n(1601),y=n(1577),A=n(242),E=n(12),G=n(544),P=Object(G.a)({container:{padding:"".concat(E.md," ").concat(E.lg)},amount:{marginLeft:E.sm},buttonRow:{height:"84px",justifyContent:"center",gap:"16px"}}),D=n(1570),N=n(22),B=n(21),F=n(225),L=n(566),M=n(1579),I=n(2),z=Object(s.a)(P);t.default=function(e){var t=e.onClose,n=e.onPrev,a=e.tx,s=z(),E=Object(u.d)(),G=Object(B.l)(),P=Object(b.n)(),R=Object(u.e)(A.a),_=Object(o.useMemo)((function(){return R.find((function(e){return Object(S.f)(e.address,a.token)}))}),[R,a.token]),U=Object(o.useMemo)((function(){return Object(S.f)(null===_||void 0===_?void 0:_.address,Object(F.b)())}),[_]),J=U?a.recipientAddress:(null===_||void 0===_?void 0:_.address)||"",V=U?Object(d.c)(a.amount,P.decimals):"0",H=function(e,t,n,a){var s=Object(o.useState)(""),u=Object(i.a)(s,2),b=u[0],j=u[1];return Object(o.useEffect)((function(){var i=function(){var i=Object(r.a)(c.a.mark((function r(){var i,s,o;return c.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a){c.next=2;break}return c.abrupt("return");case 2:i=C.a,e||(s=Object(k.a)(a.address),o=Object(d.c)(t,a.decimals),i=s.methods.transfer(n,o).encodeABI()),j(i);case 5:case"end":return c.stop()}}),r)})));return function(){return i.apply(this,arguments)}}();i()}),[e,n,t,a]),b}(U,a.amount,a.recipientAddress,_),W=Object(M.e)(a.txType),X=function(){var e=Object(r.a)(c.a.mark((function e(n,r){var i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(W&&_&&a.tokenSpendingLimit)){e.next=12;break}return i=U?S.a:_.address,s=Object(v.a)(),e.prev=3,e.next=6,s.methods.executeAllowanceTransfer(G,i,a.recipientAddress,Object(d.c)(a.amount,_.decimals),S.a,0,a.tokenSpendingLimit.delegate,C.a).send({from:a.tokenSpendingLimit.delegate}).on("transactionHash",(function(){return t()}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),Object(N.c)(N.b._801,e.t0.message);case 11:return e.abrupt("return");case 12:E(Object(g.c)({safeAddress:G,to:J,valueInWei:V,txData:H,txNonce:n.safeNonce,safeTxGas:n.safeTxGas,ethParameters:n,notifiedTransaction:w.a.STANDARD_TX,delayExecution:r})),t();case 14:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(I.jsxs)(D.a,{txData:H,txValue:V,txTo:J,txType:a.txType||"",onSubmit:X,onBack:n,children:[Object(I.jsx)(L.a,{onClose:t,subTitle:"2 of 2",title:"Send funds"}),Object(I.jsx)(x.a,{}),Object(I.jsxs)(l.a,{className:s.container,children:[Object(I.jsx)(T.a,{}),Object(I.jsx)(j.a,{withArrow:!0}),Object(I.jsx)(p.a,{margin:"xs",children:Object(I.jsx)(m.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Recipient"})}),Object(I.jsx)(p.a,{align:"center",margin:"md","data-testid":"recipient-review-step",children:Object(I.jsx)(O.a,{xs:12,children:Object(I.jsx)(h.a,{hash:a.recipientAddress,name:a.recipientName,showCopyBtn:!0,showAvatar:!0,explorerUrl:Object(b.i)(a.recipientAddress)})})}),Object(I.jsx)(p.a,{margin:"xs",children:Object(I.jsx)(m.a,{color:"disabled",noMargin:!0,size:"md",style:{letterSpacing:"-0.5px"},children:"Amount"})}),Object(I.jsxs)(p.a,{align:"center",margin:"md",children:[Object(I.jsx)(f.a,{alt:null===_||void 0===_?void 0:_.name,height:28,onError:y.a,src:null===_||void 0===_?void 0:_.logoUri}),Object(I.jsxs)(m.a,{className:s.amount,noMargin:!0,size:"md","data-testid":"amount-".concat(null===_||void 0===_?void 0:_.symbol,"-review-step"),children:[a.amount," ",null===_||void 0===_?void 0:_.symbol]})]})]})]})}},1570:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a,c=n(43),r=n(26),i=n(0),s=n(24),o=n(1589),u=n(1607),d=n(21),b=n(1608),j=n(1611),l=n(1612),O=n(22),x=n(341),f=n(12),m=n(1602),p=n(1579),h=n(1595),v=n(2),g=s.default.div(a||(a=Object(r.a)(["\n  padding: 0 "," ",";\n"])),f.lg,f.md),w=function(e){var t=e.children,n=e.operation,a=e.txData,r=e.txValue,s=void 0===r?"0":r,f=e.txTo,w=e.txType,k=e.onSubmit,S=e.onBack,C=e.submitText,T=e.isConfirmDisabled,y=Object(i.useState)("0"),A=Object(c.a)(y,2),E=A[0],G=A[1],P=Object(i.useState)(),D=Object(c.a)(P,2),N=D[0],B=D[1],F=Object(i.useState)(),L=Object(c.a)(F,2),M=L[0],I=L[1],z=Object(i.useState)(),R=Object(c.a)(z,2),_=R[0],U=R[1],J=Object(i.useState)(),V=Object(c.a)(J,2),H=V[0],W=V[1],X=Object(i.useState)(!0),Y=Object(c.a)(X,2),q=Y[0],K=Y[1],Q=Object(d.l)(),Z=Object(p.e)(w),$=Object(o.b)({txData:a,txRecipient:f||Q,txType:w,txAmount:s,safeTxGas:E,manualGasPrice:N,manualMaxPrioFee:M,manualGasLimit:_,manualSafeNonce:H,operation:n}),ee=$.gasCostFormatted,te=$.gasPriceFormatted,ne=$.gasMaxPrioFeeFormatted,ae=$.gasLimit,ce=$.gasEstimation,re=$.txEstimationExecutionStatus,ie=$.isCreation,se=$.isOffChainSignature,oe=Object(l.a)(re),ue=Object(c.a)(oe,2),de=ue[0],be=ue[1],je=Object(h.a)(void 0,H),le=q&&je,Oe=function(e){var t=te,n=e.ethGasPrice,a=ae,c=e.ethGasLimit,r=ne,i=e.ethMaxPrioFee,s=ce,o=e.safeTxGas,u=e.safeNonce;if(t!==n&&B(n),r!==i&&I(i),a!==c&&U(c),o&&s!==o&&G(o),u){var d=parseInt(u,10);W(d)}};return Object(v.jsx)(u.a,{isOffChainSignature:se,isExecution:le,ethGasLimit:ae,ethGasPrice:te,ethMaxPrioFee:ne,safeTxGas:ce,closeEditModalCallback:Oe,children:function(e,n){return Object(v.jsxs)(v.Fragment,{children:[t,Object(v.jsxs)(g,{children:[!Z&&je&&Object(v.jsx)(j.a,{onChange:K}),!Z&&Object(v.jsx)(m.a,{txParameters:e,onEdit:n,isTransactionCreation:ie,isTransactionExecution:le,isOffChainSignature:se})]}),!Z&&Object(v.jsx)(b.a,{gasCostFormatted:ee,isCreation:ie,isExecution:le,safeNonce:e.safeNonce,txEstimationExecutionStatus:re}),Object(v.jsx)(x.b.Footer,{withoutBorder:!Z&&de!==x.a.LOADING,children:Object(v.jsx)(x.b.Footer.Buttons,{cancelButtonProps:{onClick:S||Oe,text:"Back"},confirmButtonProps:{onClick:function(){return function(e){if(be(x.a.LOADING),!Q)return be(x.a.READY),void Object(O.c)(O.b._802);k(e,!le)}(e)},status:de,disabled:T,text:re===o.a.LOADING?"Estimating":C,testId:"submit-tx-btn"}})})]})}})}},1577:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1580),c=function(e){var t=e.currentTarget;/token_placeholder/.test(t.src)||(t.src=a.a)};n(461)},1580:function(e,t,n){"use strict";t.a=n.p+"static/media/token_placeholder.c1abe466.svg"},1585:function(e,t,n){"use strict";var a=n(9),c=n(63),r=n(7),i=n(8),s=n(10),o=n(11),u=n(0),d=n(2),b=["children"],j=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=Object(c.a)(e,b);return Object(d.jsx)("b",Object(a.a)(Object(a.a)({},n),{},{children:t}))}}]),n}(u.PureComponent);t.a=j},1588:function(e,t,n){"use strict";var a,c,r=n(26),i=n(24),s=n(27),o=n(2),u=i.default.div(a||(a=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  margin: 8px 0;\n\n  svg {\n    margin: 0 12px 0 4px;\n  }\n"]))),d=Object(i.default)(s.Divider)(c||(c=Object(r.a)(["\n  width: 100%;\n"])));t.a=function(e){var t=e.withArrow;return Object(o.jsxs)(u,{children:[t&&Object(o.jsx)(s.Icon,{type:"arrowDown",size:"md"}),Object(o.jsx)(d,{})]})}},1601:function(e,t,n){"use strict";var a,c=n(26),r=n(38),i=n(24),s=n(19),o=n(79),u=n(86),d=n(1585),b=n(12),j=n(150),l=n(158),O=n(2),x=Object(i.default)(j.a)(a||(a=Object(c.a)(["\n  font-size: 12px;\n  line-height: 1.08;\n  letter-spacing: -0.5px;\n  background-color: ",";\n  width: fit-content;\n  padding: 5px 10px;\n  margin-top: ",";\n  margin-left: 40px;\n  border-radius: 3px;\n"])),b.border,b.xs);t.a=function(){var e=Object(r.e)(o.j),t=e.address,n=e.ethBalance,a=e.name,c=Object(s.n)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(l.a,{hash:t,name:a,explorerUrl:Object(s.i)(t),showAvatar:!0,showCopyBtn:!0}),n&&Object(O.jsx)(x,{children:Object(O.jsxs)(u.a,{noMargin:!0,children:["Balance: ",Object(O.jsx)(d.a,{"data-testid":"current-eth-balance",children:"".concat(n," ").concat(c.symbol)})]})})]})}},1790:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var a=n(1912),c=n(1913),r=n(31),i=function(e){return new(Object(r.i)().eth.Contract)(a.abi,e)},s=function(e){return new(Object(r.i)().eth.Contract)(c.abi,e)}}}]);
//# sourceMappingURL=53.bb2b6ba7.chunk.js.map