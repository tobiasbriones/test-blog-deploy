/*! For license information please see main.[contentHash].js.LICENSE.txt */
(()=>{"use strict";class t{padding;canvasEl;ctx;constructor(){this.padding=0}get width(){return this.canvasEl.width}get height(){return this.canvasEl.height}init(t){this.canvasEl=t,this.ctx=this.canvasEl.getContext("2d"),this.updateCanvasSize(),this.update()}render(){this.update(),this.draw(this.ctx)}updateCanvasSize(){const t=document.getElementById("solutionsTreeParent");this.canvasEl.width=t.offsetWidth-this.padding,this.canvasEl.height=t.offsetHeight-this.padding}}class e extends t{axesCanvas;rootNode;radiusPx;constructor(){super(),this.axesCanvas=new i,this.rootNode={machineAge:0,decisionYear:0,k:null,r:null}}init(t){super.init(t),this.axesCanvas.init(t)}render(){super.render(),this.axesCanvas.render()}update(){this.radiusPx=this.axesCanvas.cellSize/4}draw(t){const e=new Set;this.drawNode(t,this.rootNode,e)}drawNode(t,e,i){const s={x:e.decisionYear,y:e.machineAge},n=JSON.stringify(s);!i.has(n)&&this.drawNodeLines(t,e,i),this.drawNodeCircle(t,e),this.drawNodeContent(t,e),i.add(n)}drawNodeLines(t,e,s){const n=i.AXIS_LABEL_SIZE_PX,{x:a,y:h}=this.getNodeCP(e),r=e=>{const i=e.decisionYear*this.axesCanvas.cellSize+n,s=this.height-e.machineAge*this.axesCanvas.cellSize-n;t.beginPath(),t.moveTo(a,h),t.lineTo(i,s),t.stroke()},o=t=>{const e=this.getNodeCP(t),i=e.x,s=e.y,n=i-a,r=Math.abs(s-h),o=function(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))}(n,r);return{triangleX:n,triangleY:r,hypotenuse:o}},l=(e,i)=>{const{triangleX:s,triangleY:n,hypotenuse:r}=o(e),l=a+s*this.radiusPx/r,d=h-n*this.radiusPx/r-8;t.fillText(i,l,d)},d=(e,i)=>{const{triangleX:s,triangleY:n,hypotenuse:r}=o(e),l=a+s*this.radiusPx/r-4,d=h+n*this.radiusPx/r+16;t.fillText(i,l,d)},c=(e,i)=>{const{triangleX:s,triangleY:n,hypotenuse:r}=o(e),l=a+s*this.radiusPx/r+4,d=h+n*this.radiusPx/r+16;t.fillText(i,l,d)},g=(i,s)=>{t.font="12px Poppins",t.textAlign="center",t.fillStyle="black",(t=>e.machineAge<t.machineAge)(i)?l(i,s):(t=>1===e.machineAge&&1===t.machineAge)(i)?c(i,s):d(i,s)};e.k&&(r(e.k),g(e.k,"K"),this.drawNode(t,e.k,s)),e.r&&(r(e.r),g(e.r,"R"),this.drawNode(t,e.r,s))}drawNodeCircle(t,e){const{x:i,y:s}=this.getNodeCP(e);t.beginPath(),t.arc(i,s,this.radiusPx,0,2*Math.PI),t.fillStyle="white",t.fill(),t.stroke()}drawNodeContent(t,e){t.font="24px Poppins",t.textAlign="center",t.fillStyle="black";const i=String(e.machineAge),s=t.measureText(i),n=s.actualBoundingBoxAscent+s.actualBoundingBoxDescent,{x:a,y:h}=this.getNodeCP(e);t.fillText(i,a,h+n/2)}getNodeCP(t){return{x:t.decisionYear*this.axesCanvas.cellSize+i.AXIS_LABEL_SIZE_PX,y:this.height-t.machineAge*this.axesCanvas.cellSize-i.AXIS_LABEL_SIZE_PX}}}class i extends t{static AXIS_LABEL_SIZE_PX=24;maxAbscissa;maxOrdinate;cellSizePx;constructor(){super(),this.padding=i.AXIS_LABEL_SIZE_PX,this.maxAbscissa=5,this.maxOrdinate=8}get cellSize(){return this.cellSizePx}update(){this.cellSizePx=this.width/6}draw(t){t.font="12px Poppins",t.fillStyle="black",t.moveTo(this.padding,0),t.lineTo(this.padding,this.height-this.padding),t.lineTo(this.width,this.height-this.padding),t.lineWidth=1,t.stroke(),this.drawXLabels(t),this.drawYLabels(t)}drawXLabels(t){t.textAlign="center";for(let e=0;e<=this.maxAbscissa;e++){const i=e*this.cellSizePx+this.padding;t.fillText(String(e),i,this.height)}}drawYLabels(t){t.textAlign="start";for(let e=1;e<=this.maxOrdinate;e++){const i=this.height-e*this.cellSizePx-this.padding;t.fillText(String(e),0,i)}}}function s(t){const i=document.getElementById("solutionsTree"),s=new e;s.rootNode=t,s.init(i),s.render()}(function(){let t={machineAge:0,decisionYear:0,k:null,r:null};return{async init(){t=await async function(){try{const t=await fetch("root-node.json");return await t.json()}catch(t){console.log(t)}return{machineAge:0,decisionYear:0,k:null,r:null}}(),window.onresize=()=>s(t),s(t)}}})().init().then(console.log)})();