
export const navTree = [
  { id: 'oc', label: '开源课程', icon: 'Collection', color: '#2ECC71', panelId: 'oc-all' },
  { id: 'pc', label: '校企精品课', icon: 'Star', color: '#F39C12', panelId: 'pc-all' },
  { id: 'rl', label: '教学资源库', icon: 'Files', color: '#8E44AD', panelId: 'rl-all' },
  { id: 'il', label: '行业资料库', icon: 'Folder', color: '#E74C3C', panelId: 'il-all' },
  { id: 'wb', label: '我的工作台', icon: 'Monitor', color: '#1A6FD4', panelId: 'wb-all' }
]

// Panel content data
export const panels = [
  // ===== MERGED PANELS (flat nav) =====
  {
    id: 'oc-all',
    icon: 'Collection',
    iconColor: '#2ECC71',
    title: '开源课程',
    desc: '平台开源课程支持多维度检索、直接授课以及保存到个人仓库进行二次开发。',
    sections: [
      {
        title: '开源课程功能',
        cards: [
          { name: '课程筛选与排序', desc: '按课程类型、专业方向等维度筛选课程，支持多种排序方式，快速找到目标课程。', hasVideo: true, videoTitle: '课程筛选与排序' },
          { name: '一键保存课程', desc: '浏览开源课程时，点击保存按钮即可将课程完整内容（含PPT、资源）存入个人工作台课程仓库，支持后续自由编辑。', hasVideo: true, videoTitle: '一键保存课程到仓库' },
          { name: '快速授课', desc: '一键进入全屏授课界面，PPT 课件自动加载，支持教学互动与课堂管理，让教学更专注高效。', hasVideo: true, videoTitle: '快速授课模式' }
        ]
      }
    ]
  },
  {
    id: 'pc-all',
    icon: 'Star',
    iconColor: '#F39C12',
    title: '校企精品课',
    desc: '校企合作精品课程支持在线流畅播放，并可保存到个人仓库作为教学参考。',
    sections: [
      {
        title: '校企精品课功能',
        cards: [
          { name: '在线播放', desc: '精品课程提供高清在线视频播放，支持章节目录导航、进度记忆、全屏播放等功能，提供优质观看体验。', hasVideo: true, videoTitle: '在线播放精品课' },
          { name: '保存课程', desc: '校企精品课保存后以只读形式存入课程仓库，保留原始内容与版权，可用于教学展示与参考，不支持内容修改。', hasVideo: true, videoTitle: '保存精品课到仓库' }
        ]
      }
    ]
  },
  {
    id: 'rl-all',
    icon: 'Files',
    iconColor: '#8E44AD',
    title: '教学资源库',
    desc: '海量教学资源支持多维度分类检索，快速精准找到所需教学素材，并可收藏到个人资源库。',
    sections: [
      {
        title: '教学资源库功能',
        cards: [
          { name: '资源筛选', desc: '按资源类型（视频、图片、文档等）和应用场景多维度筛选，快速定位所需教学素材。', hasVideo: true, videoTitle: '资源筛选与检索', tags: ['文本类', '视频类', '教学图库', '模拟实训', '动画类', '设备图库'] },
          { name: '资源收藏', desc: '浏览教学资源时，点击收藏按钮即可将资源保存到「我的资源」，方便教学时快速调用。', hasVideo: true, videoTitle: '收藏教学资源' }
        ]
      }
    ]
  },
  {
    id: 'il-all',
    icon: 'Folder',
    iconColor: '#E74C3C',
    title: '行业资料库',
    desc: '汇聚无人机行业权威报告、法规标准等资料，按类别系统整理，便于查阅学习。',
    sections: [
      {
        title: '行业资料库功能',
        cards: [
          { name: '资料筛选', desc: '按资料类型（行业报告、法规标准、作业手册等）分类浏览，切换标签快速定位所需内容。', hasVideo: true, videoTitle: '资料筛选与浏览', tags: ['行业报告', '作业手册', '教育资讯', '机型资料'] },
          { name: '查看与下载', desc: '无需下载直接在线预览文档，也可一键下载保存到本地，方便离线查阅与课堂使用。', hasVideo: true, videoTitle: '在线查看与下载资料' }
        ]
      }
    ]
  },
  {
    id: 'wb-all',
    icon: 'Monitor',
    iconColor: '#1A6FD4',
    title: '我的工作台',
    desc: '工作台是教师进行课程管理、编辑、发布和班级管理的核心中心。',
    sections: [
      {
        title: '选课入库',
        subtitle: '平台提供了三种方式，来创建课程',
        cards: [
          { name: '保存开源课程', desc: '将平台开源课程保存到个人仓库，自动复制全部课程内容，支持后续自由编辑定制。', hasVideo: true, videoTitle: '从开源课程保存入库' },
          { name: '保存精品课', desc: '已保存的校企精品课以只读模式存放于仓库，可授课展示但不可编辑。', hasVideo: false, videoTitle: '仓库内的精品课' },
          { name: '创建空白课程', desc: '从零开始创建全新课程，自定义课程名称、封面与基本信息，再逐步添加章节与教学内容。', hasVideo: true, videoTitle: '创建空白课程' }
        ]
      },
      {
        title: '编辑课程',
        subtitle: '可以编辑课程的章节结构，以及在线编辑课件PPT',
        cards: [
          { name: '调整章节结构', desc: '拖拽调整章节与小节的排列顺序，增删章节层级，构建清晰合理的课程知识体系。', hasVideo: true, videoTitle: '调整章节结构' },
          { name: '编辑PPT', desc: '在工作台直接打开课程 PPT 进入编辑模式，修改文字、图片、排版等，所见即所得。', hasVideo: true, videoTitle: '编辑PPT' },
          { name: '上传本地PPT', desc: '支持将本地制作的 PPT 文件上传至平台，上传后可在平台编辑器中继续编辑和完善。', hasVideo: true, videoTitle: '上传本地PPT' },
          { name: 'PPT里编辑资源', desc: '在 PPT 编辑时，从平台教学资源库直接调用视频、图片、模拟实训等资源，嵌入当前幻灯片。', hasVideo: true, videoTitle: 'PPT里编辑资源' },
          { name: 'PPT的保存与发布', desc: '编辑完成后一键保存课件内容，并可立即进入全屏演示模式预览或正式授课。', hasVideo: true, videoTitle: 'PPT的保存与发布' }
        ]
      },
      {
        title: '建班授课',
        wide: true,
        cards: [
          { name: '班级与学生管理', desc: '创建班级并管理学生名单，支持导入、新增、关联学生，构建完整的教学管理闭环。', hasVideo: false, videoTitle: '班级与学生管理' },
          { name: '绑定课程', desc: '为班级添加已发布的课程，学生即可在小程序端看到该课程；移除课程后学生端同步不可见。', hasVideo: false, videoTitle: '班级绑定课程' },
          { name: '开始授课', desc: '从已发布课程列表直接进入授课模式，无需重新查找课程，便捷开始课堂教学。', hasVideo: true, videoTitle: '开始授课' }
        ]
      },
      {
        title: '学生自学',
        cards: [
          { name: '学生端小程序', desc: '学生通过微信小程序查看老师发布的课程，支持在线学习、进度记忆与课后复习。', hasVideo: false, videoTitle: '学生端小程序使用' }
        ]
      }
    ]
  }
]

