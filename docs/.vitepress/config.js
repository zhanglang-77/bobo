export default {
  title: '博客Zzz~', //站点标题
  description: '个人博客',//mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "Kitty",
    logo: "/logo.png",
    nav: [
      {
        text: "Example", link: "/example/one/"
      },
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/zhanglang-77" },
      {
        text: "Drop Menu",
        items: [
          {
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/zhanglang-77" },
    ],
    sidebar: {
      '/example/':[
        {
          text: "示例",
          collapsible: true,
          collapsed:true,
          items: [
            {
              text: "示例1",
              link: "/example/one/",
            },
            { text: "示例2", link: "/example/two/" },
          ],
          
        }
      ],
      
    },
  },
}