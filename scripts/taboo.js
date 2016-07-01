var cards = [{word: 'Khaleesi', taboo: ['Dragons', 'Queen', 'Dothraki', 'Daenerys Targaryen', 'Badass']}];

class TabooCard extends React.Component {
	constructor(props){
		super(props);
		this.state = {points: 0, card: cards[0]};
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