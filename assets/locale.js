(function(){
  var S={
    es:{ey:'Auditoria Web y Construccion - por OYE Creations',h1:'<em>Envia</em> tu URL.<br>Obten un sitio que puntua <em>90 a 100.</em>',sub:'Reconstruimos tu sitio desde cero en codigo limpio, con garantia de 90 a 100 en las cinco categorias de Lighthouse o te devolvemos tu dinero. El codigo es tuyo. Sin contratos.'},
    fr:{ey:'Audit Web et Construction - par OYE Creations',h1:'<em>Deposez</em> votre URL.<br>Obtenez un site qui marque <em>90 a 100.</em>',sub:'Nous reconstruisons votre site a partir de zero en code propre, garanti de 90 a 100 sur les cinq categories Lighthouse ou rembourse. Vous etes proprietaire du code. Sans engagement.'},
    pt:{ey:'Auditoria Web e Construcao - por OYE Creations',h1:'<em>Envie</em> sua URL.<br>Tenha um site que pontua <em>90 a 100.</em>',sub:'Reconstruimos seu site do zero em codigo limpo, com garantia de 90 a 100 nas cinco categorias do Lighthouse ou seu dinheiro de volta. O codigo e seu. Sem contrato.'},
    de:{ey:'Web-Audit und Aufbau - von OYE Creations',h1:'<em>Drop</em> deine URL.<br>Erhalte eine Seite mit <em>90 bis 100.</em>',sub:'Wir bauen deine Website von Grund auf in sauberem Code neu, garantiert 90 bis 100 in allen fuenf Lighthouse-Kategorien oder Geld zurueck. Der Code gehoert dir. Kein Vertrag.'}
  };
  fetch('https://bink.oyecreations.com/api/region').then(function(r){return r.json()}).then(function(d){
    var s=S[(d.languageCode||'').split('-')[0]];if(!s)return;
    var el;
    el=document.getElementById('heroEyebrow');if(el)el.textContent=s.ey;
    el=document.getElementById('heroH1');if(el)el.innerHTML=s.h1;
    el=document.getElementById('heroSub');if(el)el.textContent=s.sub;
  }).catch(function(){});
})();
