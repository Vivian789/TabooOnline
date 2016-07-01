var cards = [{word: 'Khaleesi', taboo: ['Dragons', 'Queen', 'Dothraki', 'Daenerys Targaryen', 'Badass']}, 
{word: 'Puppy', taboo: ['Pet', 'Dog', 'Animal', 'Canine', 'Bark']}, 
{word: 'Cake', taboo: ['Bake', 'Dessert', 'Birthday', 'Flour', 'Sweet']}, 
{word: 'Marshmallow', taboo: ['Smores', 'Camping', 'White', 'Rice Krispy Treats', 'Sticky']}, 
{word: 'Rocket', taboo: ['Raccoon', 'Space Shuttle', 'Astronaut', 'Launch', 'Ship']}, 
{word: 'Sushi', taboo: ['Japan', 'Food', 'Rice', 'Roll', 'Sashimi']}, 
{word: 'Sunglasses', taboo: ['UV', 'Eyes', 'Shades', 'Protect', 'Wear']}, 
{word: 'Uranus', taboo: ['Planet', 'Solar System', 'Sun', 'Neptune', 'Jupiter']}, 
{word: 'Salt', taboo: ['Pepper', 'NaCl', 'Sodium', 'Food', 'Seasoning']}, 
{word: 'Arcade', taboo: ['Games', 'Machine', 'Quarter', 'Tickets', 'Play']}, 
{word: 'Gauntlet', taboo: ['Armor', 'Glove', 'Hand', 'Metal', 'Knight']}, 
{word: 'Eiffel Tower', taboo: ['France', 'Paris', 'Landmark', 'Tall', 'Famous']}, 
{word: 'Stegosaurus', taboo: ['Dinosaur', 'T-Rex', 'Prehistoric', 'Brontosaurus', 'Spikes']}, 
{word: 'Octopus', taboo: ['Tentacle', 'Eight', 'Ink', 'Ocean', 'Ice Cream']}, 
{word: 'Darth Vader', taboo: ['Star Wars', 'Father', 'Sith Lord', 'Death Star', 'Mask']}, 
{word: 'Lemonade', taboo: ['Drink', 'Life', 'Fruit', 'Yellow', 'Sour']}, 
{word: 'Treasure', taboo: ['Chest', 'Pirate', 'Gold', 'Buried', 'Jewels']}, 
{word: 'Doge', taboo: ['Such', 'Much', '100%', 'Dog', 'Meme']}, 
{word: 'Password', taboo: ['Metal', 'Second', 'Gold', 'Bronze', 'Spoon']}, 
{word: 'Basketball', taboo: ['NBA', 'Sport', 'Dribble', 'Hoop', 'Free Throw']}, 
{word: 'Rainbow', taboo: ['Sun', 'Sky', 'Colors', 'Arch', 'Roy G. Biv']}, 
{word: 'Towel', taboo: ['Beach', 'Bath', 'Wrap', 'Water', 'Wet']}, 
{word: 'Kitty', taboo: ['Cat', 'Kitten', 'Meow', 'Pet', 'Dog']}, 
{word: 'Square', taboo: ['Side', 'Same', 'Rectangle', 'Shape', 'Triangle']}, 
{word: 'Cowboy', taboo: ['Wild West', 'High Noon', 'Pistol', 'Horse', 'Sheriff']}, 
{word: 'Breakfast', taboo: ['First Meal', 'Morning', 'Bacon and Eggs', 'Toast', 'Cereal']},
{word: 'Menu', taboo: ['Restaurant', 'Order', 'Food', 'Waiter', 'Price']},
{word: 'Whale', taboo: ['Marine Mammal', 'Sea', 'Largest', 'Blowhole', 'Ocean']},
{word: 'Elevator', taboo: ['Floor', 'Building', 'Up', 'Down', 'Lift']},
{word: 'Skateboard', taboo: ['Roll', 'Ramp', 'X-Games', 'Tony Hawk', 'Ollie']},
{word: 'Unicorn', taboo: ['Horse', 'Horn', 'Magic', 'Imaginary', 'Not Real']},
{word: 'Scrubs', taboo: ['Doctor', 'I Don\'t Want No', 'Clean', 'Get Rekt', 'Soap']},
{word: 'Blacksmith', taboo: ['Metal', 'Sword', 'Armor', 'Forge', 'Hammer']},
{word: 'Brilliant', taboo: ['Genius', 'Bright', 'British', 'Intelligent', 'Shining']},
{word: 'Canada', taboo: ['North America', 'Snow', 'Maple', 'Healthcare', 'Moose']},
{word: 'Deer', taboo: ['Buck', 'Doe', 'Antlers', 'Animal', 'Cervine']}, 
{word: 'Soylent', taboo: ['Green', 'People', 'Food', 'Future', 'Movie']}, 
{word: 'Popsicle', taboo: ['Frozen', 'Ice', 'Dessert', 'Flavor', 'Cold']}, 
{word: 'Heisenberg Uncertainty', taboo: ['Particle', 'Momentum', 'Position', 'Wave', 'Quantum']}, 
{word: 'Revolver', taboo: ['Gun', 'Bullet', 'Shoot', 'Weapon', 'Bang']}, 
{word: 'Monocle', taboo: ['Lens', 'Glasses', 'Moustache', 'Rich', 'Eye']}, 
{word: 'Ghost', taboo: ['Spirit', 'Dead', 'Haunt', 'Spooky', 'Exorcism']}, 
{word: 'Smarties', taboo: ['Candy', 'Color', 'Halloween', 'Sugar', 'Roll']},
{word: 'Elementary', taboo: ['School', 'Sherlock Holmes', 'My Dear Watson', 'Children', 'Primary']}, 
{word: 'Barbeque', taboo: ['BBQ', 'Grill', 'Ribs', 'Hot Dogs', 'Foil']}, 
{word: 'Parkour', taboo: ['Ninja', 'Climb', 'Jump', 'Flip', 'Free Running']}, 
{word: 'Flavor', taboo: ['Candy', 'Fruit', 'Ice Cream', 'Taste', 'Smoothie']}, 
{word: 'Destination', taboo: ['Travel', 'Trip', 'Journey', 'Goal', 'Arrive']},
{word: 'Taboo', taboo: ['Game', 'Say', 'Card', 'Allowed', 'Word']},
{word: 'Shell', taboo: ['Outside', 'Beach', 'Snail', 'Turtle', 'Back']},
{word: 'Crayon', taboo: ['Crayola', 'Draw', 'Wax', 'Color', 'Children']},
{word: 'Big Bang', taboo: ['Universe', 'Begin', 'Expand', 'Explode', 'Start']},
{word: 'Dragon', taboo: ['Fire', 'Knight', 'Myth', 'Scales', 'Fantasy']},
{word: 'Horus', taboo: ['Egypt', 'Eye', 'God', 'Ra', 'Bird']},
{word: 'Fantasy', taboo: ['Sports', 'Dream', 'Real', 'Genre', 'Story']}, 
{word: 'Radio', taboo: ['Car', 'Music', 'Top 40', 'Play', 'Signal']}, 
{word: 'Idea', taboo: ['Inspiration', 'Lightbulb', 'Came Up', 'Eureka', 'Thought']}, 
{word: 'Sketch', taboo: ['Draw', 'Doodle', 'Illustrate', 'Quick', 'Comedy']}, 
{word: 'Madagascar', taboo: ['Island', 'Lemur', 'Movie', 'Africa', 'I Like To Move It']},
{word: 'Giraffe', taboo: ['Long', 'Neck', 'Spots', 'Elephants', 'Savannah']},
{word: 'Cactus', taboo: ['Dessert', 'Prickly', 'Plant', 'Suguaro', 'Succulent']},
{word: 'Pumpkin', taboo: ['Halloween', 'Pie', 'Jack O Lantern', 'Orange', 'Autumn']},
{word: 'Kung Fu', taboo: ['Martial Art', 'Panda', 'Kick', 'Jackie Chan', 'Movie']},
{word: 'Fireplace', taboo: ['Winter', 'Cold', 'Log', 'Inside', 'Warm']},
{word: 'Jet Ski', taboo: ['Water', 'Ride', 'Fast', 'One Person', 'Vehicle']},
{word: 'Christmas', taboo: ['Santa', 'Holiday', 'Presents', 'December', 'Tree']}, 
{word: 'Ikea', taboo: ['Sweden', 'Furniture', 'Meatball', 'Store', 'Home']}, 
{word: 'Arsenic', taboo: ['Poison', 'Element', 'Toxic', 'Metalloid', 'Atomic']}, 
{word: 'Robot', taboo: ['Program', 'Electronic', 'Computer', 'Intelligence', 'Asimov']}, 
{word: 'Sled', taboo: ['Snow', 'Winter', 'Hill', 'Dog', 'Toboggan']}, 
{word: 'Werewolf', taboo: ['Moon', 'Night', 'Howl', 'Monster', 'Silver']}, 
{word: 'Submarine', taboo: ['Water', 'Ocean', 'Sea', 'Boat', 'Ship']}, 
{word: 'Nighttime', taboo: ['Day', 'Moon', 'Star', 'Dark', 'Sleep']}, 
{word: 'Beer', taboo: ['Alcohol', 'Drink', 'Hops', 'Wasted', 'Drunk']}, 
{word: 'Hourglass', taboo: ['Time', 'Sand', 'Measure', 'Clock', 'Curve']},
{word: 'Charge', taboo: ['Phone', 'Battery', 'Electricity', 'Electron', 'Positive']},
{word: 'Ladder', taboo: ['Climb', 'Rung', 'Roof', 'Higher', 'Reach']},
{word: 'Lullaby', taboo: ['Sleep', 'Song', 'Sing', 'Baby', 'Slow']},
{word: 'Sound', taboo: ['Hear', 'Ears', 'Tree Falls', 'Cloud', 'Vibration']},
{word: 'Battle', taboo: ['Fight', 'Side', 'Combat', 'Two', 'Ship']},
{word: 'Spaghetti', taboo: ['Sauce', 'Meatballs', 'Mom', 'Noodle', 'Pasta']},
{word: 'Fly', taboo: ['Airplane', 'Bird', 'Shoo', 'Soup', 'You Fools! said Gandalf']}, 
{word: 'Fun', taboo: ['Happy', 'Time Flies', 'F is for Friends', 'Enjoy', 'Laugh']}, 
{word: 'Camouflage', taboo: ['Chameleon', 'Can\'t See', 'Hidden', 'Color', 'Background']}, 
{word: 'Book', taboo: ['Read', 'Page', 'Written', 'Word', 'Story']}, 
{word: 'Pizza', taboo: ['Pepperoni', 'Topping', 'Cheese', 'Sauce', 'Delivery']}, 
{word: 'Alien', taboo: ['E.T.', 'Space', 'Planet', 'Foreign', 'Ayy Lmao']}, 
{word: 'Puzzle', taboo: ['Piece', 'Solve', 'Challenge', 'Picture', 'Put Together']}, 
{word: 'Mitochondria', taboo: ['Powerhouse', 'Cell', 'Biology', 'Energy', 'Endoplasmic Reticulum']}, 
{word: 'Library', taboo: ['Book', 'Borrow', 'Public', 'Free', 'Card']}, 
{word: 'Steak', taboo: ['Meat', 'Beef', 'Cow', 'Rare', 'Strip']}, 
{word: 'Skyscraper', taboo: ['Building', 'Stories', 'Floors', 'Tall', 'Tower']}, 
{word: 'Shorts', taboo: ['Beach', 'Summer', 'Clothing', 'Pants', 'Gym']}, 
{word: 'Cake', taboo: ['Sweet', 'Dessert', 'Birthday', 'Confection', 'Pie']}, 
{word: 'Penicillin', taboo: ['Antibiotic', 'Infection', 'Resistance', 'Bacteria', 'Fleming']}, 
{word: 'Cipher', taboo: ['Code', 'Encryption', 'Cryptography', 'Crack', 'Spy']}, 
{word: 'Telescope', taboo: ['Hubble', 'Observatory', 'Light', 'Lens', 'Space']}, 
{word: 'Squire', taboo: ['Knight', 'Horse', 'Medieval', 'Feudal', 'Sword']}, 
{word: 'Photosynthesis', taboo: ['Light', 'Plants', 'Oxygen', 'Sun', 'Carbon']}, 
{word: 'D-Day', taboo: ['Normandy', 'Allies', 'France', 'Nazi', 'War']},]
;

class TabooCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {points: 0, card: cards[this.getRandomCardIndex()]};
	}

	getRandomCardIndex(){
		return Math.floor(Math.random()* cards.length);
	}

	handleCorrect(){
		this.setState({points: this.state.points + 1, card: cards[this.getRandomCardIndex()]});
	}

	handleIncorrect(){
		this.setState({card: cards[this.getRandomCardIndex()]});
	}

	render() {
		return (
			<div className = "card">
				<div className = "card-content-container">
					<div className = "word-to-guess">
						{this.state.card.word}
					</div>

					{
						this.state.card.taboo.map(function(tabooWord, index) {
                			return (
                				<div key={index} className = "taboo-word">
                					{tabooWord}
                				</div>
                			);
            			})
            		}
				</div>
				<div className = "tally">
					Points: {this.state.points}
				</div>
				<ReportResult correctPressed = {this.handleCorrect.bind(this)} incorrectPressed = {this.handleIncorrect.bind(this)}/>
			</div>
		);
	}

}

class ReportResult extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
				<div id = "bottomButtons">
					<button id = "correctButton" className = "btn btn-default"  onClick = {this.props.correctPressed}>✓ Guessed!</button>
					<button id = "incorrectButton" className = "btn btn-default" onClick = {this.props.incorrectPressed}>X Skipped </button>
				</div>
		);
	}
}

class CreateCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {word: '', taboo1: '', taboo2: '', taboo3: '', taboo4: '', taboo5: ''};
	}

	handleWordChange(e){
		this.setState({word: e.target.value});
	}

	handleTaboo1Change(e){
		this.setState({taboo1: e.target.value});
	}

	handleTaboo2Change(e){
		this.setState({taboo2: e.target.value});
	}
	handleTaboo3Change(e){
		this.setState({taboo3: e.target.value});
	}
	handleTaboo4Change(e){
		this.setState({taboo4: e.target.value});
	}
	handleTaboo5Change(e){
		this.setState({taboo5: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		cards.push({word: this.state.word, taboo: [this.state.taboo1, this.state.taboo2, this.state.taboo3, this.state.taboo4, this.state.taboo5]});
		this.setState({word: '', taboo1: '', taboo2: '', taboo3: '', taboo4: '', taboo5: ''});
	}

	render(){
		return (
			<div className = "newCard">
				New Card
				<form className="newCardForm" onSubmit={this.handleSubmit.bind(this)}>
		        <input
		          type="text"
		          placeholder="Word To Guess"
		          value={this.state.word}
		          onChange={this.handleWordChange.bind(this)}
		        />
		        <input
		          type="text"
		          placeholder ="Taboo Word"
		          value={this.state.taboo1}
		          onChange={this.handleTaboo1Change.bind(this)}
		        />
		        <input
		          type="text"
		          placeholder ="Taboo Word"
		          value={this.state.taboo2}
		          onChange={this.handleTaboo2Change.bind(this)}
		        />
		        <input
		          type="text"
		          placeholder ="Taboo Word"
		          value={this.state.taboo3}
		          onChange={this.handleTaboo3Change.bind(this)}
		        />
		        <input
		          type="text"
		          placeholder ="Taboo Word"
		          value={this.state.taboo4}
		          onChange={this.handleTaboo4Change.bind(this)}
		        />
		        <input
		          type="text"
		          placeholder ="Taboo Word"
		          value={this.state.taboo5}
		          onChange={this.handleTaboo5Change.bind(this)}
		        />
		        <input type="submit" value="Post" />
		      </form>
		    </div>
		);
	}
}

class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state = {timeLeft: 60, paused: true};
	}

	_runtimer(){
		if(this.state.timeLeft <= 0){
			clearInterval(this.interval);
		}else{
			this.setState({timeLeft: this.state.timeLeft - 1});
		}
		
	}

	startTimer(){
		clearInterval(this.interval);
		this.setState({paused: false, timeLeft: 60});
		this.interval = setInterval(this._runtimer.bind(this), 1000);
	}

	pauseTimer(){
		this.setState({paused: true});
		clearInterval(this.interval);
	}

	resumeTimer(){
		this.setState({paused: false});
		this.interval = setInterval(this._runtimer.bind(this), 1000);
	}

	render(){
		if(this.state.paused){
			var timerAction = "Resume";
			var timerFunction = this.resumeTimer;
		}else{
			var timerAction = "Pause";
			var timerFunction = this.pauseTimer;
		}
		return (
			<div id = "timer">
				<button id = "startTimer" class = "btn btn-default" onClick = {this.startTimer.bind(this)} > Start Timer</button>
				<button id = "pauseResume" class = "btn btn-default" onClick = {timerFunction.bind(this)} > {timerAction} </button>
				 <div>Time Left: {this.state.timeLeft}</div>
			</div>
		)
	}
}

ReactDOM.render(<TabooCard/>, document.getElementById('card-container'));
ReactDOM.render(<CreateCard/>, document.getElementById('create-card-container'));
ReactDOM.render(<Timer/>, document.getElementById('timer-container'));