(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2993)}])},2993:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return es},default:function(){return er}});var a=i(5893),n=i(9008),s=i.n(n),r=i(9013),c=i.n(r),o=i(5675),l=i.n(o),d=function(e){return new Date(e).toLocaleDateString("en-GB",{weekday:"short",day:"2-digit",month:"short",year:"numeric"})},h={src:"/codestar-website-next/_next/static/media/twitter_logo.db6b7c1a.svg",height:512,width:512},u=i(6492),m=i.n(u),p=function(e){var t=e.tweets;if(!t)return(0,a.jsx)(a.Fragment,{});var i=t.author,n=t.data;return(0,a.jsxs)("section",{className:m()["tweet-card"],children:[(0,a.jsxs)("a",{href:"https://twitter.com/".concat(i.username),children:["@",i.username]}),n.map(function(e){var t=e.id,i=e.text,n=e.created_at;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)(l(),{src:h,alt:"Codestar Twitter",width:24,height:24}),(0,a.jsx)("span",{children:d(n)})]}),(0,a.jsx)("p",{children:i})]},t)})]})},x=i(1664),j=i.n(x),_=i(537),g=i.n(_),f=function(e){var t=e.item,i=t.thumbnails,n=t.title,s=t.publishedAt,r=t.id;return(0,a.jsx)("a",{href:"https://youtube.com/watch?v=".concat(r),children:(0,a.jsxs)("section",{className:g()["playlistitem-card"],children:[(0,a.jsx)("div",{className:"img",style:{backgroundImage:"url(".concat(i.medium.url,")")}}),(0,a.jsx)("h3",{children:n}),(0,a.jsx)("p",{children:d(s)})]})})},w=i(8342),b=i.n(w),v=function(e){var t=e.playlist,i=e.viewport,n="".concat(b().playlist," viewport-").concat(i),s="xs"===i?1:t.length;return(0,a.jsxs)("div",{className:n,children:[t.slice(0,s).map(function(e){return(0,a.jsx)(f,{item:e},e.id)}),(0,a.jsx)("p",{children:(0,a.jsx)(j(),{href:"https://youtube.com/c/codestar",children:"More on YouTube..."})})]})},y=function(e){var t=e.tweets,i=e.playlist;return(0,a.jsxs)("div",{className:c()["embedded-social-media"],children:[(0,a.jsx)(p,{tweets:t}),(0,a.jsx)(v,{playlist:i,viewport:"sm"})]})},C=i(2836),N=i.n(C),M={src:"/codestar-website-next/_next/static/media/github_logo.6b78551b.svg",height:512,width:496},k={src:"/codestar-website-next/_next/static/media/medium_logo.085f2fbb.svg",height:512,width:512},T={src:"/codestar-website-next/_next/static/media/linkedin_logo.8dbb4d97.svg",height:512,width:448},E={src:"/codestar-website-next/_next/static/media/youtube_logo.1dfaa880.svg",height:512,width:576},P={src:"/codestar-website-next/_next/static/media/meetup_logo.32a9c75f.svg",height:512,width:512},S=function(){return(0,a.jsx)("footer",{className:N().footer,children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("ul",{className:"contact-info",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"mailto:codestar@ordina.nl",children:"codestar@ordina.nl"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"tel:+31306637000",children:"+31 30 6637000"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://maps.google.com/maps?ll=52.057652,5.111462&z=16&t=m&hl=en-GB&gl=NL&mapclient=embed&cid=15918536717636328792",target:"_blank",rel:"noopener noreferrer",children:"Ringwade 1, 3439 LM Nieuwegein"})})]}),(0,a.jsxs)("p",{className:"social-links",children:[(0,a.jsx)("a",{href:"https://twitter.com/codestar_nl","aria-label":"Twitter",children:(0,a.jsx)(l(),{src:h,alt:"Codestar Twitter",width:32,height:32})}),(0,a.jsx)("a",{href:"https://github.com/code-star","aria-label":"Github",children:(0,a.jsx)(l(),{src:M,alt:"Codestar Github",width:32,height:32})}),(0,a.jsx)("a",{href:"https://medium.com/codestar-blog","aria-label":"Medium",children:(0,a.jsx)(l(),{src:k,alt:"Codestar Medium",width:32,height:32})}),(0,a.jsx)("a",{href:"https://www.linkedin.com/company/codestar-powered-by-ordina/","aria-label":"Linkedin",children:(0,a.jsx)(l(),{src:T,alt:"Codestar Medium",width:32,height:32})}),(0,a.jsx)("a",{href:"https://www.youtube.com/channel/UCqwHhJNEUe7D-HGsX4zvKzQ","aria-label":"Youtube",children:(0,a.jsx)(l(),{src:E,alt:"Codestar Medium",width:36,height:32})}),(0,a.jsx)("a",{href:"https://www.meetup.com/Code-Star-Night","aria-label":"Meetup.com",children:(0,a.jsx)(l(),{src:P,alt:"Codestar Medium",width:32,height:32})})]})]})})},G=i(7194),L=i.n(G),U=function(e){var t=e.highlight,i=e.image,n=e.children,s="".concat(L()["meetup-card"]," ").concat(void 0!==t&&t?L()["meetup-card__highlight"]:"");return(0,a.jsxs)("section",{className:s,children:[i&&(0,a.jsx)(l(),{alt:"",src:i,width:350,height:200}),n]})},z=function(e){var t=e.meetup,i=t.name,n=t.link,s=t.time;return(0,a.jsx)("li",{children:(0,a.jsxs)("a",{href:n,children:[(0,a.jsx)("h3",{children:i}),(0,a.jsx)("p",{children:d(s)})]})})},D=i(7208),B=i.n(D),I=function(e){var t,i=e.meetup,n=i.link,s=i.featured_photo,r=i.name,c=i.time;return(0,a.jsx)("a",{href:n,children:(0,a.jsxs)("section",{className:B()["upcoming-meetup-card"],children:[(0,a.jsx)("h2",{children:"MEETUP"}),(0,a.jsx)("h3",{children:r}),s&&(0,a.jsx)(l(),{alt:"",src:s.photo_link,width:350,height:200}),(0,a.jsx)("p",{children:(0,a.jsxs)("a",{href:n,children:["SIGN UP FOR ",new Date(c).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).toUpperCase()]})})]})})},A=i(5023),J=i.n(A),O=function(e){var t=e.upcomingMeetups,i=e.viewport,n="".concat(J()["upcoming-meetup-list"]," viewport-").concat(i);return(0,a.jsx)("div",{className:n,children:t.map(function(e){return(0,a.jsx)(I,{meetup:e},e.name)})})},F=i(9196),X=i.n(F),Y=function(e){var t=e.upcomingMeetups,i=e.pastMeetups;return(0,a.jsxs)("div",{className:X()["meetup-list"],children:[(0,a.jsx)(O,{upcomingMeetups:t,viewport:"sm"}),(0,a.jsxs)(U,{children:[(0,a.jsx)("h2",{children:"PAST MEETUPS"}),(0,a.jsxs)("ul",{children:[i.map(function(e){return(0,a.jsx)(z,{meetup:e},e.name)}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"external",href:"https://www.meetup.com/codestar-night/events/past/",children:"More past meetups..."})})]})]})]})},q=i(8153),H=i.n(q),Q={mdworld:"https://miro.medium.com/fit/c/176/176/0*gTl35Xy5zRcgu5wJ.png","nathan perdijk":"https://miro.medium.com/fit/c/88/88/0*Bqr-dMZplB-namyY.jpg","bjorn ‘bjeaurn’":"https://miro.medium.com/fit/c/176/176/0*o9UzuQyUwobacrCt.jpeg","hamza haiken":"https://miro.medium.com/fit/c/176/176/2*1JTGoMi8_nuGQVO1EoItXg.png","nick ten veen":"https://miro.medium.com/fit/c/88/88/2*k7vMxGfKwfqJ86TcprDA_Q.jpeg"},R=function(e){var t=e.publication,i=t.title,n=t.author,s=t.uniqueSlug,r=t.latestPublishedAt,c=Q[n.toLowerCase()];return(0,a.jsx)("a",{href:s,className:H()["publication-card"],children:(0,a.jsxs)("section",{children:[(0,a.jsx)("div",{className:H()["publication-card--avatar"],style:c?{backgroundImage:"url(".concat(c,")")}:{},children:c?"":n.slice(0,1).toUpperCase()}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:H()["publication-card--author"],children:n}),(0,a.jsx)("p",{className:H()["publication-card--date"],children:d(r)}),(0,a.jsx)("h2",{children:i})]})]})})},V=function(e){var t=e.publications;return(0,a.jsx)(a.Fragment,{children:t.map(function(e){return(0,a.jsx)(R,{publication:e},e.id)})})},W=i(8926),K=i.n(W),Z={src:"/codestar-website-next/_next/static/media/codestar_logo_dark.a44a4c76.svg",height:43,width:216},$=function(){return(0,a.jsx)("nav",{className:K()["top-bar"],children:(0,a.jsxs)("div",{children:[(0,a.jsx)(l(),{src:Z,alt:"Codestar Logo",width:150,height:40}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.ordina.nl/vakgebieden/scala/",children:"Contact"})})})]})})},ee=i(1937),et=i.n(ee),ei=function(){return(0,a.jsxs)("section",{className:et()["welcome-card"],children:["Codestar makes highly available, scalable solutions with functional reactive programming in the back-end and frontend. Our colleagues are published in magazines and on blogs. Also see the"," ",(0,a.jsx)("a",{href:"https://youtube.com/c/codestar",children:"Codestar YouTube"})," channel for our talks at conferences."]})},ea=i(1673),en=i.n(ea),es=!0,er=function(e){var t=e.publications,i=e.upcomingMeetups,n=e.pastMeetups,r=e.tweets,c=e.playlist;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Codestar"}),(0,a.jsx)("meta",{name:"description",content:"Codestar blog"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)($,{}),(0,a.jsxs)("div",{className:en().content,children:[(0,a.jsx)("aside",{children:(0,a.jsx)(y,{tweets:r,playlist:null!=c?c:[]})}),(0,a.jsxs)("main",{className:en().main,children:[(0,a.jsx)(ei,{}),(0,a.jsx)(O,{upcomingMeetups:i||[],viewport:"xs"}),t?(0,a.jsx)(V,{publications:t}):"Failed",(0,a.jsx)(v,{playlist:c||[],viewport:"xs"})]}),(0,a.jsx)("aside",{children:n||i?(0,a.jsx)(Y,{upcomingMeetups:i||[],pastMeetups:n||[]}):""})]}),(0,a.jsx)(S,{})]})}},9013:function(e){e.exports={"embedded-social-media":"EmbeddedSocialMedia_embedded-social-media___dIe_"}},2836:function(e){e.exports={footer:"Footer_footer__Dhw_9"}},7194:function(e){e.exports={"meetup-card":"MeetupCard_meetup-card__0J0_Y","meetup-card__highlight":"MeetupCard_meetup-card__highlight__l2uGS"}},9196:function(e){e.exports={"meetup-list":"MeetupCardList_meetup-list__A1TuS"}},8342:function(e){e.exports={playlist:"Playlist_playlist__Czddo"}},537:function(e){e.exports={"playlistitem-card":"PlaylistItemCard_playlistitem-card__JV1cM"}},8153:function(e){e.exports={"publication-card":"PublicationCard_publication-card__nbEiY","publication-card--avatar":"PublicationCard_publication-card--avatar__zhBBA","publication-card--author":"PublicationCard_publication-card--author__N0_M_","publication-card--date":"PublicationCard_publication-card--date__E68DP"}},8926:function(e){e.exports={"top-bar":"TopBar_top-bar__nWyL_"}},6492:function(e){e.exports={"tweet-card":"TweetCard_tweet-card__cldDO"}},7208:function(e){e.exports={"upcoming-meetup-card":"UpcomingMeetupCard_upcoming-meetup-card__akh_X"}},5023:function(e){e.exports={"upcoming-meetup-list":"UpcomingMeetupList_upcoming-meetup-list__lsISq"}},1937:function(e){e.exports={"welcome-card":"WelcomeCard_welcome-card__kInJh"}},1673:function(e){e.exports={content:"Home_content__WcTpR",main:"Home_main__OVLM4"}}},function(e){e.O(0,[247,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);