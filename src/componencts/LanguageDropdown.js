import React, { useState, useEffect } from 'react';
import '../sass/LanguageDropdown.scss';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from 'react-click-away-listener';
import { useTranslation } from 'react-i18next';

const languages = [
	{
		"id": 0,
		"name": "English",
		"code": "en"
	},
	{
		"id": 1,
		"name": "한국어",
		"code": "ko"
	}
];

const LanguageDropdown = () => {
	const [open, setOpen] = useState(false);
	const [currentSelection, setCurrentSelection] = useState(JSON.parse(localStorage.getItem('language')) || languages[0]);

	const { i18n } = useTranslation();

	useEffect(() => {
		localStorage.setItem('language', JSON.stringify(currentSelection));
		i18n.changeLanguage(JSON.parse(localStorage.getItem('language')).code);
	}, [currentSelection, i18n])

	const changeLanguage = (language) => {
		setCurrentSelection(languages[language.id])
	}

	const renderLanguageOptions = () => {
		const options = languages.map(language => {
			return (
				<div key={language.id} onClick={() => changeLanguage(language)} className="dropdown__menu__item">
					{language.name}
				</div>
			)
		})

		return options;
	}

	const renderDropdownmenu = () => {
		if (open) {
			return (
				<div className="dropdown__menu">
					{renderLanguageOptions()}
				</div>
			)
		}
	}

	const handleClickAway = () => {
		setOpen(false);
	}

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<div onClick={() => setOpen(!open)} className="dropdown">
				<div className="dropdown__current-selection">
					{currentSelection.name}
					<ArrowDropDownIcon />
				</div>
				{renderDropdownmenu()}
			</div>
		</ClickAwayListener>
	)
}

export default LanguageDropdown
