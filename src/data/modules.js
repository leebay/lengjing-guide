// Navigation tree data
export const navTree = [
  {
    id: 'home',
    label: '首页',
    icon: 'House',
    color: '#1A6FD4',
    panelId: 'home',
    children: []
  },
  {
    id: 'oc',
    label: '开源课程',
    icon: 'Collection',
    color: '#2ECC71',
    children: [
      { id: 'oc-browse', label: '浏览与检索', panelId: 'oc-browse' },
      { id: 'oc-teach', label: '授课', panelId: 'oc-teach' },
      { id: 'oc-save', label: '保存到课程仓库', panelId: 'oc-save' }
    ]
  },
  {
    id: 'pc',
    label: '校企精品课',
    icon: 'Star',
    color: '#F39C12',
    children: [
      { id: 'pc-play', label: '在线播放', panelId: 'pc-play' },
      { id: 'pc-save', label: '保存到课程仓库', panelId: 'pc-save' }
    ]
  },
  {
    id: 'rl',
    label: '教学资源库',
    icon: 'Files',
    color: '#8E44AD',
    children: [
      { id: 'rl-search', label: '资源检索与筛选', panelId: 'rl-search' },
      { id: 'rl-collect', label: '收藏到我的资源', panelId: 'rl-collect' }
    ]
  },
  {
    id: 'il',
    label: '行业资料库',
    icon: 'Folder',
    color: '#E74C3C',
    children: [
      { id: 'il-browse', label: '分类浏览', panelId: 'il-browse' },
      { id: 'il-download', label: '查看与下载', panelId: 'il-download' }
    ]
  },
  {
    id: 'wb',
    label: '我的工作台',
    icon: 'Monitor',
    color: '#1A6FD4',
    children: [
      { id: 'wb-repo', label: '我的课程仓库', panelId: 'wb-repo' },
      { id: 'wb-edit-ppt', label: '编辑 PPT', panelId: 'wb-edit-ppt' },
      { id: 'wb-edit-struct', label: '课程结构编辑', panelId: 'wb-edit-struct' },
      { id: 'wb-publish', label: '发布课程', panelId: 'wb-publish' },
      { id: 'wb-published', label: '我发布的课程', panelId: 'wb-published' },
      { id: 'wb-class', label: '我的班级', panelId: 'wb-class' },
      { id: 'wb-resource', label: '我的资源', panelId: 'wb-resource' }
    ]
  }
]

