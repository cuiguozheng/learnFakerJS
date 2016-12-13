define(['../libs/mock'], function(Mock){
	/**
	 * 模拟随机数据
	 */
	Mock.mock(/\.json/, {
	    'list|1-10': [{
	        'id|+1': 1,
	        'email': '@EMAIL'
	    }]
	});

	Mock.mock(/[^http://luna.58.com/list.shtml?plat=m]/, {
	    'list|7': [
		    {
			    "infoId|1": "27184399945144",
			    "url|1": "//luna.58.com/info.shtml?id=27184399945144&-15=20&plat=m&psid=124620848194199468255220451&entinfo=27184399945144_0",
			    "adType|1": "0",
			    "infoType|1": "0",
			    "extParamMap|21": {
			        "newmingqi|1": "",
			        "postdate|1": "11-17",
			        "logr|1": "p_0_42091923_27184399945144_npos:1",
			        "posttime|1": "2016-11-17 16:56:57",
			        "userid|1": "42091923",
			        "hightop|1": "false",
			        "picurl|1": "http://pic2.58.com/n/images/list/noimg2.gif",
			        "usertype|1": "0",
			        "xueli|1": "学历高中",
			        "flbz|1": "包住,年底双薪,话补,交通补助,加班补助",
			        "quxian|1": "丰台-看丹桥",
			        "title|1": "搬运工",
			        "jobtype|1": "物流/仓储",
			        "coords|1": "116.2759,39.84311",
			        "newonsale|1": "1",
			        "zhaopinrenshu|1": "2",
			        "company|1": "北京福奥搬家服务有限公司",
			        "xinzijiesuan|1": "",
			        "yan|1": "0",
			        "salary|1": "3000-5000元/月",
			        "quyu2|1": "丰台"
			    }
			}
	    ]
	});
});