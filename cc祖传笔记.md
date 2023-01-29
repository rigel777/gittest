10.31

直接return[].splice()返回的是删掉的数据
要return原来的[]






### 2.2. 搭建项目的过程

#### 2.2.1. 项目的创建-脚手架
create-react-app




#### 2.2.2. 项目的基本配置

* icon图标
* 标题
* jsconfig.json





#### 2.2.3. 项目目录的结构





#### 2.2.4. craco.config.js

* 项目的别名alias
* less文件的生效







#### 2.2.5. CSS样式的重置

* normalize.css
* reset.css: 自己编写







#### 2.2.6. 路由的配置router





#### 2.2.7. 状态的管理redux

* createSlice
* 普通的方式: 四个文件





#### 2.2.8. 网络请求axios封装

* HYRequest的封装
* 在home中测试使用



Day03
在redux发起请求的步骤
1在redux中导出createAsyncThunk("名称"，网络请求)
2在组件中dispatch=useDispatch()  然后useeffect(()=>第一步骤导出的，[dispatch])
3extraReducers让state等于请求的数据
4组件中获取state中的数据useSelector((state)=>({数组})，shallowEqual)