/**
 * Created by liliwen on 2016/12/21.
 */
import Test from './Test1';
import count from './test/Test2';

//打印2
console.log(++Test.count);

//打印1
console.log(count);

//说明nodejs的模块并不是单例，即每个不同文件import出来的模块对象都是不同的对象。