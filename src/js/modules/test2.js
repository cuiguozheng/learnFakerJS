define([], function(){
	return function(){
		$.ajax({
		    url: 'hello.json',
		    dataType: 'json'
		}).done(function(data, status, jqXHR){
		    $('<pre>').text(JSON.stringify(data, null, 4))
		        .appendTo('body')
		});
	};
})