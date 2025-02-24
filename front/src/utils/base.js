const base = {
    get() {
        return {
            url : "http://localhost:8080/yaopinguanlixitong/",
            name: "yaopinguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yaopinguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "猪饲料销售管理系统"
        } 
    }
}
export default base
