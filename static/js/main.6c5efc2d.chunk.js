(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{58:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(25),r=s.n(c),i=s(10),o=s(2),l=s(14),j=s.n(l),d=s(26),m=s(27),u=s(28),b=s(33),v=s(32),h=s(29),p=s.n(h),O=(s(58),s(1));var x=function(e){var t=e.year,s=e.title,n=e.summary,a=e.poster,c=e.genres;return Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:a,alt:s,title:s}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:s}),Object(O.jsx)("h5",{className:"movie__year",children:t}),Object(O.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[n.slice(0,180),"..."]})]})]})},f=(s(60),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(m.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(j.a.mark((function t(){var s,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)("section",{class:"container",children:t?Object(O.jsx)("div",{class:"loader",children:Object(O.jsx)("span",{class:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{class:"movies",children:s.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));s(61);var _=function(){return Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})};s(62);var g=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})};s(68);var y=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:_})]})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.6c5efc2d.chunk.js.map