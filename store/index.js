export const state = () => ({
	news: {},
	urlPath: ''
})

export const mutations = {
	SET_NEWS(state, news) {
		state.news = news
	},
	SET_URLPATH(state, urlPath) {
		state.urlPath = urlPath
	}
}

export const getters = {
  
}