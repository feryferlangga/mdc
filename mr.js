function labelthumbs(t){document.write('<ul class="label_with_thumbs">');for(var e=0;e<numposts;e++){var r,n=t.feed.entry[e],i=n.title.$t;if(e==t.feed.entry.length)break;for(var o=0;o<n.link.length;o++){if("replies"==n.link[o].rel&&"text/html"==n.link[o].type)var m=n.link[o].title,l=n.link[o].href;if("alternate"==n.link[o].rel){r=n.link[o].href;break}}var u;try{u=n.media$thumbnail.url}catch(h){s=n.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://2.bp.blogspot.com/_IKigl6y9hFA/TMdcT1jzo5I/AAAAAAAAAHA/hAKuT9rJpFU/noimage.jpg"}var p=n.published.$t,f=p.substring(0,4),g=p.substring(5,7),w=p.substring(8,10),A=new Array;if(A[1]="Jan",A[2]="Feb",A[3]="Mar",A[4]="Apr",A[5]="May",A[6]="Jun",A[7]="Jul",A[8]="Aug",A[9]="Sep",A[10]="Oct",A[11]="Nov",A[12]="Dec",document.write('<li class="clearfix">'),1==showpostthumbnails&&document.write('<a href="'+r+'" target ="_top"><img class="label_thumb" src="'+u+'"/></a>'),document.write('<strong><a href="'+r+'" target ="_top">'+i+"</a></strong><br>"),"content"in n)var v=n.content.$t;else if("summary"in n)var v=n.summary.$t;else var v="";var y=/<\S[^>]*>/g;if(v=v.replace(y,""),1==showpostsummary)if(v.length<numchars)document.write(""),document.write(v),document.write("");else{document.write(""),v=v.substring(0,numchars);var k=v.lastIndexOf(" ");v=v.substring(0,k),document.write(v+"..."),document.write("")}var _="",x=0;document.write("<br>"),1==showpostdate&&(_=_+A[parseInt(g,10)]+"-"+w+" - "+f,x=1),1==showcommentnum&&(1==x&&(_+=" | "),"1 Comments"==m&&(m="1 Comment"),"0 Comments"==m&&(m="No Comments"),m='<a href="'+l+'" target ="_top">'+m+"</a>",_+=m,x=1),1==displaymore&&(1==x&&(_+=" | "),_=_+'<a href="'+r+'" class="url" target ="_top">More »</a>',x=1),document.write(_),document.write("</li>"),1==displayseparator&&e!=numposts-1&&document.write("")}document.write("</ul>")}
