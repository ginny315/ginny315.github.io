var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);
var app = {};
option = null;
myChart.showLoading();

$.get('../json/charts.json', function (dd) {
 myChart.hideLoading();

 option = {
	 tooltip : {
		 trigger: 'axis',
		 axisPointer: {
			 type: 'shadow',
			 label: {
				 show: true
			 }
		 }
	 },
	 toolbox: {
		 show : true,
		 feature : {
			 mark : {show: true},
			 dataView : {show: true, readOnly: false},
			 magicType: {show: true, type: ['line', 'bar']},
			 restore : {show: true},
			 saveAsImage : {show: true}
		 }
	 },
	 calculable : true,
	 legend: {
		 data:['Growth', 'twoweeks', 'history'],
		 itemGap: 5
	 },
	 grid: {
		 top: '20%',
		 left: '10%',
		 right: '10%',
		 containLabel: true
	 },
	 xAxis: [
		 {
			 type : 'category',
			 data : dd.name
		 }
	 ],
	 yAxis: [
		 {
			 type : 'value',
			 name : 'Budget (million USD)',
			 axisLabel: {
				 formatter: function (a) {
					 a = +a;
					 return isFinite(a)
						 ? echarts.format.addCommas(+a / 1000)
						 : '';
				 }
			 }
		 }
	 ],
	 dataZoom: [
		 {
			 show: true,
			 start: 94,
			 end: 100
		 },
		 {
			 type: 'inside',
			 start: 94,
			 end: 100
		 },
		 {
			 show: true,
			 yAxisIndex: 0,
			 filterMode: 'empty',
			 width: 30,
			 height: '80%',
			 showDataShadow: false,
			 left: '93%'
		 }
	 ],
	 series : [
		 {
			 name: 'twoweeks',
			 type: 'bar',
			 data: dd.twoweeks
		 },
		 {
			 name: 'history',
			 type: 'bar',
			 data: dd.history
		 }
	 ]
 };

 myChart.setOption(option);

});;
if (option && typeof option === "object") {
 myChart.setOption(option, true);
}