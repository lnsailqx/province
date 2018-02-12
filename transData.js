var transData={
	init:function(){
		this.rowData=[

    		{
        		name: '北京',
        		value:randomData(1000)
    		}, {
        		name: '新疆',
        		value:randomData(1000)
    		}, {
        		name: '黑龙江',
        		value:randomData(1000)
    		}, {
        		name: '青海',
        		value:randomData(1000)
    		}, {
        		name: '内蒙古',
        		value:randomData(1000)
    		}, {
        		name: '陕西',
        		value:randomData(1000)
    		}, {
        		name: '上海',
        		value:randomData(1000)
    		}, {
        		name: '西藏',
        		value:randomData(1000)
    		}, {
        		name: '云南',
        		value:randomData(1000)
    		}, {
        		name: '广西',
        		value:randomData(1000)
    		}, {
        		name: '广东',
        		value:randomData(1000)
    		}, {
        		name: '海南',
        		value:randomData(1000)
    		}

		];


	}
	mapData:function(data,type){
    	var res=[];
    	for(var i=0;i<data.length;i++){
    		if(type==0){

           		res.push({
                		coords:[
                    		geoCoordMap[data[i].name],
                    		geoCoordMap[dataFrom],
                		]
            	});
    		}else{
                	res.push({
                	coords:[
                    	geoCoordMap[dataFrom],
                    	geoCoordMap[data[i].name],
                	]
            		});

    		}	
		}
		return res;
	}
}