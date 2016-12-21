/**
 * Created by liliwen on 2016/12/21.
 */
//发布者模板
let publisher = {
    //该发布者的订阅者
    subscribers: {
        any: []//事件类型：订阅者(subscribers)
    },
    //添加订阅者
    subscribe: function(fn, type) {
        type = type || 'any';
        if (typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },
    //删除订阅者
    unsubscribe(fn, type) {
        this.visitSubscribers('unsubscribe', fn, type);
    },
    //发布消息
    publish(publication, type) {
        this.visitSubscribers('publish', publication, type);
    },
    //工具方法
    visitSubscribers(action, arg, type) {
        let pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;

        for (i = 0; i < max; ++i) {
            if (action === 'publish') {//发布订阅者
                subscribers[i](arg);
            } else {//删除订阅者
                if (subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

export default publisher;