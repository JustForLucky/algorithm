/*
* 四则运算表达式求值
* 使用栈结合逆波兰表达式求值
* 步骤：
* 1 中缀表达式转为后缀表达式（逆波兰表达式）
* 2 后缀表达式求值
* */
const operator = {
	'+': (num1, num2) => num1 + num2,
	'-': (num1, num2) => num1 - num2,
	'*': (num1, num2) => num1 * num2,
	'/': (num1, num2) => num1/num2
}
const operator_weight = {
	'+': 1,
	'-': 1,
	'*': 10,
	'/': 10,
}
function infix_to_postfix(infix_expression) {
	let postfix_expression = [];
	let stack = [];
	let operator_target = '';
	for(let i=0,l=infix_expression.length; i<l; i++) {
		const cur = infix_expression[i];
		let top_cur;
		// 运算符
		const cur_weight = operator_weight[cur];
		if (cur_weight) {
			operator_target && postfix_expression.push(operator_target);
			operator_target = '';
			top_cur = stack[0];
			let top_cur_weight = operator_weight[top_cur];
			while(top_cur && top_cur !== '(' && (top_cur_weight > cur_weight)) {
				postfix_expression.push(stack.shift());
				top_cur = stack[0];
			}
			stack.unshift(cur);
			continue;
		}
		// （
		if (cur === '(') {
			operator_target && postfix_expression.push(operator_target);
			operator_target = '';
			stack.unshift(cur);
			continue;
		}
		// ）
		if (cur === ')') {
			operator_target && postfix_expression.push(operator_target);
			operator_target = '';
			top_cur = stack.shift();
			while(top_cur && top_cur !== '(') {
				postfix_expression.push(top_cur);
				top_cur = stack.shift();
			}
			continue;
		}
		// 操作数
		// postfix_expression.push(cur);
		operator_target += cur;
		if (i === (l -1)) {
			postfix_expression.push(operator_target);
		}
	}
	postfix_expression.push(...stack);
	return postfix_expression;
}
function postfix_expression_evaluation(postfix_expression) {
	const stack = [];
	for(let i=0,l=postfix_expression.length; i<l; i++) {
		const cur = postfix_expression[i];
		const cur_operator = operator[cur];
		if (cur_operator) {
			if (stack.length < 2) {
				return NaN;
			}
			const num2 = stack.shift();
			const num1 = stack.shift();
			stack.unshift(cur_operator(num1, num2));
			continue;
		}
		stack.unshift(Number(cur));
	}
	return stack.pop();
}
function arithmetic(expression) {
	return postfix_expression_evaluation(infix_to_postfix(expression));
}

console.log(9+(3-3*2+(10-9)+10)*3+10/2+100+(20*90-180),arithmetic('9+(3-3*2+(10-9)+10)*3+10/2+100+(20*90-180)'));