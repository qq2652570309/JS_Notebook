// ES6创建对象
class Apple {
    constructor(name, creator, products) {
        this.name = name;
        this.creator = creator;
        this.products = products;
    }
}

let appleCompany = new Apple('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
let copyApple = new Apple('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod']);

console.log(appleCompany === copyApple);  //false
console.log('creator in appleCompany: ', appleCompany.creator)
console.log('creator in copyApple: ', copyApple.creator)


// ES6中创建 singleton pattern
class SingletonApple1 {
    constructor(name, creator, products) {
      //首次使用构造器实例
      if (!SingletonApple1.instance) {
        this.name = name;
        this.creator = creator;
        this.products = products;
        //将this挂载到SingletonApple这个类的instance属性上
        SingletonApple1.instance = this;
      }
      return SingletonApple1.instance;
    }
}

let appleCompany1 = new SingletonApple1('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
let copyApple1 = new SingletonApple1('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod']);

console.log(appleCompany1 === copyApple1);  //true
console.log('creator in appleCompany1: ', appleCompany1.creator)
console.log('creator in copyApple1: ', copyApple1.creator)


// ES6的静态方法优化代码
class SingletonApple2 {
    constructor(name, creator, products) {
        this.name = name;
        this.creator = creator;
        this.products = products;
    }
    //静态方法
    static getInstance(name, creator, products) {
        if(!this.instance) {
            this.instance = new SingletonApple2(name, creator, products);
        }
        return this.instance;
    }
}

let appleCompany2 = SingletonApple2.getInstance('苹果公司', '乔布斯', ['iPhone', 'iMac', 'iPad', 'iPod']);
let copyApple2 = SingletonApple2.getInstance('苹果公司', '阿辉', ['iPhone', 'iMac', 'iPad', 'iPod'])

console.log(appleCompany2 === copyApple2); //true
console.log('creator in appleCompany2: ', appleCompany2.creator)
console.log('creator in copyApple2: ', copyApple2.creator)