// Flow mode data
export const flowSteps = [
  {
    id: 'step1',
    step: 1,
    title: '选课入库',
    desc: '从课程库选取课程，保存至我的课程仓库',
    color: '#1A6FD4',
    gradientColor: '#4A90E2',
    flex: 1.4,
    subCards: [
      { name: '从开源课程保存入库', videoTitle: '从开源课程保存入库' },
      { name: '从精品课保存入库', videoTitle: '从精品课保存入库' },
      { name: '创建空白课程', videoTitle: '创建空白课程' }
    ],
    colsCls: 'cols-3'
  },
  {
    id: 'step2',
    step: 2,
    title: '编辑课程',
    desc: '管理章节结构，在 PPT 编辑器中定制内容',
    color: '#2ECC71',
    gradientColor: '#27AE60',
    flex: 1.7,
    subCards: [
      { name: '调整章节结构', videoTitle: '调整章节结构' },
      { name: '编辑PPT', videoTitle: '编辑PPT' },
      { name: 'PPT编辑器的布局介绍', videoTitle: 'PPT编辑器的布局介绍' }
    ],
    colsCls: 'cols-3'
  },
  {
    id: 'step3',
    step: 3,
    title: '发布课程',
    desc: '完成编辑后提交发布，课程进入可授课状态',
    color: '#00B4D8',
    gradientColor: '#0096B7',
    flex: 0.8,
    subCards: [
      { name: '提交发布', videoTitle: '提交发布课程' }
    ],
    colsCls: 'cols-2'
  },
  {
    id: 'step4',
    step: 4,
    title: '建班授课',
    desc: '创建班级，绑定课程，开始正式授课',
    color: '#F39C12',
    gradientColor: '#E67E22',
    flex: 1.5,
    subCards: [
      { name: '班级与学生管理', videoTitle: '班级与学生管理' },
      { name: '绑定课程', videoTitle: '绑定课程' },
      { name: '开始授课', videoTitle: '开始授课' }
    ],
    colsCls: 'cols-3'
  },
  {
    id: 'step5',
    step: 5,
    title: '学生端可见',
    desc: '学生通过微信小程序查看课程，参与课堂互动',
    color: '#E74C3C',
    gradientColor: '#C0392B',
    flex: 0.8,
    subCards: [
      { name: '学生端小程序使用', videoTitle: '学生端小程序使用' }
    ],
    colsCls: 'cols-2'
  }
]

