(this.webpackJsonphowfaris=this.webpackJsonphowfaris||[]).push([[0],[,,,,,function(e,t,n){e.exports={Button:"Button_Button__3gFiX",HeaderButton:"Button_HeaderButton__12Cm1",FooterButton:"Button_FooterButton__3O_qb",Cross:"Button_Cross__2NXbU",SwitchBlockButton:"Button_SwitchBlockButton__J5caA",SlideshowControls:"Button_SlideshowControls__2YnxS"}},function(e,t,n){e.exports={TopLine:"Accordion_TopLine__OwO45",Hidden:"Accordion_Hidden__192Xu",Open:"Accordion_Open__2DBMY",ExpandArrow:"Accordion_ExpandArrow__1pWx7",Clicked:"Accordion_Clicked__2c6_Z"}},function(e,t,n){e.exports={Slideshow:"Slideshow_Slideshow__3YDFS",SlideshowBox:"Slideshow_SlideshowBox__1hFFY",SlideshowControls:"Slideshow_SlideshowControls__2ziRq",Active:"Slideshow_Active__2_1Kt"}},function(e,t,n){e.exports={RadioInput:"RadioInput_RadioInput__1l2h1",Selected:"RadioInput_Selected__zjyf1"}},function(e,t,n){e.exports={InfoBlockHover:"InfoBlock_InfoBlockHover__jAeHS",InfoBlockStatic:"InfoBlock_InfoBlockStatic__2udLo"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH",LogoRotating:"Logo_LogoRotating__2tVV7",rotate:"Logo_rotate__34v4t"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN",CloseButton:"Modal_CloseButton__JfngM"}},,,function(e,t,n){e.exports={App:"App_App__16ZpL"}},function(e,t,n){e.exports={Footer:"Footer_Footer__10YAK"}},function(e,t,n){e.exports={Header:"Header_Header__3w3i_"}},function(e,t,n){e.exports={Main:"Main_Main__3rSe0"}},function(e,t,n){e.exports={SwitchBlock:"SwitchBlock_SwitchBlock__NhiSI",Sidebar:"SwitchBlock_Sidebar__2evnB"}},function(e,t,n){e.exports={Loading:"Loading_Loading__1Bfvh"}},function(e,t,n){e.exports=n.p+"static/media/logoA.c6325943.svg"},function(e,t,n){e.exports=n.p+"static/media/bed.07af22f0.svg"},function(e,t,n){e.exports=n.p+"static/media/bicycle.c5d27ac4.svg"},function(e,t,n){e.exports=n.p+"static/media/trolley.eeb416be.svg"},function(e,t,n){e.exports=n.p+"static/media/escooter.458abbf5.svg"},function(e,t,n){e.exports=n.p+"static/media/warriorPose.75fc27f5.svg"},function(e,t,n){e.exports=n.p+"static/media/railwayTrackGauge.f92762a2.svg"},function(e,t,n){e.exports=n.p+"static/media/door.ad4c27db.svg"},function(e,t,n){e.exports={About:"About_About__scHdH"}},function(e,t,n){e.exports=n.p+"static/media/arrow.a7fa1265.svg"},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,n){e.exports=n(38)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=(n(37),n(1)),l=n(2),s=n(4),u=n(3),d=n(14),p=n.n(d),h=n(15),m=n.n(h),f=n(5),v=n.n(f),w=function(e){var t=[v.a.Button];switch(e.buttonStylingType){case"cross":t.push(v.a.Cross);break;case"header":t.push(v.a.HeaderButton);break;case"footer":t.push(v.a.FooterButton);break;case"switchBlock":t.push(v.a.SwitchBlockButton);break;case"slideshowControls":t[0]=v.a.SlideshowControls}return r.a.createElement("button",{type:"button",className:t.join(" "),onClick:e.clickHandler},e.buttonText)},g=function(e){return r.a.createElement("a",{href:e.urlAddress,target:"_blank",rel:"noopener noreferrer",title:e.urlTitle},e.urlText)},_=function(){return r.a.createElement("footer",{className:m.a.Footer},r.a.createElement(g,{urlAddress:"https://github.com/larisachristie/howfaris",urlTitle:"Hire me!",urlText:r.a.createElement(w,{buttonText:"GitHub",buttonStylingType:"footer"})}))},b=n(16),E=n.n(b),x=function(e){return r.a.createElement("header",{className:E.a.Header},r.a.createElement(w,{buttonStylingType:"header",clickHandler:e.handleBackdrop,buttonText:"About"}))},k=n(17),B=n.n(k),C=n(18),S=n.n(C),y=n(31),A=n(8),H=n.n(A),T=n(9),I=n.n(T),N=function(e){return r.a.createElement("div",{className:e.isHovering?I.a.InfoBlockHover:I.a.InfoBlockStatic},e.isHovering?r.a.createElement("p",null,"As recommended by ",e.text):r.a.createElement("p",null,"As recommended by ",e.fullInfo.entities,".",r.a.createElement("br",null),"The distance of ",e.fullInfo.distanceM," equals roughly to ",e.fullInfo.distanceF,"."))},O=function(e){var t=Object(a.useState)(!1),n=Object(y.a)(t,2),o=n[0],i=n[1],c=[H.a.RadioInput];return e.currentChoice===e.radioInputLabel&&c.push(H.a.Selected),r.a.createElement("div",{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},r.a.createElement("div",{className:c.join(" ")},r.a.createElement("label",{htmlFor:e.radioInputID.split(" ").join(""),onChange:function(t){return e.changeHandler(t)}},r.a.createElement("input",{type:"radio",name:e.radioGroupName,id:e.radioInputID.split(" ").join(""),value:e.radioInputLabel}),r.a.createElement("br",null),e.radioInputLabel)),o?r.a.createElement(N,{text:e.entities,isHovering:!0}):null)},D=function(e){var t=e.options.map((function(t,n){return r.a.createElement(O,{key:n,buttonStylingType:"switchBlock",radioInputLabel:t.distanceM,radioGroupName:"dataOptions",radioInputID:t.distanceM,changeHandler:e.changeHandler,currentChoice:e.currentChoice,entities:t.entities})}));return r.a.createElement("form",{className:S.a.SwitchBlock},t)},j=n(7),F=n.n(j);var L=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{id:e.id,src:e.file,alt:e.title}),r.a.createElement("h3",null,e.title))},M=n(19),R=n.n(M),G=n(10),P=n.n(G),U=n(20),Y=n.n(U),J=function(e){return r.a.createElement("span",{className:e.isRotating?P.a.LogoRotating:P.a.Logo},r.a.createElement("img",{src:Y.a,alt:"logo",width:e.width}))},K=function(e){return r.a.createElement("div",{className:R.a.Loading},r.a.createElement(J,{isRotating:!0,width:"200vh"}),r.a.createElement("p",null,e.loadingText))},z=n(21),W=n.n(z),Z=n(22),q=n.n(Z),V=n(23),X=n.n(V),Q=n(24),$=n.n(Q),ee=n(25),te=n.n(ee),ne=n(26),ae=n.n(ne),re=n(27),oe=n.n(re),ie=[{id:"bicycle1",file:q.a,title:"Average bicycle's wheelbase"},{id:"escooter1",file:$.a,title:"Electric ride-share scooter",actualLength:"1.07 m"},{id:"trolley1",file:X.a,title:"Average shopping cart"}],ce=[{id:"railwayTrackGauge15",file:ae.a,title:"Standard-gauge railway, in use in Europe, North America and Australia",actualLength:"1.43 m"},{id:"warriorPose15",file:te.a,title:"Two outstretched arms"}],le=[{id:"bed2",file:W.a,title:"Standard bed's length"},{id:"door2",file:oe.a,title:"Standard door's height"}];function se(e){switch(e){case"1 meter":return ie;case"1.5 meters":return ce;case"2 meters":return le;default:return[]}}var ue=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={currentImage:se(e.props.currentChoice)[0]},e.helperFunctionPrevSlide=function(t,n){if(t.indexOf(n)>0){var a=t[t.indexOf(n)-1];e.setState({currentImage:a})}else e.setState({currentImage:t[t.length-1]})},e.helperFunctionNextSlide=function(t,n){if(t.indexOf(n)<t.length-1){var a=t[t.indexOf(n)+1];e.setState({currentImage:a})}else e.setState({currentImage:t[0]})},e.handlePrevSlide=function(){var t=se(e.props.currentChoice);e.helperFunctionPrevSlide(t,e.state.currentImage)},e.handleNextSlide=function(){var t=se(e.props.currentChoice);e.helperFunctionNextSlide(t,e.state.currentImage)},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.currentChoice!==e.currentChoice&&this.setState({currentImage:se(this.props.currentChoice)[0]})}},{key:"render",value:function(){var e=null;return this.state.currentImage&&(e=r.a.createElement("div",{className:"".concat(F.a.SlideshowBox," ").concat(F.a.Active)},r.a.createElement(L,{id:this.state.currentImage.id,file:this.state.currentImage.file,title:this.state.currentImage.title}))),r.a.createElement(r.a.Fragment,null,e?r.a.createElement("div",{className:F.a.Slideshow},r.a.createElement(w,{buttonText:"<",buttonStylingType:"slideshowControls",clickHandler:this.handlePrevSlide}),e,r.a.createElement(w,{buttonText:">",buttonStylingType:"slideshowControls",clickHandler:this.handleNextSlide})):r.a.createElement(K,{loadingText:"Choose the distance above!"}))}}]),n}(a.Component),de=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={options:[{distanceM:"1 meter",distanceF:"just over 3 feet",entities:"the UK (from July 4), the WHO, the EU"},{distanceM:"1.5 meters",distanceF:"almost 5 feet",entities:"Australia, Germany"},{distanceM:"2 meters",distanceF:"about 6.5 feet",entities:"the UK (until July 4), Canada, the US"}],currentChoice:""},e.choiceHandler=function(t){var n=t.target.value;e.setState({currentChoice:n})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.options.find((function(t){return t.distanceM===e.state.currentChoice}));return r.a.createElement("main",{className:B.a.Main},this.state.currentChoice?r.a.createElement("h1",null,"How far is... ",this.state.currentChoice,"?"):r.a.createElement("h1",null,"Your physical distancing guide",r.a.createElement("br",null),"How far is..."),r.a.createElement(D,{options:this.state.options,currentChoice:this.state.currentChoice,changeHandler:this.choiceHandler}),this.state.currentChoice?r.a.createElement(N,{currentChoice:this.state.currentChoice,fullInfo:t,isHovering:!1}):null,r.a.createElement(ue,{currentChoice:this.state.currentChoice}))}}]),n}(a.Component),pe=n(28),he=n.n(pe),me=[{id:"WHO",urlAddress:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",urlText:"World Health Organization",urlTitle:"World Health Organization, official website"},{id:"ECDC",urlAddress:"https://www.ecdc.europa.eu/en/covid-19/questions-answers",urlText:"European Centre for Disease Prevention and Control",urlTitle:"European Centre for Disease Prevention and Control, official website"},{id:"CDC",urlAddress:"https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fprepare%2Fprevention.html",urlText:"Centers for Disease Control and Prevention (CDC)",urlTitle:"Centers for Disease Control and Prevention, official website"},{id:"CA",urlAddress:"https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/prevention-risks.html?topic=tilelink",urlText:"Health Canada",urlTitle:"Health Canada, official website"},{id:"AU",urlAddress:"https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/physical-distancing-for-coronavirus-covid-19",urlText:"Australian Government, Department of Health",urlTitle:"Australian Government, Department of Health, official website"},{id:"NZ",urlAddress:"https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-health-advice-general-public/protecting-yourself-and-others-covid-19#physicaldistancing",urlText:"New Zealand Ministry of Health",urlTitle:"New Zealand Ministry of Health, official website"},{id:"DE",urlAddress:"https://www.bundesgesundheitsministerium.de/coronavirus.html#c17088",urlText:"Bundesministerium f\xfcr Gesundheit",urlTitle:"Bundesministerium f\xfcr Gesundheit, official website"},{id:"UK1",urlAddress:"https://www.nhs.uk/conditions/coronavirus-covid-19/staying-at-home-to-avoid-getting-coronavirus/staying-at-home-and-away-from-other-people/",urlText:"National Health Service (NHS)",urlTitle:"National Health Service, official website"},{id:"UK2",urlAddress:"https://www.bbc.com/news/explainers-52530518",urlText:"Note: From 4 July the 2m social distancing guidance will change to a distance of 'one metre plus' in England.",urlTitle:"BBC"}],fe=n(6),ve=n.n(fe),we=n(29),ge=n.n(we),_e=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ve.a.TopLine},r.a.createElement("h3",null,e.expanderText),r.a.createElement("img",{src:ge.a,className:e.isExpanded?"".concat(ve.a.ExpandArrow," ").concat(ve.a.Clicked):ve.a.ExpandArrow,onClick:e.expanderHandler})),r.a.createElement("div",{className:e.isExpanded?ve.a.Open:ve.a.Hidden},e.expandedText))},be=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isExpanded:!1},e.handleExpand=function(){e.setState((function(e){return{isExpanded:!e.isExpanded}}))},e}return Object(l.a)(n,[{key:"render",value:function(){if(!this.props.isBackdropDown)return null;var e=me.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(g,{urlAddress:e.urlAddress,urlText:e.urlText,urlTitle:e.urlTitle}))})),t=r.a.createElement("ul",null,e);return r.a.createElement("section",{className:he.a.About},r.a.createElement("h2",null,"About this project"),r.a.createElement("p",null,"Literal physical distancing can be tough. This app visualizes the distances we're supposed to keep from each other in public spaces."),r.a.createElement(_e,{isExpanded:this.state.isExpanded,expanderHandler:this.handleExpand,expanderText:"Sources",expandedText:t}))}}]),n}(a.Component),Ee=n(11),xe=n.n(Ee),ke=n(30),Be=n.n(ke),Ce=function(e){return e.isBackdropDown?r.a.createElement("div",{className:Be.a.Backdrop,onClick:e.handleBackdrop}):null},Se=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.isBackdropDown!==this.props.isBackdropDown}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{handleBackdrop:this.props.handleBackdrop,isBackdropDown:this.props.isBackdropDown}),r.a.createElement("div",{className:xe.a.Modal,style:{transform:this.props.isBackdropDown?"translateY(0)":"translateY(-100vh)",opacity:this.props.isBackdropDown?"1":"0"}},r.a.createElement("div",{className:xe.a.CloseButton},r.a.createElement("span",{title:"Close"},r.a.createElement(w,{buttonText:"X",buttonStylingType:"cross",clickHandler:this.props.handleBackdrop}))),this.props.children))}}]),n}(a.Component),ye=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isBackdropDown:!1},e.backdropHandler=function(){e.setState((function(e){return{isBackdropDown:!e.isBackdropDown}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:p.a.App},r.a.createElement(x,{handleBackdrop:this.backdropHandler}),r.a.createElement(Se,{handleBackdrop:this.backdropHandler,isBackdropDown:this.state.isBackdropDown},r.a.createElement(be,{isBackdropDown:this.state.isBackdropDown})),r.a.createElement(de,null),r.a.createElement(_,null))}}]),n}(r.a.Component);i.a.render(r.a.createElement(ye,null),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.182f6a71.chunk.js.map