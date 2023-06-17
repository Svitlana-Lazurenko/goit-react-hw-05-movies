"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var a,i,o,c,r,s,l,d,p,u=t(433),h=t(439),f=t(791),g=t(689),m=t(502),v=t(168),x=t(686),Z=x.Z.div(a||(a=(0,v.Z)(["\n  margin-top: 30px;\n"]))),j=x.Z.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),b=x.Z.li(o||(o=(0,v.Z)(["\n  width: 200px;\n  border: 1px solid orange;\n  padding: 10px;\n  :not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),k=x.Z.img(c||(c=(0,v.Z)(["\n  display: block;\n  margin: 0 auto 5px;\n"]))),y=x.Z.p(r||(r=(0,v.Z)([""]))),_=x.Z.span(s||(s=(0,v.Z)(["\n  display: block;\n  color: orange;\n  font-weight: 600;\n  margin-bottom: 5px;\n"]))),w=x.Z.span(l||(l=(0,v.Z)(["\n  display: block;\n  margin-bottom: 5px;\n"]))),S=x.Z.span(d||(d=(0,v.Z)(["\n  display: block;\n  color: orange;\n  font-weight: 600;\n"]))),M=x.Z.span(p||(p=(0,v.Z)(["\n  display: block;\n"]))),U=t(184),C="idle",E="pending",R="resolved",q="rejected",B=function(){var n=(0,g.UO)().id,e=(0,f.useState)([]),t=(0,h.Z)(e,2),a=t[0],i=t[1],o=(0,f.useState)(C),c=(0,h.Z)(o,2),r=c[0],s=c[1],l=(0,f.useState)(null),d=(0,h.Z)(l,2),p=d[0],v=d[1];return(0,f.useEffect)((function(){s(E),m.Z.fetchMovieCast(n).then((function(n){if(0===n.cast.length)return Promise.reject(new Error("Cast not found"));i((0,u.Z)(n.cast)),s(R)})).catch((function(n){v(n),s(q)}))}),[n]),"idle"===r?null:"pending"===r?(0,U.jsx)("div",{children:"Loading..."}):"rejected"===r?(0,U.jsx)("div",{children:p.message}):"resolved"===r?(0,U.jsx)(Z,{children:(0,U.jsx)(j,{children:a.map((function(n){return(0,U.jsxs)(b,{children:[(0,U.jsx)(k,{src:n.profile_path?"https://image.tmdb.org/t/p/w200".concat(n.profile_path):"https://fakeimg.pl/200x300?text=200x300",alt:"".concat(n.name)}),(0,U.jsxs)(y,{children:[(0,U.jsx)(_,{children:"Name: "}),(0,U.jsx)(w,{children:n.name}),(0,U.jsx)(S,{children:"Role: "}),(0,U.jsx)(M,{children:n.character})]})]},n.cast_id)}))})}):void 0}},502:function(n,e){var t="df4f25ddce476816dc7867d9ac4bd1ea";var a={fetchTrendingMovies:function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?include_adult=false&language=en-US&page=1&api_key=".concat(t)).then((function(n){return n.json()}))},fetchMoviesBySearch:function(n){return fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=".concat(n,"&api_key=").concat(t)).then((function(n){return n.json()}))},fetchMovieDetails:function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US&api_key=").concat(t)).then((function(n){return n.json()}))},fetchMovieCast:function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?language=en-US&api_key=").concat(t)).then((function(n){return n.json()}))},fetchMovieReviews:function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?language=en-US&page=1&api_key=").concat(t)).then((function(n){return n.json()}))}};e.Z=a}}]);
//# sourceMappingURL=736.a8d801d2.chunk.js.map