// LRU缓存算法
// 移除最不常使用的键值对

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // 缓存容量
        this.cache = new Map();   // 使用 Map 存储键值对
    }

    get(key) {
        if (this.cache.has(key)) {
            let tempval = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, tempval)   //将新访问的放到哈希表末尾
            return tempval
        }
        return -1
    }

    put(key, val) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }
        this.cache.set(key, val)
        if (this.cache.size > this.capacity)
            this.cache.delete(this.cache.keys().next().value)  //删掉哈希表第一项（最不常用的）
    }
}

let cache = new LRUCache(2); // 创建一个容量为 2 的 LRU 缓存

cache.put(1, 1); // 添加键值对 (1, 1)
cache.put(2, 2); // 添加键值对 (2, 2)
console.log(cache.get(1)); // 返回 1
cache.put(3, 3); // 添加键值对 (3, 3)，移除键 2
console.log(cache.get(2)); // 返回 -1 (键 2 已被移除)
cache.put(4, 4); // 添加键值对 (4, 4)，移除键 1
console.log(cache.get(1)); // 返回 -1 (键 1 已被移除)
console.log(cache.get(3)); // 返回 3
console.log(cache.get(4)); // 返回 4