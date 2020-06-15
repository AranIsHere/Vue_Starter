module.exports = {
  css: {
    loaderOptions: {
        sass: {
            prependData: `@import "~@/style/common.scss";`
        }
    },
	 chainWebpack: config => {
	        config.resolve.alias
	            .set('@', resolve('src'))
	    }
}

  }