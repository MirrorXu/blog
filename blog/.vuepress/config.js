module.exports = {
	title: "许木木的博客",
	description: "热爱学习，热爱生活",
	theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
	base: "/blog",
	themeConfig: {
		/**
		 * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
		 */
		modifyBlogPluginOptions(blogPluginOptions) {
			return blogPluginOptions;
		},
		/**
		 * Ref: https://vuepress-theme-blog.ulivz.com/#nav
		 */
		nav: [
			{
				text: "Blog",
				link: "/"
			},
			{
				text: "Tags",
				link: "/tag/"
			}
		],
		/**
		 * Ref: https://vuepress-theme-blog.ulivz.com/#footer
		 */
		footer: {
			// contact: [
			// 	{
			// 		type: "github",
			// 		link: "https://github.com/ulivz"
			// 	},
			// 	{
			// 		type: "twitter",
			// 		link: "https://twitter.com/_ulivz"
			// 	}
			// ],
			copyright: [
				// {
				// 	text: "Privacy Policy",
				// 	link: "https://policies.google.com/privacy?hl=en-US"
				// },
				{
					// text: "MIT Licensed | Copyright © Mirror",
					text: "© Mirror",
					// link: ""
				}
			]
		}
	}
};
