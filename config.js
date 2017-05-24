const env = process.env;
export const nodeEnv = env.NODE_ENV || 'development'
export const logTest = function(message) {
	console.info('Test1');
	console.info('Test2');
	console.info('Test3');
};
export default {
	port: env.PORT || 8080
};