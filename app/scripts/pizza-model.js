var Za = Backbone.Model.extend({

	// idAttribute: "_.id",

	// defaults: {
	// 	pizza: "cheese",
	// 	avatar: "http://nyctalking.com/wp-content/uploads/2014/01/pizza-slice.jpg",
	// 	bio: "yum",
	// }
});

var ZaCollection = Backbone.Collection.extend({
	model: Za
})