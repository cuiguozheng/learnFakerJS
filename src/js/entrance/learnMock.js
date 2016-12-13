require([
	'../mock/mock',
	'../modules/test1', 
	'../modules/test2'
], function(mock, test1, test2){
	test1();
	test2();
});