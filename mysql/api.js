const insert_sql = require("../controllers/mysql.config.js");

const sel_website = async (ctx, next) => {
    // let sql = "INSERT INTO website(name,address) VALUE(?,?);";
    let sql= "SELECT * FROM website";
    // let sql = "UPDATE website SET name=?,address=? WHERE id=3";
    let values = ["阿里","www.alibaba.com"];
    let res = await insert_sql(sql,values);
    //直接在query方法里面返回res会因为异步问题报错，所以这里创建一个promise，主要是为了利用await让异步变成同步，最后返回res
    ctx.response.body=res;
}
module.exports={
    "GET/website":sel_website
}