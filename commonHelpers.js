import{a as m,S as h,i as l}from"./assets/vendor-09d7c26e.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="43943872-0cd26c97fed3a84845e31fcef";function y(t,n){return m.get(`https://pixabay.com/api/?key=${g}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=15`).then(s=>s.data.hits).catch(s=>console.error(s))}function L(t,n){if(t.length===0){iziToast.error({title:"Error",message:"Изображения, соответствующие вашему запросу, не найдены. Пожалуйста, попробуйте еще раз."});return}const s=t.map(o=>`
      <li class="image-card">
  <a href="${o.largeImageURL}"><img src="${o.webformatURL}" alt="${o.tags}" title="" style="height:150px; width:150px;"/></a>
  <div class="image-info">
    <p><span>Просмотры: </span>${o.views}</p>
    <p><span>Загрузки: </span>${o.downloads}</p>
    <p><span>Лайки: </span>${o.likes}</p>
    <p><span>Комментарии: </span>${o.comments}</p>
  </div>
</li>
  `).join("");n.innerHTML+=s}function v(){const n=document.querySelector(".image-card").getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}const $=document.querySelector("#search-form"),b=document.querySelector("#search-input"),u=document.querySelector("#gallery"),d=document.querySelector("#loader"),c=document.querySelector("#load-more");let p=1,a="";$.addEventListener("submit",t=>{if(t.preventDefault(),a=b.value.trim(),!a){alert("Пожалуйста, введите ключевое слово для поиска");return}p=1,u.innerHTML="",f()});c.addEventListener("click",f);function f(){d.classList.remove("hidden"),y(a,p++).then(t=>{console.log(t),d.classList.add("hidden"),L(t,u),new h(".image-card a",{}),t.length===15?c.style.display="block":(c.style.display="none",l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),v()}).catch(t=>{console.error(t),l.error({title:"Error",message:"Произошла ошибка при загрузке изображений. Пожалуйста, попробуйте еще раз."})})}
//# sourceMappingURL=commonHelpers.js.map
