(this.webpackJsonpcampaign=this.webpackJsonpcampaign||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"a":{"Dagger":["Sztylet",1,2,"Stalowy sztylet z bardzo dobrze wywa\u017con\u0105 r\u0119koje\u015bci\u0105. Idealny dla z\u0142odziei i mag\xf3w, kt\xf3rzy niewiele anga\u017cuj\u0105 si\u0119 bezpo\u015brednio w walk\u0119.","dagger",1,"1k4 k\u0142ute"]}}')},16:function(e,a,i){},17:function(e,a,i){"use strict";i.r(a);var n=i(1),o=i.n(n),t=i(9),s=i.n(t),c=i(2),r=i(3),j=i(5),d=i(4),l=i(0),z=function(e){Object(j.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.props,a=e.onNewGame,i=e.onLoadGame;return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)("div",{id:"start",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("div",{className:"content-title",children:[Object(l.jsxs)("h6",{children:["Kampania Dungeons ",Object(l.jsx)("span",{className:"colored",children:"&"})," Dragons:"]}),Object(l.jsx)("h1",{children:"Oddech Mrozu"})]}),Object(l.jsxs)("div",{className:"content-buttons",children:[Object(l.jsx)("button",{onClick:a,children:"Nowa gra"}),Object(l.jsx)("button",{onClick:i,children:"Wczytaj gr\u0119"})]}),Object(l.jsx)("p",{children:"Dla lepszych wra\u017ce\u0144 z rozgrywki w\u0142\u0105cz autoodtwarzanie w przegl\u0105darce."}),Object(l.jsx)("audio",{src:"./music/title.mp3",autoPlay:!0,controls:!0,loop:!0})]})})})})}}]),i}(n.Component),m={pageFlip:new Audio("./sounds/pageFlip.wav"),item:new Audio("./sounds/item.wav"),book:new Audio("./sounds/bookOpen.wav"),potion:new Audio("./sounds/potion.wav"),gold:new Audio("./sounds/money.wav"),dagger:new Audio("./sounds/dagger.wav")},w=i(7),y=i(10),p=function(e){Object(j.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={gold:70,equipment:[w.b.IsmenaBook,w.b.RoomKey,w.a.HealthPotions,w.a.Bag,w.a.FoodRations,y.a.Dagger]},e.handlePlaySound=function(e){var a=m.item,i=m.potion,n=m.book,o=m.gold,t=m.dagger;switch(e){case"item":a.play();break;case"gold":o.play();break;case"potion":i.play();break;case"book":n.play();break;case"dagger":t.play();break;default:a.play()}},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this;return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)("div",{className:"content-equipment_item",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{class:"item",onClick:function(){return e.handlePlaySound("gold")},children:["Dost\u0119pne z\u0142oto: ",this.state.gold," sz"]}),this.state.equipment.map((function(a){return Object(l.jsxs)("li",{class:"item",onClick:function(){return e.handlePlaySound(a[4])},children:["Nazwa: ",a[0],", Waga: ",a[1],", Cena: ",a[2],", Opis: ",a[3]]},Math.random())}))]})})})}}]),i}(n.Component),u=function(e){Object(j.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={},e}return Object(r.a)(i,[{key:"render",value:function(){return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)("div",{id:"equipment",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("h1",{children:"Ekwipunek"}),Object(l.jsx)("a",{href:"#nav",children:"Do g\xf3ry"}),Object(l.jsx)("p",{children:"W trakcie projektowania"}),Object(l.jsx)("div",{className:"content-equipment",children:Object(l.jsx)(p,{})})]})})})}}]),i}(n.Component),b=function(e){Object(j.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={},e}return Object(r.a)(i,[{key:"render",value:function(){return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsxs)("div",{className:"nav hidden",id:"nav",children:[Object(l.jsx)("div",{className:"nav-button"}),Object(l.jsxs)("div",{className:"nav-bar",children:[Object(l.jsx)("div",{className:"nav-bar_item",children:Object(l.jsxs)("a",{href:"#WorldMap",children:[Object(l.jsx)("img",{className:"minilogo",src:"./images/minilogo.png",alt:"Logo D&D"})," Mapa \u015bwiata"]})}),Object(l.jsx)("div",{className:"nav-bar_item",children:Object(l.jsxs)("a",{href:"#equipment",children:[Object(l.jsx)("img",{className:"minilogo",src:"./images/minilogo.png",alt:"Logo D&D"}),"Ekwipunek"]})}),Object(l.jsx)("div",{className:"nav-bar_item",children:Object(l.jsxs)("a",{href:"#",children:[Object(l.jsx)("img",{className:"minilogo",src:"./images/minilogo.png",alt:"Logo D&D"}),"Posta\u0107"]})}),Object(l.jsx)("div",{className:"nav-bar_item",children:Object(l.jsxs)("a",{href:"#",children:[Object(l.jsx)("img",{className:"minilogo",src:"./images/minilogo.png",alt:"Logo D&D"}),"Zadania"]})}),Object(l.jsx)("div",{className:"nav-bar_item",children:Object(l.jsxs)("a",{href:"#",children:[Object(l.jsx)("img",{className:"minilogo",src:"./images/minilogo.png",alt:"Logo D&D"}),"Opcje"]})})]})]})})}}]),i}(n.Component),h=i(6),k=i.n(h),g=function(e){Object(j.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={},e}return Object(r.a)(i,[{key:"componentDidMount",value:function(){k()(".nav.hidden").removeClass("hidden"),setTimeout((function(){k()(".content.hidden").removeClass("hidden")}),1e3)}},{key:"render",value:function(){return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)("div",{id:"story",children:Object(l.jsxs)("div",{className:"content hidden",children:[Object(l.jsx)("div",{className:"content-title",children:Object(l.jsx)("h1",{children:"Prolog"})}),Object(l.jsxs)("div",{className:"content-story",children:[Object(l.jsx)("p",{children:"\u2003Twoja historia rozpoczyna si\u0119 w mie\u015bcie portowym Luskan, kt\xf3re jest ostatnim posterunkiem przed mro\u017anymi zakamarkami Doliny Lodowego Wichru. Znane te\u017c pod nazw\u0105 Miasta \u017bagli, jest jednym z najwi\u0119kszych miast Wybrze\u017ca Mieczy oraz jednym z najwa\u017cniejszych. Jego mieszka\u0144cami s\u0105 ludzie p\xf3\u0142nocy z Ruathrym, w wi\u0119kszo\u015bci byli piraci. W Luskan w\u0142adz\u0119 obejmuje pi\u0119ciu najwy\u017cszych kapitan\xf3w, z kt\xf3rych ka\u017cdy by\u0142 niegdy\u015b lordem w\u015br\xf3d pirat\xf3w. Prawdziw\u0105 w\u0142adz\u0119 posiada jednak wsp\xf3lnota mag\xf3w zwana Bractwem Tajemnic (lub Tajemnym Bractwem). Jego cz\u0142onkowie staraj\u0105 si\u0119 unika\u0107 konflikt\xf3w z Waterdeep i Amn. W 1361 mieszka\u0144cy Luskan podbili ojczyzn\u0119 ludzi p\xf3\u0142nocy, wysp\u0119 Ruathrym, lecz wkr\xf3tce potem zostali z niej odparci przez Sojusz Lord\xf3w. Luskanie nie tylko stracili twarz, lecz poczuli si\u0119 r\xf3wnie\u017c oszukani. Z tego powodu nie zwracaj\u0105 uwagi na cumuj\u0105cych na ich wodach pirat\xf3w \u017cyj\u0105cych z \u0142upienia Waterdeep."}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:'\u2003Przyby\u0142a\u015b do miasta Luskan wczesn\u0105 zim\u0105, kt\xf3ra przez s\u0105siedztwo z Dolin\u0105 Lodowego Wichru jest dosy\u0107 sroga. Twoje najwi\u0119ksze zainteresowanie wzbudza Wie\u017ca Tajemnych Arkan, kt\xf3ra pomog\u0142aby Ci rozszerzy\u0107 wiedz\u0119 na temat Twoich bada\u0144 nad moc\u0105 magiczn\u0105. Ogromna budowla przypominaj\u0105ca wygl\u0105dem pot\u0119\u017cne drzewo, pnie si\u0119 wysoko ponad mury miasta daj\u0105c znak dalekim jeszcze podr\xf3\u017cnym, \u017ce cel ich destynacji jest ju\u017c blisko. Widok tej wie\u017cy z ulicy zabiera Ci dech w piersiach i wzbudza podniecenie, jednak na t\u0105 chwil\u0119 musisz znale\u017a\u0107 jak\u0105\u015b gospod\u0119 na noc. O tej porze Wie\u017ca Tajemnych Arkan jest zamkni\u0119ta dla odwiedzaj\u0105cych. Zatrzymujesz si\u0119 wi\u0119c w gospodzie "Kr\xf3lewskie D\u0142onie", s\u0142yn\u0105cej z wykwintnych potraw i nietuzinkowego wystroju. Tego dnia gospoda wype\u0142niona by\u0142a miejscow\u0105 arystokracj\u0105 i podr\xf3\u017cnymi, kt\xf3rzy ceni\u0105 sobie luksusy i wygod\u0119. Siadasz przy okr\u0105g\u0142ym, drewnianym stole b\u0119d\u0105cym najbli\u017cej paleniska. Trzaskaj\u0105cy weso\u0142o ogie\u0144 koi\u0142 Twoje niezwykle czu\u0142e uszy, wra\u017cliwe na ha\u0142as szczeg\xf3lnie przy takim t\u0142umie. Torb\u0119 z zapasami rzuci\u0142a\u015b pod st\xf3\u0142 i wzi\u0119\u0142a\u015b do r\u0119ki przypi\u0119t\u0105 do pasa i schowan\u0105 w pokrowiec ksi\u0119g\u0119. Otworzy\u0142a\u015b j\u0105, obserwuj\u0105c towarzystwo w poszukiwaniu potencjalnych ciekawskich, jednak wszyscy byli zaj\u0119ci sob\u0105. Zacz\u0119\u0142a\u015b czyta\u0107. W tym samym momencie przerwa\u0142a Ci kelnerka, kt\xf3ra grzecznie i dostojnie zapyta\u0142a co poda\u0107. Odmachn\u0119\u0142a\u015b jej jedynie r\u0119k\u0105 daj\u0105c do zrozumienia, \u017ceby Ci nie przeszkadza\u0142a i wg\u0142\u0119bi\u0142a\u015b si\u0119 w lektur\u0119.'}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:['\u2003Po godzinie studiowania swoich w\u0142asnych bada\u0144 Twoje czu\u0142e uszy wy\u0142apa\u0142y zdanie "Wie\u017ca Tajemnych Arkan" z wypowiedzi jakiego\u015b szlachcica siedz\u0105cego dwa sto\u0142y za Tob\u0105. Zamkn\u0119\u0142a\u015b na chwil\u0119 ksi\u0119g\u0119 i skupi\u0142a\u015b si\u0119 na rozmowie dochodz\u0105cej w\u0142a\u015bnie z tamtego sto\u0142u. ',Object(l.jsx)("span",{className:"dialogue",children:'"... dokona\u0107 takiej zbrodni. / Na dodatek nikt nic nie wie! Nie wiem jak Wy, Panowie, ale ja si\u0119 nie czuj\u0119 bezpieczny w tym mie\u015bcie. B\u0119d\u0119 musia\u0142 wynaj\u0105\u0107 dodatkowych najemnik\xf3w do ochrony. / Przesadzasz, Nathanie. Co\u015b, co mia\u0142o zwi\u0105zek z wie\u017c\u0105 nijak nie \u0142\u0105czy si\u0119 z Tob\u0105. Nie masz si\u0119 czego obawia\u0107. / Przypomnij sobie ilu teraz stra\u017cnik\xf3w stoi pod wie\u017c\u0105. Ju\u017c nawet ludzie z Bractwa Tajemnic patroluj\u0105 jej okolic\u0119 i szukaj\u0105 potencjalnych \u015blad\xf3w. Oj, takim wpa\u015b\u0107 w r\u0119ce. / Szkoda podr\xf3\u017cnych. S\u0142ysza\u0142em, \u017ce tego dnia wielu przyby\u0142o by obejrze\u0107 wie\u017c\u0119 od \u015brodka i postudiowa\u0107 jej wiedz\u0119. / Wielka szkoda."'})," W jednym momencie Twoje plany legly w gruzach. Musisz si\u0119 dowiedzie\u0107 co si\u0119 sta\u0142o w wie\u017cy, jednak potrzebujesz do tego \u015bwie\u017cego umys\u0142u. Zabra\u0142a\u015b wi\u0119c swoje rzeczy i posz\u0142a\u015b wynaj\u0105c u gospodarza pok\xf3j na noc."]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["\u2003Pok\xf3j wynaj\u0119ty przez Ciebie by\u0142 bardzo przytulny, jednak nie mo\u017cesz tego samego powiedzie\u0107 o snach, kt\xf3re Ci\u0119 tej nocy nawiedza\u0142y. Wpierw \u015bni\u0142y Ci si\u0119 gobliny, powa\u017cnie rozmy\u015blaj\u0105ce jak przyrz\u0105dzi\u0107 Twoj\u0105 ksi\u0119g\u0119 na obiad, podczas gdy Ty pr\xf3bowa\u0142a\u015b wy\u0142ama\u0107 kraty antymagicznej klatki u\u017cywaj\u0105c r\u0119ki truposza, kt\xf3ry te\u017c si\u0119 tam znajdowa\u0142. Drugi sen by\u0142 niewyra\u017any. Sta\u0142a\u015b w ogromnej sali ze \u015bnie\u017cnobia\u0142ym sklepieniem. Wok\xf3\u0142 by\u0142a niesko\u0144czona przestrze\u0144 wype\u0142niona kolumnami. Przed Tob\u0105 za\u015b znajdowa\u0142 si\u0119 tron z czaszek, przed kt\xf3rym sta\u0142a zakapturzona posta\u0107, podaj\u0105ca Ci notk\u0119, na kt\xf3rej by\u0142y napisane s\u0142owa w nieznanym Ci j\u0119zyku. Ostatni sen przedstawia\u0142 tajemniczy monolit, kt\xf3ry wyrasta\u0142 z ziemi okrytej grub\u0105 warstw\u0105 \u015bniegu. Woko\u0142o szaleje burza \u015bnie\u017cna. Pr\xf3bujesz si\u0119 do niego zbli\u017cy\u0107, jednak postrzymuje Ci\u0119 jaka\u015b tajemnicza si\u0142a ci\u0105gn\u0105ca Ci\u0119 w przeciwnym kierunku. Zza Twoich plec\xf3w rozglega si\u0119 z\u0142owrogi \u015bmiech, lecz nie mo\u017cesz si\u0119 odwr\xf3ci\u0107. Tajemnicza posta\u0107 przem\xf3wi\u0142a m\u0119skim g\u0142osem.",Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"dialogue",children:"\u2003- To jeszcze nie jest Tw\xf3j czas, moja droga. Teraz \u015bpij! -"}),Object(l.jsx)("br",{}),"Burza \u015bnie\u017cna si\u0119 nasili\u0142a i czujesz jak zaczyna Ci\u0119 zasypywa\u0107. Budzisz si\u0119 gwa\u0142townie."]}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"\u2003Podnosisz si\u0119 powoli z \u0142\xf3\u017cka i ocierasz pot z czo\u0142a. Blade promienie s\u0142oneczne wpadaj\u0105 do pomieszczenia rozganiaj\u0105c ciemno\u015b\u0107. \u015awieca le\u017c\u0105ca na stoliku nocnym musia\u0142a zgasn\u0105\u0107 przed chwil\u0105. Unosi\u0142a si\u0119 nad ni\u0105 s\u0142aba nitka dymu. Ocierasz oczy i odruchowo sprawdzasz czy Twoja ksi\u0119ga, dzie\u0142o Twojego \u017cycia, dalej trzyma si\u0119 Twojego magicznego pasa. Zamy\u015blona zaczynasz pakowa\u0107 swoje rzeczy. Na kr\xf3tki moment zapominasz o swoim celu, a w Twoich my\u015blach k\u0142\u0119bi si\u0119 tysi\u0105ce pyta\u0144."})]})]})})})}}]),i}(n.Component),O=function(e){Object(j.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={},e}return Object(r.a)(i,[{key:"render",value:function(){return Object(l.jsx)("div",{id:"WorldMap",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("a",{href:"#nav",children:"Do g\xf3ry"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("img",{src:"./images/map.jpg",alt:"Mapa \u015bwiata",className:"worldmap"})]})})}}]),i}(n.Component),v=function(e){Object(j.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={play:0,music:["./music/track_01.mp3"]},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this.state,a=e.play,i=e.music;return Object(l.jsxs)(o.a.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)(b,{})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(g,{}),Object(l.jsx)(O,{}),Object(l.jsx)(u,{})]}),Object(l.jsx)("audio",{src:i[a],autoPlay:!0,controls:!0,loop:!0})]})]})}}]),i}(n.Component),x=(i(16),function(e){Object(j.a)(i,e);var a=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var n=arguments.length,o=new Array(n),t=0;t<n;t++)o[t]=arguments[t];return(e=a.call.apply(a,[this].concat(o))).state={view:0},e.handleNewGame=function(){k()(".container").addClass("hide"),m.pageFlip.play(),setTimeout((function(){var a=e.state.view;a++,e.setState({view:a}),k()(".container").removeClass("hide")}),2e3)},e.handleLoadGame=function(){window.alert("Narazie niedost\u0119pne")},e.states=[Object(l.jsx)(z,{onNewGame:e.handleNewGame,onLoadGame:e.handleLoadGame}),Object(l.jsx)(v,{})],e}return Object(r.a)(i,[{key:"render",value:function(){return Object(l.jsx)(o.a.Fragment,{children:this.states[this.state.view]})}}]),i}(n.Component));s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"b":{"IsmenaBook":["Ksi\u0119ga bada\u0144 Ismeny",2,false,"Tutaj przyk\u0142adowy opis przedmiotu","book",1],"RoomKey":["Klucz do pokoju w gospodzie",0.25,false,"Tutaj przyk\u0142adowy opis przedmiotu","item",1]},"a":{"FoodRations":["Zapasy jedzenia (na jeden dzie\u0144)",1,1,"Tutaj przyk\u0142adowy opis przedmiotu","item",1],"HealthPotions":["Mikstura leczenia",0.5,50,"Ka\u017cdy, kto wypije magiczny czerwony p\u0142yn natychmiast odzyskuje 2k4 + 2 PW.","potion",1],"Bag":["Torba",0.5,5,"Zwyk\u0142a torba podr\xf3\u017cnicza do przechowywania przer\xf3\u017cnych przedmiot\xf3w.","item",1]}}')}},[[17,1,2]]]);
//# sourceMappingURL=main.2073bbbb.chunk.js.map