// Panel content data
export const panels = [
  {
    id: 'home',
    cover: '/covers/home.jpg',
    icon: 'House',
    iconColor: '#1A6FD4',
    title: '首页',
    desc: '平台首页提供核心功能的快速入口，展示推荐课程与资源，助力教师快速开始教学工作。',
    sections: [
      {
        title: '首页功能',
        cards: [
          {
            name: 'Banner 与快捷入口',
            desc: '展示平台公告与活动信息，提供开源课程、工作台、资源库等核心功能的快速导航入口，一键直达。',
            hasVideo: true,
            videoTitle: 'Banner 与快捷入口'
          },
          {
            name: '开源课程推荐',
            desc: '首页精选推荐高质量开源课程，支持快速预览课程内容，一键保存到个人课程仓库。',
            hasVideo: true,
            videoTitle: '开源课程推荐'
          },
          {
            name: '校企精品课推荐',
            desc: '展示平台精选校企合作精品课程，支持在线播放与保存，满足差异化教学需求。',
            hasVideo: false,
            videoTitle: '校企精品课推荐'
          },
          {
            name: '教学资源展示',
            desc: '首页聚合展示平台核心教学资源，方便教师快速发现和使用。',
            hasVideo: false,
            videoTitle: '教学资源展示',
            tags: ['课程标准', '教学图库', '模拟实训']
          },
          {
            name: '作业手册 & 产品资料库',
            desc: '展示无人机作业手册与 DJI 等品牌设备产品资料卡片，支持快速查阅与下载。',
            hasVideo: false,
            videoTitle: '作业手册与产品资料库'
          }
        ]
      }
    ]
  },
  {
    id: 'oc-browse',
    cover: '/covers/oc-browse.jpg',
    icon: 'Search',
    iconColor: '#2ECC71',
    title: '开源课程 · 浏览与检索',
    desc: '提供多维度检索能力，帮助教师快速找到符合教学需求的开源课程资源。',
    sections: [
      {
        title: '检索功能',
        cards: [
          {
            name: '关键字搜索',
            desc: '通过输入课程名称、知识点关键词等，快速定位目标课程，支持模糊匹配与实时搜索建议。',
            hasVideo: true,
            videoTitle: '关键字搜索'
          },
          {
            name: '课程类型筛选',
            desc: '按课程类型分类浏览，精准匹配不同教学阶段的课程资源。',
            hasVideo: true,
            videoTitle: '课程类型筛选',
            tags: ['专业基础课', '专业核心课', '专业拓展课']
          },
          {
            name: '排序方式',
            desc: '支持多种排序维度，灵活调整课程列表展示顺序，发现最新最热课程。',
            hasVideo: false,
            videoTitle: '排序方式',
            tags: ['默认排序', '按时间排序', '按热度排序']
          }
        ]
      }
    ]
  },
  {
    id: 'oc-teach',
    cover: '/covers/oc-teach.jpg',
    icon: 'VideoPlay',
    iconColor: '#2ECC71',
    title: '开源课程 · 授课',
    desc: '直接使用开源课程进入授课模式，无需额外配置，快速开始课堂教学。',
    sections: [
      {
        title: '授课功能',
        cards: [
          {
            name: '进入授课模式',
            desc: '一键进入全屏授课界面，PPT 课件自动加载，支持教学互动与课堂管理，让教学更专注高效。',
            hasVideo: true,
            videoTitle: '进入授课模式'
          }
        ]
      }
    ]
  },
  {
    id: 'oc-save',
    cover: '/covers/oc-save.jpg',
    icon: 'FolderAdd',
    iconColor: '#2ECC71',
    title: '开源课程 · 保存到课程仓库',
    desc: '将平台开源课程一键保存到个人课程仓库，支持后续个性化编辑与定制。',
    sections: [
      {
        title: '保存功能',
        cards: [
          {
            name: '一键保存到仓库',
            desc: '浏览开源课程时，点击保存按钮即可将课程完整内容（含 PPT、资源）存入个人工作台课程仓库，支持后续自由编辑。',
            hasVideo: true,
            videoTitle: '一键保存到仓库'
          }
        ]
      }
    ]
  },
  {
    id: 'pc-play',
    cover: '/covers/pc-play.jpg',
    icon: 'VideoCamera',
    iconColor: '#F39C12',
    title: '校企精品课 · 在线播放',
    desc: '高质量校企合作精品课程支持在线流畅播放，无需下载即可完整体验课程内容。',
    sections: [
      {
        title: '播放功能',
        cards: [
          {
            name: '在线播放',
            desc: '精品课程提供高清在线视频播放，支持章节目录导航、进度记忆、全屏播放等功能，提供优质观看体验。',
            hasVideo: true,
            videoTitle: '在线播放精品课'
          }
        ]
      }
    ]
  },
  {
    id: 'pc-save',
    cover: '/covers/pc-save.jpg',
    icon: 'Lock',
    iconColor: '#F39C12',
    title: '校企精品课 · 保存到课程仓库',
    desc: '将校企精品课保存到个人仓库后可作为教学参考，但内容受版权保护，不支持编辑修改。',
    sections: [
      {
        title: '保存功能',
        cards: [
          {
            name: '保存（不可编辑）',
            desc: '校企精品课保存后以只读形式存入课程仓库，保留原始内容与版权，可用于教学展示与参考，不支持内容修改。',
            hasVideo: true,
            videoTitle: '保存精品课（只读）'
          }
        ]
      }
    ]
  },
  {
    id: 'rl-search',
    cover: '/covers/rl-search.jpg',
    icon: 'Grid',
    iconColor: '#8E44AD',
    title: '教学资源库 · 检索与筛选',
    desc: '海量教学资源支持多维度分类检索，快速精准找到所需教学素材。',
    sections: [
      {
        title: '检索功能',
        cards: [
          {
            name: '资源类型 Tab 切换',
            desc: '通过顶部标签页快速切换不同类型的教学资源，分类清晰，浏览高效。',
            hasVideo: true,
            videoTitle: '资源类型切换',
            tags: ['文本类', '视频类', '教学图库', '模拟实训', '动画类', '设备图库']
          },
          {
            name: '应用类型筛选',
            desc: '在各资源类型下进一步按应用场景筛选，快速定位适合特定教学环节的资源素材。',
            hasVideo: true,
            videoTitle: '应用类型筛选',
            tags: ['知识手册', '教学课件', '微课视频', '课程教案', '课程标准', '实训工卡']
          }
        ]
      }
    ]
  },
  {
    id: 'rl-collect',
    cover: '/covers/rl-collect.jpg',
    icon: 'StarFilled',
    iconColor: '#8E44AD',
    title: '教学资源库 · 收藏到我的资源',
    desc: '将常用教学资源收藏到个人资源库，随时取用，打造专属教学素材仓库。',
    sections: [
      {
        title: '收藏功能',
        cards: [
          {
            name: '收藏资源',
            desc: '浏览教学资源时，点击收藏按钮即可将资源保存到「我的资源」，支持批量收藏与分类管理，方便教学时快速调用。',
            hasVideo: true,
            videoTitle: '收藏教学资源'
          }
        ]
      }
    ]
  },
  {
    id: 'il-browse',
    cover: '/covers/il-browse.jpg',
    icon: 'Reading',
    iconColor: '#E74C3C',
    title: '行业资料库 · 分类浏览',
    desc: '汇聚无人机行业权威报告、法规标准等资料，按类别系统整理，便于查阅学习。',
    sections: [
      {
        title: '浏览功能',
        cards: [
          {
            name: '资料类型 Tab',
            desc: '按资料类型分类展示行业资料，切换标签快速定位所需内容分区。',
            hasVideo: true,
            videoTitle: '资料类型浏览',
            tags: ['行业报告', '作业手册', '教育资讯', '机型资料']
          },
          {
            name: '细分类型筛选',
            desc: '在各类型资料下进一步按细分维度筛选，精准查找特定领域资料。',
            hasVideo: false,
            videoTitle: '细分类型筛选',
            tags: ['规划纲要', '行业标准', '地方政策', '产业报告', '法律法规']
          }
        ]
      }
    ]
  },
  {
    id: 'il-download',
    cover: '/covers/il-download.jpg',
    icon: 'Download',
    iconColor: '#E74C3C',
    title: '行业资料库 · 查看与下载',
    desc: '行业资料支持在线预览与本地下载，方便教师课前备课与课后研学。',
    sections: [
      {
        title: '查阅功能',
        cards: [
          {
            name: '在线查看文档',
            desc: '无需下载，直接在浏览器内在线预览 PDF、Word 等格式文档，支持翻页、缩放，阅读体验流畅。',
            hasVideo: true,
            videoTitle: '在线查看文档'
          },
          {
            name: '下载到本地',
            desc: '支持将行业资料一键下载保存到本地，方便离线查阅与课堂使用。',
            hasVideo: false,
            videoTitle: '下载资料到本地'
          }
        ]
      }
    ]
  },
  {
    id: 'wb-repo',
    cover: '/covers/wb-repo.jpg',
    icon: 'Suitcase',
    iconColor: '#1A6FD4',
    title: '我的工作台 · 课程仓库',
    desc: '个人课程仓库是教师存放、管理和编辑所有课程的核心空间，支持多种方式建立课程档案。',
    sections: [
      {
        title: '课程管理',
        cards: [
          {
            name: '从开源课程保存入库',
            desc: '将平台开源课程保存到个人仓库，自动复制全部课程内容，支持后续自由编辑定制。',
            hasVideo: true,
            videoTitle: '从开源课程保存入库'
          },
          {
            name: '创建空白课程',
            desc: '从零开始创建全新课程，自定义课程名称、封面与基本信息，再逐步添加章节与教学内容。',
            hasVideo: true,
            videoTitle: '创建空白课程'
          },
          {
            name: '精品课（仓库内）',
            desc: '已保存的校企精品课以只读模式存放于仓库，可授课展示但不可编辑，保留版权内容完整性。',
            hasVideo: false,
            videoTitle: '仓库内的精品课'
          }
        ]
      }
    ]
  },
  {
    id: 'wb-edit-ppt',
    cover: '/covers/wb-edit-ppt.jpg',
    icon: 'Edit',
    iconColor: '#1A6FD4',
    title: '我的工作台 · 编辑 PPT',
    desc: '平台内置强大的 PPT 编辑器，支持文字图片编辑、资源嵌入、页面管理等全面功能。',
    sections: [
      {
        title: 'PPT 编辑',
        cards: [
          {
            name: '直接编辑已有 PPT',
            desc: '在工作台直接打开课程 PPT 进入编辑模式，修改文字、图片、排版等，所见即所得。',
            hasVideo: true,
            videoTitle: '直接编辑已有PPT'
          },
          {
            name: '上传本地 PPT',
            desc: '支持将本地制作的 PPT 文件上传至平台，上传后可在平台编辑器中继续编辑和完善。',
            hasVideo: true,
            videoTitle: '上传本地PPT'
          },
          {
            name: '插入平台资源',
            desc: '在 PPT 编辑时，从平台教学资源库直接调用视频、图片、模拟实训等资源，嵌入当前幻灯片。',
            hasVideo: true,
            videoTitle: '插入平台资源'
          },
          {
            name: '插入本地资源',
            desc: '支持从本地上传图片、视频等文件并直接插入 PPT 页面，丰富课件内容。',
            hasVideo: true,
            videoTitle: '插入本地资源'
          },
          {
            name: 'PPT 页面管理',
            desc: '通过缩略图面板管理所有 PPT 页面，支持拖拽排序、新增、复制、删除页面，灵活调整课件结构。',
            hasVideo: true,
            videoTitle: 'PPT页面管理'
          },
          {
            name: '保存与播放 PPT',
            desc: '编辑完成后一键保存课件内容，并可立即进入全屏演示模式预览或正式授课。',
            hasVideo: true,
            videoTitle: '保存与播放PPT'
          }
        ]
      }
    ]
  },
  {
    id: 'wb-edit-struct',
    cover: '/covers/wb-edit-struct.jpg',
    icon: 'Menu',
    iconColor: '#1A6FD4',
    title: '我的工作台 · 课程结构编辑',
    desc: '对课程的整体章节结构进行灵活调整，优化教学逻辑，打造符合教学目标的课程架构。',
    sections: [
      {
        title: '结构编辑',
        cards: [
          {
            name: '调整章节结构',
            desc: '拖拽调整章节与小节的排列顺序，增删章节层级，构建清晰合理的课程知识体系。',
            hasVideo: true,
            videoTitle: '调整章节结构'
          },
          {
            name: '替换教学资源',
            desc: '替换章节中挂载的 PPT、视频等教学资源，快速更新课程内容，保持课件与时俱进。',
            hasVideo: true,
            videoTitle: '替换教学资源'
          },
          {
            name: '引入其他课程章节',
            desc: '从个人仓库其他课程中选取优质章节，直接引入当前课程，高效复用已有教学内容。',
            hasVideo: true,
            videoTitle: '引入其他课程章节'
          }
        ]
      }
    ]
  },
  {
    id: 'wb-publish',
    cover: '/covers/wb-publish.jpg',
    icon: 'Upload',
    iconColor: '#1A6FD4',
    title: '我的工作台 · 发布课程',
    desc: '将编辑完成的课程一键发布到校内，学生在小程序端即可看到并学习。',
    sections: [
      {
        title: '发布功能',
        cards: [
          {
            name: '发布到校内',
            desc: '课程编辑完成后，提交发布申请，审核通过后学生可在学生端小程序中查看和学习该课程。',
            hasVideo: true,
            videoTitle: '发布课程到校内'
          }
        ]
      }
    ]
  },
  {
    id: 'wb-published',
    cover: '/covers/wb-published.jpg',
    icon: 'List',
    iconColor: '#1A6FD4',
    title: '我的工作台 · 我发布的课程',
    desc: '统一管理所有已发布课程，查看发布状态，并可直接进入授课模式。',
    sections: [
      {
        title: '已发布课程',
        cards: [
          {
            name: '已发布课程列表',
            desc: '集中展示所有已发布课程的名称、发布时间与审核状态，支持搜索筛选，方便统一管理。',
            hasVideo: true,
            videoTitle: '已发布课程列表'
          },
          {
            name: '进入授课模式',
            desc: '从已发布课程列表直接进入授课模式，无需重新查找课程，便捷开始课堂教学。',
            hasVideo: true,
            videoTitle: '进入授课模式'
          }
        ]
      }
    ]
  },
  {
    id: 'wb-class',
    cover: '/covers/wb-class.jpg',
    icon: 'UserFilled',
    iconColor: '#1A6FD4',
    title: '我的工作台 · 我的班级',
    desc: '全面管理教学班级，包括班级创建、学生导入与课程绑定，构建完整的教学管理闭环。',
    sections: [
      {
        title: '班级管理',
        cards: [
          {
            name: '创建班级',
            desc: '新建班级，设置班级名称、所属年级等基本信息，为后续学生管理与课程发布做准备。',
            hasVideo: false,
            videoTitle: '创建班级'
          },
          {
            name: '关联班级',
            desc: '将已有系统班级关联到工作台，同步班级基本信息，免去重复录入工作。',
            hasVideo: false,
            videoTitle: '关联班级'
          }
        ]
      },
      {
        title: '学生管理',
        cards: [
          {
            name: '导入学生（Excel）',
            desc: '通过 Excel 模板批量导入学生名单，快速完成班级学生信息录入，支持格式校验与错误提示。',
            hasVideo: false,
            videoTitle: '批量导入学生'
          },
          {
            name: '新增/关联学生',
            desc: '手动新增单个学生账号，或将已有平台账号关联至班级，灵活扩充班级成员。',
            hasVideo: false,
            videoTitle: '新增或关联学生'
          },
          {
            name: '编辑/移除学生',
            desc: '修改学生信息或将学生从班级移出，保持班级名单的准确性与时效性。',
            hasVideo: false,
            videoTitle: '编辑或移除学生'
          }
        ]
      },
      {
        title: '班级课程管理',
        cards: [
          {
            name: '添加/删除课程',
            desc: '为班级添加已发布的课程，学生即可在小程序端看到该课程；移除课程后学生端同步不可见。',
            hasVideo: false,
            videoTitle: '班级课程管理'
          }
        ]
      }
    ]
  },
  {
    id: 'wb-resource',
    cover: '/covers/wb-resource.jpg',
    icon: 'Picture',
    iconColor: '#1A6FD4',
    title: '我的工作台 · 我的资源',
    desc: '个人资源中心汇聚收藏与上传的所有教学素材，支持检索调用，打造专属资源池。',
    sections: [
      {
        title: '资源管理',
        cards: [
          {
            name: '资源索引与检索',
            desc: '通过关键词搜索和类型筛选快速定位个人资源库中的素材，支持按资源类型、上传时间等维度排序。',
            hasVideo: true,
            videoTitle: '资源索引与检索'
          },
          {
            name: '本地上传资源',
            desc: '将本地图片、视频、文档等文件上传至平台，存入个人资源库，供 PPT 编辑时直接调用。',
            hasVideo: true,
            videoTitle: '本地上传资源'
          }
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
    flex: 1,
    subCards: [
      { name: '从开源课程\n保存入库', videoTitle: '从开源课程保存入库' },
      { name: '从校企精品课\n保存入库', videoTitle: '从精品课保存入库' },
      { name: '创建空白课程', videoTitle: '创建空白课程' }
    ],
    colsCls: 'cols-2'
  },
  {
    id: 'step2',
    step: 2,
    title: '编辑课程',
    desc: '管理章节结构，在 PPT 编辑器中定制内容',
    color: '#2ECC71',
    gradientColor: '#27AE60',
    flex: 2,
    subCards: [
      { name: '章节管理', videoTitle: '章节管理' },
      { name: '编辑文字 / 图片', videoTitle: '编辑文字图片' },
      { name: '嵌入教学资源', videoTitle: '嵌入教学资源' },
      { name: '上传本地 PPT', videoTitle: '上传本地PPT' }
    ],
    colsCls: 'cols-4'
  },
  {
    id: 'step3',
    step: 3,
    title: '发布课程',
    desc: '完成编辑后提交发布，课程进入可授课状态',
    color: '#00B4D8',
    gradientColor: '#0096B7',
    flex: 1,
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
    flex: 1,
    subCards: [
      { name: '创建班级', videoTitle: '创建班级' },
      { name: '绑定课程', videoTitle: '绑定课程' },
      { name: '开始授课', videoTitle: '开始授课' }
    ],
    colsCls: 'cols-2'
  },
  {
    id: 'step5',
    step: 5,
    title: '学生端可见',
    desc: '学生通过微信小程序查看课程，参与课堂互动',
    color: '#E74C3C',
    gradientColor: '#C0392B',
    flex: 1,
    subCards: [],
    colsCls: 'cols-2'
  }
]
