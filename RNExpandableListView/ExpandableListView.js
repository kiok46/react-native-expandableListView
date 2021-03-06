import React, { Component, StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native'; //Step 1

class ExpandableListView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			//Step 3
			title: props.title,
			expanded: true
		};
	}

	toggle() {}

	render() {
		//Step 5
		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{this.state.title}</Text>
					<TouchableHighlight style={styles.button} onPress={this.toggle.bind(this)} underlayColor="#f1f1f1">
						<Text style={styles.buttonImage}>uuupp</Text>
					</TouchableHighlight>
				</View>
				<View style={styles.body}>{this.props.children}</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		margin: 10,
		overflow: 'hidden'
	},
	titleContainer: {
		flexDirection: 'row'
	},
	title: {
		flex: 1,
		padding: 10,
		color: '#2a2f43',
		fontWeight: 'bold'
	},
	button: {},
	buttonImage: {
		width: 30,
		height: 25
	},
	body: {
		padding: 10,
		paddingTop: 0
	}
});
export default ExpandableListView;
