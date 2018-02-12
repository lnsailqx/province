
var dataFrom='广东';

function randomData(x){
    return Math.round(Math.random() * x);
}

var data = [

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

var geoCoordMap = {

    '北京': [117.0923,40.5121],
    '新疆': [88.1653,39.6002, ],
    '黑龙江': [127.1448,49.2957],
    '青海': [93.5925,33.9368],
    '内蒙古': [102.019,40.1001],
    '陕西': [109.8743,38.205],
    '上海': [121.48, 31.22],
    '西藏': [99.9207, 31.0803],
    '四川': [104.7327,31.8713],
    '云南': [100.7446,23.4229],
    '广西': [ 108.2813,23.6426],
    '广东': [113.4668,22.8076],
    '海南': [109.9512,19.2041],

};

var convertPieData = function(data) {
    var res = [];

    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];

        if (geoCoord) {
            res.push({
                name: data[i].name,
                value:randomData(1000)
            });
        }
    }

    return res;
};
var inData=convertPieData(data);
var outData=convertPieData(data);





var xAxisdata=function(){
    var res=[];
    for(var i=1;i<8;i++){
        res.push(
            ['2018-1-'+i]
            )
    }
    return res;
}


var convertWeekdata=function(data){
    var res=[];
    for(var i=0;i<data.length;i++){
        for(var x=1;x<8;x++){
            for(var y=0;y<2;y++){
                res.push({
                name:data[i].name,
                value:randomData(100),
                time:'2018-1-'+x,
                type:y
            })
            }
        }
    }
    return res;
}
var rowWeekdata=convertWeekdata(data);

var sumWeekdata=function(rowWeekdata,type){
    var res=[];
    for(var i=1;i<8;i++){
        var sum=0;
        var valid='2018-1-'+i;
        for(var x=0;x<rowWeekdata.length;x++){

            if(rowWeekdata[x].name!='广东'&&rowWeekdata[x].time==valid&&rowWeekdata[x].type==type){
                sum=sum+rowWeekdata[x].value;
            }
        }
    res.push(
            [valid,sum]
        )
    }
    return res;
}
var weekdata=sumWeekdata(rowWeekdata,1);


var convertData = function(data) {
    var res = [];

    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];

        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(randomData(1000))
            });
        }
    }

    return res;
};



var mapData=function(data,type){
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
