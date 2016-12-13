define([], function(){
	return function(){
		$.ajax({
		    url: 'http://luna.58.com/list.shtml?plat=m&city=bj&cate=zpwuliucangchu',
		    dataType: 'json'
		}).done(function(data, status, jqXHR){
		    $('<pre>').text(JSON.stringify(data, null, 4))
		        .appendTo('body')
		});
	};
})