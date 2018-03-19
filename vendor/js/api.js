$(function(){
	
	// Unique API key - get this from behance.net/dev
	var key = 'n3lHzKnkKGfwQPsJrPaGzjPJpUYZpWQ9';	
	//TqCSAWqvHPg67ZC6fQHBi2TlcDYFSdwS
	
	// Behance username
	var behanceUser = 'bingcat'; 				

// ================================== HOME PAGE TEMPLATE ====================================================================

	// If the ID #index has been rendered on the page, then run this <code></code>
	if($('#home').length > 0) {

		var urlUsers = 'https://api.behance.net/v2/users/' + behanceUser + '?client_id=' + key;
		// AJAX request
		$.ajax({

			url: urlUsers,
			dataType: 'jsonp',

			// let's show a little preloader to the user while they wait for a nice User Experience
			beforeSend: function(res) {
				$('<div class="pre-loader"> ... loading portfolio ... </div>').prependTo('body');
			},

			// when the ajax request is complete do all of these things
			success: function(res) {

				// Success! We can get rid of the preloader now...
				$('.pre-loader').detach();


				var firstName = res.user.first_name;
				$('<h1>' + firstName +'</h1>').appendTo('.designerName');	

				var about = res.user.sections["About Me"];
				$('<p class"description">' + about +'</p>').appendTo('.description');			
		
				var photo = res.user.images[100];
				$('<img  src="' + photo + '">').appendTo('.designerPhoto');

				var views = res.user.stats.views;
				$('<p>' + views +'</p>').prependTo('.first');

				var appreciation = res.user.stats.appreciations;
				$('<p>' + appreciation +'</p>').prependTo('.second');

				var followers = res.user.stats.followers;
				$('<p>' + followers +'</p>').prependTo('.third');

				var following = res.user.stats.following;
				$('<p>' + following +'</p>').prependTo('.forth');

				console.log(res);
},
			// if the ajax request fails do these things as a fallback
			error: function(res) {
				$('<h1> Error!! </h1>').appendTo('body');
			}

		}); // END ajax request

	}


	 // END HOMEPAGE template
	if($('#home').length > 0) {

		var urlProjects = 'https://api.behance.net/v2/users/' + behanceUser + '/projects?client_id=' + key;

		// AJAX request
		$.ajax({

			url: urlProjects,
			dataType: 'jsonp',

			// let's show a little preloader to the user while they wait for a nice User Experience
			beforeSend: function(res) {
				$('<div class="pre-loader"> ... loading portfolio ... </div>').prependTo('body');
			},

			// when the ajax request is complete do all of these things
			success: function(res) {

				// Success! We can get rid of the preloader now...
				$('.pre-loader').detach();

				var projects = res.projects;

				// https://www.behance.net/dev/api/endpoints/1
				projects.forEach(function(project) {
					$( '<div class="col-12  col-md-6 col-xl-4 grid">'+
						'<figure class="effect-goliath">'+
						'<img class="zoom" src="' + project.covers.original +'">'+
						'<figcaption>'+
						'<h2>Thoughtful <span>Goliath</span></h2>'+
						'<p>When Goliath comes out, you should run.</p>'+
						//'<a href="#">View more</a>'+
						'</figcaption>'+
						'</figure>'+
						'</div>').appendTo('.portfolioPics');
				});

				
			

				console.log(res)
},
			// if the ajax request fails do these things as a fallback
			error: function(res) {
				$('<h1> Error!! </h1>').appendTo('body');
			}

		}); // END ajax request
		
	} // END HOMEPAGE template

});