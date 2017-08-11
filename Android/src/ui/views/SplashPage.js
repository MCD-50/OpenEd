//import from sysytem
import React, { Component, PropTypes, } from 'react';
import { View, Image, StatusBar, TouchableOpacity, Text } from 'react-native';

//import from app
import { Page } from '../../enums/Page.js';
import { style } from '../../constants/AppStyle.js';
const appIcon = require('../../res/appIcon.png');


const propTypes = {
	navigator: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

class SplashPage extends Component {

	constructor(params) {
		super(params);
	}

	componentDidMount() {
		setTimeout(() => {
			const page = Page.CHAT_PAGE;
			this.props.navigator.replace({ id: page.id, name: page.name })
		}, 2000);
	}

	render() {
		return (
			<View style={style.container_with_flex_1}>
				<StatusBar backgroundColor='black' barStyle='light-content' />
				<View style={style.splash_page_render_outer_view}>
					<Image source={appIcon} style={style.small_image_80_height_and_width} resizeMode="contain" />
				</View>
			</View>
		);
	}
}

SplashPage.propTypes = propTypes;
export default SplashPage;