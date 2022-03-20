const { headers } = require('./libs');

const successHandler = (res, data) => {
	res.writeHeader(200, headers);
	res.write(JSON.stringify({
		status: 'success',
		data,
	}));
	res.end();
};

const errorHandler = (res, statusCode, message) => {
	res.writeHeader(statusCode, headers);
	res.write(JSON.stringify({
		status: 'fail',
		message,
	}));
	res.end();
};

module.exports = {
	successHandler,
	errorHandler,
};