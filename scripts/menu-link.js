var o=document.querySelectorAll(".menu__link[data-counter]"),c=document.querySelectorAll(".menu__link--type-project"),r=e=>`
  <div class="menu__counter">
    <div class="menu__count-number">${e}</div>
    <span class="visually-hidden">\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0439</span>
  </div>
`,s=(e,n)=>{let t=document.createElement("div");t.innerHTML=r(e),n.appendChild(t.firstElementChild)},a=()=>{o.forEach(e=>{s(e.dataset.counter,e)}),c.forEach(e=>{e.style.setProperty("--icon-color",e.dataset.bookmarkColor)})};export{a as init};
