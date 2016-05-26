

  //#CookieLaw
  (function($){
	var w=$,
	data=w.localStorage,
	wl=String(w.location),isoffline=(wl.indexOf('file://')!==-1),
	d=w.document;

   function readCookie(x){alert(44);
    if(isoffline){
     data.setItem('UECL',1);return true;
    }else{
     for(var c,j,i=0,s=x+"=",m=d.cookie.split(';'),l=m.length;i<l;i++){
		c=m[i];
		while(c.charAt(0)===' '){c=c.substring(1,(j=c.length));};
		if(c.indexOf(s)===0){return c.substring(s.length,j);};
     };
    };
    return null;
   }

   function createCookie(x,v,j){
    var w=window,n=x,i=j,s='';
    if(j>0){var o=new Date();o.setTime(o.getTime()+j);s="; expires="+o.toGMTString();};
    d.cookie=n+"="+v+s+"; path=/";
    return isoffline?data.getItem('UECL')===1:readCookie(n);
   }

   if(!readCookie('UECL')){
		var $alert=$id('alert'),c=$alert.classList;
		$alert.innerHTML='<span id="messaggio"><p>Questo sito utilizza cookie per&nbsp;fornirti una&nbsp;migliore esperienza di&nbsp;navigazione: non&nbsp;tracciamo dati&nbsp;personali. Per&nbsp;maggiori informazioni <a href="http://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/3585077" target="_blank">clicca&nbsp;qui</a>. </p>Per chiudere questo avviso <br>ed&nbsp;accettare&nbsp;i&nbsp;cookie premi<button class="confirm" id="accetto">OK</button></span>';
		c.add('show','consent-cookie');
		$id('accetto').onclick=function(){
			if(createCookie('UECL',1,31536000000)){//365*(24*60*60*1000),/365*86400000 = 31536000000
				var e=this;
				setTimeout(function(){
					$alert.removeChild($id('messaggio'));
					c.remove('show','consent-cookie');
				},999);
			};
		};
   };
  })(window);
