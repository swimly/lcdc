(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1274d00e"],{"0a49":function(t,n,e){var o=e("9b43"),r=e("626a"),i=e("4bf8"),a=e("9def"),c=e("cd1c");t.exports=function(t,n){var e=1==t,s=2==t,d=3==t,l=4==t,u=6==t,p=5==t||u,f=n||c;return function(n,c,h){for(var m,v,y=i(n),b=r(y),g=o(c,h,3),x=a(b.length),A=0,k=e?f(n,x):s?f(n,0):void 0;x>A;A++)if((p||A in b)&&(m=b[A],v=g(m,A,y),t))if(e)k[A]=v;else if(v)switch(t){case 3:return!0;case 5:return m;case 6:return A;case 2:k.push(m)}else if(l)return!1;return u?-1:d||l?l:k}}},1169:function(t,n,e){var o=e("2d95");t.exports=Array.isArray||function(t){return"Array"==o(t)}},"20cb":function(t,n,e){"use strict";var o=e("2eee"),r=e.n(o);r.a},"2eee":function(t,n,e){},7514:function(t,n,e){"use strict";var o=e("5ca1"),r=e("0a49")(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),o(o.P+o.F*a,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(i)},7791:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"structure"},[e("div",{staticClass:"flex horizontal v-m t-lr"},[e("h2",{staticClass:"page-title"},[t._v("web组件")]),e("Button",{on:{click:function(n){t.modal.add=!0}}},[t._v("添加")])],1),e("Tree",{attrs:{data:t.list,render:t.renderContent}}),e("Modal",{attrs:{title:"新增组织架构"},on:{"on-ok":t.handleAdd},model:{value:t.modal.add,callback:function(n){t.$set(t.modal,"add",n)},expression:"modal.add"}},[e("Input",{attrs:{placeholder:t.placeholder},model:{value:t.form.title,callback:function(n){t.$set(t.form,"title",n)},expression:"form.title"}})],1)],1)},r=[],i=(e("7514"),{computed:{list:function(){return this.$store.state.componentType}},data:function(){return{placeholder:"请输入！",buttonProps:{type:"default",size:"small"},modal:{add:!1},form:{parentId:"",title:"",topic:"component"}}},created:function(){this.$store.dispatch("ActionComponentType",this)},methods:{handleAdd:function(){this.$store.dispatch("ActionAddComponentTypeUpdate",this),this.form.parentId="",this.form.title=""},renderContent:function(t,n){var e=this,o=n.root,r=n.node,i=n.data;return t("span",{style:{display:"inline-block",width:"100%"}},[t("span",[t("Icon",{props:{type:"ios-paper-outline"},style:{marginRight:"8px"}}),t("span",i.title)]),t("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[t("Button",{props:Object.assign({},this.buttonProps,{icon:"ios-add"}),style:{marginRight:"8px"},on:{click:function(){console.log(i),e.form.parentId=i._id,e.placeholder=i.title,e.modal.add=!0}}}),t("Button",{props:Object.assign({},this.buttonProps,{icon:"ios-remove"}),on:{click:function(){e.remove(o,r,i)}}})])])},append:function(t){var n=t.children||[];n.push({title:"appended node",expand:!0}),this.$set(t,"children",n)},remove:function(t,n,e){var o=t.find(function(t){return t===n}).parent,r=t.find(function(t){return t.nodeKey===o}).node,i=r.children.indexOf(e);r.children.splice(i,1)}}}),a=i,c=(e("20cb"),e("2877")),s=Object(c["a"])(a,o,r,!1,null,null,null);n["default"]=s.exports},cd1c:function(t,n,e){var o=e("e853");t.exports=function(t,n){return new(o(t))(n)}},e853:function(t,n,e){var o=e("d3f4"),r=e("1169"),i=e("2b4c")("species");t.exports=function(t){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)||(n=void 0),o(n)&&(n=n[i],null===n&&(n=void 0))),void 0===n?Array:n}}}]);
//# sourceMappingURL=chunk-1274d00e.d432146f.js.map