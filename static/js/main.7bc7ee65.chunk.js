(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},15:function(e,t,a){e.exports=a(30)},20:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),i=a.n(r),l=(a(20),a(5)),c=a(6),d=a(8),s=a(7),m=a(9),u=a(14),h=a.n(u),b=a(4),g=a(3),y=a(1),f=a(2),j=a(10),p=(a(24),function(e){var t=e.onInit,a=e.onUpdateColor,n=e.onAddNode;return o.a.createElement("div",{className:"centered-container"},o.a.createElement("div",{className:"inline-element"},o.a.createElement("button",{type:"button",onClick:t},"Init diagram")),o.a.createElement("div",{className:"inline-element"},o.a.createElement("button",{type:"button",onClick:a},"Update node color")),o.a.createElement("div",{className:"inline-element",onClick:n},o.a.createElement("button",{type:"button"},"Add node with selected node(s) as parent(s)")))}),v=(a(26),["lightblue","orange","lightgreen","pink","yellow","red","grey","magenta","cyan"]),O=function(){return v[Math.floor(Math.random()*v.length)]},k=function(e){var t=e.selectedNodes,a=t.reduce(function(e,t){return e+" "+t},"");return o.a.createElement("div",null,0===t.length?"No selection":"Selection: "+a)},D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(s.a)(t).call(this,e))).nodeId=0,a.createDiagram=a.createDiagram.bind(Object(y.a)(Object(y.a)(a))),a.modelChangeHandler=a.modelChangeHandler.bind(Object(y.a)(Object(y.a)(a))),a.initModelHandler=a.initModelHandler.bind(Object(y.a)(Object(y.a)(a))),a.updateColorHandler=a.updateColorHandler.bind(Object(y.a)(Object(y.a)(a))),a.nodeSelectionHandler=a.nodeSelectionHandler.bind(Object(y.a)(Object(y.a)(a))),a.removeNode=a.removeNode.bind(Object(y.a)(Object(y.a)(a))),a.removeLink=a.removeLink.bind(Object(y.a)(Object(y.a)(a))),a.addNode=a.addNode.bind(Object(y.a)(Object(y.a)(a))),a.updateNodeText=a.updateNodeText.bind(Object(y.a)(Object(y.a)(a))),a.onTextEdited=a.onTextEdited.bind(Object(y.a)(Object(y.a)(a))),a.state={selectedNodeKeys:[],model:{nodeDataArray:[{key:"Alpha",label:"Alpha",color:"lightblue"}],linkDataArray:[]}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return[o.a.createElement(p,{key:"diagramButtons",onInit:this.initModelHandler,onUpdateColor:this.updateColorHandler,onAddNode:this.addNode}),o.a.createElement(k,{key:"selectionDetails",selectedNodes:this.state.selectedNodeKeys}),o.a.createElement(j.GojsDiagram,{key:"gojsDiagram",diagramId:"myDiagramDiv",model:this.state.model,createDiagram:this.createDiagram,className:"myDiagram",onModelChange:this.modelChangeHandler})]}},{key:"initModelHandler",value:function(){this.setState(Object(g.a)({},this.state,{model:{nodeDataArray:[{key:"Alpha",label:"Alpha",color:"lightblue"},{key:"Beta",label:"Beta",color:"orange"},{key:"Gamma",label:"Gamma",color:"lightgreen"},{key:"Delta",label:"Delta",color:"pink"},{key:"Omega",label:"Omega",color:"grey"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Gamma",to:"Omega"}]}}))}},{key:"updateColorHandler",value:function(){var e=this.state.model.nodeDataArray.map(function(e){return Object(g.a)({},e,{color:O()})});this.setState(Object(g.a)({},this.state,{model:Object(g.a)({},this.state.model,{nodeDataArray:e})}))}},{key:"createDiagram",value:function(e){var t=this,a=f.GraphObject.make,n=a(f.Diagram,e,{initialContentAlignment:f.Spot.LeftCenter,layout:a(f.TreeLayout,{angle:0,arrangement:f.TreeLayout.ArrangementVertical,treeStyle:f.TreeLayout.StyleLayered}),isReadOnly:!1,allowHorizontalScroll:!0,allowVerticalScroll:!0,allowZoom:!1,allowSelect:!0,autoScale:f.Diagram.Uniform,contentAlignment:f.Spot.LeftCenter,TextEdited:this.onTextEdited});return n.toolManager.panningTool.isEnabled=!1,n.toolManager.mouseWheelBehavior=f.ToolManager.WheelScroll,n.nodeTemplate=a(f.Node,"Auto",{selectionChanged:function(e){return t.nodeSelectionHandler(e.key,e.isSelected)}},a(f.Shape,"RoundedRectangle",{strokeWidth:0},new f.Binding("fill","color")),a(f.TextBlock,{margin:8,editable:!0},new f.Binding("text","label"))),n}},{key:"modelChangeHandler",value:function(e){switch(e.eventType){case j.ModelChangeEventType.Remove:e.nodeData&&this.removeNode(e.nodeData.key),e.linkData&&this.removeLink(e.linkData)}}},{key:"addNode",value:function(){var e="node"+this.nodeId,t=this.state.selectedNodeKeys.map(function(t){return{from:t,to:e}});this.setState(Object(g.a)({},this.state,{model:Object(g.a)({},this.state.model,{nodeDataArray:Object(b.a)(this.state.model.nodeDataArray).concat([{key:e,label:e,color:O()}]),linkDataArray:t.length>0?Object(b.a)(this.state.model.linkDataArray).concat(t):Object(b.a)(this.state.model.linkDataArray)})})),this.nodeId+=1}},{key:"removeNode",value:function(e){var t=this.state.model.nodeDataArray.findIndex(function(t){return t.key===e});-1!==t&&this.setState(Object(g.a)({},this.state,{model:Object(g.a)({},this.state.model,{nodeDataArray:Object(b.a)(this.state.model.nodeDataArray.slice(0,t)).concat(Object(b.a)(this.state.model.nodeDataArray.slice(t+1)))})}))}},{key:"removeLink",value:function(e){var t=this.state.model.linkDataArray.findIndex(function(t){return t.from===e.from&&t.to===e.to});if(-1!==t)return Object(g.a)({},this.state,{model:Object(g.a)({},this.state.model,{linkDataArray:Object(b.a)(this.state.model.linkDataArray.slice(0,t)).concat(Object(b.a)(this.state.model.linkDataArray.slice(t+1)))})})}},{key:"updateNodeText",value:function(e,t){var a=this.state.model.nodeDataArray.findIndex(function(t){return t.key===e});-1!==a&&this.setState(Object(g.a)({},this.state,{model:Object(g.a)({},this.state.model,{nodeDataArray:Object(b.a)(this.state.model.nodeDataArray.slice(0,a)).concat([Object(g.a)({},this.state.model.nodeDataArray[a],{label:t})],Object(b.a)(this.state.model.nodeDataArray.slice(a+1)))})}))}},{key:"nodeSelectionHandler",value:function(e,t){if(t)this.setState(Object(g.a)({},this.state,{selectedNodeKeys:Object(b.a)(this.state.selectedNodeKeys).concat([e])}));else{var a=this.state.selectedNodeKeys.findIndex(function(t){return t===e});if(-1===a)return;this.setState(Object(g.a)({},this.state,{selectedNodeKeys:Object(b.a)(this.state.selectedNodeKeys.slice(0,a)).concat(Object(b.a)(this.state.selectedNodeKeys.slice(a+1)))}))}}},{key:"onTextEdited",value:function(e){var t=e.subject;if(null!==t){var a=t.part;a instanceof f.Node&&this.updateNodeText(a.key,t.text)}}}]),t}(o.a.Component),A=(a(28),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("h1",{className:"App-title"},"react-gojs example in es6")),o.a.createElement(D,null))}}]),t}(n.Component)),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(o.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-gojs-example-es6",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/react-gojs-example-es6","/service-worker.js");N?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(e)})}}()}},[[15,2,1]]]);
//# sourceMappingURL=main.7bc7ee65.chunk.js.map