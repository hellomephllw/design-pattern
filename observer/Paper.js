/**
 * Created by liliwen on 2016/12/21.
 */
let paper = {
    daily: function() {
        //发布消息
        this.publish('big news today');
    },
    monthly: function() {
        //发布消息
        this.publish('interesting analysis', 'monthly');
    }
};

export default paper;