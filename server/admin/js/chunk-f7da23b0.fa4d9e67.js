(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7da23b0"],{7773:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.items}},[n("el-table-column",{staticStyle:{width:"220px"},attrs:{label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row._id))])]}}])}),n("el-table-column",{attrs:{label:"名称",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v("名称: "+t._s(e.row.name))]),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.name))])],1)])]}}])}),n("el-table-column",{attrs:{label:"图片",prop:"icon"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{height:"3rem"},attrs:{src:t.row.icon,alt:""}})]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.$router.push("/items/edit/"+e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)},a=[],c=(n("b0c0"),n("96cf"),n("1da1")),s={data:function(){return{items:[]}},methods:{fetch:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/rest/items");case 2:n=e.sent,t.items=n.data;case 4:case"end":return e.stop()}}),e)})))()},remove:function(t){var e=this;this.$confirm("此操作将永久删除".concat(t.name,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.delete("/rest/items/".concat(t._id));case 2:r=n.sent,console.log(r),e.$message({type:"success",message:"删除成功!"}),e.fetch();case 6:case"end":return n.stop()}}),n)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}},created:function(){this.fetch()}},o=s,i=n("2877"),u=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=u.exports},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,c=Function.prototype,s=c.toString,o=/^\s*function ([^ (]*)/,i="name";!r||i in c||a(c,i,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-f7da23b0.fa4d9e67.js.map