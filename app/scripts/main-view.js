var PizzaView = Backbone.View.extend({

		createTemplate: _.template($('#pizza-template').text()),

		initialize: function(){
			$('.jumbotron').html(this.el);

			this.render();
		},

		render: function(){

			var renderedTemplate = this.createTemplate(this.model);
			this.$el.html(renderedTemplate)


		}

});

var ToppingView = Backbone.View.extend({

	createTemplate: _.template($('#topping-template').text()),

	initialize: function(){
		$('.jumbotron').append(this.el);

		this.render();
	},

	render: function(){

		var renderTemplate = this.createTemplate(this.model.attributes);
		console.log('renderTemplate is', renderTemplate)
		this.$el.html(renderTemplate)

	}
})