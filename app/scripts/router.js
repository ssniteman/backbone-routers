var MainRouter = Backbone.Router.extend({

	routes: {
		"pizza" : "main",
		"pizza/:topping" : "allToppings"
		// "pizza/allToppings/:name" : "top"
	},

	initialize: function(){
		console.log('hey guys');
	},

	main: function(){
		new PizzaView()

	},

	allToppings: function(topping){

		// This clears div before starting a new one

		$('.jumbotron').html('');

		var toppingsToShow = toppings.findWhere({topping: topping});

		console.log('Hey guys, toppings', topping)
			new ToppingView({model: toppingsToShow});

		// toppings.each(function(za){
		// 	new ToppingView({model: za});
		}
	// },
	 // top: function(){
		// var toppings = new ZaCollection(data)
 	// 	toppings.findWhere(data, {topping:'cheese'});
		// 	new ToppingView({model: za});
 	// }





});

// topping: function(name){
// 		var toppings = new ZaCollection(data)
// 		toppings.findWhere(data{topping: 'cheese'});
// 			new ToppingView({model: za});
// 	}