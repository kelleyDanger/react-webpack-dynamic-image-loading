


const Animals = require.context("images/Animals", true).keys();
const Emoticons = require.context("images/Emoticons", true).keys();
const Halloween = require.context("images/Halloween", true).keys();
const SacredGeometry = require.context("images/SacredGeometry", true).keys();



export default {
	Animals,
	Emoticons,
	Halloween,
	SacredGeometry
}