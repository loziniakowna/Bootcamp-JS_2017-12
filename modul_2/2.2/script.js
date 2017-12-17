var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		image: './img/harrypotter.jpg'
	},
	{
		id: 2,
		title: 'Krol Lew',
		desc: 'Film o królu sawanny',
		image: './img/krollew.jpeg'
	},
	{
		id: 3,
		title: "star wars",
		desc: 'Flm o mieczach świetlnych',
		image: './img/starwars.jpg'
	}

];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {key: movie.id}, 
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.image}, )
		);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
);



ReactDOM.render(element, document.getElementById('app'));