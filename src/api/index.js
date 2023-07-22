const axios = require("axios");

const api = axios.create({
	baseURL: "http://localhost:3333",
	// timeout: 5000
});

module.exports = api;