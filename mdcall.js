function removeHtmlTag(e,t){for(var r=e.split("<"),a=0;a<r.length;a++)-1!=r[a].indexOf(">")&&(r[a]=r[a].substring(r[a].indexOf(">")+1,r[a].length));return r=r.join(""),r=r.substring(0,t-1)}function recentarticles4(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;numposts5>t;t++){var r,l,i=e.feed.entry[t],n=i.title.$t;if(t==e.feed.entry.length)break;for(var m=0;m<i.link.length;m++)if("alternate"==i.link[m].rel){l=i.link[m].href;break}for(var m=0;m<i.link.length;m++)if("replies"==i.link[m].rel&&"text/html"==i.link[m].type){r=i.link[m].title.split(" ")[0];break}if("content"in i)var o=i.content.$t;else if("summary"in i)var o=i.summary.$t;else var o="";postdate=i.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=o,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);var u=[1,2,3,4,5,6,7,8,9,10,11,12],p=["January","February","March","April","May","June","July","August","September","October","November","December"];postdate.split("-")[2].substring(0,2);var g=postdate.split("-")[1];postdate.split("-")[0];for(var h=0;h<u.length;h++)if(parseInt(g)==u[h]){g=p[h];break}var f='<a href="'+l+'"><span>&#9733; </span>'+n+"</a>";document.write(f),j++}}function recentarticles7(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array;for(var t=0;numposts3>t;t++){var r,l,i=e.feed.entry[t],n=i.title.$t;if(t==e.feed.entry.length)break;for(var m=0;m<i.link.length;m++)if("alternate"==i.link[m].rel){l=i.link[m].href;break}for(var m=0;m<i.link.length;m++)if("replies"==i.link[m].rel&&"text/html"==i.link[m].type){r=i.link[m].title.split(" ")[0];break}if("content"in i)var o=i.content.$t;else if("summary"in i)var o=i.summary.$t;else var o="";postdate=i.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=o,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);var u=[1,2,3,4,5,6,7,8,9,10,11,12],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];postdate.split("-")[2].substring(0,2);var g=postdate.split("-")[1];postdate.split("-")[0];for(var h=0;h<u.length;h++)if(parseInt(g)==u[h]){g=p[h];break}var f='<li><div class="thumb"><img width="90" height="70"  title=" '+n+' " class=" " src="'+img[t]+'"/><div class="overlay"><a href="'+l+'">Continue</a></div></div></li>';document.write(f),j++}}function stripHtmlTags(e,t){return e.replace(/<.*?>/gi,"").split(/\s+/).slice(0,t-1).join(" ")}function createSummaryAndThumb(e,t,r,a,s,l){var i=r,t=t,a=a,l=l,n=document.getElementById(e),m=n.getElementsByTagName("img"),o=n.innerHTML.replace(/<img.*?>/gi,"").replace(/<iframe.*?>/gi,""),d=o.split(/<br\s*\/?>/),c=d[0]+d.slice(1,-1).join("<br>")+d.slice(-1),u=new Array;u[0]="Jan",u[1]="Feb",u[2]="Mar",u[3]="Apr",u[4]="May",u[5]="Jun",u[6]="Jul",u[7]="Aug",u[8]="Sep",u[9]="Oct",u[10]="Nov",u[11]="Dec";u[a.split("/")[0]],a.split("/")[1],a.split("/")[2];if(m.length)var p=m[0].src,g='<div class="post-image"><a href="'+i+'"><img width="675" height="450" src="'+p+'"></a></div>',h=g+'<div class="post-entry"><div class="post-header"><span class="bullet first-bullet"></span><span class="cat">'+l+'</span><span class="bullet last-bullet"></span><h2><a href="'+i+'">'+t+'</a></h2></div><span class="snipp_home" style="float:left;">'+stripHtmlTags(c,50)+'...</span><p> <a class="more-link" href="'+i+'">continue reading</a></p></div>';else{var f=n.getElementsByTagName("iframe");if(f.length>=1)var b=f[0].src,g='<div class="post-image"><iframe width="100%" height="450" frameborder="no" src="'+b+'" scrolling="no"></iframe></div>',h=g+'<div class="post-entry"><div class="post-header"><span class="bullet first-bullet"></span><span class="cat">'+l+'</span><span class="bullet last-bullet"></span><h2><a href="'+i+'">'+t+"</a></h2></div>"+stripHtmlTags(c,50)+'...<p> <a class="more-link" href="'+i+'">continue reading</a></p></div>';else var h='<<div class="post-entry"><div class="post-header"><span class="bullet first-bullet"></span><span class="cat">'+l+'</span><span class="bullet last-bullet"></span><h2><a href="'+i+'">'+t+"</a></h2></div>"+stripHtmlTags(c,50)+'...<p> <a class="more-link" href="'+i+'">continue reading</a></p></div>'}n.innerHTML=h,n.style.display="block";for(var v=document.getElementsByClassName("separator"),y=0;y<v.length;y++)v[y].innerHTML=""}function related_results_labels_thumbs(e){for(var t=0;t<e.feed.entry.length;t++){var r=e.feed.entry[t];relatedTitles[relatedTitlesNum]=r.title.$t;try{thumburl[relatedTitlesNum]=r.media$thumbnail.url}catch(l){s=r.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d?thumburl[relatedTitlesNum]=d:"undefined"!=typeof defaultnoimage?thumburl[relatedTitlesNum]=defaultnoimage:thumburl[relatedTitlesNum]="http://2.bp.blogspot.com/-mmjt8mh87bQ/VQ6ltMr8GxI/AAAAAAAAEfo/93SmjxkwmO0/s500-c/no-image-found.jpg"}relatedTitles[relatedTitlesNum].length>35&&(relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0,35)+"...");for(var i=0;i<r.link.length;i++)"alternate"==r.link[i].rel&&(relatedUrls[relatedTitlesNum]=r.link[i].href,relatedTitlesNum++)}}function removeRelatedDuplicates_thumbs(){for(var e=new Array(0),t=new Array(0),r=new Array(0),a=0;a<relatedUrls.length;a++)contains_thumbs(e,relatedUrls[a])||(e.length+=1,e[e.length-1]=relatedUrls[a],t.length+=1,r.length+=1,t[t.length-1]=relatedTitles[a],r[r.length-1]=thumburl[a]);relatedTitles=t,relatedUrls=e,thumburl=r}function contains_thumbs(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function printRelatedLabels_thumbs(e){for(var t=0;t<relatedUrls.length;t++)relatedUrls[t]!=e&&relatedTitles[t]||(relatedUrls.splice(t,1),relatedTitles.splice(t,1),thumburl.splice(t,1),t--);for(var r=Math.floor((relatedTitles.length-1)*Math.random()),t=0;t<relatedTitles.length&&20>t&&t<maxresults;)tmb=thumburl[r].replace("s72-c/","s300-c/"),document.write('<div class="item-related"><a href="'+relatedUrls[r]+'"><img width="150" height="100" src="'+tmb+'"/></a><h3><a href="'+relatedUrls[r]+'">'+relatedTitles[r]+"</a></h3></div>"),t++,r<relatedTitles.length-1?r++:r=0;relatedUrls.splice(0,relatedUrls.length),thumburl.splice(0,thumburl.length),relatedTitles.splice(0,relatedTitles.length)}function removeHtmlTag(e,t){for(var r=e.split("<"),a=0;a<r.length;a++)-1!=r[a].indexOf(">")&&(r[a]=r[a].substring(r[a].indexOf(">")+1,r[a].length));return r=r.join(""),r=r.substring(0,t-1)}function stripHtmlTags1(e){return e.replace(/<a.*?>/gi,"")}function showrecentcomments(e){for(var t=0;6>t;t++){var r,a=e.feed.entry[t];if(t==e.feed.entry.length)break;for(var s=0;s<a.link.length;s++)if("alternate"==a.link[s].rel){r=a.link[s].href;break}r=r.replace("#","#comment-");var l=r.split("#");l=l[0];var i=l.split("/");i=i[5],i=i.split(".html"),i=i[0];var n=i.replace(/-/g," ");if(n=n.link(l),"content"in a)var m=a.content.$t;else if("summary"in a)var m=a.summary.$t;else var m="";var o=/<\S[^>]*>>/g;if(m=m.replace(o,""),document.write("<li>"),commentauthor1=a.author[0].name.$t,commentauthor=stripHtmlTags(commentauthor1,40),document.write('<div class="small"><i class="icon-comment-alt"></i> '+commentauthor+"</div>"),m.length<100)document.write('<div class="comments-custom_txt"><a target="_blank" href="'+r+'">'+stripHtmlTags1(m)+"</a></div>");else{m=m.substring(0,100);var d=m.lastIndexOf(" ");m=m.substring(0,d),document.write('<div class="comments-custom_txt"><a target="_blank" href="'+r+'">'+stripHtmlTags1(m)+"...</a></div>")}}document.write("</li>")}function removeHtmlTag(e,t){for(var r=e.split("<"),a=0;a<r.length;a++)-1!=r[a].indexOf(">")&&(r[a]=r[a].substring(r[a].indexOf(">")+1,r[a].length));return r=r.join(""),r=r.substring(0,t-1)}function showrecentposts1(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts1<=e.feed.entry.length?maxpost=numposts1:maxpost=e.feed.entry.length,document.write('<div class="owl-carousel" id="owl-demo">');for(var t=0;t<maxpost;t++){for(var r,l,i=e.feed.entry[t],n=i.title.$t,m="",o=0;o<e.feed.entry[t].category.length;o++)m='<a href="/search/label/'+e.feed.entry[t].category[o].term+'?max-results=6">'+e.feed.entry[t].category[o].term+"</a> ";if(t==e.feed.entry.length)break;for(var u=0;u<i.link.length;u++)if("alternate"==i.link[u].rel){l=i.link[u].href;break}for(var u=0;u<i.link.length;u++)if("replies"==i.link[u].rel&&"text/html"==i.link[u].type){r=i.link[u].title.split(" ")[0];break}if("content"in i)var p=i.content.$t;else if("summary"in i)var p=i.summary.$t;else var p="";postdate=i.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=p,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var g=[1,2,3,4,5,6,7,8,9,10,11,12],h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),v=(postdate.split("-")[0],0);v<g.length;v++)if(parseInt(f)==g[v]){f=h[v];break}var y=img[t],A='<div class="owl-item"><div class="item"><a href="'+l+'"><img height="400" src="'+y+'" width="900"/></a><div class="info"><span class="bullet first-bullet"></span><span class="feat-cat">'+m+'</span><span class="bullet last-bullet"></span><div class="feat-overlay"><div class="feat-text"><h3><a href="'+l+'">'+n+'</a></h3><a href="'+l+'"></a></div></div></div></div></div>';document.write(A),j++}document.write("</div>")}function labelthumbs(e){document.write('<ul class="'+outerclass+'">');for(var t=0;t<numposts;t++){var r,l=e.feed.entry[t],i=l.title.$t,n=l.category[0].term;if(t==e.feed.entry.length)break;for(var m=0;m<l.link.length;m++)if("alternate"==l.link[m].rel){r=l.link[m].href;break}var o;try{o=l.media$thumbnail.url}catch(u){s=l.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),o=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://1.bp.blogspot.com/-pmtmCl8EbTI/UoY33J0Dp9I/AAAAAAAAAAA/fbchARjKIDg/s500-c/grey.gif"}var p=l.published.$t,g=p.substring(0,4),h=p.substring(5,7),f=p.substring(8,10),v=new Array;v[1]="January",v[2]="February",v[3]="March",v[4]="April",v[5]="May",v[6]="June",v[7]="July",v[8]="August",v[9]="September",v[10]="October",v[11]="November",v[12]="December";var y=v[parseInt(h,10)]+" "+f+", "+g;document.write(starttag+"<"+intag+' class="post">'),document.write('<div class="post-media"><div class="image-wrap"><img src="'+o.replace("/s72-c/","/s400-p/")+'" alt="'+i+'"/></div></div><div class="post-body">'),"featured-slider"==outerclass&&document.write('<span class="cat"><a href="/search/label/'+n+'">'+n+'</a></span><div class="post-title"><h4><a href="'+r+'">'+i+'</a></h4></div><div class="post-meta"><span class="post-date">'+y+"</span></div></div>"),"sub-menu"==outerclass&&document.write('<div class="post-title"><h2><a href="'+r+'">'+i+'</a></h2></div><span class="post-date">'+y+"</span></div>"),document.write("</"+intag+">"+endtag)}document.write("</ul>")}imgr=new Array,imgr[0]="http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png",showRandomImg=!0,aBold=!0,summaryPost=150,summaryPost1=0,summaryTitle=15,numposts=6,numposts1=6,numposts2=4,numposts3=6,numposts4=5,numposts5=12,numposts6=1;var classicMode=!1,summary=20,indent=3;imgr=new Array,imgr[0]="http://2.bp.blogspot.com/-mmjt8mh87bQ/VQ6ltMr8GxI/AAAAAAAAEfo/93SmjxkwmO0/s500-c/no-image-found.jpg",showRandomImg=!0,aBold=!0,summaryPost=170,summaryTitle=25,numposts1=6,numposts2=8;var classicMode=!1,summary=50,indent=3,relatedTitles=new Array,relatedTitlesNum=0,relatedUrls=new Array,thumburl=new Array;
