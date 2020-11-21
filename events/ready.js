/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

module.exports = (client) => {
	client.user.setPresence({
		activity: {
			name: `!bread`
		},
		status: `idle`,
		url: `https://www.github/Akashic101/BreadBot`
	})
		.catch(console.error);
};