import { createGlobalState } from '@vueuse/core';

export const useResume = createGlobalState(() => {
  const personData = {
    name: '吴晓航',
    job: '前端研发工程师',
    birth: '1995-07',
    gender: '男',
    email: 'wu534152798@163.com',
    telephone: '17600542271',
  };

  const educationData = {
    school: '电子科技大学',
    major: '软件工程',
    education: '本科',
    timeStart: '2013.09',
    timeEnd: '2017.06',
    tag: '985',
  };

  const jobList = [
    {
      companyData: {
        name: '独立开发者',
        position: '线上',
        timeStart: '2024.09',
        timeEnd: '至今',
      },
      details: [
        {
          job: 'xxxxxTrip',
          list: [
            '独立开发基于 Nuxt3 的全栈旅游项目，采用 Vue3 + TailwindCSS + NuxtUI 技术栈，部署于 Cloudflare Workers，实现用户注册登录、旅游产品与帖子发布、评论、点赞、收藏等功能。',
          ],
        },
        {
          job: 'CashXxxx',
          list: [
            '独立开发期货交易系统，前端基于 Vue3 + Vite，后端采用 Node.js + Express，集成 Bot 实时通知，支持用户注册登录、交易订单管理、榜单统计、历史数据图表及自动跟单等功能。',
          ],
        },
      ],
    },
    {
      companyData: {
        name: 'Cyber',
        position: '上海',
        timeStart: '2024.04',
        timeEnd: '2024.08',
      },
      details: [
        {
          job: 'Link3',
          list: [
            '负责面向 Web3 KOL 与机构的社交产品前端研发，实现 Paid Message 功能，涵盖消息收发、删除、撤回、表情回应等，并集成付费机制，支持用户付费发起对话及名片展示。',
            '完成活动报名、详情等页面的前端开发，提升用户参与体验。',
          ],
        },
      ],
    },
    {
      companyData: {
        name: '米哈游',
        department: '平台-HoYoLAB',
        position: '上海',
        timeStart: '2021.12',
        timeEnd: '2024.03',
      },
      details: [
        {
          job: 'HoYoLAB 海外社区-游戏战绩工具',
          list: [
            '负责「原神」、「崩坏·星穹铁道」等多款游戏数据查询页面的前端开发，支持用户等级、成就、深渊战绩等信息查询，提供 PC 与移动端双端适配。',
            '实现基于 html2canvas 的数据截图分享功能，提升用户传播与页面渗透。',
            '推动组件库建设与技术栈升级，实现多游戏独立构建部署，提升开发效率与系统稳定性。',
          ],
        },
        {
          job: 'HoYoLAB 海外社区-HoYoWiki',
          list: [
            '从零搭建百科产品前端，支持 PGC 与 UGC 内容生产与消费，涵盖词条编辑、审核、展示全流程。',
            '基于 tiptap 封装富文本编辑器，支持防剧透、关联帖子插入等定制功能，提升内容生产效率和用户体验。',
          ],
        },
      ],
    },
    {
      companyData: {
        name: '字节跳动',
        department: '产研-头条',
        position: '北京',
        timeStart: '2020.08',
        timeEnd: '2021.11',
      },
      details: [
        {
          job: '头条-热点 前端研发',
          list: [
            '负责热榜落地页前端架构与技术选型，基于 Jupiter 研发套件搭建工程。优化包体积与首屏性能，推进 SSR + SPR 与静态资源本地化，提升加载效率。',
            '推动 UI 组件库与 npm 工具库建设，支持多业务线复用。',
            '拓展与华为、OPPO 等厂商的合作，强化品牌输出与用户增长。',
          ],
        },
      ],
    },
    {
      companyData: {
        name: '民生银行信用卡中心',
        department: '科技部-移动互联',
        position: '北京',
        timeStart: '2017.02',
        timeEnd: '2020.07',
      },
      details: [
        {
          job: '信用卡「全民生活」 App',
          list: [
            '担任前端组长，主导金融与生活类业务开发，优化需求流程与项目管理。',
            '重构旧有系统，推进 Vue 技术栈与 UI 组件库落地，统一视觉规范与提升复用性。',
            '引入 Jenkins + Gulp 实现构建部署自动化，通过非覆盖发布与 CDN 策略优化缓存与性能。',
            '推动 JsBridge 标准化，输出 SDK 与 API 文档，搭建 YApi 平台提升协作效率。',
          ],
        },
      ],
    },
  ];

  const skillList = [
    '精通 Vue/React 等框架，主导过大型项目架构设计，注重代码质量与规范。',
    '具备从浏览器原理到网络协议的完整的性能优化闭环能力。',
    '丰富的 Hybrid 开发经验，善用工程化与工具链提效。',
    '拥有强产品 Owner 意识，可以从技术手段或业务层面主动提升产品体验。',
  ];

  return { educationData, personData, jobList, skillList };
});
