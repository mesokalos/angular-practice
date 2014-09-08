(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems;

	});


	app.controller('GalleryController', function(){
		this.current = 0;
		this.setCurrent = function(newGallery){
			this.current = newGallery || 0;
		};
	});

	 app.controller('ReviewController', function() {
	    this.review = {};

	    this.addReview = function(product) {
	      this.review.createdOn = Date.now();

	      product.reviews.push(this.review);

	      this.review = {};
	    };
	  });

	 app.directive('productTitle', function(){
	 	return {
	 		restrict: 'E',
	 		templateUrl: 'product-title.html'
	 	};
	 });

	  app.directive("productSpecs", function(){
	    return{
	      restrict: 'A',
	      templateUrl:'product-specs.html'
	    };
	  });

	app.directive('productPanels', function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller:function(){
				this.tab = 1;

			    this.setTab = function(newValue){
			      this.tab = newValue;
			    };

			    this.isSet = function(tabName){
			      return this.tab === tabName;
			    };

			},
			controllerAs: 'panel'

		};
	});

	var gems = [
	{
		name: "Dodecahedron",
		price: 2.95,
		description:'This is a description',
		canPurchase:true,
		soldOut:true,
		images:[
			/*'https://farm3.staticflickr.com/2357/1683245259_39e3d82812.jpg',
			'https://farm2.staticflickr.com/1387/5101756852_c01d28c8cb.jpg'*/
		{
			full:'https://farm3.staticflickr.com/2357/1683245259_39e3d82812.jpg',
			thumb:'https://farm3.staticflickr.com/2357/1683245259_39e3d82812_s.jpg'
		},
		{
			full:'https://farm2.staticflickr.com/1387/5101756852_c01d28c8cb.jpg',
			thumb:'https://farm2.staticflickr.com/1387/5101756852_c01d28c8cb_s.jpg'
		}
		],
	    reviews: [{
	        stars: 5,
	        body: "I love this gem!",
	        author: "joe@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 1,
	        body: "This gem sucks.",
	        author: "tim@example.org",
	        createdOn: 1397490980837
	      }]

	},
	{
		name:"Pentagonal Gem",
		price: 5.95,
		description:'Pentagons galore',
		canPurchase: false,
		images:[
		{
			full:'https://farm4.staticflickr.com/3520/4556888081_f2a45e18d0.jpg',
			thumb:'https://farm4.staticflickr.com/3520/4556888081_f2a45e18d0_s.jpg'
		},
		{
			full:'https://farm5.staticflickr.com/4066/4225140531_9511442130.jpg',
			thumb:'https://farm5.staticflickr.com/4066/4225140531_9511442130_s.jpg'
		}],
		reviews: [{
	        stars: 5,
	        body: "I love this gem!",
	        author: "joe@example.org",
	        createdOn: 1397490980837
	      }, {
	        stars: 1,
	        body: "This gem sucks.",
	        author: "tim@example.org",
	        createdOn: 1397490980837
	      }]
	},

	{
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        {
			full:'https://farm8.staticflickr.com/7217/7289105410_3207866bbc.jpg',
			thumb:'https://farm8.staticflickr.com/7217/7289105410_3207866bbc_s.jpg'
     	},
     	{
     		full:'https://farm9.staticflickr.com/8173/8030246683_27a70b36c0.jpg',
     		thumb:'https://farm9.staticflickr.com/8173/8030246683_27a70b36c0_s.jpg'
     	}
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        {
			full:'https://farm9.staticflickr.com/8178/8023407234_98b66ede80.jpg',
			thumb:'https://farm9.staticflickr.com/8178/8023407234_98b66ede80_s.jpg'
     	},
     	{
     		full:'https://farm4.staticflickr.com/3196/2933052992_78d8afd0bf.jpg',
     		thumb:'https://farm4.staticflickr.com/3196/2933052992_78d8afd0bf_s.jpg'
     	}
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    },
    {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        {
			full:'https://farm7.staticflickr.com/6167/6167124340_549ac02a84.jpg',
			thumb:'https://farm7.staticflickr.com/6167/6167124340_549ac02a84_s.jpg'
     	},
     	{
     		full:'https://farm4.staticflickr.com/3225/2933076466_ae78b421ff.jpg',
     		thumb:'https://farm4.staticflickr.com/3225/2933076466_ae78b421ff_s.jpg'
     	}
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }


	];





})();

