(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(n,e,t){n.exports=t(54)},54:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=t(6),u=t(7),s=t(9),l=t(8),b=t(10),m=t(4),d=t(1),f=t(2);function h(){var n=Object(d.a)(["\n  height: 1.875rem;\n"]);return h=function(){return n},n}function p(){var n=Object(d.a)(["\n  margin: 0.5rem;\n  line-height: 1.875rem;\n  vertical-align: top;\n  font-size: 1rem;\n  font-style: italic;\n  color: #444;\n"]);return p=function(){return n},n}function g(){var n=Object(d.a)(["\n  margin-bottom: 1vh;\n  font-size: 3.75rem;\n  text-transform: uppercase;\n  text-shadow: 3px 2px 15px #999;\n\n  @media (max-width: 500px) {\n    font-size: 10vw;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(d.a)(["\n  margin: 12vh 0 6vh 0;\n"]);return v=function(){return n},n}var w=f.b.div(v()),x=f.b.h2(g()),j=f.b.span(p()),k=f.b.img(h());function O(){return a.a.createElement(w,null,a.a.createElement(x,null,"News Hunter"),a.a.createElement(j,null,"Searching the NYT Archives for seeds of knowledge."),a.a.createElement(k,{src:"Assets/logo.png"}))}function E(){var n=Object(d.a)(["\n  padding: 0.375rem 0.75rem;\n  ","\n  transition: background 0.4s, color 0.4s;\n\n  &:hover {\n    background: black;\n    color: white;\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(d.a)(["\n  max-width: 225px;\n  margin-right: 0.75rem;\n  padding: 0.375rem 1.125rem;\n  ","\n  transition: background 0.4s;\n\n  &:focus {\n    background: rgba(255, 255, 255, 0.85)\n  }\n"]);return y=function(){return n},n}function A(){var n=Object(d.a)(["\n  margin: 6vh 0;\n"]);return A=function(){return n},n}var z=f.b.div(A()),q="\n  background: rgba(255, 255, 255, 0.7);\n  border: 1px solid #444;\n  border-radius: 4px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);\n  font-size: 1.5rem;\n  font-family: 'EB Garamond', serif;\n",C=f.b.input(y(),q),T=f.b.button(E(),q),B=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).state={searchTopic:""},t.handleChange=t.handleChange.bind(Object(m.a)(Object(m.a)(t))),t}return Object(b.a)(e,n),Object(u.a)(e,[{key:"handleChange",value:function(n){this.setState({searchTopic:n.target.value})}},{key:"render",value:function(){var n=this.state.searchTopic,e=this.props.requestArticles,t=this.handleChange;return a.a.createElement(z,null,a.a.createElement(C,{type:"text",placeholder:"Topic to search...",value:n,onChange:t,onKeyPress:function(t){"Enter"===t.key&&e(n)}}),a.a.createElement(T,{onClick:function(){return e(n)}},"Hunt!"))}}]),e}(r.Component);function S(){var n=Object(d.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]);return S=function(){return n},n}function Y(){var n=Object(d.a)(["\n  font-size: 1.125rem;\n  text-align: left;\n"]);return Y=function(){return n},n}function G(){var n=Object(d.a)(["\n  float: right;\n  width: 12vw;\n  margin: 2px 0 0 10px;\n  border: 1px solid black;\n  background: white;\n\n  @media (max-width: 700px) {\n    width: 36vw;\n  }\n"]);return G=function(){return n},n}function H(){var n=Object(d.a)(["\n  margin: 1.875rem 0 1.5rem 0;\n  font-size: 1.375rem;\n"]);return H=function(){return n},n}function J(){var n=Object(d.a)(["\n  position: absolute;\n  top: 1.125rem;\n  right: 1.125rem;\n  font-size: 1rem;\n"]);return J=function(){return n},n}function N(){var n=Object(d.a)(["\n  width: 29vw;\n  margin: 0.75rem auto;\n  padding: 1.125rem;\n  position: relative;\n  border: 1px solid black;\n  background: rgba(255, 255, 255, 0.7);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n  transition: background 0.2s, box-shadow 0.2s, -webkit-transform 0.2s;\n  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;\n  transition: background 0.2s, transform 0.2s, box-shadow 0.2s, -webkit-transform 0.2s;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.85);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);\n    -webkit-transform: translateY(-0.375rem);\n    transform: translateY(-0.375rem);\n  }\n\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]);return N=function(){return n},n}var _=f.b.div(N()),I=f.b.span(J()),K=f.b.h4(H()),P=f.b.img(G()),D=f.b.p(Y()),F=f.b.span(S());function L(n){var e=n.article;return a.a.createElement(_,null,a.a.createElement(I,null,e.pub_date.slice(0,10)),a.a.createElement(K,null,e.headline.main),e.multimedia.length?a.a.createElement(P,{src:"https://www.nytimes.com/"+e.multimedia[0].url}):a.a.createElement(P,{src:"Assets/newspaper.png"}),a.a.createElement(D,null,e.snippet),a.a.createElement("a",{href:e.web_url},a.a.createElement(F,null)))}function M(){var n=Object(d.a)(["\n  width: 70vw;\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n\n  @media (max-width: 700px) {\n    width: 90vw;\n  }\n"]);return M=function(){return n},n}var Q=f.b.div(M());function R(n){var e=n.articles;return a.a.createElement(Q,null,e.map(function(n,e){return a.a.createElement(L,{article:n,key:e})}))}function U(){var n=Object(d.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'EB Garamond', serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: url('Assets/bg.jpg');\n    background-attachment: fixed;\n    background-position: center;\n    background-size: cover;\n  }\n"]);return U=function(){return n},n}var V=Object(f.a)(U()),W=t(24),X=t.n(W);function Z(){var n=Object(d.a)(["\n  text-align: center;\n"]);return Z=function(){return n},n}var $=f.b.div(Z()),nn=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).state={articles:[]},t.requestArticles=t.requestArticles.bind(Object(m.a)(Object(m.a)(t))),t}return Object(b.a)(e,n),Object(u.a)(e,[{key:"requestArticles",value:function(n){var e=this;X.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",{params:{"api-key":"ce918b45703b49bd962eb83f2010a49e",q:n,fq:"headline:"+n,sort:"newest"}}).then(function(n){return e.setState({articles:n.data.response.docs})}).catch(function(n){return console.log(n)})}},{key:"render",value:function(){var n=this.state.articles,e=this.requestArticles;return a.a.createElement($,null,a.a.createElement(V,null),a.a.createElement(O,null),a.a.createElement(B,{requestArticles:e}),!!n.length&&a.a.createElement(R,{articles:n}))}}]),e}(r.Component);o.a.render(a.a.createElement(nn,null),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.7d8ed9d2.chunk.js.map