// 快速上手模式：第一行（选课入库 + 箭头 + 编辑课程 + 箭头 + 发布授课），第二行（建班授课 + 箭头 + 学生端可见）
export const quickStartSteps = [
  {
    id: 'qs1',
    step: 1,
    title: '选课入库',
    desc: '从开源课程库选取课程',
    color: '#1A6FD4',
    gradientColor: '#4A90E2',
    flex: 1.2,
    simpleCard: true,
    videoTitle: '选课入库',
    subCards: [],
    colsCls: 'cols-2'
  },
  {
    id: 'qs2',
    step: 2,
    title: '编辑课程',
    desc: '在 PPT 编辑器中定制课程内容',
    color: '#2ECC71',
    gradientColor: '#27AE60',
    flex: 1.2,
    simpleCard: true,
    videoTitle: '编辑课程',
    subCards: [],
    colsCls: 'cols-2'
  },
  {
    id: 'qs3',
    step: 3,
    title: '发布课程',
    desc: '发布课程到平台',
    color: '#00B4D8',
    gradientColor: '#0096B7',
    flex: 1.2,
    simpleCard: true,
    videoTitle: '发布课程',
    subCards: [],
    colsCls: 'cols-2'
  },
  {
    id: 'qs4',
    step: 4,
    title: '建班授课',
    desc: '创建班级，绑定课程，开始正式授课',
    color: '#F39C12',
    gradientColor: '#E67E22',
    flex: 1.5,
    subCards: [
      { name: '班级与学生管理', videoTitle: '班级与学生管理' },
      { name: '绑定课程', videoTitle: '绑定课程' },
      { name: '开始授课', videoTitle: '开始授课' }
    ],
    colsCls: 'cols-3'
  },
  {
    id: 'qs5',
    step: 5,
    title: '学生端可见',
    desc: '学生通过微信小程序查看课程，参与课堂互动',
    color: '#E74C3C',
    gradientColor: '#C0392B',
    flex: 0.8,
    simpleCard: true,
    videoTitle: '学生端可见',
    subCards: [],
    colsCls: 'cols-2'
  }
]
