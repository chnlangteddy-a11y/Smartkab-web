# SmartKAB 网站视觉素材制作需求

> **参考风格：** Megarevo 工业高级感（大间距、清晰非衬线字体、科技蓝/白配色）
> **配色方案：** 主色 #0066CC | 辅色 #00A3FF | 点缀 #FF6B00

---

## 📸 首页 Banner（优先级：⭐⭐⭐）

### 1. Banner-主视觉
| 属性 | 值 |
|------|-----|
| 尺寸 | 1920×1080px |
| 格式 | JPG (高质量) |
| 风格 | 深蓝渐变背景（#0D1117 → #1A202C），储能柜产品居中，左侧蓝色科技光晕，工业级金属质感 |
| 存放路径 | `public/images/hero/banner-main.jpg` |

**设计要点：**
- 产品居中偏右，左侧预留 40% 空间用于文字叠加
- 添加细微网格纹理背景（低透明度）
- 产品表面有金属反光效果
- 周围有轻微光粒子效果

---

### 2. Banner-解决方案
| 属性 | 值 |
|------|-----|
| 尺寸 | 1920×1080px |
| 格式 | JPG |
| 风格 | 工厂屋顶场景，太阳能板+储能柜组合，黄昏暖光，可持续能源氛围 |
| 存放路径 | `public/images/hero/banner-solutions.jpg` |

**设计要点：**
- 真实感工业场景
- 天空有橙色到蓝色渐变
- 储能柜整齐排列
- 右侧预留 30% 空间

---

### 3. Banner-技术实力
| 属性 | 值 |
|------|-----|
| 尺寸 | 1920×1080px |
| 格式 | JPG |
| 风格 | 深色背景+电路纹理，产品内部透视图，蓝色光线连接组件 |
| 存放路径 | `public/images/hero/banner-tech.jpg` |

**设计要点：**
- 3D 渲染风格内部结构
- 蓝色科技光线连接各组件
- 底部预留空间用于技术参数展示

---

## 🔌 产品图（Urayzero 逆变器系列）（优先级：⭐⭐⭐）

### 4-6. 逆变器主图
| 属性 | 值 |
|------|-----|
| 尺寸 | 800×800px |
| 格式 | PNG (透明背景) |
| 风格 | 白色背景，产品正面45°角，柔和阴影，金属质感清晰 |

**文件列表：**
| 名称 | 存放路径 |
|------|----------|
| 单相逆变器 | `public/images/products/inverter-1ph-main.png` |
| 三相逆变器 | `public/images/products/inverter-3ph-main.png` |
| 混合逆变器 | `public/images/products/inverter-hybrid-main.png` |

**设计要点：**
- 产品居中，周围有充足留白
- 底部柔和投影
- 金属表面质感清晰可见
- 可用于白色/浅灰背景

---

### 7. 逆变器安装场景
| 属性 | 值 |
|------|-----|
| 尺寸 | 1200×800px |
| 格式 | JPG |
| 风格 | 墙面安装实景，线缆连接，专业工程师操作 |
| 存放路径 | `public/images/products/inverter-installation.jpg` |

---

### 8-9. 产品细节图
| 名称 | 尺寸 | 存放路径 |
|------|------|----------|
| 接口特写 | 600×600px | `public/images/products/inverter-ports.jpg` |
| 屏幕特写 | 600×600px | `public/images/products/inverter-screen.jpg` |

---

## 🏭 场景图（解决方案）（优先级：⭐⭐）

### 10-13. 应用场景图
| 名称 | 尺寸 | 风格描述 | 存放路径 |
|------|------|----------|----------|
| 工商业储能 | 1200×800px | 大型工厂屋顶，储能柜阵列，蓝天白云 | `public/images/solutions/commercial-industrial.jpg` |
| 数据中心 | 1200×800px | 服务器机房，冷色调LED光 | `public/images/solutions/data-center.jpg` |
| 微电网 | 1200×800px | 偏远地区/岛屿，风光储一体化 | `public/images/solutions/microgrid.jpg` |
| 住宅储能 | 1200×800px | 现代住宅车库，户用储能柜+充电桩 | `public/images/solutions/residential.jpg` |

---

## 🎨 图标（优先级：⭐）

### 应用领域图标（64×64px SVG）
| 名称 | 存放路径 |
|------|----------|
| 工商业建筑 | `public/images/icons/building.svg` |
| 数据中心 | `public/images/icons/datacenter.svg` |
| 太阳能 | `public/images/icons/solar.svg` |
| 风力发电 | `public/images/icons/wind.svg` |
| 充电桩 | `public/images/icons/charging.svg` |
| 家庭 | `public/images/icons/home.svg` |

**图标风格：**
- 线性图标，2px 线宽
- 主色：#0066CC
- 悬停色：#00A3FF
- 适度圆角

### 特性图标（48×48px SVG）
| 名称 | 存放路径 |
|------|----------|
| 安全认证（盾牌） | `public/images/icons/shield.svg` |
| 高效率（闪电） | `public/images/icons/efficiency.svg` |
| 智能监控（仪表盘） | `public/images/icons/monitor.svg` |

---

## 📋 交付清单

### 必需素材（第一阶段）
- [ ] Banner-主视觉
- [ ] Banner-解决方案
- [ ] Banner-技术实力
- [ ] 逆变器-单相-主图
- [ ] 逆变器-三相-主图
- [ ] 逆变器-混合-主图

### 重要素材（第二阶段）
- [ ] 场景-工商业储能
- [ ] 场景-数据中心
- [ ] 场景-微电网
- [ ] 场景-住宅储能

### 可选素材（第三阶段）
- [ ] 所有图标
- [ ] 产品细节图
- [ ] 安装场景图

---

**文档版本：** 1.0
**创建日期：** 2026-03-12
**项目：** SmartKAB 官网
**参考网站：** https://www.megarevo.com
