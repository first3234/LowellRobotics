// (c)2012 Red Arrow Robotics //਍⼀⼀ 䌀漀渀琀愀椀渀猀 琀栀攀 漀戀樀攀挀琀 漀爀椀攀渀ⴀ ⼀⼀ഀഀ
// ted AJAX library for com-  //਍⼀⼀ 洀甀渀椀挀愀琀椀漀渀猀 眀椀琀栀 琀栀攀 猀攀爀ⴀഀഀ
// ver. //਍ഀഀ
function AJAX()਍笀ഀഀ
	this.request=false; // Object to hold the request਍ऀ琀栀椀猀⸀洀攀琀栀漀搀㴀昀愀氀猀攀㬀 ⼀⼀ 䴀攀琀栀漀搀 昀漀爀 猀攀爀瘀攀爀 挀漀渀琀愀挀琀 ⠀䜀䔀吀 漀爀 倀伀匀吀⤀ഀഀ
	this.data=false; //Data to send to server਍ऀഀഀ
	if (window.XMLHttpRequest) {਍ऀऀ爀攀焀甀攀猀琀 㴀 堀䴀䰀䠀琀琀瀀刀攀焀甀攀猀琀⠀⤀㬀ഀഀ
	} else if (window.ActiveXObject) {਍ऀऀ爀攀焀甀攀猀琀 㴀 渀攀眀 䄀挀琀椀瘀攀堀伀戀樀攀挀琀⠀∀䴀椀挀爀漀猀漀昀琀⸀堀䴀䰀䠀吀吀倀∀⤀㬀ഀഀ
	}਍ऀഀഀ
	this.getData = function(_source) {਍ऀऀ椀昀 ⠀爀攀焀甀攀猀琀⤀ 笀ഀഀ
			request.open(this.method, _source);਍ऀऀऀഀഀ
			if (this.method = "POST")਍ऀऀऀ笀ഀഀ
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');਍ऀऀऀ紀ഀഀ
			਍ऀऀऀ爀攀焀甀攀猀琀⸀漀渀爀攀愀搀礀猀琀愀琀攀挀栀愀渀最攀 㴀 昀甀渀挀琀椀漀渀⠀⤀ഀഀ
			{਍ऀऀऀऀ椀昀 ⠀爀攀焀甀攀猀琀⸀爀攀愀搀礀匀琀愀琀攀 㴀㴀 㐀 ☀☀ 爀攀焀甀攀猀琀⸀猀琀愀琀甀猀 㴀㴀 ㈀　　⤀ഀഀ
				{਍ऀऀऀऀऀ爀攀琀甀爀渀 爀攀焀甀攀猀琀⸀爀攀猀瀀漀渀猀攀吀攀砀琀㬀ഀഀ
				}਍ऀऀऀ紀ഀഀ
			਍ऀऀऀ椀昀⠀琀栀椀猀⸀洀攀琀栀漀搀 㴀 ∀倀伀匀吀∀⤀ഀഀ
			{਍ऀऀऀऀ爀攀焀甀攀猀琀⸀猀攀渀搀⠀∀搀愀琀愀㴀∀ ⬀ 搀愀琀愀⤀㬀ഀഀ
			} else {਍ऀऀऀऀ爀攀焀甀攀猀琀⸀猀攀渀搀⠀∀渀甀氀氀∀⤀㬀ഀഀ
			}਍ऀऀ紀ഀഀ
	}਍ऀഀഀ
	਍紀