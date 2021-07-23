import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../componencts/HomePage';
import FaqPage from '../componencts/FaqPage';
import Header from '../componencts/Header';
import Footer from './Footer';


const App = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Header />
				<Route exact path="/" component={HomePage} />
				<Route exact path="/faq" component={FaqPage} />
				<Footer />
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App
