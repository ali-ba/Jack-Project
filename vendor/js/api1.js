var i,
comment1 = {},
comment2 = {},
comment3 = {},
comment4 = {},
comment5 = {},
comment6 = {},
commentsArray = [comment1, comment2, comment3, comment4, comment5, comment6],
index,
projectIndex,
projectIds=[];

$(function(){
	
	// Unique API key - get this from behance.net/dev
	var key = 'qke5wUmRwURSJcRVUBYrmStjHuPrnMdw';	
	//q5FBbqs6B8kQsFtd5WWoXwAQ7i5jUKnw
	//TqCSAWqvHPg67ZC6fQHBi2TlcDYFSdwS
	//sPm2Vv6N1A0txvwOJ1b82xKInsZr7RTx
	//MUAxM7tOqSjuRToSyAyhMcsxZi5o39gl
	//9yv2yNPiMJPlQsBNsm0SQsoV4NdiZBdd
	//ppv2zVzSCRaTklTo1GlhI2ni2UMaN8PX
	//bXmuSj07qj9GJN5or6cnoYTKSCwZz0tE
	//qke5wUmRwURSJcRVUBYrmStjHuPrnMdw
	//b0QOWLhjUhiiUMqInKDd5Ypetz8xFegk
	//j6PbpzCTBnupUGnJyQqTZCPETR6AzrSI
	//AI4EUttROApDKTM4pd6GeKd90r8fMAPN
	//7qZX31Il6dvVPaasfxXcFRgC3ospreCE
	
	// Behance username
		var behanceUser = [
					   'Ludmila_Shevchenko',
					   'asanov',	
					   'Arthur_Archi',
					   'DeNBOLDraw',
					   'taranvladyslav'];				

// ================================== GET PROJECTS ========================================================

var artistLudmila = document.getElementsByClassName('ludmila')[0],
	artistErnest = document.getElementsByClassName('ernest')[0],
	artistArthur = document.getElementsByClassName('arthur')[0],
	artistDenys = document.getElementsByClassName('denys')[0],
	artistVlad = document.getElementsByClassName('vlad')[0];

	window.onload = getUser();
	artistLudmila.addEventListener("click", getUser);
	artistErnest.addEventListener("click", getUser);
	artistArthur.addEventListener("click", getUser);
	artistDenys.addEventListener("click", getUser);
	artistVlad.addEventListener("click", getUser);

// ================================== HOME PAGE TEMPLATE ==================================================

function getUser(){
	//Check if function was called by clicking on name or on page load by checking if 'this' points to window object or HTML object that was clicked.
	if(this !== window){
		index = this.dataset.index;	
	} else {
		index = 0;
	}
	// If the ID #index has been rendered on the page, then run this <code></code>
	if($('#home').length > 0) {

		var urlUsers = 'https://api.behance.net/v2/users/' + behanceUser[index] + '?client_id=' + key;
		// AJAX request
		$.ajax({

			url: urlUsers,
			dataType: 'jsonp',

			// when the ajax request is complete do all of these things
			success: function(res) {
				// console.log(res);
				var firstName = res.user.first_name;

				$('.designerName').text(firstName);	


				//Find artists about me section
				if(res.user.sections["About Me"] !== undefined){
					var about = res.user.sections["About Me"];
				}else if(res.user.sections.About !== undefined){
					var about = res.user.sections.About;
				} else {
					var about = res.user.occupation;
				}

				//Check about me has been found. If not use default message.
				if(about !== undefined){
					$('.description').text(about);	
				} else {
					$('.description').text('Hi my name is ' + firstName + '. I\'m a designer at Tubik Studio.');		
				}
		
				var photo = res.user.images[100];
				$('.designer-photo').attr('src', photo);

				var views = res.user.stats.views;
				$('.view-count').text(views);

				var appreciation = res.user.stats.appreciations;
				$('.appreciations-count').text(appreciation);

				var followers = res.user.stats.followers;
				$('.followers-count').text(followers);

				var following = res.user.stats.following;
				$('.following-count').text(following);

		},
			// if the ajax request fails do these things as a fallback
			error: function(err) {
				console.log('Behance Error: ' + err);
			}

		}); // END ajax request

	}
	getProjects();
}




function getProjects(){
		var urlProjects = 'https://api.behance.net/v2/users/' + behanceUser[index] + '/projects?client_id=' + key;

		// AJAX request
		$.ajax({

			url: urlProjects,
			dataType: 'jsonp',

			// when the ajax request is complete do all of these things
			success: function(res) {

				var projects = res.projects;
				var projectsContainer = document.getElementsByClassName('portfolioPics')[0];
				// console.log(projectsContainer.childNodes.length);

				//Remove previous artists projects.
				if(projectsContainer.childNodes.length>0){
					while (projectsContainer.hasChildNodes()) {
					    projectsContainer.removeChild(projectsContainer.lastChild);
					}
				}

				projectIndex = -1;

				// https://www.behance.net/dev/api/endpoints/1
				projects.forEach(function(project) {
					projectIndex++;
					$('<div class="col-12  col-md-6 col-xl-4 grid projectTrigger" data-index="' + projectIndex + '">'+
					'<figure class="effect-goliath">'+
					'<img class="zoom" src="' + project.covers.original +'">'+
					'<figcaption>'+
					'<h2>'+project.name+'</h2>'+
					'<div class="change">'+
					'<div class="comments"><i class="fas fa-comment icon"></i><p>'+project.stats.comments+'</p></div>'+
					'<div class="view"><i class="fas fa-eye icon"></i><p>'+project.stats.views+'</p></div>'+
					'<div class="appreciations"><i class="fas fa-thumbs-up icon"></i><p>'+project.stats.appreciations+'</p></div>'+
					'</div>'+
					// '<a href="#">View more</a>'+
					'</figcaption>			'+
					'</figure>'+
					'</div>').appendTo('.portfolioPics');

					});

				var projectTriggers = document.getElementsByClassName('projectTrigger');

				for(i=0; i<projectTriggers.length; i++){
					projectTriggers[i].addEventListener("click", getComments);
					projectTriggers[i].addEventListener("click", getDescription);
					projectTriggers[i].addEventListener("click", showModal);
				}

				 // console.log(projects)

				 //Reset projectIds array.
				 projectIds = [];

				 //Push project ids into array
				 projects.forEach(function(project) {
				 	projectIds.push(project.id);
				 	})
				 getDescription();
				 getComments();


//========================================================================
						//JENS START
//========================================================================


				function showModal(){
					// console.log(projectTriggers[i]);
					var index = this.dataset.index;
					console.log(projects[index]);
					$( '<div class="modal-container" data-id="' + projects[index].id + '">' +
					'<div class-"modal-bg">' +
						'<div style="font-size:2em; color: white"><i class="fas fa-arrow-left"></i></div>"' +
						'<div class="project-image">' + 
							'<img class="large-image" src="' + project.covers.original + '">' + '</div>' + //image here
							'<div class="gradient">' +
								'<div class="project-info">' +
									'<h3 class="project-name white">' + project.name + '</h3>' + //name here - not showing atm
										'<div class="project-creator">' +
											'<span class="name-and-avatar white bold"></span>' +
										'</div>' +
								'</div>' +
							'</div>' +
						//comments and description html here
						'</div>' +
					'</div>').prependTo('.portfolio');
				}


//========================================================================
						//JENS END
//========================================================================




				 },
			// if the ajax request fails do these things as a fallback
			error: function(err) {
				console.log('Behance Error: ' + err);
			}

		}); // END ajax request
	}


function getComments(){
	// console.log(this);
		if(this !== window){
			var urlProject = 'https://api.behance.net/v2/projects/' + projectIds[this.dataset.index] + '/comments?client_id=' + key;
		} else {
			var urlProject = 'https://api.behance.net/v2/projects/' + projectIds[0] + '/comments?client_id=' + key;
		}
	

	//AJAX request
		$.ajax({

			url: urlProject,
			dataType: 'jsonp',

					// when the ajax request is complete do all of these things
					success: function(res) {
						console.log(res);

						var comments = res.comments;
						//Reset comments array.
						comment1 = {};
						comment2 = {};
						comment3 = {};
						comment4 = {};
						comment5 = {};
						comment6 = {};
						commentsArray = [comment1, comment2, comment3, comment4, comment5, comment6];

						// console.log(comments.length);
						// console.log(commentsArray.length);

						if(comments.length < commentsArray.length){
							while(comments.length < commentsArray.length){
								commentsArray.splice(-1,1)
							}
						}

						for(i = 0; i<commentsArray.length; i++){
							// console.log(i)
						// var currentComment = 'comment' + i;
						commentsArray[i].message = comments[i].comment;
						commentsArray[i].firstName = comments[i].user.first_name;
						commentsArray[i].lastName = comments[i].user.last_name;
						commentsArray[i].imageSrc = comments[i].user.images[50];
						commentsArray[i].created = comments[i].user.created_on;
						}

					var commentsBox = document.getElementById('comments-box');

					while(commentsBox.childNodes.length>1){
						commentsBox.removeChild(commentsBox.lastChild);
					}

					for(i = 0; i<commentsArray.length; i++){
						$( '<div class="commenter"> <div class="commenter-boxleft"><img class="small-image" src="' + commentsArray[i].imageSrc + '" alt="small-image"> </div><div class="commenter-boxright"><div class="commenter-info"><h4 class="commenter-name">'+ commentsArray[i].firstName + ' ' + commentsArray[i].lastName + '</h4> <h5 class="commenter-timestamp">' + moment.unix(comments[i].user.created_on).fromNow() + '</h5><p class="commenter-comment">' + commentsArray[i].message + '</p></div></div></div>').appendTo('#comments-box');
					}

				},
					// if the ajax request fails do these things as a fallback
					error: function(err) {
						console.log('Behance Error: ' + err);
						getComments();
					}

				});

}



function getDescription(){
	if(this !== window){
		var urlProjectDescription = 'http://www.behance.net/v2/projects/' + projectIds[this.dataset.index] + '?api_key=' + key;
		} else {
			var urlProjectDescription = 'http://www.behance.net/v2/projects/' + projectIds[0] + '?api_key=' + key;
		}

	$.ajax({

			url: urlProjectDescription,
			dataType: 'jsonp',

			// when the ajax request is complete do all of these things
			success: function(res) {
				// console.log(res);
				var description = res.project.description;
				
				$('.project-description').text(description);

			},
			// if the ajax request fails do these things as a fallback
			error: function(res) {
				$('<h1> Error!! </h1>').appendTo('body');
			}

		}); 


}

});

		
