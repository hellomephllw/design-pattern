/**
 * Created by liliwen on 2016/12/21.
 */
import publisher from './Publisher';
import joe from './Joe';
import paper from './Paper';

let execute = {
    init: function() {
        //将paper变为一个发布者
        this.makePublisher(paper);
        //为发布者添加订阅者需要调用的方法
        paper.subscribe(joe.drinkCoffee);
        paper.subscribe(joe.sundayPreNap, 'monthly');
        //执行发布者任务
        paper.daily();
        paper.daily();
        paper.daily();
        paper.monthly();
    },
    //创建一个新的发布者
    makePublisher(o) {
        //把发布者的所有方法交给传入对象
        for (let key in publisher) {
            if (publisher.hasOwnProperty(key) && typeof publisher[key] === 'function') {
                o[key] = publisher[key];
            }
        }
        //初始化该发布者的订阅者属性
        o.subscribers = {
            any: []
        };
    }
};

//初始化
execute.init();