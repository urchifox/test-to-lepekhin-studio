var i={MENU_CONTENT:300,SCROLL_ICON:300},l={MENU_CONTENT:"--animation-menu-content",SCROLL_ICON:"--animation-scroll-icon"},o={MenuContent:{SHOW:`show-menu-content ${i.MENU_CONTENT/1e3}s ease-in-out both`,HIDE:`hide-menu-content ${i.MENU_CONTENT/1e3}s ease-in-out both`},ScrollIcon:{SHOW:`show-scroll-icon ${i.SCROLL_ICON/1e3}s ease-in-out both`,HIDE:`hide-scroll-icon ${i.SCROLL_ICON/1e3}s ease-in-out both`}};var r=e=>e.scrollHeight>e.clientHeight;var m=document.querySelector(".header"),n=m.querySelector(".menu"),V=n.querySelector(".menu__scroll-icon--position-top"),g=n.querySelector(".menu__scroll-icon--position-bottom"),E,C=e=>{if(r(n)!==E){let t=r(n)?o.ScrollIcon.SHOW:o.ScrollIcon.HIDE;e.style.setProperty(l.SCROLL_ICON,t),E=r(n)}},v=()=>{let e=m.classList.contains("header--closed")?o.MenuContent.SHOW:o.MenuContent.HIDE;m.style.setProperty(l.MENU_CONTENT,e),setTimeout(()=>C(g),i.MENU_CONTENT)},f=()=>{let e=n.scrollTop>0?o.ScrollIcon.SHOW:o.ScrollIcon.HIDE;V.style.setProperty(l.SCROLL_ICON,e);let t=n.scrollHeight-n.clientHeight>n.scrollTop?o.ScrollIcon.SHOW:o.ScrollIcon.HIDE;g.style.setProperty(l.SCROLL_ICON,t)},O=()=>{C(g)};var h=document.querySelector(".header"),j=h.querySelector(".header__toggler"),y=()=>{v(),h.classList.toggle("header--closed"),h.classList.toggle("header--opened")},K=()=>y(),k=()=>{j.addEventListener("click",K)};var I=document.querySelector(".header"),M=I.querySelector(".search-form__input"),N=()=>{I.classList.contains("header--closed")&&y()},T=()=>{M.addEventListener("click",N),M.addEventListener("input",N)};var u=document.querySelector(".menu"),F=u.querySelector(".menu__scroll-icon--position-top"),G=u.querySelector(".menu__scroll-icon--position-bottom"),q=()=>{F.style.opacity=0,G.style.opacity=r(u)?1:0,u.addEventListener("scroll",f)};var J=document.querySelectorAll(".menu__link[data-counter]"),Q=document.querySelectorAll(".menu__link--type-project"),X=e=>`
  <div class="menu__counter">
    <div class="menu__count-number">${e}</div>
    <span class="visually-hidden">\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439</span>
  </div>
`,Y=(e,t)=>{let c=document.createElement("div");c.innerHTML=X(e),t.appendChild(c.firstElementChild)},x=()=>{J.forEach(e=>{Y(e.dataset.counter,e)}),Q.forEach(e=>{e.style.setProperty("--icon-color",e.dataset.bookmarkColor)})};var Z=new Map([["status-online",{color:"rgba(34, 197, 94, 1)",text:"\u0412 \u0441\u0435\u0442\u0438"}],["status-dont-disturb",{color:"rgb(197, 34, 34)",text:"\u041D\u0435 \u0431\u0435\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u044C"}]]),W=document.querySelector(".header"),_=W.querySelector(".status-menu"),ee=_.querySelector(".status-menu__current"),b=_.querySelector(".status-menu__toggler"),s=_.querySelector(".status-menu__popup"),te=()=>{let e=W.getBoundingClientRect(),t=s.getBoundingClientRect(),c=window.screen.width,d=t.left-e.left,p=c-d-24;s.style.maxWidth=`${p}px`},w=e=>{let t=Z.get(e.target.id);b.style.setProperty("--icon-color",t.color),ee.textContent=t.text},R=e=>{e.target.closest(".status-menu__popup")||S()},H=e=>{e.key==="Escape"&&S()},oe=e=>{e.stopPropagation(),S()};function S(){s.classList.toggle("status-menu__popup--is-opened"),s.classList.toggle("status-menu__popup--is-closed"),s.classList.contains("status-menu__popup--is-opened")?(document.addEventListener("click",R),document.addEventListener("keydown",H),s.addEventListener("change",w)):(document.removeEventListener("click",R),document.removeEventListener("keydown",H),s.removeEventListener("change",w))}var A=()=>{te(),b.addEventListener("click",oe)};var U=document.querySelector(".header"),$=U.querySelector(".user-menu"),P=$.querySelector(".user-menu__toggler"),a=$.querySelector(".user-menu__popup"),ne=()=>{let e=U.getBoundingClientRect(),t=a.getBoundingClientRect(),c=e.width,d=e.right-t.right,p=c-d-24;a.style.maxWidth=`${p}px`},D=e=>{e.target.closest(".user-menu__popup")||L()},B=e=>{e.key==="Escape"&&L()},se=e=>{e.stopPropagation(),L()};function L(){a.classList.toggle("user-menu__popup--is-opened"),a.classList.toggle("user-menu__popup--is-closed"),a.classList.contains("user-menu__popup--is-opened")?(document.addEventListener("click",D),document.addEventListener("keydown",B)):(document.removeEventListener("click",D),document.removeEventListener("keydown",B))}var z=()=>{P.addEventListener("click",ne,{once:!0}),P.addEventListener("click",se)};k();T();q();x();A();z();window.addEventListener("resize",O);