$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'Adorable Pet Sitters',
			'description'   : 'This is a small website which we have designed for a small organization who are heliping the Pet Lovers with some specific services.',
			'thumbnail' : ['img/portfolio/small/1.jpg'],
			'large' : ['img/portfolio/large/1.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All','Design','Wordpress']
			},

			{
			'title' : 'Special Security Force - Bangladesh',
			'description'   : 'In 2013 SSF Bangladesh totally revamped their Information Technology division by implementing latest State of the Art technologies. The full plan was consulted and commissioned by us. The services included their Website Design, Internal Network Audit, Penetration Test.',
			'thumbnail' : ['img/portfolio/small/2.jpg'],
			'large' : ['img/portfolio/large/2.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Design','All','Network','Security']
			},

			{
			'title' : 'Rapid',
			'description'   : 'Rapid is a brand new e-commerce that launched in Bangladesh after neary a year of work on testing the user interface. We worked on consultancy and deployment service for handling huge traffic, Security checking for the payment processing with the local banks and API integration of Amazon so that any user of Amazon can easily login with their Amazon credentials.',
			'thumbnail' : ['img/portfolio/small/3.jpg'],
			'large' : ['img/portfolio/large/3.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All', 'Code', 'Security', 'DEVOPS']
			},

			{
			'title' : 'Prothom Alo and The Daily Star',
			'description'   : 'Prothom Alo and the Daily Star are the leading newspaper of the country operated under Transcom Group. These two site have a huge hit from around the globe. They were paying a huge amount to Rackspace for their CDN, when we took the job, hosted it in their ownn State of the Art Data Center with a couple of servers behind a reverse proxy to load balance the huge traffic required. Additionally we also reviewed the code to be Content elivery Network(CDN) friendly and added MaxCDN as their CDN partner. No their total cost of operation has been reduced 1/10th than the previous.',
			'thumbnail' : ['img/portfolio/small/5.jpg', 'img/portfolio/small/4.jpg'],
			'large' : ['img/portfolio/large/5.jpg', 'img/portfolio/large/4.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All', 'Code', 'DEVOPS']
			},

			{
			'title' : 'Dyln',
			'description'   : 'Dyln is crowdfunding project which brings Alkalyne water for the masses compared to the non Environment friendly Plastic bottles. While they were looking for some beautiful and attracting website our Creative team stepped forward to setup their website with Wordpress.',
			'thumbnail' : ['img/portfolio/small/6.jpg'],
			'large' : ['img/portfolio/large/6.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Wordpress','All']
			},

			{
			'title' : 'Zenfi',
			'description'   : 'ZenFi owns and operates a carrier-neutral dark fiber network in New York City. To measure the different metrics of their huge Optical Fiber Network they use IoT for Business Intelligence. We worked on designing these type of IoT sensors.',
			'thumbnail' : ['img/portfolio/small/7.jpg'],
			'large' : ['img/portfolio/large/7.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All', 'IoT']
			},

			{
			'title' : 'Tiny Torch',
			'description'   : 'Tiny Torch is huge multi platform Social Content Hosting and Sharing platform. They need to host multiple type of contents in an enormous amount. We helped them design and build a Big Data analysis system to fit their needs.',
			'thumbnail' : ['img/portfolio/small/8.jpg'],
			'large' : ['img/portfolio/large/8.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All', 'Big Data']
			},

			{
			'title' : 'Young and Wildly Successful',
			'description'   : 'Our Creative team worked with their attractive Website designing and deployment.',
			'thumbnail' : ['img/portfolio/small/9.jpg'],
			'large' : ['img/portfolio/large/9.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All', 'Design']
			},

			{
			'title' : 'Octagon Lab',
			'description'   : 'Octagon Lab helps design Book Covers. Our creative team worked with the concept design of their website. a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/10.jpg'],
			'button_list'   :
			[
//			{ 'title':'Demo', 'url' : 'http://#' },
//			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Wordpress']
			},

			/*
			{
			'title' : 'Winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/11.jpg','img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/11.jpg','img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Design']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Photoshop']
			},

			{
			'title' : 'Azuki bean',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/13.jpg', 'img/portfolio/small/14.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/16.jpg'],
			'large' : ['img/portfolio/large/13.jpg', 'img/portfolio/large/14.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/16.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Wordpress']
			},

			{
			'title' : 'Swiss chard pumpkin',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
			'large' : ['img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Photoshop']
			},

			{
			'title' : 'Spinach winter purslane',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
			'large' : ['img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['Jquery', 'Design']
			}
*/
	 
		]
	});
});
