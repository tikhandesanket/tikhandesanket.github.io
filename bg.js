(function(){
var c=document.getElementById("bg"),x=c.getContext("2d"),W,H,P=[],m={x:-999,y:-999};
function size(){var d=window.devicePixelRatio||1;W=innerWidth;H=innerHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);var n=Math.min(110,Math.floor(W*H/14000));while(P.length<n)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.8});P.length=n}
size();addEventListener("resize",size);
addEventListener("mousemove",function(e){m.x=e.clientX;m.y=e.clientY});
function draw(){x.clearRect(0,0,W,H);
for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
for(var j=i+1;j<P.length;j++){var b=P[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d<140){x.strokeStyle="rgba(213,160,33,"+(.28*(1-d/140))+")";x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
var mx=a.x-m.x,my=a.y-m.y,md=Math.sqrt(mx*mx+my*my);if(md<170){x.strokeStyle="rgba(237,231,217,"+(.35*(1-md/170))+")";x.beginPath();x.moveTo(a.x,a.y);x.lineTo(m.x,m.y);x.stroke()}
x.fillStyle="rgba(237,231,217,.75)";x.beginPath();x.arc(a.x,a.y,a.r,0,6.283);x.fill()}
requestAnimationFrame(draw)}
draw()})();
