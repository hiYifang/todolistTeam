const { v4: uuidv4 } = require('uuid');
const { successHandler, errorHandler } = require('./responseHandler');

const postTodo = (req, res, todos) => {
	let body = "";

    req.on('data', chunk => {
        body += chunk;
    });

	req.on('end', () => {
		try {
			const title = JSON.parse(body).title;
			if(title !== undefined) {
				const todo = {
					title,
					'id': uuidv4(),
				};
				todos.push(todo);
				successHandler(res, todos);
			} else {
				errorHandler(res, 400, '欄位未填寫正確');
			}
		} catch {
			errorHandler(res, 400, '新增失敗');
		}
	});
};

module.exports = postTodo;