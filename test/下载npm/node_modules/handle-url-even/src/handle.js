// author: Even
// Time: 2022.04.12
// version: 1.0.0
// 1chenxueweiB

module.exports = class HandleURL {
	constructor() { }
	/**
	 * @desc 将URL参数解析成对象
	 * @param {string} url 1. url=https://www.baodu.com?nihao=111 2. ?nihao=111
	 * @returns {object}
	 */
	static parseURLToObj(url = '') {
		let search = handleURL.changeToSearch(url)
		let params = {};
		for (const [key, value] of new URLSearchParams(search)) {
			params[key] = value;
		}
		return params;
	}
	/**
	 * @desc 将对象解析成URL字符串
	 * @param {object} params 
	 * @returns {string}
	 */
	static parseObjToString(params = {}) {
		let search = new URLSearchParams('');
		Object.keys(params).forEach(key => {
			search.append(key, params[key]);
		})
		return search.toString();
	}
	/**
	 * @desc 向URL中添加某个参数
	 * @param {string} url 
	 * @param {object} params 
	 * @returns {string}
	 */
	static URLAddParams(url, params) {
		let search = handleURL.parseObjToString(params)
		return url.indexOf('?') == -1 ? `${url}?${search}` : `${url}&${search}`
	}
	/**
	 * @desc 判断URL中是否有某个参数
	 * @param {string} url 
	 * @param {string} key 
	 * @returns {boolean}
	 */
	static URLHasKey(url,key) {
		let search = handleURL.changeToSearch(url);
		return new URLSearchParams(search).has(key);
	}
	/**
	 * @desc 判断URL中是否有value值
	 * @param {string} url 
	 * @param {string} value 
	 * @returns {boolean}
	 */
	static URLHasValue(url,value) {
		let search = handleURL.changeToSearch(url);
		var params = new URLSearchParams(search);
		for(var paramsValue of params.values()) {
			if (paramsValue === value) {
				return true;
			}
		}
		return false;
	}

	static changeToSearch(url) {
		if (!url) throw new Error('url参数错误');
		let search = url.indexOf('?') ? url.split('?')[1] : url;
		return search
	}

}

