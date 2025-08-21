// Počkať, kým sa načíta celý DOM
document.addEventListener("DOMContentLoaded", function () {
  // Nájde všetky šípky v menu
  const arrows = document.querySelectorAll(".menu-item .arrow");
  // Pridať event listener na každú šípku
  arrows.forEach(arrow => {
    arrow.addEventListener("click", function (event) {
      // Zastaví propagáciu, aby sa neaktivovali iné klikacie prvky
      event.stopPropagation();
      const menuItem = event.target.closest(".menu-item");
      // Prepína triedu "open" na aktuálnej položke
      menuItem.classList.toggle("open");
      // Zavrie všetky ostatné submenu
      document.querySelectorAll(".menu-item").forEach(item => {
        if (item !== menuItem) {
          item.classList.remove("open");
        }
      });
    });
  });
  // Zavrie všetky submenu pri kliknutí mimo menu
  document.addEventListener("click", function () {
    document.querySelectorAll(".menu-item").forEach(item => {
      item.classList.remove("open");
    });
  });
});
  // Po načítaní stránky pridá triedu 'loaded'
  window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
  });
  // Pri kliknutí na odkaz najprv spustí animáciu fade-out
  document.querySelectorAll('a').forEach(link => {
    // Iba ak je to interný odkaz
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.href;
        document.body.classList.remove('loaded');
        setTimeout(() => {
          window.location.href = href;
        }, 100); // Trvanie fade-out animácie
      });
    }
  });

(function(){function i(e){if(!window.frames[e]){if(document.body&&document.body.firstChild){var t=document.body;var n=document.createElement("iframe");n.style.display="none";n.name=e;n.title=e;t.insertBefore(n,t.firstChild)}else{setTimeout(function(){i(e)},5)}}}function e(n,o,r,f,s){function e(e,t,n,i){if(typeof n!=="function"){return}if(!window[o]){window[o]=[]}var a=false;if(s){a=s(e,i,n)}if(!a){window[o].push({command:e,version:t,callback:n,parameter:i})}}e.stub=true;e.stubVersion=2;function t(i){if(!window[n]||window[n].stub!==true){return}if(!i.data){return}var a=typeof i.data==="string";var e;try{e=a?JSON.parse(i.data):i.data}catch(t){return}if(e[r]){var o=e[r];window[n](o.command,o.version,function(e,t){var n={};n[f]={returnValue:e,success:t,callId:o.callId};if(i.source){i.source.postMessage(a?JSON.stringify(n):n,"*")}},o.parameter)}}if(typeof window[n]!=="function"){window[n]=e;if(window.addEventListener){window.addEventListener("message",t,false)}else{window.attachEvent("onmessage",t)}}}e("__tcfapi","__tcfapiBuffer","__tcfapiCall","__tcfapiReturn");i("__tcfapiLocator")})();</script><script type="text/javascript">(function(){(function(e,i,o){var n=document.createElement("link");n.rel="preconnect";n.as="script";var t=document.createElement("link");t.rel="dns-prefetch";t.as="script";var r=document.createElement("script");r.id="spcloader";r.type="text/javascript";r["async"]=true;r.charset="utf-8";window.didomiConfig=window.didomiConfig||{};window.didomiConfig.sdkPath=window.didomiConfig.sdkPath||o||"https://sdk.privacy-center.org/";const d=window.didomiConfig.sdkPath;var a=d+e+"/loader.js?target_type=notice&target="+i;if(window.didomiConfig&&window.didomiConfig.user){var c=window.didomiConfig.user;var s=c.country;var f=c.region;if(s){a=a+"&country="+s;if(f){a=a+"&region="+f}}}n.href=d;t.href=d;r.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(n,m);m.parentNode.insertBefore(t,m);m.parentNode.insertBefore(r,m)})("9a8e2159-3781-4da1-9590-fbf86806f86e","kUMHEGzC")})();
