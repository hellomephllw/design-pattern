/**
 * Created by liliwen on 2016/12/21.
 */
let joe = {
    //pager是订阅者接受发布者的参数
    drinkCoffee: function(paper) {
        console.log('Just read ' + paper);
    },
    sundayPreNap: function (monthly) {
        console.log('About to fall asleep reading this ' + monthly);
    }
};

export default joe;