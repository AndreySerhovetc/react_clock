(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(8),o=c.n(n),a=c(2),l=c(3),i=c(5),s=c(4),r=c(1),u=c.n(r),m=(c(7),c(13),c(0)),k=function(t){Object(i.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={time:new Date},t.timer=setInterval((function(){t.setTime()}),1e3),t.setTime=function(){t.setState({time:new Date})},t}return Object(l.a)(c,[{key:"componentDidMount",value:function(){return this.timer}},{key:"componentDidUpdate",value:function(t){var e=t.clockName,c=this.props.clockName;e!==c&&console.log("The Clock was renamed from ".concat(e," to ").concat(c))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.time;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"clock__title",children:t}),Object(m.jsxs)("p",{className:"clock__content",children:["Current time:"," ",e.toLocaleDateString(),console.log(e.toLocaleTimeString())]})]})}}]),c}(u.a.Component),h=function(t){Object(i.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,name:"React clock"},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.randomNameForTitle=function(){var e=["React clock 1","React clock 2","React clock 3","React clock 4"],c=e[Math.floor(Math.random()*e.length)];t.setState({name:c})},t}return Object(l.a)(c,[{key:"render",value:function(){var t=this.state,e=t.isClockVisible,c=t.name,n=this.showClock,o=this.hideClock,a=this.randomNameForTitle;return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"clock App__clock",children:[Object(m.jsx)("div",{className:"clock__time",children:e?Object(m.jsx)(k,{clockName:c}):"Press Show Clock button to see Clock"}),Object(m.jsxs)("div",{className:"clock__buttons-wrap",children:[Object(m.jsx)("button",{type:"button",className:"clock__button",onClick:n,children:"Show clock"}),Object(m.jsx)("button",{type:"button",className:"clock__button",onClick:o,children:"Hide clock"}),Object(m.jsx)("button",{type:"button",className:"clock__button",onClick:a,children:"Change name"})]})]})})}}]),c}(u.a.Component);o.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))},7:function(t,e,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.d5805aad.chunk.js.map