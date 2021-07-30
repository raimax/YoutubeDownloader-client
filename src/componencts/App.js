import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../componencts/HomePage';
import FaqPage from '../componencts/FaqPage';
import Header from '../componencts/Header';
import Footer from './Footer';
import NotFound from './NotFound';
import ContactPage from './ContactPage';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';
import ScrollToTop from './ScrollToTop';

const App = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<ScrollToTop />
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/faq" component={FaqPage} />
					<Route path="/contact" component={ContactPage} />
					<Route path="/privacy" component={PrivacyPage} />
					<Route path="/terms" component={TermsPage} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App
