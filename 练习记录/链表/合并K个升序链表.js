// 来自：https://labuladong.gitee.io/algo/2/18/17/ 评论区的某个解法

var mergeKLists = function(lists) {
  class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
      this._heap = [];
      this._comparator = comparator;
    }
    // 交换节点位置
    _swap(i1, i2) {
      [this._heap[i1], this._heap[i2]] = [this._heap[i2], this._heap[i1]];
    }
    _compare(i1, i2) {
      return this._comparator(this._heap[i1], this._heap[i2]);
    }
    // 获得父节点
    _parent(i) {
      // return (i - 1) >> 1;
      return Math.floor((i - 1) / 2);
    }
    // 获得左节点
    _leftChild(i) {
      return 2 * i + 1;
    }
    // 获得右节点
    _rightChild(i) {
      return 2 * i + 2;
    }
    // 上移
    _shiftUp(index) {
      if (index === 0) return;

      const parent = this._parent(index);
      if (this._heap[parent] && !this._compare(parent, index)) {
        this._swap(parent, index);
        this._shiftUp(parent);
      }
    }
    // 下移
    _shiftDown(index) {
      const left = this._leftChild(index);
      const right = this._rightChild(index);
      if (this._heap[left] && this._compare(left, index)) {
        this._swap(left, index);
        this._shiftDown(left);
      }
      if (this._heap[right] && this._compare(right, index)) {
        this._swap(right, index);
        this._shiftDown(right);
      }
    }
    // 插入
    push(value) {
      this._heap.push(value);
      this._shiftUp(this._heap.length - 1);
    }
    // 删除堆顶
    pop() {
      if (this.size() === 1) return this._heap.shift();
      const top = this._heap[0];
      // pop()方法删除数组最后一个元素并返回，赋值给堆顶
      this._heap[0] = this._heap.pop();
      // 对堆顶重新排序
      this._shiftDown(0);
      return top;
    }
    // 获取堆顶
    peek() {
      return this._heap[0];
    }
    // 获取堆的大小
    size() {
      return this._heap.length;
    }
    isEmpty() {
      return this.size() === 0;
    }
  }

  if (lists.length === 0) return null;

  // 虚拟头结点
  const dummy = new ListNode(-1);
  let p = dummy;

  // 优先级队列，最小堆
  const pq = new PriorityQueue((a, b) => a.val < b.val);
  // 将 k 个链表的头结点加入最小堆
  for (const head of lists) {
    if (head) pq.push(head);
  }

  while (!pq.isEmpty()) {
    // 获取最小节点，接到结果链表中
    const node = pq.pop();
    p.next = node;
    if (node.next !== null) {
      pq.push(node.next);
    }
    // p 指针不断前进
    p = p.next;
  }

  return dummy.next;
};

// ----------------------------------法二----------------------

// 构造函数
function ListNode(x){
  this.val = x;
  this.next = null;
}
function mergeTwoList(pHead1, pHead2) {
  // 创建一个虚拟头节点 在最后新的链表 生成之后，需要借助这个指针来移动
  let dummy = new ListNode(-1)
  // 将当前的指针赋值给 cur 变量，真正移动的是它
  let cur = dummy  
  // 循环的条件是 两个链表的全部不为空
  // 针对为空的部分在最后单独处理
  while(pHead1 !== null && pHead2 !== null) {
    if(pHead1.val < pHead2.val) {
      cur.next = pHead1
      pHead1 = pHead1.next
    } else {
      cur.next = pHead2
      pHead2 = pHead2.next
    }
    // 当前移动指针
    cur = cur.next
  }
  // 处理长度不等的情况，将剩余的部分放在最后
  cur.next = pHead1 || pHead2
  // 返回新链表的头节点
  return dummy.next
}

var mergeKLists = function (lists) {
  let ans = null;
  for (let k = 0; k < lists.length; k++) {
    ans = mergeTwoList(ans, lists[k])
  }
  return ans;
};



// 作者：chu-peng-fei
// 链接：https://leetcode-cn.com/problems/merge-k-sorted-lists/solution/jsjie-fa-tong-su-yi-dong-leetcode23-he-b-g2j3/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。