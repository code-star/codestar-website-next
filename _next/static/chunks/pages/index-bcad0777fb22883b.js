(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9608)}])},9608:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return W},default:function(){return D}});var i=t(5893),a=t(9008),s=t.n(a),c=t(1664),r=t.n(c),l=function(e){return new Date(e).toLocaleDateString("en-GB",{weekday:"short",day:"2-digit",month:"short",year:"numeric"})},o=t(537),d=t.n(o),u=function(e){var n=e.item,t=n.thumbnails,a=n.title,s=n.publishedAt,c=n.id;return(0,i.jsx)("a",{href:"https://youtube.com/watch?v=".concat(c),children:(0,i.jsxs)("section",{className:d()["playlistitem-card"],children:[(0,i.jsx)("div",{className:"img",style:{backgroundImage:"url(".concat(t.medium.url,")")}}),(0,i.jsx)("h3",{children:a}),(0,i.jsx)("p",{children:l(s)})]})})},h=t(9013),p=t.n(h),m=t(3454),x=function(e){var n=e.tweets,t=e.playlist;return(0,i.jsxs)("div",{className:p()["embedded-social-media"],children:[(0,i.jsxs)("section",{children:[(0,i.jsx)("h1",{children:"TWEETS"}),(0,i.jsx)("p",{children:n&&n.author.username}),(0,i.jsxs)("p",{children:[m.env.NEXT_PUBLIC_FOO,"x"]})]}),t.map(function(e){return(0,i.jsx)(u,{item:e},e.id)}),(0,i.jsx)("p",{children:(0,i.jsx)(r(),{href:"https://youtube.com/c/codestar",children:"More ..."})})]})},_=t(5675),j=t.n(_),b=t(7194),f=t.n(b),v=function(e){var n=e.image,t=e.children;return(0,i.jsxs)("section",{className:f()["meetup-card"],children:[n&&(0,i.jsx)(j(),{alt:"",src:n,width:"100%"}),t]})},g=function(e){var n=e.meetup,t=n.name,a=n.link,s=n.time;return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:a,children:[(0,i.jsx)("h3",{children:t}),(0,i.jsx)("p",{children:l(s)})]})})},w=t(9196),N=t.n(w),C=function(e){var n=e.upcomingMeetups,t=e.pastMeetups;return(0,i.jsxs)("div",{className:N()["meetup-list"],children:[n.map(function(e){return(0,i.jsx)("a",{href:e.link,children:(0,i.jsxs)(v,{children:[(0,i.jsx)("h3",{children:e.name}),(0,i.jsx)("p",{children:l(e.time)})]})},e.name)}),(0,i.jsx)("h2",{children:"PAST MEETUPS"}),(0,i.jsx)(v,{children:(0,i.jsxs)("ul",{children:[t.map(function(e){return(0,i.jsx)(g,{meetup:e},e.name)}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.meetup.com/codestar-night/events/past/",children:"More past meetups..."})})]})})]})},y=t(8153),k=t.n(y),M=function(e){var n=e.publication,t=n.title,a=n.author,s=n.uniqueSlug,c=(n.paragraphs,n.latestPublishedAt);return(0,i.jsx)("a",{href:s,className:k()["publication-card"],children:(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{className:k()["publication-card--avatar"],children:a.slice(0,1).toUpperCase()}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:k()["publication-card--author"],children:a}),(0,i.jsx)("p",{className:k()["publication-card--date"],children:l(c)}),(0,i.jsx)("h2",{children:t})]})]})})},E=function(e){var n=e.publications;return(0,i.jsx)(i.Fragment,{children:n.map(function(e){return(0,i.jsx)(M,{publication:e},e.id)})})},P=t(8926),T=t.n(P),S=function(){return(0,i.jsxs)("nav",{className:T()["top-bar"],children:[(0,i.jsx)(j(),{src:"/codestar-website-next/codestar_logo_dark.svg",alt:"Codestar Logo",width:150,height:40}),(0,i.jsx)("ul",{children:(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.ordina.nl/vakgebieden/scala/",children:"Contact"})})})]})},A=t(1937),L=t.n(A),O=function(){return(0,i.jsxs)("section",{className:L()["welcome-card"],children:["Codestar makes highly available, scalable solutions with functional reactive programming in the back-end and frontend. Our colleagues are published in magazines and on blogs. Also see the"," ",(0,i.jsx)("a",{href:"https://youtube.com/c/codestar",children:"Codestar YouTube"})," channel for our talks at conferences."]})},B=t(1673),I=t.n(B),W=!0,D=function(e){var n=e.publications,t=e.upcomingMeetups,a=e.pastMeetups,c=e.tweets,r=e.playlist;return(0,i.jsxs)("div",{className:I().container,children:[(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"Codestar"}),(0,i.jsx)("meta",{name:"description",content:"Codestar blog"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(S,{}),(0,i.jsxs)("div",{className:I().content,children:[(0,i.jsx)("aside",{children:(0,i.jsx)(x,{tweets:c,playlist:null!=r?r:[]})}),(0,i.jsxs)("main",{className:I().main,children:[(0,i.jsx)(O,{}),n?(0,i.jsx)(E,{publications:n}):"Failed"]}),(0,i.jsx)("aside",{children:a||t?(0,i.jsx)(C,{upcomingMeetups:t||[],pastMeetups:a||[]}):""})]})]})}},9013:function(e){e.exports={"embedded-social-media":"EmbeddedSocialMedia_embedded-social-media___dIe_"}},7194:function(e){e.exports={"meetup-card":"MeetupCard_meetup-card__0J0_Y"}},9196:function(e){e.exports={"meetup-list":"MeetupCardList_meetup-list__A1TuS"}},537:function(e){e.exports={"playlistitem-card":"PlaylistItemCard_playlistitem-card__JV1cM"}},8153:function(e){e.exports={"publication-card":"PublicationCard_publication-card__nbEiY","publication-card--avatar":"PublicationCard_publication-card--avatar__zhBBA","publication-card--author":"PublicationCard_publication-card--author__N0_M_","publication-card--date":"PublicationCard_publication-card--date__E68DP"}},8926:function(e){e.exports={"top-bar":"TopBar_top-bar__nWyL_"}},1937:function(e){e.exports={"welcome-card":"WelcomeCard_welcome-card__kInJh"}},1673:function(e){e.exports={content:"Home_content__WcTpR",main:"Home_main__OVLM4"}}},function(e){e.O(0,[286,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);