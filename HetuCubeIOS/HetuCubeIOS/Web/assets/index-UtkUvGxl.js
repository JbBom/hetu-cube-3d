(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const y of t)if(y.type==="childList")for(const b of y.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function d(t){const y={};return t.integrity&&(y.integrity=t.integrity),t.referrerPolicy&&(y.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?y.credentials="include":t.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function f(t){if(t.ep)return;t.ep=!0;const y=d(t);fetch(t.href,y)}})();const ee=[{n:1,g:"巽",gs:"☴",w:"水",sc:"生",pl:"天",po:"东北",el:0,sg:"神",yy:"阴",xx:"风",se:"冬始",c:5237751,desc:"巽为风，天一生水之位。风起于东北，水之生机初动。"},{n:2,g:"震",gs:"☳",w:"火",sc:"生",pl:"地",po:"南",el:1,sg:"鬼",yy:"阳",xx:"雷",se:"春始",c:16738627,desc:"震为雷，地二生火之位。雷动于南方，火之生数起于地。"},{n:3,g:"乾",gs:"☰",w:"木",sc:"生",pl:"天",po:"东南",el:2,sg:"神",yy:"阳",xx:"天",se:"春终",c:6739770,desc:"乾为天，天三生木之位。天道运行至东南，木之生数由天赐。"},{n:4,g:"坤",gs:"☷",w:"金",sc:"生",pl:"地",po:"西",el:3,sg:"鬼",yy:"阴",xx:"地",se:"秋终",c:12434877,desc:"坤为地，地四生金之位。地道收敛于西方，金之生数由地出。"},{n:6,g:"坎",gs:"☵",w:"水",sc:"成",pl:"地",po:"北",el:0,sg:"神",yy:"阴",xx:"水",se:"冬终",c:2731766,desc:"坎为水，地六成水之位。天一之生至此而成。"},{n:7,g:"离",gs:"☲",w:"火",sc:"成",pl:"天",po:"西南",el:1,sg:"鬼",yy:"阳",xx:"火",se:"夏始",c:16734050,desc:"离为火，天七成火之位。地二之生至此而成。"},{n:8,g:"兑",gs:"☱",w:"木",sc:"成",pl:"地",po:"东",el:2,sg:"神",yy:"阳",xx:"泽",se:"春盛",c:5025616,desc:"兑为泽，地八成木之位。天三之生至此而成。"},{n:9,g:"艮",gs:"☶",w:"金",sc:"成",pl:"天",po:"西北",el:3,sg:"鬼",yy:"阴",xx:"山",se:"秋始",c:10395294,desc:"艮为山，天九成金之位。地四之生至此而成。"}],ne=[{n:5,label:"5 土生(天中)",kind:"heaven_center",c:13961299},{n:10,label:"10 土成(地中)",kind:"earth_center",c:12096938}],ie={1:[-1,1,-1],2:[1,-1,-1],3:[1,1,-1],4:[-1,-1,1],6:[-1,-1,-1],7:[1,1,1],8:[1,-1,1],9:[-1,1,1]},se=[{s:1,c:6,nm:"水",cl:5237751},{s:3,c:8,nm:"木",cl:6739770},{s:2,c:7,nm:"火",cl:16738627},{s:4,c:9,nm:"金",cl:12434877}],oe=[{a:1,b:3,nm:"冬启",cl:5237751},{a:8,b:2,nm:"春发",cl:6739770},{a:7,b:"5",nm:"夏盛",cl:16738627},{a:"10",b:4,nm:"长夏",cl:13961299},{a:9,b:1,nm:"秋收",cl:12434877}],ae=[{id:"intro",from:0,to:8,title:"① 顶点落位",label:"八顶点依次显形",desc:"天平面(奇数1,3,7,9)在上，地平面(偶数2,4,6,8)在下，先建立“天地定位”。",cam:{x:5.4,y:4.6,z:6.2,tx:0,ty:0,tz:0}},{id:"water",from:8,to:16,title:"② 水相生成",label:"天一生水，地六成之",desc:"蓝色粒子沿 1→6 贯穿上下，展示“生数到成数”的基本范式。",cam:{x:-4.8,y:3.2,z:-5.6,tx:-.7,ty:-.1,tz:-.7}},{id:"wood",from:16,to:24,title:"③ 木相生成",label:"天三生木，地八成之",desc:"绿色流线从天位落到地位：3(乾)→8(兑)。",cam:{x:5.8,y:2.9,z:-4.9,tx:.9,ty:-.05,tz:-.2}},{id:"fire",from:24,to:32,title:"④ 火相生成",label:"地二生火，天七成之",desc:"红色粒子由下向上：2(震)→7(离)。方向与水木相反，提醒你“地生而天成”。",cam:{x:5.6,y:1.2,z:5.2,tx:.95,ty:-.2,tz:.1}},{id:"metal",from:32,to:40,title:"⑤ 金相生成",label:"地四生金，天九成之",desc:"银白流线由地升天：4(坤)→9(艮)。",cam:{x:-5.7,y:2.2,z:5.7,tx:-.9,ty:-.1,tz:.5}},{id:"axis",from:40,to:48,title:"⑥ 中轴与土",label:"土居中而通天地",desc:"中心轴显化：5(天中)与10(地中)成为枢纽。先不纠结术语，只记“中轴让上下连起来”。",cam:{x:.2,y:6.9,z:4.2,tx:0,ty:0,tz:0}},{id:"spin",from:48,to:54,title:"⑦ 阴阳旋面",label:"两组旋面同时运行",desc:"阳面：3→8→2→7；阴面：9→6→4→1。作为“可观察的循环”。",cam:{x:6.8,y:3.6,z:.6,tx:0,ty:0,tz:0}},{id:"season",from:54,to:59,title:"⑧ 四时流转",label:"冬春夏长夏秋顺序点亮",desc:"五段季节路径依次显现：时间沿棱边流动。",cam:{x:4.6,y:6.1,z:4.8,tx:0,ty:0,tz:0}},{id:"full",from:59,to:60,title:"⑨ 完整模型",label:"象数位时合而为一",desc:"回到整体视角，自由探索。",cam:{x:5,y:4,z:6,tx:0,ty:0,tz:0}}],Lt={nodes:ee,centers:ne,vertexPositions:ie,pairs:se,seasons:oe,phases:ae},le=[[4,9,2],[3,5,7],[8,1,6]],re=15,ce={1:{po:"北",hint:"常见说法：北一"},2:{po:"西南",hint:"西南二"},3:{po:"东",hint:"东三"},4:{po:"东南",hint:"东南四"},5:{po:"中",hint:"中五"},6:{po:"西北",hint:"西北六"},7:{po:"西",hint:"西七"},8:{po:"东北",hint:"东北八"},9:{po:"南",hint:"南九"}},rt={grid:le,sum:re,cellMeta:ce},de={1:{luoshu:1,note:"数值同为1；洛书中位于北方。河图中“1”常被用于讲水的生数。两者的“位置/用途”不同，先记住：数同名，但系统侧重点不同。"},2:{luoshu:2,note:"数值同为2；洛书在西南。河图讲“2→7”为火的生成关系。"},3:{luoshu:3,note:"数值同为3；洛书在东方。河图讲“3→8”为木的生成关系。"},4:{luoshu:4,note:"数值同为4；洛书在东南。河图讲“4→9”为金的生成关系。"},5:{luoshu:5,note:"洛书中心是5。河图里常用“5/10”表示中轴（土）上下贯通：5偏“天中”，10偏“地中”。"},6:{luoshu:6,note:"数值同为6；洛书在西北。河图里 6 是“成数”(与 1 配对)。"},7:{luoshu:7,note:"数值同为7；洛书在西。河图里 7 是“成数”(与 2 配对)。"},8:{luoshu:8,note:"数值同为8；洛书在东北。河图里 8 是“成数”(与 3 配对)。"},9:{luoshu:9,note:"数值同为9；洛书在南。河图里 9 是“成数”(与 4 配对)。"},10:{luoshu:5,note:"洛书只有 1-9。这里把 10 作为“地中（土成）”的补充说明：它与 5 共同构成河图的中轴。对照模式会把 10 放在九宫之外单独展示。"}},bt={hetuToLuoshu:de},ue=[{id:"hetu-origin",title:"河图的起源",tags:["入门","河图","历史"],oneLine:"传说伏羲氏依龙马背上的图案画出河图。",body:`《周易·系辞》载：「河出图，洛出书，圣人则之。」

上古时期，伏羲氏治理天下时，一匹龙马从黄河中浮出，背上旋毛组成一组图案——这就是「河图」。

河图的核心是一组 1-10 的数字排列，以 5 和 10 居中，其余数字按「生数—成数」两两配对，分布于四方。

你不必立刻理解所有细节。先记住一点：河图是一套「数的结构」，古人认为它揭示了天地万物的生成法则。`},{id:"luoshu-origin",title:"洛书的起源",tags:["入门","洛书","历史"],oneLine:"传说大禹治水时，神龟浮出洛水，背甲上的纹路即为洛书。",body:`《汉书·五行志》记载：大禹治水时，洛水中浮出一只神龟，背甲上有裂纹组成的图案——数字 1 到 9 排列成 3×3 的九宫格。

洛书的神奇之处在于：无论你沿哪一行、哪一列、哪条对角线把三个数相加，结果都是 15。

这在数学上叫「三阶幻方」（Magic Square）。但古人不叫它幻方——他们认为这是天帝赐给人间的治理之法。

大禹据此将天下划分为九州，制定贡赋制度。`},{id:"hetu",title:"什么是河图？",tags:["入门","河图"],oneLine:"河图是一套「数—五行—生成对」的结构化表达。",body:`先记三件事：
1) 你会看到 1/2/3/4（常称「生数」）与 6/7/8/9（常称「成数」）形成四对。
2) 每一对对应五行之一：水(1→6)、火(2→7)、木(3→8)、金(4→9)。
3) 你不需要先背大量术语，只要能在模型里点出这四条「生成对」，就算入门成功。

所谓「生」，是事物的起始之数；所谓「成」，是事物成就之数。天地之间，万物从「生」到「成」，都遵循这个规律。`},{id:"luoshu",title:"什么是洛书？",tags:["入门","洛书"],oneLine:"洛书是一个 3×3 九宫格：每行每列每对角线相加都等于 15。",body:`洛书最容易验证的一点：
- 4+9+2=15
- 3+5+7=15
- 8+1+6=15

先把它当成「一个非常整齐的九宫格」，后面再理解它为何会和方位、阴阳、时序产生联系。

古人将洛书九数与八卦、九宫、五行一一对应，形成了一套完整的世界模型：
- 1 为坎水居北
- 2 为坤土居西南
- 3 为震木居东
- 4 为巽木居东南
- 5 居中央为土
- 6 为乾金居西北
- 7 为兑金居西
- 8 为艮土居东北
- 9 为离火居南`},{id:"compare",title:"河图与洛书是什么关系？",tags:["入门","对照"],oneLine:"它们像同一套数理的两种视图：一个强调「生成对」，一个强调「九宫位」。",body:`学习时建议的顺序：
- 先用河图把「生成对」看懂（用高亮验证）。
- 再用洛书把「九宫格与 15」看懂（用加和验证）。
- 最后用「对照模式」把同一个数字在两种系统里同时点亮。

从数学角度看：河图是 1-10 的配对系统，洛书是 1-9 的幻方系统。它们有重叠的数字，但结构不同。

从哲学角度看：河图讲「生成」——万物如何从无到有；洛书讲「运化」——万物如何在空间中流转。

二者合用，才是完整的数理宇宙模型。`},{id:"five-elements",title:"五行：水火木金土",tags:["核心","五行"],oneLine:"五行不是五种「物质」，而是五种「运动方式」或「变化状态」。",body:`五行的本质是描述变化的五种模式：

🌊 水 — 向下、收藏、寒凉。冬季、北方、肾。
🔥 火 — 向上、发散、温热。夏季、南方、心。
🌿 木 — 向外、生发、舒展。春季、东方、肝。
⚔️ 金 — 向内、收敛、肃杀。秋季、西方、肺。
🏔 土 — 居中、运化、承载。长夏、中央、脾。

在河图中，五行各有一对「生数—成数」：
- 水：天一生水，地六成之
- 火：地二生火，天七成之
- 木：天三生木，地八成之
- 金：地四生金，天九成之
- 土：天五生土，地十成之

注意：水和木是「天」（奇数）先生，火和金是「地」（偶数）先生。这反映了阴阳互根的道理。`},{id:"tian-di",title:"天与地：奇偶之分",tags:["核心","阴阳"],oneLine:"在河图中，奇数为「天数」，偶数为「地数」。",body:`《周易·系辞》：「天一，地二，天三，地四，天五，地六，天七，地八，天九，地十。」

这是河图最基本的分类法：
- 天数（奇数）：1、3、5、7、9 — 阳、主动、外向
- 地数（偶数）：2、4、6、8、10 — 阴、主静、内敛

在 3D 立方体中：
- 上层（天平面）：1、3、7、9 — 四个奇数
- 下层（地平面）：2、4、6、8 — 四个偶数
- 中轴：5（天中）与 10（地中）上下贯通

这种「天地分层」不是随意安排——它反映了古人对宇宙结构的理解：天在上，地在下，天地之间以中轴相连。`},{id:"gui-shen",title:"鬼神：阴阳的深层含义",tags:["进阶","阴阳"],oneLine:"「神」是阳气下沉，「鬼」是阴气上升——这不是迷信，是古人对气机运动的描述。",body:`在河图的语境中：

「神」（阳气下沉）：
- 1→6：水的生成（天一之阳沉入地六之阴）
- 3→8：木的生成（天三之阳沉入地八之阴）
- 5→10：土的生成（天五之阳沉入地十之阴）

「鬼」（阴气上升）：
- 2→7：火的生成（地二之阴升入天七之阳）
- 4→9：金的生成（地四之阴升入天九之阳）

古人观察到：水、木、土的生成是「天降」（阳入阴），火、金的生成是「地升」（阴入阳）。这两种运动方向，分别称为「神」和「鬼」。

这不是鬼怪的「鬼」——而是阴阳二气交互运动的两种模式。`},{id:"seasons",title:"四时流转与五行",tags:["进阶","五行","季节"],oneLine:"五行对应四季（加长夏），形成时间循环。",body:`河图中的季节流转路径：

❄️ 冬：1→3（水生木，冬去春来）
🌱 春：8→2（木生火，春尽夏至）
☀️ 夏：7→5（火生土，夏盛归中）
🌾 长夏：10→4（土生金，暑去秋来）
🍂 秋：9→1（金生水，秋尽冬回）

五段路径首尾相接，形成一个闭环。这个闭环不是直线，而是沿着立方体的棱边流动——你可以把它想象成「时间在空间中的路径」。

在中医理论中，这个季节循环直接影响人体健康：
- 春养肝（木）
- 夏养心（火）
- 长夏养脾（土）
- 秋养肺（金）
- 冬养肾（水）`},{id:"yang-face",title:"阳面与阴面：旋转的秘密",tags:["进阶","阴阳"],oneLine:"立方体有两个旋转面——阳面顺时针，阴面逆时针。",body:`在 3D 立方体中，你可以看到两组旋转管道：

☀️ 阳面（暖色管）：3→8→2→7
- 从乾（天）到兑（泽）到震（雷）到离（火）
- 顺时针方向
- 代表阳气的外放与扩张

🌙 阴面（冷色管）：9→6→4→1
- 从艮（山）到坎（水）到坤（地）到巽（风）
- 逆时针方向
- 代表阴气的内收与凝聚

两组旋转同时进行，一放一收，恰如呼吸——这就是古人所说的「一阴一阳之谓道」。

在中医的子午流注理论中，人体气血的运行也遵循类似的旋转规律。`},{id:"trigrams",title:"八卦与河图的对应",tags:["进阶","八卦"],oneLine:"八个顶点对应八卦，每个卦有自己的五行属性和象征。",body:`河图立方体的八个顶点，各对应一个八卦：

天平面（上层）：
☰ 乾（天）— 3，木之生数，东南
☱ 兑（泽）— 8，木之成数，东
☲ 离（火）— 7，火之成数，西南
☶ 艮（山）— 9，金之成数，西北

地平面（下层）：
☴ 巽（风）— 1，水之生数，东北
☳ 震（雷）— 2，火之生数，南
☵ 坎（水）— 6，水之成数，北
☷ 坤（地）— 4，金之生数，西

注意：八卦在河图中的方位，与后天八卦（文王八卦）的方位并不完全一致。这是因为河图和八卦本是两套独立的系统，后人将其融合时产生了不同的流派。`},{id:"math-beauty",title:"数学之美：对称与和谐",tags:["数学","美学"],oneLine:"河图洛书蕴含着精妙的数学结构，至今仍是组合数学的研究对象。",body:`河图的数学特征：
- 每对「生数+成数」的差都是 5（6-1=5, 7-2=5, 8-3=5, 9-4=5）
- 所有生数之和：1+2+3+4=10
- 所有成数之和：6+7+8+9=30
- 成数之和是生数之和的 3 倍

洛书的数学特征：
- 三阶幻方：每行/列/对角线之和=15
- 中心数 5 是 1-9 的中位数
- 对称位置的数之和都等于 10（1+9, 2+8, 3+7, 4+6）
- 洛书的「魔方常数」15 = 5×3（中心数×阶数）

17 世纪，德国数学家莱布尼茨研究了六十四卦方圆图，发现其中蕴含着二进制的思想——这比他的发明早了数千年。`},{id:"medicine",title:"中医与河图洛书",tags:["应用","中医"],oneLine:"中医的五脏配五行、经络流注，直接源于河图洛书的数理体系。",body:`中医五行配五脏：
- 水 → 肾（藏精，主水）
- 火 → 心（主血脉，藏神）
- 木 → 肝（主疏泄，藏血）
- 金 → 肺（主气，司呼吸）
- 土 → 脾（主运化，统血）

五脏之间的相生关系（木→火→土→金→水→木）和相克关系（木→土→水→火→金→木），都以河图的数理为基础。

洛书在中医中的应用：
- 子午流注：气血按洛书方位在十二经脉中流转
- 灵龟八法：针灸取穴按洛书九宫计算
- 五运六气：预测气候变化与疾病的关系

这不是玄学——几千年的临床经验表明，这套系统在实践中是有效的。`},{id:"fengshui",title:"风水与方位",tags:["应用","风水"],oneLine:"风水的九宫飞星、方位吉凶，直接来源于洛书的数字排列。",body:`洛书九宫是风水学的空间骨架：

4 巽(东南) | 9 离(南)   | 2 坤(西南)
3 震(东)   | 5 中(中央) | 7 兑(西)
8 艮(东北) | 1 坎(北)   | 6 乾(西北)

「九宫飞星」就是将洛书的 9 个数字（1-9）按特定顺序在九宫格中轮转，每年、每月、每时的位置都不同，从而判断某个方位在某段时间的吉凶。

例如：
- 一白贪狼星（水）居北，主智慧
- 八白左辅星（土）居东北，主财富
- 九紫右弼星（火）居南，主喜庆

你可以在这个 3D 模型中直观地看到：为什么北方属水（1→6 的生成对贯穿上下），为什么南方属火（2→7 的生成对由下而上）。`},{id:"western-parallel",title:"西方类似的数理传统",tags:["比较","跨文化"],oneLine:"毕达哥拉斯的「万物皆数」、卡巴拉生命之树，与河图洛书有惊人的相似。",body:`古希腊的毕达哥拉斯（约公元前 570 年）提出「万物皆数」——认为宇宙的本质可以用数字关系来描述。他发现了音乐中的和谐比例（如 2:1 为八度，3:2 为五度），并将其与天体运行对应。

犹太神秘主义的卡巴拉生命之树，用 10 个「质点」（Sephiroth）描述宇宙的创造过程，1-10 的数字结构与河图有相似之处。

印度的吠陀数学中也有九宫格（Nava Rasi），排列方式与洛书一致。

这些相似性说明：不同文明独立发现了数字中的和谐结构。河图洛书不是孤立的发明，而是人类对宇宙数理秩序的共同探索。`},{id:"binary",title:"莱布尼茨与二进制",tags:["历史","数学"],oneLine:"17 世纪德国数学家莱布尼茨从六十四卦中发现了二进制的影子。",body:`1703 年，莱布尼茨收到了法国传教士白晋寄来的伏羲六十四卦方圆图。他惊讶地发现：如果把阳爻（—）记为 1，阴爻（--）记为 0，六十四卦恰好对应了 0 到 63 的二进制数。

莱布尼茨在论文中写道：「这种算术是我在 1678 年发明的……但伏羲的图证明，中国人在数千年前就已发现了它。」

虽然现代学者认为伏羲画卦的本意并非二进制，但这个巧合揭示了一个深刻的事实：河图洛书和八卦系统蕴含的数理结构，与现代数学有着深层的共鸣。

从河图的「生成对」到洛书的「幻方」，从八卦的「阴阳组合」到六十四卦的「二进制编码」——中国古代的数理哲学，是一座值得重新发掘的宝藏。`},{id:"cosmology",title:"宇宙观：从数到万物",tags:["哲学","宇宙观"],oneLine:"河图洛书不只是数字游戏——它是古人理解宇宙的蓝图。",body:`《道德经》：「道生一，一生二，二生三，三生万物。」

河图洛书提供了一个从「道」到「万物」的具体路径：

1. 太极（道）— 5 和 10 居中的轴心
2. 两仪（阴阳）— 天数与地数的分立
3. 四象（五行）— 水火木金四对生成
4. 八卦 — 八个顶点的空间展开
5. 六十四卦 — 阴阳组合的完整展开

这个结构从简单的 1-10 数字出发，经过配对、分层、旋转、流转，最终构成了一个可以解释天文、地理、人事的完整系统。

在立方体中，你可以看到这一切是如何「长」出来的：
- 先有中轴（太极）
- 再有天地两层（阴阳）
- 然后四条生成对（四象）
- 最后八个顶点（八卦）

这就是为什么点击「演化」按钮，会看到一个从无到有的生长过程。`},{id:"practice-meditation",title:"冥想与观想",tags:["应用","修炼"],oneLine:"河图洛书可以作为一种冥想工具——观想数字在空间中的流动。",body:`在道家修炼传统中，河图洛书常被用作内观的对象：

1. 静坐时，想象一个立方体在你体内
2. 上层为天（1、3、7、9），下层为地（2、4、6、8）
3. 观想蓝色水流从 1 贯穿到 6
4. 观想绿色木气从 3 落到 8
5. 观想红色火气从 2 冲向 7
6. 观想白色金气从 4 升到 9
7. 最后观想中轴 5→10 贯通天地

这个练习的目的是：通过数理结构来调和身心，使五行之气在体内均衡运行。

你可以用这个 3D 模型来辅助练习：播放演化动画，跟随粒子流动的节奏呼吸。`},{id:"tcm-five-organs",title:"五脏与五行的对应",tags:["应用","中医"],oneLine:"理解河图，就能理解中医五脏关系的底层逻辑。",body:`五行不是随便分配给五脏的——它们之间有严格的「相生」和「相克」关系：

相生（促进）：
木生火 → 肝藏血以养心
火生土 → 心阳以温脾
土生金 → 脾运化水谷精微以养肺
金生水 → 肺主肃降以助肾藏精
水生木 → 肾精以滋养肝血

相克（制约）：
木克土 → 肝气疏泄以防脾壅
土克水 → 脾运化以防肾水泛滥
水克火 → 肾水上济以防心火过旺
火克金 → 心火温煦以防肺寒
金克木 → 肺气肃降以防肝气上逆

在 3D 模型中，你可以看到：水(1→6)和火(2→7)的方向相反——一上一下，一寒一热，相互制约又相互依存。这就是中医「水火既济」的理论基础。`},{id:"how-to-learn",title:"如何有效学习河图洛书",tags:["方法","学习"],oneLine:"不要试图一次理解所有东西——先建立直觉，再深入细节。",body:`学习路线建议：

第一阶段（5 分钟）：
- 只记住四条生成对：水(1→6)、火(2→7)、木(3→8)、金(4→9)
- 在 3D 模型中点击每对的两端，看粒子流动

第二阶段（15 分钟）：
- 理解天地分层：奇数在上，偶数在下
- 理解五行与方位的对应
- 切到洛书九宫，验证每行/列/对角线=15

第三阶段（30 分钟）：
- 理解鬼神关系（阳沉为神，阴升为鬼）
- 理解阴阳旋面（阳顺阴逆）
- 理解四时流转路径

第四阶段（自由探索）：
- 阅读概念卡，了解中医/风水/数学的关联
- 尝试冥想观想练习
- 对比中西数理传统

关键原则：先看图，后读文；先体验，后理解。`}],_t={concepts:ue},pe=[{title:"第 1 步：河图（看懂“生成对”）",body:`你只要记住四条关系：
- 水：1 → 6
- 火：2 → 7
- 木：3 → 8
- 金：4 → 9

现在会切回河图，并跳到“水相生成”。你可以点 1 或 6 来验证“同五行 + 生/成 + 上/下贯通”。`,mode:"hetu",time:9,select:{kind:"hetu",value:1}},{title:"第 2 步：洛书（看懂“九宫格与 15”）",body:`洛书是一个 3×3 九宫格：每行/列/对角线相加都等于 15。

例如：4+9+2=15，3+5+7=15，8+1+6=15。

现在切到“洛书九宫”，点任意格子选中一个数，先建立“这是一张可以验证的表”。`,mode:"luoshu",select:{kind:"luoshu",value:5}},{title:"第 3 步：对照（同一个数字，两种视图同时点亮）",body:`最后做“对照”：
- 左侧是河图立方体（强调生成对）
- 右侧是洛书九宫（强调九宫位与 15）

点击左侧顶点或右侧九宫格，会同步高亮，并显示“为什么对应”。

做到这里，你已经掌握河图洛书最关键的骨架了。`,mode:"compare",select:{kind:"hetu",value:1}}],me={steps:pe},he="河图洛书知识测验",fe="用交互检验你对河图洛书的理解",ye=[{id:"pair-basics",name:"生成对基础",icon:"🔗",desc:"测试你对四条生成对的掌握",questions:[{id:"q1",type:"choice",prompt:"「天一生水，地六成之」——水的生数是几？",options:["1","2","3","6"],answer:0,explain:"「天一生水」中的「一」就是水的生数。天（奇数）所生的第一个数，对应五行之水。"},{id:"q2",type:"choice",prompt:"火的生成对是哪两个数？",options:["1→6","2→7","3→8","4→9"],answer:1,explain:"「地二生火，天七成之」。火的生数是 2（地数），成数是 7（天数）。"},{id:"q3",type:"choice",prompt:"木的成数是几？",options:["3","6","8","9"],answer:2,explain:"「天三生木，地八成之」。木的成数是 8，位于地平面东方。"},{id:"q4",type:"pair",prompt:"将五行与其对应的生成对连线：",pairs:[{left:"水",right:"1→6"},{left:"火",right:"2→7"},{left:"木",right:"3→8"},{left:"金",right:"4→9"}],explain:"四条生成对对应四行：水(1→6)、火(2→7)、木(3→8)、金(4→9)。土(5→10)居中轴。"},{id:"q5",type:"choice",prompt:"所有生成对中，「生数」与「成数」的差都是多少？",options:["3","4","5","10"],answer:2,explain:"6-1=5, 7-2=5, 8-3=5, 9-4=5。差值恒为 5，这也是中轴之数。"}]},{id:"tian-di",name:"天地阴阳",icon:"☯️",desc:"测试你对天地分层与阴阳的理解",questions:[{id:"q6",type:"choice",prompt:"在河图立方体中，「天平面」包含哪些数？",options:["1、2、3、4","1、3、7、9","2、4、6、8","5、10"],answer:1,explain:"天平面由奇数组成：1、3、7、9，位于立方体上层。奇数为天数，主阳。"},{id:"q7",type:"choice",prompt:"「地平面」的四个数都是什么数？",options:["奇数","偶数","质数","合数"],answer:1,explain:"地平面由偶数组成：2、4、6、8，位于立方体下层。偶数为地数，主阴。"},{id:"q8",type:"choice",prompt:"在河图的「鬼神」关系中，「神」指的是什么？",options:["天上的神仙","阴气上升","阳气下沉","数字的排列"],answer:2,explain:"在河图语境中，「神」指阳气下沉——天数（奇数）的阳气向下沉入地数。如 1→6、3→8、5→10。"},{id:"q9",type:"choice",prompt:"水(1→6)和火(2→7)的生成方向有何不同？",options:["方向相同","水从上到下，火从下到上","水从下到上，火从上到下","没有方向"],answer:1,explain:"水(1→6)是天数下沉（上→下），属于「神」；火(2→7)是地数上升（下→上），属于「鬼」。"},{id:"q10",type:"choice",prompt:"河图中轴上的两个数是什么？",options:["1 和 9","3 和 7","5 和 10","2 和 8"],answer:2,explain:"5（天中）和 10（地中）居于立方体中轴，代表土行，贯通天地。"}]},{id:"luoshu-test",name:"洛书验算",icon:"🔮",desc:"验证你对洛书九宫格的理解",questions:[{id:"q11",type:"calc",prompt:"洛书九宫格中，每行/列/对角线的和是多少？",answer:15,tolerance:0,explain:"这是三阶幻方的特征。例如 4+9+2=15, 3+5+7=15, 8+1+6=15。"},{id:"q12",type:"choice",prompt:"洛书的中心数是几？",options:["1","3","5","9"],answer:2,explain:"洛书中心为 5，是 1-9 的中位数，也是河图中「天五生土」的数。"},{id:"q13",type:"choice",prompt:"洛书中，对称位置的两个数之和都等于多少？",options:["5","9","10","15"],answer:2,explain:"1+9=10, 2+8=10, 3+7=10, 4+6=10。对称位置的数之和恒为 10。"},{id:"q14",type:"fill-grid",prompt:"填入洛书九宫格中缺失的数：",grid:[[4,null,2],[null,5,null],[8,null,6]],answer:[[4,9,2],[3,5,7],[8,1,6]],explain:"洛书九宫格：每行每列每对角线之和=15。已知部分可推算出全部。"},{id:"q15",type:"choice",prompt:"洛书在数学上被称为什么？",options:["斐波那契数列","三阶幻方","哥德巴赫猜想","欧拉公式"],answer:1,explain:"洛书是世界上最早的三阶幻方（Magic Square）记录，比西方早了两千多年。"}]},{id:"culture",name:"文化常识",icon:"📜",desc:"测试你对河图洛书文化背景的了解",questions:[{id:"q16",type:"choice",prompt:"传说河图出自哪里？",options:["洛水中的神龟","黄河中的龙马","泰山上的石碑","昆仑山的仙人"],answer:1,explain:"《周易·系辞》：「河出图，洛出书，圣人则之。」传说伏羲氏时，龙马从黄河中浮出，背上的图案即为河图。"},{id:"q17",type:"choice",prompt:"传说洛书出自哪里？",options:["黄河中的龙马","洛水中的神龟","长江中的蛟龙","太湖中的鲤鱼"],answer:1,explain:"传说大禹治水时，洛水中浮出一只神龟，背甲上的裂纹图案即为洛书。"},{id:"q18",type:"choice",prompt:"哪位德国数学家从六十四卦中发现了二进制的影子？",options:["欧拉","高斯","莱布尼茨","牛顿"],answer:2,explain:"1703 年，莱布尼茨发现伏羲六十四卦的阴阳爻组合与二进制数完全对应。"},{id:"q19",type:"choice",prompt:"中医中，五行「木」对应哪个脏器？",options:["心","肝","脾","肺"],answer:1,explain:"五行配五脏：木→肝、火→心、土→脾、金→肺、水→肾。木主生发，肝主疏泄。"},{id:"q20",type:"choice",prompt:"以下哪项不是洛书在传统文化中的应用？",options:["风水九宫飞星","中医子午流注","古琴十二律","针灸灵龟八法"],answer:2,explain:"古琴十二律基于三分损益法，与河图洛书有关但不是直接应用。风水、中医、针灸都直接使用洛书九宫。"}]}],yt={title:he,subtitle:fe,categories:ye};function ge({mountEl:s,hetuData:o,onTime:d,onSelectHetu:f}){const t=window.THREE;if(!t?.Scene)return s.innerHTML='<div style="padding:18px;color:#d4a853">未找到 three.js。请确认 `three.min.js` 可加载。</div>',null;const y=2,b=Object.fromEntries(Object.entries(o.vertexPositions).map(([e,a])=>[e,new t.Vector3(a[0],a[1],a[2])])),S=new t.Vector3(0,y/2,0),L=new t.Vector3(0,-y/2,0),q=60,g=new t.Scene;g.background=new t.Color(328968);const C=new t.PerspectiveCamera(50,1,.1,120);C.position.set(5,4,6);const v=new t.WebGLRenderer({antialias:!0,alpha:!1,powerPreference:"high-performance"});v.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.appendChild(v.domElement),t.OrbitControls=t.OrbitControls||function(e,a){const l=this;this.object=e,this.domElement=a||document,this.enableDamping=!0,this.dampingFactor=.12,this.autoRotate=!1,this.autoRotateSpeed=.3,this.minDistance=3,this.maxDistance=20,this.target=new t.Vector3,this.enabled=!0,this._ui=!1;const c=new t.Vector2,u=new t.Vector2,r=new t.Vector2,x={N:-1,R:0},p={v:x.N};let B=1;const k=new t.Vector3,M=new t.Quaternion,T=new t.Spherical,I=new t.Spherical,m=new t.Vector3;new t.Vector3;const h=()=>2*Math.PI/60/60*l.autoRotateSpeed,D=w=>I.theta-=w,W=w=>I.phi-=w,tt=w=>c.set(w.clientX,w.clientY),zt=w=>{u.set(w.clientX,w.clientY),r.subVectors(u,c).multiplyScalar(Math.PI/180*.5),D(r.x),W(r.y),c.copy(u)},Yt=w=>{w.deltaY<0?B/=Math.pow(.95,8):B*=Math.pow(.95,8)};function Kt(w){l.enabled&&(w.preventDefault(),l._ui=!0,w.button===0&&(p.v=x.R,tt(w)),document.addEventListener("mousemove",$t),document.addEventListener("mouseup",Dt))}function $t(w){l.enabled&&(w.preventDefault(),p.v===x.R&&zt(w))}function Dt(){l._ui=!1,document.removeEventListener("mousemove",$t),document.removeEventListener("mouseup",Dt),p.v=x.N}function Qt(w){l.enabled&&(w.preventDefault(),Yt(w))}function Jt(w){l.enabled&&(l._ui=!0,w.touches.length===1?(p.v=x.R,c.set(w.touches[0].pageX,w.touches[0].pageY)):p.v=x.N)}function Zt(w){l.enabled&&(w.preventDefault(),w.stopPropagation(),p.v===x.R&&w.touches.length===1&&(u.set(w.touches[0].pageX,w.touches[0].pageY),r.subVectors(u,c).multiplyScalar(Math.PI/180*.5),D(r.x),W(r.y),c.copy(u)))}function te(){l._ui=!1}a.addEventListener("contextmenu",w=>w.preventDefault()),a.addEventListener("mousedown",Kt),a.addEventListener("wheel",Qt,{passive:!1}),a.addEventListener("touchstart",Jt),a.addEventListener("touchmove",Zt,{passive:!1}),a.addEventListener("touchend",te),this.update=function(){const w=l.object.position;return k.copy(w).sub(l.target),k.applyQuaternion(M.copy(e.quaternion).invert()),T.setFromVector3(k),l.autoRotate&&p.v===x.N&&!l._ui&&D(h()),T.theta+=I.theta,T.phi+=I.phi,T.phi=Math.max(.01,Math.min(Math.PI-.01,T.phi)),T.radius*=B,T.radius=Math.max(l.minDistance,Math.min(l.maxDistance,T.radius)),l.target.add(m),k.setFromSpherical(T),k.applyQuaternion(e.quaternion),w.copy(l.target).add(k),e.lookAt(l.target),l.enableDamping?(I.theta*=1-l.dampingFactor,I.phi*=1-l.dampingFactor,m.multiplyScalar(1-l.dampingFactor)):(I.set(0,0,0),m.set(0,0,0)),B=1,!0}};const A=new t.OrbitControls(C,v.domElement);g.add(new t.AmbientLight(16777215,.36));const O=new t.DirectionalLight(16775400,.65);O.position.set(5,8,5),g.add(O),g.add(new t.PointLight(13936723,.45,25)),(function(){const a=new t.BufferGeometry,l=new Float32Array(1e3*3),c=new Float32Array(1e3*3);for(let r=0;r<1e3;r++){const x=24+Math.random()*40,p=Math.random()*Math.PI*2,B=Math.acos(2*Math.random()-1);l[r*3]=x*Math.sin(B)*Math.cos(p),l[r*3+1]=x*Math.sin(B)*Math.sin(p),l[r*3+2]=x*Math.cos(B);const k=.35+Math.random()*.45;c[r*3]=c[r*3+1]=c[r*3+2]=k}a.setAttribute("position",new t.BufferAttribute(l,3)),a.setAttribute("color",new t.BufferAttribute(c,3));const u=new t.Points(a,new t.PointsMaterial({size:.09,vertexColors:!0,transparent:!0,opacity:.4,blending:t.AdditiveBlending}));g.add(u),window._hetuStars=u})();const it=new t.LineSegments(new t.EdgesGeometry(new t.BoxGeometry(y*1.01,y*1.01,y*1.01)),new t.LineBasicMaterial({color:13936723,transparent:!0,opacity:.18}));g.add(it),(function(){function e(a,l,c,u,r,x){const p=new t.Shape;p.moveTo(a.x,a.z),p.lineTo(l.x,l.z),p.lineTo(c.x,c.z),p.lineTo(u.x,u.z),p.closePath();const B=new t.Mesh(new t.ShapeGeometry(p),new t.MeshBasicMaterial({color:r,transparent:!0,opacity:x,side:t.DoubleSide}));return B.rotation.x=-Math.PI/2,B.position.y=(a.y+l.y+c.y+u.y)/4,B}g.add(e(b[3],b[8],b[2],b[7],16740419,.025)),g.add(e(b[4],b[9],b[1],b[6],5227511,.025)),g.add(e(b[1],b[3],b[7],b[9],13936723,.015)),g.add(e(b[6],b[8],b[2],b[4],10518624,.015))})();const dt=new t.Line(new t.BufferGeometry().setFromPoints([S.clone(),L.clone()]),new t.LineDashedMaterial({color:13936723,dashSize:.08,gapSize:.06,transparent:!0,opacity:.35}));dt.computeLineDistances(),g.add(dt);function ut(e,a,l=.7){const c=document.createElement("canvas");c.width=256,c.height=128;const u=c.getContext("2d");u.fillStyle="transparent",u.fillRect(0,0,256,128),u.fillStyle="#"+Number(a).toString(16).padStart(6,"0"),u.font=`bold ${Math.round(28*l)}px "Microsoft YaHei",sans-serif`,u.textAlign="center",u.textBaseline="middle",e.split(`
`).forEach((x,p)=>u.fillText(x,128,38+p*27*l));const r=new t.Sprite(new t.SpriteMaterial({map:new t.CanvasTexture(c),transparent:!0}));return r.scale.set(.58*l,.31*l,1),r}function H(e){return e==="5"?S.clone():e==="10"?L.clone():b[e].clone().multiplyScalar(y/2)}const V=ut(o.centers.find(e=>e.n===5)?.label??"5",13936723,1);V.position.copy(S),g.add(V);const G=ut(o.centers.find(e=>e.n===10)?.label??"10",12096874,1);G.position.copy(L),g.add(G);const E={},_={},F={};for(const e of o.nodes){const a=b[String(e.n)].clone().multiplyScalar(y/2),l=new t.Mesh(new t.SphereGeometry(.15,24,24),new t.MeshPhongMaterial({color:e.c,emissive:e.c,emissiveIntensity:.3,shininess:60,transparent:!0,opacity:.92}));l.position.copy(a),l.userData=e,g.add(l),E[e.n]=l;const c=new t.Mesh(new t.RingGeometry(.18,.24,28),new t.MeshBasicMaterial({color:e.c,transparent:!0,opacity:.18,side:t.DoubleSide}));c.position.copy(a),g.add(c),F[e.n]=c;const u=ut(`${e.n}${e.gs}`,e.c,1);u.position.copy(a).add(new t.Vector3(0,.34,0)),g.add(u),_[e.n]=u}const pt={};for(const e of o.pairs){const a=new t.Line(new t.BufferGeometry().setFromPoints([H(String(e.s)),H(String(e.c))]),new t.LineBasicMaterial({color:e.cl,transparent:!0,opacity:.22}));a._pd=e,g.add(a),pt[e.nm]=a}const mt=[];for(const e of o.pairs){const a=H(String(e.s)),l=H(String(e.c)),c=a.clone().lerp(l,.5),u=ut(`${e.nm}生成`,e.cl,.6);u.position.copy(c).add(new t.Vector3(0,.2,0)),g.add(u),mt.push(u)}const $=[],j=[];for(const e of o.seasons){const a=new t.Line(new t.BufferGeometry().setFromPoints([H(String(e.a)),H(String(e.b))]),new t.LineDashedMaterial({color:e.cl,dashSize:.1,gapSize:.08,transparent:!0,opacity:.15}));a.computeLineDistances(),a._sd=e,g.add(a),$.push(a);const l=H(String(e.a)),c=H(String(e.b)),u=l.clone().lerp(c,.5),r=ut(e.nm,e.cl,.72);r.position.copy(u).add(new t.Vector3(0,.3,0)),g.add(r),j.push(r)}const wt=[];for(const e of o.pairs){const l=new t.BufferGeometry,c=new Float32Array(240),u=new Float32Array(240),r=new Float32Array(80);for(let p=0;p<80;p++)r[p]=0;l.setAttribute("position",new t.BufferAttribute(c,3));const x=new t.Points(l,new t.PointsMaterial({size:.04,color:e.cl,transparent:!0,opacity:.7,blending:t.AdditiveBlending,depthWrite:!1}));x.visible=!1,x._d={vel:u,life:r,pos:c,count:80,sn:e.s,cn:e.c},wt.push(x),g.add(x)}function kt(e,a,l,c){const u=new t.BufferGeometry,r=new Float32Array(l*3);for(let x=0;x<l;x++)r[x*3]=(Math.random()-.5)*.18,r[x*3+1]=e+(a>e?1:-1)*Math.random()*Math.abs(a-e),r[x*3+2]=(Math.random()-.5)*.18;return u.setAttribute("position",new t.BufferAttribute(r,3)),new t.Points(u,new t.PointsMaterial({size:.035,color:c,transparent:!0,opacity:.4,blending:t.AdditiveBlending,depthWrite:!1}))}const U=kt(S.y,L.y,50,13936723);g.add(U);const X=kt(L.y,S.y,50,6600182);g.add(X);function It(e,a){const l=[];for(const c of e)l.push(b[String(c)].clone().multiplyScalar(y/2));return l.push(l[0].clone()),new t.Mesh(new t.TubeGeometry(new t.CatmullRomCurve3(l,!0),48,.045,8,!0),new t.MeshBasicMaterial({color:a,transparent:!0,opacity:.18}))}const Q=It([3,8,2,7],16740419);g.add(Q);const J=It([9,6,4,1],5227511);g.add(J);const Rt=new t.Raycaster,Mt=new t.Vector2;let st=null;v.domElement.addEventListener("mousemove",e=>{const a=v.domElement.getBoundingClientRect();Mt.x=(e.clientX-a.left)/a.width*2-1,Mt.y=-((e.clientY-a.top)/a.height)*2+1}),v.domElement.addEventListener("click",()=>{st?.userData?.n&&f?.(st.userData.n)});const ot=o.phases,At=e=>{for(const a of ot)if(e>=a.from&&e<a.to)return a;return ot[ot.length-1]},at=(e,a)=>{const l=Math.max(.001,e.to-e.from);return Math.max(0,Math.min(1,(a-e.from)/l))},Xt=e=>1-Math.pow(1-e,3),P={playing:!1,time:0,speed:.5};let ht=!0,qt=s;function Ct(){const e=qt.clientWidth||window.innerWidth,a=qt.clientHeight||window.innerHeight;C.aspect=e/a,C.updateProjectionMatrix(),v.setSize(e,a)}window.addEventListener("resize",Ct),Ct();function Z(e,a,l){for(const c of o.nodes)(c.n===e||c.n===a)&&(E[c.n].material.emissiveIntensity=Math.max(E[c.n].material.emissiveIntensity,.3+l*.4),F[c.n]&&(F[c.n].visible=!0,F[c.n].material.opacity=Math.max(F[c.n].material.opacity,.18+l*.25),F[c.n].scale.setScalar(1.05+l*.12)),_[c.n].material.opacity=Math.max(_[c.n].material.opacity,.75+l*.25))}function Wt(e,a,l,c,u){const r=e._d,x=r.pos;if(e.visible=u>.02,!!e.visible){for(let p=0;p<r.count;p++)if(r.life[p]-=c*(.55+Math.random()*.18),r.life[p]<=0)x[p*3]=a.x+(Math.random()-.5)*.04,x[p*3+1]=a.y+(Math.random()-.5)*.04,x[p*3+2]=a.z+(Math.random()-.5)*.04,r.vel[p*3]=(l.x-a.x)*(.65+Math.random()*.12),r.vel[p*3+1]=(l.y-a.y)*(.65+Math.random()*.12),r.vel[p*3+2]=(l.z-a.z)*(.65+Math.random()*.12),r.life[p]=1.3+Math.random()*.5;else{x[p*3]+=r.vel[p*3]*c,x[p*3+1]+=r.vel[p*3+1]*c,x[p*3+2]+=r.vel[p*3+2]*c;const B=1-r.life[p]/1.8;x[p*3]+=Math.sin(B*5+p*.4)*.002,x[p*3+2]+=Math.cos(B*5+p*.4)*.002}e.geometry.attributes.position.needsUpdate=!0,e.material.opacity=.1+u*.55}}function St(){ht=!0,P.playing=!1,P.time=0;for(const e of o.nodes)E[e.n].visible=!0,E[e.n].material.opacity=.92,E[e.n].material.emissiveIntensity=.3,E[e.n].scale.setScalar(1),_[e.n].visible=!0,_[e.n].material.opacity=1,F[e.n].visible=!0,F[e.n].material.opacity=.18;for(const e of Object.keys(pt))pt[e].material.opacity=.22,pt[e].visible=!0;for(let e=0;e<$.length;e++)$[e].visible=!0,$[e].material.opacity=.15,j[e]&&(j[e].visible=!0,j[e].material.opacity=.85);for(const e of mt)e.visible=!0,e.material.opacity=.75;U.visible=!0,U.material.opacity=.35,X.visible=!0,X.material.opacity=.3,Q.visible=!0,Q.material.opacity=.18,J.visible=!0,J.material.opacity=.15,V.visible=!0,V.material.opacity=.85,G.visible=!0,G.material.opacity=.78}let Nt=Date.now();function Ot(){requestAnimationFrame(Ot);const e=Date.now(),a=Math.min((e-Nt)/1e3,.1);Nt=e,A.update(),Rt.setFromCamera(Mt,C);const l=Object.values(E).filter(p=>p.visible),c=Rt.intersectObjects(l);c.length?st!==c[0].object&&(st=c[0].object,v.domElement.style.cursor="pointer"):st&&(st=null,v.domElement.style.cursor="grab"),P.playing&&(P.time+=a*P.speed,P.time>=q&&(P.time=q,P.playing=!1));const u=P.time,r=At(Math.min(u,q-1e-4));d?.(u,r);const x=1+.018*Math.sin(e*.001);if(ht){const p=.08*Math.sin(e*8e-4);for(const M of o.nodes){let T=x+p*(M.yy==="阳"?1:-1)*.3;E[M.n].scale.setScalar(T),E[M.n].material.emissiveIntensity=.3+p*.1,_[M.n].quaternion.copy(C.quaternion)}V.quaternion.copy(C.quaternion),G.quaternion.copy(C.quaternion);for(const M of j)M.quaternion.copy(C.quaternion);for(const M of mt)M.quaternion.copy(C.quaternion);Q.rotation.y+=a*.08,J.rotation.y-=a*.07;const B=U.geometry.attributes.position.array;for(let M=0;M<B.length/3;M++)B[M*3+1]-=a*.35,B[M*3]+=Math.sin(e*.001+M)*.001,B[M*3+2]+=Math.cos(e*.001+M)*.001,B[M*3+1]<L.y+.08&&(B[M*3+1]=S.y-.08+(Math.random()-.5)*.04);U.geometry.attributes.position.needsUpdate=!0;const k=X.geometry.attributes.position.array;for(let M=0;M<k.length/3;M++)k[M*3+1]+=a*.32,k[M*3]+=Math.sin(e*.0012+M)*.001,k[M*3+2]+=Math.cos(e*.0012+M)*.001,k[M*3+1]>S.y-.08&&(k[M*3+1]=L.y+.08+(Math.random()-.5)*.04);X.geometry.attributes.position.needsUpdate=!0}else{const p=Xt(Math.min(u/8,1));for(let m=0;m<o.nodes.length;m++){const h=o.nodes[m],D=p>(m+1)/8?1:0,W=E[h.n]._cs||0,tt=W+(D-W)*Math.min(a*3,1);if(E[h.n]._cs=tt,tt>.001){const zt=Math.max(tt,.92)*x;E[h.n].visible=!0,E[h.n].scale.setScalar(zt),E[h.n].material.opacity=.92,E[h.n].material.emissiveIntensity=.3,_[h.n].visible=!0,_[h.n].material.opacity=Math.max(tt,.86),F[h.n].visible=tt>.2,F[h.n].material.opacity=.08+tt*.05,F[h.n].scale.setScalar(1+.04*Math.sin(e*.0015+h.n))}else E[h.n].visible=!1,_[h.n].visible=!1,F[h.n].visible=!1}V.visible=u>2,G.visible=u>2,V.material.opacity=.8,G.material.opacity=.72;const k={water:0,wood:1,fire:2,metal:3}[r.id]??-1;for(let m=0;m<wt.length;m++){const h=wt[m],D=o.pairs[m];let W=0;k===m&&(W=.3+.7*at(r,u)),Wt(h,H(String(D.s)),H(String(D.c)),a,W),pt[D.nm].material.opacity=k===m?.15+W*.5:r.id==="full"?.22:.035,k===m&&Z(D.s,D.c,W)}const M=r.id==="full";for(const m of mt)m.visible=M;for(let m=0;m<$.length;m++)$[m].visible=M||r.id==="season",j[m]&&(j[m].visible=M||r.id==="season");const T=r.id==="axis"?.2+.8*at(r,u):r.id==="full"?.35:0;if(U.visible=T>.03,X.visible=T>.03,U.visible){const m=U.geometry.attributes.position.array;for(let h=0;h<m.length/3;h++)m[h*3+1]-=a*(.4+T*.55),m[h*3]+=Math.sin(e*.0015+h)*.0012,m[h*3+2]+=Math.cos(e*.0015+h)*.0012,m[h*3+1]<L.y+.08&&(m[h*3+1]=S.y-.08+(Math.random()-.5)*.04);U.geometry.attributes.position.needsUpdate=!0,U.material.opacity=.1+T*.35}if(X.visible){const m=X.geometry.attributes.position.array;for(let h=0;h<m.length/3;h++)m[h*3+1]+=a*(.38+T*.52),m[h*3]+=Math.sin(e*.0018+h)*.001,m[h*3+2]+=Math.cos(e*.0018+h)*.001,m[h*3+1]>S.y-.08&&(m[h*3+1]=L.y+.08+(Math.random()-.5)*.04);X.geometry.attributes.position.needsUpdate=!0,X.material.opacity=.08+T*.3}T>.04&&(Z(1,6,T*.3),Z(3,8,T*.3),V.material.opacity=.85,G.material.opacity=.78);const I=r.id==="spin"?.25+.75*at(r,u):r.id==="full"?.18:0;Q.visible=I>.02,J.visible=I>.02,Q.visible&&(Q.material.opacity=.06+I*.35,Q.rotation.y+=a*(.22+I*.4),Z(3,7,I*.35),Z(8,2,I*.35)),J.visible&&(J.material.opacity=.05+I*.3,J.rotation.y-=a*(.2+I*.38),Z(9,1,I*.32),Z(6,4,I*.32)),r.id==="season"?.2+.8*at(r,u):r.id;for(let m=0;m<$.length;m++){const h=Math.max(0,Math.min(1,r.id==="season"?at(r,u)*$.length-m:0));$[m].material.opacity=r.id==="season"?.03+h*.48:r.id==="full"?.15:.02,j[m]&&(j[m].material.opacity=r.id==="season"?.06+h*.85:r.id==="full"?.7:.02)}if(r.id==="season"){const m=Math.min($.length-1,Math.floor(at(r,u)*$.length)),h=$[m]._sd;(h.a==="5"||h.b==="5")&&(V.material.opacity=.95),(h.a==="10"||h.b==="10")&&(G.material.opacity=.9),typeof h.a=="number"&&typeof h.b=="number"&&Z(h.a,h.b,.5)}for(const m of o.nodes)_[m.n].quaternion.copy(C.quaternion);V.quaternion.copy(C.quaternion),G.quaternion.copy(C.quaternion);for(const m of j)m.quaternion.copy(C.quaternion);for(const m of mt)m.quaternion.copy(C.quaternion)}it.material.opacity=.15+.025*Math.sin(e*4e-4),window._hetuStars&&(window._hetuStars.rotation.y+=a*.004,window._hetuStars.rotation.x+=a*.001),v.render(g,C)}Ot();function Ft(e){for(const a of Object.keys(E)){const l=Number(a),c=l===e;E[l].material.emissiveIntensity=c?.55:.3,E[l].scale.setScalar(c?1.35:1)}}return{attachTo(e){e&&(qt=e,v.domElement.parentElement!==e&&e.appendChild(v.domElement),Ct())},setMode(e){e==="luoshu"&&(A.autoRotate=!1),e==="hetu"&&P.time===0&&!P.playing&&St()},setSpeed(e){P.speed=e},setTime(e){P.time=Math.max(0,Math.min(q,e)),P.time===0&&!P.playing?St():ht=!1},setPlaying(e){P.playing=!!e,P.playing&&(ht=!1)},stepPhase(e){const a=At(Math.min(P.time,q-1e-4)),l=ot.findIndex(u=>u.id===a.id),c=ot[Math.max(0,Math.min(ot.length-1,l+e))];P.playing=!1,ht=!1,P.time=c.from+Math.min(1,(c.to-c.from)*.25)},selectByHetu(e){Ft(e)},selectByLuoshu(e){E[e]&&Ft(e)},resetToIntro(){P.playing=!1,St()}}}const Ht=document.getElementById("app"),i={mode:"hetu",selected:null,phaseTime:0,playing:!1,speed:.5,search:"",introOpen:!0,introStep:0,introMin:!1,quizCategory:null,quizIndex:0,quizAnswers:{},quizResults:{}};let et=null,Bt=0;function be(){const s=new URL(location.href),o=s.searchParams.get("mode"),d=s.searchParams.get("sel"),f=s.searchParams.get("t");if((o==="hetu"||o==="luoshu"||o==="compare")&&(i.mode=o),d){const[y,b]=d.split(":"),S=Number(b);y==="h"&&Number.isFinite(S)&&(i.selected={kind:"hetu",value:S}),y==="l"&&Number.isFinite(S)&&(i.selected={kind:"luoshu",value:S}),y==="c"&&Number.isFinite(S)&&(i.selected={kind:"center",value:S})}f&&Number.isFinite(Number(f))&&(i.phaseTime=Math.max(0,Math.min(60,Number(f)))),s.searchParams.get("intro")==="0"&&(i.introOpen=!1);const t=s.searchParams.get("introStep");t&&Number.isFinite(Number(t))&&(i.introStep=Math.max(0,Math.min(2,Number(t)))),i.introMin=s.searchParams.get("introMin")==="1"}function N(){const s=new URL(location.href);if(s.searchParams.set("mode",i.mode),i.selected){const o=i.selected.kind==="hetu"?"h":i.selected.kind==="luoshu"?"l":"c";s.searchParams.set("sel",`${o}:${i.selected.value}`)}else s.searchParams.delete("sel");s.searchParams.set("t",String(Math.round(i.phaseTime*100)/100)),s.searchParams.set("intro",i.introOpen?"1":"0"),s.searchParams.set("introStep",String(i.introStep)),s.searchParams.set("introMin",i.introMin?"1":"0"),history.replaceState(null,"",s)}function n(s,o={},d=[]){const f=document.createElement(s);for(const[t,y]of Object.entries(o))if(t==="class")f.className=y;else if(t==="text")f.textContent=y;else if(t.startsWith("on")&&typeof y=="function")f.addEventListener(t.slice(2).toLowerCase(),y);else{if(y===!1||y==null)continue;f.setAttribute(t,String(y))}for(const t of d)f.appendChild(typeof t=="string"?document.createTextNode(t):t);return f}function Y(){Ht.innerHTML="";const s=n("div",{class:"topbar"},[n("div",{class:"brand"},[n("div",{class:"brandTitle",text:"河图洛书"}),n("div",{class:"brandSub",text:"交互学习 · 面向小白 · 可验证"})]),n("div",{class:"seg"},[Et("河图立方体","hetu"),Et("洛书九宫","luoshu"),Et("对照","compare")])]),o=n("div",{class:`main ${i.mode==="compare"?"compare":""}`},[n("div",{class:"canvasHost"},[n("div",{id:"cc"}),i.mode==="luoshu"?xe():document.createTextNode(""),ve(),we()]),n("div",{class:"rightPanel",id:"rightPanel"},[])]),d=Me();Ht.appendChild(n("div",{class:"app"},[s,o,d])),R(),z?.attachTo?.(document.getElementById("cc"))}function xe(){const s=n("div",{class:"luoshuGrid stage2dGrid"},[]);for(const o of rt.grid)for(const d of o){const f=rt.cellMeta[String(d)];s.appendChild(n("div",{class:`cell ${Ut(d)?"on":""}`,onClick:()=>{i.selected={kind:"luoshu",value:d},N(),z?.selectByLuoshu(d),Y(),z?.setMode("luoshu")}},[n("div",{class:"cellNum",text:String(d)}),n("div",{class:"cellMeta",text:`${f.po}`})]))}return n("div",{class:"stage2d"},[n("div",{class:"stage2dCard"},[n("div",{class:"stage2dTitle",text:"洛书九宫（可验证）"}),n("div",{class:"stage2dHint",text:`规则：每行/列/对角线加和都为 ${rt.sum}。
例：4+9+2=15，3+5+7=15，8+1+6=15。
操作：点击任意格子选中一个数字。`}),s])])}function Et(s,o){return n("button",{class:`segBtn ${i.mode===o?"on":""}`,onClick:()=>{i.mode=o,N(),Y(),z?.setMode(o)},type:"button"},[s])}function ve(){return n("div",{class:"hud"},[n("div",{class:"hudK",text:"学习进度"}),n("div",{class:"hudT",id:"hudTitle",text:"① 顶点落位"}),n("div",{class:"hudL",id:"hudLabel",text:"八顶点依次显形"}),n("div",{class:"hudD",id:"hudDesc",text:"从“天地定位”开始，逐步看见生成对。"}),n("div",{class:"hudBar"},[n("div",{class:"hudFill",id:"hudFill",style:"width:0%"})]),n("div",{class:"hudChips chipRow",id:"hudChips"},[])])}function we(){return n("div",{class:"bottomBar"},[n("div",{class:"track",id:"track",onClick:s=>{const o=s.currentTarget.getBoundingClientRect(),d=Math.max(0,Math.min(1,(s.clientX-o.left)/o.width));i.phaseTime=d*60,i.playing=!1,N(),z?.setTime(i.phaseTime),Tt()}},[n("div",{class:"fill",id:"fill",style:"width:0%"})]),n("div",{class:"controlsRow"},[ft("⏮",()=>z?.stepPhase(-1)),ft("▶",()=>jt(),{id:"playBtn",class:"btn play"}),ft("⏭",()=>z?.stepPhase(1)),n("div",{class:"label",id:"ctrlLabel",text:"先看 3 分钟入门，再自由探索"}),n("div",{class:"time"},[n("span",{id:"timeCur",text:"00:00"}),document.createTextNode(" / "),n("span",{id:"timeTotal",text:"01:00"})]),n("select",{onChange:s=>{i.speed=Number(s.target.value),z?.setSpeed(i.speed)}},[gt("0.25","0.25x"),gt("0.5","0.5x",!0),gt("1","1x"),gt("1.5","1.5x")]),ft("入门",()=>{i.introOpen=!0,N(),xt()},{title:"重新打开 3 分钟入门"}),ft("分享",async()=>{const s=location.href;try{await navigator.clipboard.writeText(s),Ee(`已复制链接：${s}`)}catch{prompt("复制此链接",s)}},{title:"复制当前视角链接"})])])}function gt(s,o,d=!1){return n("option",d?{value:s,selected:"selected"}:{value:s},[o])}function ft(s,o,d={}){return n("button",{type:"button",class:"btn",text:s,onClick:o,...d})}function jt(){i.playing=!i.playing,z?.setPlaying(i.playing),Tt()}function Me(){return i.introOpen?i.introMin?n("div",{class:"introSheet on",id:"introOverlay"},[n("div",{class:"introMin"},[n("div",{class:"introPill",id:"introPill",text:"入门进行中：点击继续"}),n("div",{style:"display:flex;gap:8px"},[n("button",{class:"introPillBtn",type:"button",onClick:()=>{i.introMin=!1,N(),Y(),xt()},text:"展开"}),n("button",{class:"introPillBtn",type:"button",onClick:()=>{i.introOpen=!1,et&&(clearTimeout(et),et=null),N(),Y()},text:"关闭"})])])]):n("div",{class:"introSheet on",id:"introOverlay"},[n("div",{class:"introCard"},[n("div",{class:"introTop"},[n("div",{},[n("div",{class:"introTitle",id:"introTitle",text:""}),n("div",{class:"introMeta",id:"introMeta",text:""})]),n("div",{style:"display:flex;gap:8px;flex-shrink:0"},[n("button",{class:"ghostBtn",type:"button",onClick:()=>{i.introMin=!0,N(),Y(),xt()},text:"最小化"}),n("button",{class:"ghostBtn",type:"button",onClick:()=>{i.introOpen=!1,et&&(clearTimeout(et),et=null),N(),Y()},text:"关闭"})])]),n("div",{class:"introBody",id:"introBody",text:""}),n("div",{class:"introBtns"},[n("button",{class:"ghostBtn",type:"button",onClick:()=>{i.introStep=Math.max(0,i.introStep-1),Pt(i.introStep),N()},text:"上一步"}),n("button",{class:"ghostBtn primary",type:"button",onClick:()=>{if(i.introStep>=nt.length-1){i.introOpen=!1,N(),Y();return}i.introStep=Math.min(nt.length-1,i.introStep+1),Pt(i.introStep),N()},text:"下一步"})])])]):n("div",{class:"introSheet",id:"introOverlay"},[])}function xt(){document.getElementById("introOverlay")&&i.introOpen&&qe()}const nt=me.steps;function qe(){const s=nt[i.introStep]??nt[0],o=document.getElementById("introTitle"),d=document.getElementById("introBody");o&&(o.textContent=s.title),d&&(d.textContent=s.body);const f=document.getElementById("introMeta");f&&(f.textContent=`入门进度：第 ${i.introStep+1} / ${nt.length} 步 · 可边看边操作`);const t=document.getElementById("introPill");t&&(t.textContent=`入门：${s.title}`);const y=Array.from(document.querySelectorAll("#introOverlay .ghostBtn")),b=y.find(L=>L.textContent==="上一步"),S=y.find(L=>L.textContent==="下一步");b&&(b.style.visibility=i.introStep<=0?"hidden":"visible"),S&&(S.textContent=i.introStep>=nt.length-1?"完成":"下一步")}function Pt(s){i.introOpen=!0,i.introStep=Math.max(0,Math.min(nt.length-1,s));const o=nt[i.introStep];i.mode=o.mode,i.playing=!1,typeof o.time=="number"&&(i.phaseTime=o.time),i.selected=o.select??null,Y(),z?.setMode(i.mode),z?.setPlaying(!1),typeof o.time=="number"&&z?.setTime(i.phaseTime),i.selected?.kind==="hetu"&&z?.selectByHetu(i.selected.value),i.selected?.kind==="luoshu"&&z?.selectByLuoshu(i.selected.value),xt()}let lt="main";function R(){const s=document.getElementById("rightPanel");if(!s)return;if(s.innerHTML="",lt==="quiz"){s.appendChild(Ce()),s.appendChild(n("div",{style:"margin-top:8px"},[n("button",{class:"ghostBtn",type:"button",onClick:()=>{lt="main",R()},text:"← 返回主面板"})]));return}if(lt==="concepts"){s.appendChild(Se()),s.appendChild(n("div",{style:"margin-top:8px"},[n("button",{class:"ghostBtn",type:"button",onClick:()=>{lt="main",R()},text:"← 返回主面板"})]));return}i.mode==="hetu"?s.appendChild(ct("你现在在河图立方体",[K("建议：先点右下角「入门」，用最短路径看懂四条生成对。"),K("或者直接点击任意顶点，观察它的：五行/生或成/天地平面。")])):i.mode==="luoshu"?(s.appendChild(ct("洛书九宫",[K("每行/列/对角线都加和为 15。你可以点格子，观察对应数字。"),K("想知道它和河图怎么对应，切到「对照」。")])),s.appendChild(Vt())):(s.appendChild(ct("对照（河图 ↔ 洛书）",[K('点 3D 顶点或九宫格数字，会同步高亮，并显示"为什么对应"。')])),s.appendChild(Vt(!0)),s.appendChild(Le()));const o=n("div",{style:"display:flex;flex-direction:column;gap:6px;margin-top:8px"},[n("button",{class:"ghostBtn",type:"button",style:"text-align:left;display:flex;justify-content:space-between",onClick:()=>{lt="quiz",R()}},[n("span",{text:"📝 知识测验"}),n("span",{style:"color:#9f937d;font-size:10px",text:`${yt.categories.reduce((d,f)=>d+f.questions.length,0)}题`})]),n("button",{class:"ghostBtn",type:"button",style:"text-align:left;display:flex;justify-content:space-between",onClick:()=>{lt="concepts",R()}},[n("span",{text:"📚 概念卡"}),n("span",{style:"color:#9f937d;font-size:10px",text:`${_t.concepts.length}张`})])]);s.appendChild(o),s.appendChild(ze())}function Ce(){const s=n("div",{class:"panelSection"}),o=n("div",{class:"panelHd"},[n("span",{text:`${yt.title}`}),n("span",{text:"▾"})]),d=n("div",{class:"panelBd"});if(o.addEventListener("click",()=>d.classList.toggle("collapsed")),s.appendChild(o),s.appendChild(d),!i.quizCategory){d.appendChild(n("div",{style:"color:#b6a686;font-size:11px;margin-bottom:8px",text:yt.subtitle}));for(const q of yt.categories){const g=n("div",{class:"quizCatCard",onClick:()=>{i.quizCategory=q.id,i.quizIndex=0,R()}},[n("div",{class:"quizCatIcon",text:q.icon}),n("div",{class:"quizCatInfo"},[n("div",{class:"quizCatName",text:q.name}),n("div",{class:"quizCatDesc",text:q.desc})]),n("div",{class:"quizCatCount",text:`${q.questions.length}题`})]);d.appendChild(g)}return s}const f=yt.categories.find(q=>q.id===i.quizCategory);if(!f)return i.quizCategory=null,s;const t=f.questions[i.quizIndex];if(!t)return i.quizCategory=null,s;const y=n("div",{class:"quizCatHeader"},[n("button",{class:"quizBackBtn",type:"button",onClick:()=>{i.quizCategory=null,i.quizIndex=0,R()},text:"← 返回"}),n("span",{class:"quizCatTitle",text:`${f.icon} ${f.name}`}),n("span",{class:"quizProgress",text:`${i.quizIndex+1}/${f.questions.length}`})]);d.appendChild(y),d.appendChild(n("div",{class:"quizPrompt",text:t.prompt}));const b=t.id in i.quizResults,S=i.quizResults[t.id];if(t.type==="choice"){const q=n("div",{class:"quizOptions"});t.options.forEach((g,C)=>{let v="quizOpt";b&&(C===t.answer?v+=" correct":i.quizAnswers[t.id]===C&&!S?v+=" wrong":v+=" dim");const A=n("div",{class:v,onClick:()=>{t.id in i.quizResults||(i.quizAnswers[t.id]=C,i.quizResults[t.id]=C===t.answer,R())}},[n("span",{class:"quizOptLabel",text:String.fromCharCode(65+C)}),n("span",{text:g})]);q.appendChild(A)}),d.appendChild(q)}else if(t.type==="calc"){const q=n("input",{class:"quizInput",type:"number",placeholder:"输入数字",onKeydown:C=>{if(C.key==="Enter"){const v=Number(C.target.value);if(!Number.isFinite(v))return;i.quizAnswers[t.id]=v,i.quizResults[t.id]=Math.abs(v-t.answer)<=(t.tolerance||0),R()}}}),g=n("button",{class:"ghostBtn quizSubmitBtn",type:"button",onClick:()=>{const C=Number(q.value);Number.isFinite(C)&&(i.quizAnswers[t.id]=C,i.quizResults[t.id]=Math.abs(C-t.answer)<=(t.tolerance||0),R())},text:"确认"});d.appendChild(n("div",{class:"quizInputRow"},[q,g]))}else if(t.type==="fill-grid"){const q=n("div",{class:"quizGrid"}),g=[];for(let v=0;v<3;v++)for(let A=0;A<3;A++)if(t.grid[v][A]!=null){const O=n("div",{class:"quizGridCell filled",text:String(t.grid[v][A])});q.appendChild(O),g.push(null)}else{const O=n("input",{class:"quizGridInput",type:"number","data-r":String(v),"data-c":String(A)}),it=n("div",{class:"quizGridCell"},[O]);q.appendChild(it),g.push(O)}d.appendChild(q);const C=n("button",{class:"ghostBtn quizSubmitBtn",type:"button",style:"margin-top:8px",onClick:()=>{if(t.id in i.quizResults)return;let v=!0;for(let A=0;A<3;A++)for(let O=0;O<3;O++)if(t.grid[A][O]==null){const it=A*3+O,dt=g[it];dt&&Number(dt.value)!==t.answer[A][O]&&(v=!1)}i.quizResults[t.id]=v,i.quizAnswers[t.id]=v,R()},text:"验证"});d.appendChild(C)}else if(t.type==="pair"){const q=n("div",{class:"quizPairs"});for(const g of t.pairs)q.appendChild(n("div",{class:"quizPairRow"},[n("span",{class:"quizPairLeft",text:g.left}),n("span",{class:"quizPairArrow",text:"→"}),n("span",{class:"quizPairRight",text:g.right})]));d.appendChild(q),t.id in i.quizResults||(i.quizResults[t.id]=!0)}if(t.id in i.quizResults){const q=i.quizResults[t.id];d.appendChild(n("div",{class:`quizResult ${q?"quizResultCorrect":"quizResultWrong"}`,text:q?"✓ 正确！":"✗ 再想想"})),d.appendChild(n("div",{class:"quizExplain",text:t.explain}))}const L=n("div",{class:"quizNav"});if(i.quizIndex>0&&L.appendChild(n("button",{class:"ghostBtn",type:"button",onClick:()=>{i.quizIndex--,R()},text:"上一题"})),i.quizIndex<f.questions.length-1)L.appendChild(n("button",{class:"ghostBtn primary",type:"button",onClick:()=>{i.quizIndex++,R()},text:"下一题"}));else{const q=f.questions.length,g=f.questions.filter(v=>v.id in i.quizResults).length,C=f.questions.filter(v=>i.quizResults[v.id]).length;L.appendChild(n("div",{class:"quizScore",text:`本组得分：${C}/${q}（已答 ${g} 题）`})),L.appendChild(n("button",{class:"ghostBtn primary",type:"button",onClick:()=>{for(const v of f.questions)delete i.quizResults[v.id],delete i.quizAnswers[v.id];i.quizIndex=0,R()},text:"重新测试"}))}return d.appendChild(L),s}function ct(s,o,d=!1){const f=n("div",{class:`panelBd${d?" collapsed":""}`},o),t=n("div",{class:"panelHd",onClick:()=>f.classList.toggle("collapsed")},[n("span",{text:s}),n("span",{text:d?"▸":"▾"})]);return n("div",{class:"panelSection"},[t,f])}function K(s){return n("div",{text:s})}function Se(){const s=_t.concepts,o=i.search.trim(),f=(o?s.filter(t=>(t.title+" "+t.oneLine+" "+t.tags.join(" ")).includes(o)):s).map(t=>{const y=n("div",{style:"color:#b6a686;font-size:11px;white-space:pre-line;display:none",text:t.body}),b=n("div",{style:"color:#9f937d;font-size:10px;margin-top:2px",text:t.oneLine}),S=n("div",{style:"color:var(--gold2);font-weight:650;margin:6px 0 3px;cursor:pointer",text:t.title,onClick:()=>{y.style.display=y.style.display==="none"?"block":"none"}});return n("div",{},[S,b,y,n("div",{class:"chipRow",style:"margin-top:4px"},t.tags.map(L=>n("div",{class:"chip",text:L})))])});return ct("概念卡（小白版）",f.length?f:[K("无匹配结果。")],!0)}function ze(){return n("div",{class:"panelSection"},[n("div",{class:"panelHd"},[n("span",{text:"搜索"}),n("span",{text:"⌕"})]),n("div",{class:"search"},[n("input",{value:i.search,placeholder:"搜：洛书 / 九宫 / 生成对 / 水火木金 / …",onInput:s=>{i.search=s.target.value,R()}})])])}function Vt(s=!1){const o=n("div",{class:"luoshuGrid"},[]);for(const f of rt.grid)for(const t of f){const y=rt.cellMeta[String(t)];o.appendChild(n("div",{class:`cell ${Ut(t)?"on":""}`,onClick:()=>{i.selected={kind:"luoshu",value:t},N(),z?.selectByLuoshu(t),R()}},[n("div",{class:"cellNum",text:String(t)}),n("div",{class:"cellMeta",text:`${y.po} · ${y.hint}`})]))}const d=[K(`验证：任一行/列/对角线加和都为 ${rt.sum}。`),o];return s||d.unshift(K("提示：点格子可以“选中一个数”。")),ct("洛书九宫格",d)}function Le(){const s=i.selected;let o=null;s?.kind==="hetu"&&(o=String(s.value)),s?.kind==="center"&&(o=String(s.value)),s?.kind==="luoshu"&&(o=String(s.value));let d=[];if(o&&bt.hetuToLuoshu[o]){const f=bt.hetuToLuoshu[o];d=[n("div",{style:"color:var(--gold2);font-weight:650;margin-bottom:6px",text:`选中：${o} → 洛书 ${f.luoshu}`}),n("div",{style:"white-space:pre-line",text:f.note})]}else d=[K("点一个数字（3D 顶点 / 九宫格）查看对应解释。")];return ct("对应解释（可验证）",d)}function Ut(s){return i.selected?i.selected.kind==="luoshu"?i.selected.value===s:i.selected.kind==="hetu"||i.selected.kind==="center"?bt.hetuToLuoshu[String(i.selected.value)]?.luoshu===s:!1:!1}function Tt(){const s=document.getElementById("playBtn");s&&(s.textContent=i.playing?"⏸":"▶");const o=document.getElementById("fill");o&&(o.style.width=`${Math.max(0,Math.min(1,i.phaseTime/60))*100}%`);const d=document.getElementById("timeCur");d&&(d.textContent=Be(i.phaseTime))}function Be(s){const o=Math.floor(s/60),d=Math.floor(s%60);return String(o).padStart(2,"0")+":"+String(d).padStart(2,"0")}let Gt=null;function Ee(s){let o=document.getElementById("toast");o||(o=n("div",{id:"toast",style:"position:fixed;left:50%;bottom:84px;transform:translateX(-50%);background:rgba(6,4,14,.96);border:1px solid rgba(212,168,83,.22);color:#d4a853;padding:8px 12px;border-radius:10px;font-size:12px;z-index:60;box-shadow:0 10px 30px rgba(0,0,0,.45);"}),document.body.appendChild(o)),o.textContent=s,o.style.display="block",clearTimeout(Gt),Gt=setTimeout(()=>o.style.display="none",1800)}let z=null;function Pe(){z=ge({mountEl:document.getElementById("cc"),hetuData:Lt,onTime:(s,o)=>{i.phaseTime=s;const d=document.getElementById("hudTitle"),f=document.getElementById("hudLabel"),t=document.getElementById("hudDesc"),y=document.getElementById("hudFill"),b=document.getElementById("hudChips");if(d&&(d.textContent=o.title),f&&(f.textContent=o.label),t&&(t.textContent=o.desc),y&&(y.style.width=`${Math.max(0,Math.min(1,s/60))*100}%`),b&&!b.dataset.ready){b.dataset.ready="1";for(const S of Lt.phases)b.appendChild(n("div",{class:"chip",text:S.label}))}b&&Array.from(b.querySelectorAll(".chip")).forEach((L,q)=>L.classList.toggle("on",Lt.phases[q].id===o.id)),Tt(),(!Bt||Date.now()-Bt>1e3)&&(Bt=Date.now(),N())},onSelectHetu:s=>{i.selected={kind:"hetu",value:s},N(),R()}}),z.setMode(i.mode),z.setSpeed(i.speed),z.setTime(i.phaseTime),z.setPlaying(i.playing),i.selected?.kind==="hetu"&&z.selectByHetu(i.selected.value)}be();Y();const vt=document.createElement("script");vt.src="./three.min.js";vt.onload=()=>Pe();vt.onerror=()=>{document.getElementById("cc").innerHTML='<div style="padding:18px;color:#d4a853">three.min.js 加载失败（请确认静态资源路径正确）。</div>'};document.head.appendChild(vt);window.addEventListener("keydown",s=>{const o=s.target&&s.target.tagName;o==="INPUT"||o==="TEXTAREA"||o==="SELECT"||(s.code==="Space"&&(s.preventDefault(),jt()),s.code==="ArrowRight"&&(s.preventDefault(),z?.stepPhase(1)),s.code==="ArrowLeft"&&(s.preventDefault(),z?.stepPhase(-1)),s.code==="KeyK"&&(s.preventDefault(),i.mode!=="compare"&&(i.mode="compare",Y(),z?.setMode("compare"))))});i.introOpen&&(et=setTimeout(()=>{et=null,i.introOpen&&Pt(i.introStep)},0));
