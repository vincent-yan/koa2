import Router from 'koa-router'

const router = new Router();
const movie = {
    movies: (ctx, next) => {
        const data = {
            success: true,
            error: null,
            data: [{
                "movieno": "341138",
                "name": "黑豹",
                "en_name": "Black Panther",
                "director": "瑞恩·库格勒",
                "actor": "查德维克·博斯曼,迈克尔·B·乔丹,露皮塔·尼永奥",
                "date": "2018-03-09",
                "tags": "剧情,动作,科幻",
                "score": 8,
                "longs": "135分钟",
                "country": "美国",
                "movie_poster_mini": "https://p1.meituan.net/350.490/movie/65ee71e7b58be81f612f2d28907d5ef01223359.jpg",
                "movie_poster": "https://p1.meituan.net/180.252/movie/65ee71e7b58be81f612f2d28907d5ef01223359.jpg",
                "is_pre_sale": 1,
                "nearshow": "16:20|17:40|18:20|19:30|21:50|23:00",
                "version": ["3D"],
                "videos": [{
                    "id": "91568",
                    "tm": "109",
                    "name": "中国独家预告片",
                    "img": "https://p0.meituan.net/movie/879fafb77dc0b175515dad0f0004edb825688.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/1154x480a41fce03723c4ebdbe9f1495890aa22f.mp4"
                }, {
                    "id": "89209",
                    "tm": "146",
                    "name": "中文正式版预告片",
                    "img": "https://p1.meituan.net/movie/a274d59c4a0829d42eb58334c54d49d454401.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/7ef9114387784d109d2a4a5760be3ea7.mp4"
                }, {
                    "id": "85839",
                    "tm": "116",
                    "name": "全球首款版预告片",
                    "img": "https://p1.meituan.net/movie/fd0036ea95c709b9aff0d406ec8297c012037.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/a5540fd227b34e0b8af068d453b148cf.mp4"
                }, {
                    "id": "91980",
                    "tm": "59",
                    "name": "内地定档3.9",
                    "img": "https://p1.meituan.net/movie/4736c65f76475ee83bcae35eb3efbd8125428.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480dc9c89d35f35470698f1faebf09b10a1.mp4"
                }, {
                    "id": "90900",
                    "tm": "30",
                    "name": "前瞻版预告片",
                    "img": "https://p1.meituan.net/movie/d8c6ffb82dec543f26fc0e50ff10b342387176.png",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480681653dce8104649856b07f0fe59110c.mp4"
                }, {
                    "id": "92078",
                    "tm": "61",
                    "name": "《黑豹》主创称杜比影院效果出众",
                    "img": "https://p1.meituan.net/movie/f1fb917f552cdc5f09970adbf562512b24712.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/640x6405cce0731c3c049268da70a68f80f06a8.mp4"
                }, {
                    "id": "92067",
                    "tm": "60",
                    "name": "揭秘好国王是如何养成的",
                    "img": "https://p1.meituan.net/movie/21f1c606bbbaf003bb70db9622d20483287580.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48035d3791ac4a445dda05836d62384f816.mp4"
                }, {
                    "id": "92011",
                    "tm": "50",
                    "name": "看黑豹的5个理由",
                    "img": "https://p1.meituan.net/movie/9c7735c175ad77f5d0fd151938c7141324822.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/640x6405d48f461331245e498ec3d06596b4f72.mp4"
                }, {
                    "id": "91963",
                    "tm": "69",
                    "name": "主创特辑",
                    "img": "https://p0.meituan.net/movie/4def7801d4ded8dc96bb24cb372cf41a8995.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480957f831588514578b88e032df6b3d925.mp4"
                }, {
                    "id": "91911",
                    "tm": "38",
                    "name": "国王陛下与浩克 欢乐倒计时",
                    "img": "https://p1.meituan.net/movie/aba04b5d417fe30e612459f4c96cf63c32539.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480478852cdb04e4e728d87444b9b9e456f.mp4"
                }],
                "sche_count": 6
            }, {
                "movieno": "343762",
                "name": "比得兔",
                "en_name": "Peter Rabbit",
                "director": "威尔·古勒",
                "actor": "詹姆斯·柯登,多姆纳尔·格里森,萝丝·拜恩",
                "date": "2018-03-02",
                "tags": "喜剧,动画,冒险",
                "score": 9,
                "longs": "95分钟",
                "country": "美国",
                "movie_poster_mini": "https://p0.meituan.net/350.490/movie/77d2bc0232adf8c8a27073e648e5227b119776.jpg",
                "movie_poster": "https://p0.meituan.net/180.252/movie/77d2bc0232adf8c8a27073e648e5227b119776.jpg",
                "is_pre_sale": 1,
                "nearshow": "14:00|15:40|17:20|19:00|20:40|22:20",
                "version": ["2D"],
                "videos": [{
                    "id": "92133",
                    "tm": "73",
                    "name": "全民吸兔潮！唱跳全能优质萌兔等你pick",
                    "img": "https://p0.meituan.net/movie/892f4f43d42041aefe5925f5a27d6a8745976.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48029289015bf164c2ca75450072235f094.mp4"
                }, {
                    "id": "92059",
                    "tm": "60",
                    "name": "身世之谜大曝光！兔族姐妹关系大洗牌",
                    "img": "https://p1.meituan.net/movie/642e6d34780f6e5d16610dcc09a7d93440341.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48066338d5b23a244bb897aa1ebfbdc722c.mp4"
                }, {
                    "id": "92045",
                    "tm": "46",
                    "name": "真机智！兔兔花式捉迷藏绕晕麦格雷戈",
                    "img": "https://p1.meituan.net/movie/7e1e7e12b8a4304095f40eddcbfa843617757.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4806821baf192a748dfb494f37e45cd77c0.mp4"
                }, {
                    "id": "92041",
                    "tm": "30",
                    "name": "狂欢开始！比得兔抛媚眼嗨翻全场",
                    "img": "https://p0.meituan.net/movie/ec7ec7d4e2c35cd5774361a888d3767d16033.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48092500e1c6971478cb139ee8ecbe03425.mp4"
                }, {
                    "id": "92005",
                    "tm": "98",
                    "name": "最萌最爆笑！元宵看兔欢乐减压~",
                    "img": "https://p1.meituan.net/movie/080b9b720b52a261263096c274067a7523107.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4800803adf866204aa981d512220be07be1.mp4"
                }, {
                    "id": "91987",
                    "tm": "205",
                    "name": "爆笑解压萌片！男女老少通吃，连阿姨都说好看！",
                    "img": "https://p0.meituan.net/movie/2d6c2661fde563149e8f424f10ba226e25580.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48054ac10678d424807a7ea1046eb32ee71.mp4"
                }, {
                    "id": "91974",
                    "tm": "58",
                    "name": "大冒险！萌兔向导带你玩转英伦",
                    "img": "https://p0.meituan.net/movie/f76f622541728de24a5025a20fcc06d147619.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480194a4bd68da646a080ef1a741b0c7afd.mp4"
                }, {
                    "id": "91957",
                    "tm": "58",
                    "name": "人兔相爱相杀新模式！小石子丢你胸口~",
                    "img": "https://p1.meituan.net/movie/fb1882d707aa89ce73d405cc59bdd37833810.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4808f1a02b3d7784616bc8df53ede7683fd.mp4"
                }, {
                    "id": "91945",
                    "tm": "61",
                    "name": "终极版预告片 萌兔来袭！元宵节小心吸兔成瘾！",
                    "img": "https://p1.meituan.net/movie/2c4f797cafe6f97558d3c5635a081cf241592.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480ae0fcc853b66494aa6248d7f7485a79f.mp4"
                }, {
                    "id": "91940",
                    "tm": "60",
                    "name": "爆笑萌力秀版预告片 吸兔一口告别节后综合丧",
                    "img": "https://p0.meituan.net/movie/d1ae82adbccecd31509cee529523777434042.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48097b1468eef2c4a848cc454dcfa13b1cc.mp4"
                }],
                "sche_count": 6
            }, {
                "movieno": "1182552",
                "name": "红海行动",
                "en_name": "Operation Red Sea",
                "director": "林超贤",
                "actor": "张译,黄景瑜,杜江",
                "date": "2018-02-16",
                "tags": "剧情,动作",
                "score": 9,
                "longs": "138分钟",
                "country": "中国大陆,中国香港",
                "movie_poster_mini": "https://p1.meituan.net/350.490/movie/82a01e8f773c273ba10b96b5acb06196381700.jpg",
                "movie_poster": "https://p1.meituan.net/180.252/movie/82a01e8f773c273ba10b96b5acb06196381700.jpg",
                "is_pre_sale": 1,
                "nearshow": "13:40|15:10|18:40|20:20|21:20",
                "version": ["3D"],
                "videos": [{
                    "id": "91946",
                    "tm": "130",
                    "name": "“蛟龙逆袭”版预告片 蛟龙突击队展现超强作战力",
                    "img": "https://p0.meituan.net/movie/b7c751820016f22c88ef1284a25be47134035.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4808a85a67b357e441d83404b5a372921c2.mp4"
                }, {
                    "id": "91726",
                    "tm": "127",
                    "name": "“带你回家”版预告片",
                    "img": "https://p1.meituan.net/movie/e59b9cf71d9ab79d5eaadee2d3cd14fe32893.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480bc8476c68a824b8fa4b8b1cb500637f2.mp4"
                }, {
                    "id": "91590",
                    "tm": "76",
                    "name": "“合家嗨”版预告片",
                    "img": "https://p1.meituan.net/movie/212b9af012e0f57e8e7ece9779b17c9634374.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480ce2e25f047af47e09845714b8868b524.mp4"
                }, {
                    "id": "91109",
                    "tm": "84",
                    "name": "“蛟龙出海”版预告片",
                    "img": "https://p1.meituan.net/movie/c8cc8421109866f74fa3fe998c8e9d11302246.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480b9f036fe34f3487aafabba8c48202346.mp4"
                }, {
                    "id": "90503",
                    "tm": "96",
                    "name": "定档版预告片",
                    "img": "https://p1.meituan.net/movie/2fe8fcb56030a8772693d6bb1dc2411234983.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48002f8f8a6e49249e5ab692e66c5b33a4b.mp4"
                }, {
                    "id": "89060",
                    "tm": "83",
                    "name": "跨境救援预告片 “祖国接你回家”",
                    "img": "https://p0.meituan.net/movie/ac27fd9c9af0ed68b53bb364ac58810533539.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480be1dec9d2dbf4f348d6b747f2286f73d.mp4"
                }, {
                    "id": "85363",
                    "tm": "96",
                    "name": "首支制作预告片",
                    "img": "https://p1.meituan.net/movie/ea9866741ce580c9ebb585c5695f83a035180.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480020e38687556446faad6c8791c2f4c2d.mp4"
                }, {
                    "id": "92152",
                    "tm": "85",
                    "name": "“真枪实弹”诚意钜献特辑  够真实是因为离得足够近",
                    "img": "https://p0.meituan.net/movie/c31c00b8f64565118a86803cb8a6ce3834322.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48056fe225e745e4600abecdf5bea8f0522.mp4"
                }, {
                    "id": "92136",
                    "tm": "79",
                    "name": "“特效化妆”特辑  主演定制受伤妆容呈现战争残酷",
                    "img": "https://p0.meituan.net/movie/2b61a9ed3f27e9665e82aa4804c9478233932.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4807a54ee97bd744a679d8b9fc0d774a751.mp4"
                }, {
                    "id": "92086",
                    "tm": "146",
                    "name": "“绝地求生”版特辑  “蛟龙突击队”健身片段首曝光",
                    "img": "https://p1.meituan.net/movie/0005759700a6286e0740e998699a607328642.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4807fe7a4a0d1554ad9b6be44a503ca5c7b.mp4"
                }],
                "sche_count": 5
            }, {
                "movieno": "344990",
                "name": "唐人街探案2",
                "en_name": "Detective Chinatown 2",
                "director": "陈思诚",
                "actor": "王宝强,刘昊然,肖央",
                "date": "2018-02-16",
                "tags": "喜剧,动作,悬疑",
                "score": 9,
                "longs": "120分钟",
                "country": "中国大陆",
                "movie_poster_mini": "https://p1.meituan.net/350.490/movie/efb0a5e3989f45c4f3e22108bcc27ed71037307.jpg",
                "movie_poster": "https://p1.meituan.net/180.252/movie/efb0a5e3989f45c4f3e22108bcc27ed71037307.jpg",
                "is_pre_sale": 1,
                "nearshow": "14:40|22:40",
                "version": ["2D"],
                "videos": [{
                    "id": "91561",
                    "tm": "111",
                    "name": "终极版预告片 王宝强刘昊然肖央cos女护士",
                    "img": "https://p1.meituan.net/movie/b996ac85acb650cbc6856de2aa5aeb5448358.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48066033a128d5b44f6acfa7bb4f9d10465.mp4"
                }, {
                    "id": "91681",
                    "tm": "92",
                    "name": "国际版预告片 “阿香”佟丽娅惊艳亮相",
                    "img": "https://p0.meituan.net/movie/33be84fabe7924e99231ad9629a4122e28500.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4804b0e8c470d634c688c43276969198b45.mp4"
                }, {
                    "id": "91116",
                    "tm": "97",
                    "name": "世界名侦探版预告片",
                    "img": "https://p0.meituan.net/movie/def25dd30fca25bfc6bf88c3f294e5cc84331.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4809190f6b4dc9147eb928c203b4ea5a487.mp4"
                }, {
                    "id": "90563",
                    "tm": "76",
                    "name": "“闯纽约”版预告片",
                    "img": "https://p0.meituan.net/movie/5573a2e7d4125002e866b93c3eee427440696.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4800ffe0d39131e42b49105de876e2642b5.mp4"
                }, {
                    "id": "87771",
                    "tm": "86",
                    "name": "概念版预告片",
                    "img": "https://p1.meituan.net/movie/c20b0fdedad1d3015a001d16919f624d49242.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4805975d58ea454477db14da05ad9bd261d.mp4"
                }, {
                    "id": "91745",
                    "tm": "30",
                    "name": "ScreenX版预告片",
                    "img": "https://p1.meituan.net/movie/efa60b47f469fbfde0ad4e555cefacda18372.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48053fa601a930048f3810920e48a2e93da.mp4"
                }, {
                    "id": "91919",
                    "tm": "276",
                    "name": "陈思诚采访特辑 做过演员让我更有节奏感",
                    "img": "https://p0.meituan.net/movie/e275416199e34669af75b1be60e465d217695.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480ca0dfe29b2f54f56b2ccf0e01e61650c.mp4"
                }, {
                    "id": "91904",
                    "tm": "182",
                    "name": "导演特辑 陈思诚全程“点燃自己”",
                    "img": "https://p0.meituan.net/movie/cbcb298a7324cdf1a60171587f64d27318796.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480d6a0704133954a7681ac3eda83933e10.mp4"
                }, {
                    "id": "91875",
                    "tm": "379",
                    "name": "专访王宝强&肖央：扮女装的时候我们三个人都有一种迷之自信",
                    "img": "https://p0.meituan.net/movie/eb5bfecdfb055bb0e7880b4dd84d8002362839.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48073b6e1ab7096473fbf155c5a2070239f.mp4"
                }, {
                    "id": "91874",
                    "tm": "285",
                    "name": "专访陈思诚：我不害怕任何评价，也从来不给自己设及格线",
                    "img": "https://p0.meituan.net/movie/5e760fe8600ea20e01e9ad96e9d0faec350736.png",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480826391939d784be4a630e3fb0e20194a.mp4"
                }],
                "sche_count": 2
            }, {
                "movieno": "1204720",
                "name": "妈妈咪鸭",
                "en_name": "Duck Duck Goose",
                "director": "赵锐,克里斯·詹金斯",
                "actor": "赵路,武皓栋,殷筱瑜",
                "date": "2018-03-09",
                "tags": "动画,冒险,家庭",
                "score": 8,
                "longs": "90分钟",
                "country": "中国大陆,美国",
                "movie_poster_mini": "https://p0.meituan.net/350.490/movie/5df9d7c3bc2e92bda95196162ab468a6252862.jpg",
                "movie_poster": "https://p0.meituan.net/180.252/movie/5df9d7c3bc2e92bda95196162ab468a6252862.jpg",
                "is_pre_sale": 1,
                "nearshow": "16:40",
                "version": ["2D"],
                "videos": [{
                    "id": "92050",
                    "tm": "114",
                    "name": "终极版预告片 “恐婚大鹏”变身“王牌奶爸”",
                    "img": "https://p1.meituan.net/movie/814b296f2cd32f339429e87c02f351c530630.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48050d6f19daf714f5d86625c5d27445389.mp4"
                }, {
                    "id": "92046",
                    "tm": "114",
                    "name": "曝终极预告 “恐婚大鹏”变身“王牌奶爸”",
                    "img": "https://p1.meituan.net/movie/852f37776ec831ce8601d1c820762bf730777.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4806d2fd8613faa4f5aa3f72963b7554ba8.mp4"
                }, {
                    "id": "91952",
                    "tm": "106",
                    "name": "先导版预告片 定档3月9日品质比肩好莱坞",
                    "img": "https://p0.meituan.net/movie/9fc5d4fae4e32de7cb7168ee2386d89537130.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48075ae3b87315a4acb88c3c8fde0067791.mp4"
                }, {
                    "id": "91951",
                    "tm": "118",
                    "name": "国际版预告片 3月9日萌趣来袭",
                    "img": "https://p1.meituan.net/movie/a69c2a08672b973d64c547f8da7889f235420.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480eda973310faa4e02bc08048ad009e0e7.mp4"
                }, {
                    "id": "91943",
                    "tm": "40",
                    "name": "方言版预告片 雁群秒变东北爷们儿",
                    "img": "https://p1.meituan.net/movie/d91c4ba7582dcceecbee55f135d6294113910.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480a46948ee61a54659b655b663dfcb4ea8.mp4"
                }, {
                    "id": "91937",
                    "tm": "123",
                    "name": "方言版预告片 头回见小黄鸭一口地道重庆话",
                    "img": "https://p1.meituan.net/movie/eb44d76868e607d2bec85fff6bd79eae109233.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48091483f6e8916400e9658df9808dceacf.mp4"
                }, {
                    "id": "91790",
                    "tm": "44",
                    "name": "暖心版预告片 小黄鸭成儿童“代言人”",
                    "img": "https://p0.meituan.net/movie/6f08f81dc13bddaed91184a640b48f2a13336.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4809709e3321bd646d286512de045af9b69.mp4"
                }, {
                    "id": "91772",
                    "tm": "15",
                    "name": "唐探2贴片版预告片 春节影院邂逅小黄鸭",
                    "img": "https://p1.meituan.net/movie/d0795600e7eb50d014c863ec4e51692149695.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x480296d7200b7a1491a8cc2383e81fa9627.mp4"
                }, {
                    "id": "91679",
                    "tm": "40",
                    "name": "“防走失”版预告片 小黄鸭赖上临时奶爸",
                    "img": "https://p1.meituan.net/movie/8784febcb1287b9d9e0e032ce696051a41285.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48051734bf8721942deb7850a7470f7675b.mp4"
                }, {
                    "id": "91599",
                    "tm": "33",
                    "name": "吃货篇预告片 遍地开花小黄鸭承包寒假",
                    "img": "https://p1.meituan.net/movie/c2c9e685f067713f09f6a3515814ae0c20715.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x48057132defb1ce4736894ebc1093ccee6f.mp4"
                }],
                "sche_count": 1
            }, {
                "movieno": "1217637",
                "name": "厉害了，我的国",
                "en_name": "Amazing China",
                "director": "卫铁",
                "actor": "",
                "date": "2018-03-02",
                "tags": "纪录片",
                "score": 9,
                "longs": "90分钟",
                "country": "中国大陆",
                "movie_poster_mini": "https://p1.meituan.net/350.490/movie/92b3426ac9a67fdcf503d02549e1aa7c3532120.jpg",
                "movie_poster": "https://p1.meituan.net/180.252/movie/92b3426ac9a67fdcf503d02549e1aa7c3532120.jpg",
                "is_pre_sale": 1,
                "nearshow": "21:00",
                "version": ["2D"],
                "videos": [{
                    "id": "91907",
                    "tm": "30",
                    "name": "预告片",
                    "img": "https://p0.meituan.net/movie/956f6a40ece65c2c0757f00b89f06f3328873.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4801ee1d42648c840d1a95f52a2cafe227f.mp4"
                }, {
                    "id": "92038",
                    "tm": "248",
                    "name": "主题歌",
                    "img": "https://p0.meituan.net/movie/18d5e8ff36f5c9f1d9c24f1eea71813129328.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4806912885c5fbd4178be6bfdd1ccff8968.mp4"
                }, {
                    "id": "92070",
                    "tm": "274",
                    "name": "精华集锦",
                    "img": "https://p1.meituan.net/movie/dfa83efa620b285dad78bb2d8c9b329039014.jpg",
                    "url": "https://maoyan.meituan.net/movie/videos/854x4803ddd087bdda448bfa1104f2927f67e05.mp4"
                }],
                "sche_count": 1
            }]
        }
        ctx.body = JSON.stringify(data);
    }
}

router.get("/", movie.movies)
export default router.routes();