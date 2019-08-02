//API说明手册
//使用前请仔细阅读

//首页数据 路径 /mogujieData/shouye/index.json
let shouyeData = '/mogujieData/shouye/index.json'

//获取首页下边的分类页数据，点击category/类别，获取"cid"
let shouyeData_category = `/mogujieData/shouye/shouye_category/${cid}.json`

//获取品类页面数据 路径 /mogujieData/category/category.json
let category = '/mogujieData/category/category.json'

//获取品类页面侧边栏每个品类的数据,点击target/目标品类，获取"category_id"
let category_left = `/mogujieData/category/${category_id}.json`

//获取品类页面每个类别下商品列表数据,点击target/目标类别，获取"goodsList_id"
let goodsList = `/mogujieData/category/categorys/${goodsList_id}.json`

//获取商品详情，点击target/目标商品, 获取"tradeItemId"
let goods = `/mogujieData/goods/${tradeItemId}.json`



//最终解释权 归本人所有 有问题请联系我 