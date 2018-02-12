var ChartOptionTemplates={
	geoMap:function(name,map,data){
	option = {
    title: {
        text: name,
        left: 'center',
        textStyle:{
            color:'#fff',

        },
    },
    
    tooltip: {
        trigger: 'item',
    },
    geo: {
        map: map,
        itemStyle: {
            normal: {
                borderWidth: 1,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: '#567dc1',
                areaColor:'#000'
            },
            emphasis:{
                color:'#000',
                areaColor:'#000'
            }
            
        },
        label:{
            normal:{
                show:false
            },
            emphasis:{
                show:false
            }
        }
            
     },
    
    
    series: [
     {  
        name: name,
        type: 'lines',
        zlevel: 2,
        coordinateSystem:'geo', 
        symbolSize: 5,
        effect: {
            show: true,
            period: 5,      
            trailLength: 0.9,
            symbolSize: 3,
            symbol:'circle',
            type:'dashed',
           
        },
        lineStyle: {
            normal: {
                color:'#fff',
                width: 2,
                opacity:0,
                curveness:0.2,
                type:'dashed',
                
            }
        },
       
        
        data:[]


    },
    {
        name: name,
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zoom:1.2,
        data: data,
        symbolSize: 10,
        zlevel:1,
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'fill',
            scale:6
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
                textStyle:{
                    color:'#fff',
                }
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#03c3d0',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        }
    },
    
    ]

}
		return option;
},
	pie:function(name,data){
	var option={
        title:{
            text:name,
            left:'right',
            textStyle:{
            color:'#fff',
        },
        

        },
        tooltip : {
                trigger: 'item',
                formatter: "{d}%"
            },
        

         series : [
        {
            name: name,
            type: 'pie',
            radius: '55%',
            data: data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 5),
            roseType:'radius',
            
            itemStyle: {
            normal: {
                color: '#02c5d3',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                // 阴影的大小
                shadowBlur: 200,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
            },
            emphasis: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 2, 1)'
            }
            },
            
        }
    ],
   
     textStyle: {
        color: '#02c5d3'
    },
    labelLine: {
    normal: {
        lineStyle: {
            color: '#02c5d3'
        }
    }
},

    }
    return option;
},
	line:function(name,xAxisdata,serisedata){

    var option={
        title:{
            text:name,
            x:'center',
            align:'right',
            textStyle:{
                color:'#fff'
            }
        },
        
        
        tooltip:{

            trigger:'axis',
        },
       
        
        xAxis:[
        {   
            name:'',
            type:'category',
            boundaryGap:false,
            splitNumber: 2, 
            axisLine:{onZero:false},
            splitLine:{  
                show:false  
            },

            data :xAxisdata,
            
            axisLine:{
                lineStyle:{
                    color:'#fff'
                },
                show:false
            },
            axisTick: {
				show: false
			},
        }
        ],
        yAxis:[
            {
                name: 'sum',
                type: 'value',

                show:false,
                

            },
            
        ],
         series: [
        {
            name:'流入',
            type:'line',
            animation: true,
            smooth:true,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ],
                itemStyle:{
                	normal:{
                		color:'#4bc2ff',
                	}
                }
            },

            areaStyle: {
                normal: {
                    color:'#092c30'
                }
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color:'#4bc2ff'
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.8,
                    color:'#fff'
                }
            },
            
            data:serisedata,
        },
       
        ],
    }
    return option;
}
}




