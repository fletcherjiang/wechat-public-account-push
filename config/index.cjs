/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx54226c530e7f3294',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'cf12fd5c1bbae5eb25a3592fbb8b478c',

  PROVINCE: '重庆',
  CITY: '重庆',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小龚',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouHlV6Mf2V1wIykFfXI0KOKp3acQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MH9a9QHrBikRv59TgEhuxDuIT71wWIY9t9lznqRuPNU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小龚', year: '2001', date: '01-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小江', year: '2000', date: '03-15',
        },
        {
          type: '节日', name: '相识纪念日', year: '2018', date: '11-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-09-02' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
        // 符合纪念日
        { keyword: 'fuhe_day', date: '2022-12-25' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '32S4-IeX-Q3_RHwjJQYb3D4nXek5fKdpHEk-pzWTzjg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouHlV6GeQM4EHAXHz9f6KpY3xdrs',
    }
  ],

}

module.exports = USER_CONFIG

