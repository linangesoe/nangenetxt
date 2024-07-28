var imageUrls = [
	'https://lm.nangesoe.cn/nangebj/zibi/%E8%83%8C%E6%99%AF.png',
	'https://lm.nangesoe.cn/nangebj/sjbj/beijing4.webp',
    // 这里随机背景壁纸-添加更多图片URL...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('background');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';
//
  var imageUrls = [
	'https://lm.nangesoe.cn/nangebj/sjrw/xiaohuangren.60nxvrux8c80.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/024.38y8lpvx5ug0.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/007.4ra12856l3q0.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/004.47zk9hg17zg0.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/213d.51b3hpotx9s0.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/029.71q4mgfwdo00.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/025.4kt2ai85mx60.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/25.5j6k4o4lqa40.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/021.4uqonnvv0xw0.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/006.5fr6malj99o0.png',
	'https://lm.nangesoe.cn/nangebj/sjrw/001.3jr66nchfja0.png',

    // 这里添加随机前景人物图-添加更多图片URL...
  ];
  
  var randomIndex = Math.floor(Math.random() * imageUrls.length);
  var randomImageUrl = imageUrls[randomIndex];
  
  var randomImageElement = document.getElementById('bg');
  randomImageElement.style.backgroundImage = 'url(' + randomImageUrl + ')';