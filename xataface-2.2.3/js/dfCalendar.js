function pad(e,t){for(var a=""+e;a.length<t;)a="0"+a;return a}"undefined"==typeof Dataface&&(Dataface={}),Dataface.Calendar=function(e,t){if(e||(e="df-calendar-"+Math.random()),t||(t=new Date),"Date"!=typeof t){var a=new Date;a.setTime(t),t=a}this.selectedDate=t,this.id=e,Dataface.Calendar.addInstance(this)},Dataface.Calendar.instances={},Dataface.Calendar.addInstance=function(e){this.instances[e.id]=e},Dataface.Calendar.getInstance=function(e){return this.instances[e]},Dataface.Calendar.prototype={selectedEvent:null,selectedDate:new Date,defaultStartTime:8,defaultEndTime:22,monthPanel:null,weekPanel:null,dayPanel:null,detailsPanel:null,handleSelectDay:function(e){"Date"!=typeof e&&(e=new Date(e)),this.selectedDate=e,this.dayPanel&&(document.getElementById(this.dayPanel).innerHTML=this.drawDay(9,21,.25))},handleSelectEvent:function(e){if(this.selectedEvent){var t=document.getElementById("event-preview-"+this.selectedEvent.id),a=t.className;a||(a=""),t.className=a.replace(/Dataface-Calendar-selected-event/,"")}this.selectedEvent=Dataface.Calendar.Event.getInstance(e),this.detailsPanel&&(document.getElementById(this.detailsPanel).innerHTML=this.selectedEvent.showDetails());var n=document.getElementById("event-preview-"+this.selectedEvent.id),s=n.className;s||(s=""),n&&(n.className=s+" Dataface-Calendar-selected-event")}},Dataface.Calendar.Event=function(e,t){this.id="event-"+Math.random();for(var a in t){if(("date"==a||"endTime"==a)&&"Date"!=typeof t[a]){var n=new Date;n.setTime(t[a]+60*n.getTimezoneOffset()*1e3),t[a]=n}this[a]=t[a]}Dataface.Calendar.Event.addInstance(this)},Dataface.Calendar.Event.instances={},Dataface.Calendar.Event.addInstance=function(e){this.instances[e.id]=e},Dataface.Calendar.Event.getInstance=function(e){return this.instances[e]},Dataface.Calendar.Event.prototype={title:null,date:null,endTime:null,description:null,url:null,showDetails:function(){var e='<div "Dataface-Calendar-details">';return e+='<h3 class="Dataface-Calendar-details-title">'+this.title+"</h3>",e+='<table class="Dataface-Calendar-details-data"><tbody>',e+="<tr><th>from</th><td>"+this.date.asString("%Y-%m-%d")+" at "+this.date.asString("%H:%i")+"</td></tr>",this.endTime&&(e+="<tr><th>to</th><td>"+this.endTime.asString("%Y-%m-%d")+" at "+this.endTime.asString("%H:%i")+"</td></tr>"),e+="</table>",e+='<div class="Dataface-Calendar-details-description">'+this.getDescription()+"</div>",e+="	</div>"},getDescription:function(){return this.description}},Dataface.Calendar.prototype.events={list:[],sorted:!1,add:function(e){this.list[this.list.length]=e,this.sorted=!1},compare:function(e){return e.date.getTime()<e.date.getTime()},sort:function(){this.sorted||this.list.sort(this.compare)},month:function(e){this.sort();for(var t=[],a=0;a<this.list.length;a++){var n=this.list[a];n.date.getFullYear()==e.getFullYear()&&n.date.getMonth()==e.getMonth()&&(t[t.length]=this.list[a])}return t},day:function(e){this.sort();for(var t=[],a=0;a<this.list.length;a++){var n=this.list[a];n.date.getFullYear()==e.getFullYear()&&n.date.getMonth()==e.getMonth()&&n.date.getDate()==e.getDate()&&(t[t.length]=this.list[a])}return t},week:function(e){this.sort();for(var t=e.getDate()-e.getDay(),a=e.getDate()+(6-e.getDay()),n=[],s=0;s<this.list.length;s++){var i=this.list[s];i.date.getFullYear()==e.getFullYear()&&i.date.getMonth()==e.getMonth()&&i.date.getDate()>=t&&i.date.getDate()<=a&&(n[n.length]=this.list[s])}return n},range:function(e,t){this.sort();for(var a=[],n=0;n<this.list.length;n++){var s=this.list[n];e.getTime()<=s.date.getTime()&&t.getTime()>s.date.getTime()&&(a[a.length]=s)}return a}},Date.daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Date.monthsOfYear=["January","February","March","April","May","June","July","August","September","October","November","December"],Date.prototype.daysInMonth=function(){return 32-new Date(this.getFullYear(),this.getMonth(),32).getDate()},Dataface.Calendar.prototype.drawMonth=function(){var e=new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),1),t='<table class="Dataface-Calendar-month" cellspacing="0"><thead><tr><th>'+Date.daysOfWeek.join("</th><th>")+"</th></tr></thead>";t+="<tbody>";for(var a=-1,n=0;6>n;n++){t+="<tr>";for(var s=0;7>s;s++){-1==a&&e.getDay()==s&&(a=0),a==this.selectedDate.daysInMonth()&&(a=-1);var i="";if(i=a>=0?"Dataface-Calendar-day":"Dataface-Calendar-empty-day",t+='<td class="'+i+'"><div class="day-wrapper"',a>=0){var r=this.selectedDate.clone();r.setDate(a+1),t+='<div class="day-number"><a href="javascript:Dataface.Calendar.getInstance(\''+this.id+"').handleSelectDay('"+r.toString()+"')\">"+(a+1)+"</a></div>";for(var l=this.events.day(r),d=0;d<l.length;d++)t+='<div class="Dataface-Calendar-event" id="event-preview-'+l[d].id+'"><a href="javascript:Dataface.Calendar.getInstance(\''+this.id+"').handleSelectEvent('"+l[d].id+"');\">"+l[d].title+"</a></div>";a++}t+="</div></td>"}if(t+="</tr>",0>a)break}return t+="</tbody></table>"},Dataface.Calendar.prototype.drawWeek=function(e,t){e||(e=8),t||(t=20);for(var a=(this.selectedDate.getDay(),this.selectedDate.getDate()-this.selectedDate.getDay()),n=[],s=0;s<Date.daysOfWeek.length;s++){var i=new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),a+s);n[n.length]=Date.daysOfWeek[s]+" "+Date.monthsOfYear[i.getMonth()]+" "+i.getDate()+", "+i.getFullYear()}var r='<table class="jsCalendar-week"><thead><tr><th></th><th>'+n.join("</th><th>")+"</th></tr></thead>";r+="<tbody>";for(var l=e;t>=l;l++){r+="<tr><th>"+(l+1)+":00</th>";for(var d=0;d<Date.daysOfWeek.length;d++)r+="<td></td>";r+="</tr>"}return r+="</tbody></table>"},Dataface.Calendar.prototype.drawDay=function(e,t,a){e||(e=8),t||(t=20),a||(a=1);for(var n=(this.selectedDate.getDay(),this.selectedDate.getDate()-this.selectedDate.getDay()),s=[],i=0;i<Date.daysOfWeek.length;i++){var r=new Date(this.selectedDate.getFullYear(),this.selectedDate.getMonth(),n+i);s[s.length]=Date.daysOfWeek[i]+" "+Date.monthsOfYear[r.getMonth()]+" "+r.getDate()+", "+r.getFullYear()}var l='<table class="jsCalendar-week"><thead><tr><th></th><th>'+s[this.selectedDate.getDay()]+"</th></thead>";l+="<tbody>";var d=this.selectedDate.clone();d.setHours(e),d.setMinutes(0),d.setSeconds(0);var h=this.selectedDate.clone();h.setHours(t),h.setMinutes(0),h.setSeconds(0);for(var c=d.getTime();h>=c;c+=60*a*60*1e3){var o=this.selectedDate.clone();o.setTime(c);var D=o.getMinutes()+"";1==D.length&&(D="0"+D),l+="<tr><th>"+o.getHours()+":"+D+"</th>";var g=this.selectedDate.clone();g.setTime(c+60*a*60*1e3);var f=this.events.range(o,g);l+="<td>";for(var u=0;u<f.length;u++)l+='<div class="jsCalendar-event"><a href="javascript:Dataface.Calendar.getInstance(\''+this.id+"').handleSelectEvent('"+f[u].id+"');\">"+f[u].title+"</a></div>";l+="</td></tr>"}return l+="</tbody></table>"},Date.prototype.clone=function(){return new Date(this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds())},Date.prototype.asString=function(e){var t=e.replace(/%Y/,this.getFullYear());return t=t.replace(/%m/,pad(this.getMonth()+1,2)),t=t.replace(/%d/,pad(this.getDate(),2)),t=t.replace(/%H/,pad(this.getHours(),2)),t=t.replace(/%i/,pad(this.getMinutes(),2))};