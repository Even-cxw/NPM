
  // 生成精灵图JSON网址: https://www.leshylabs.com/apps/sstool/;
  /**
   * @desc 动画函数，移动雪碧图
   * @param {Element} dom 需要插入的dom
   * @param {string} key 雪碧图名称
   * @param {number} speed 动画频率/毫秒
   */
  class AnimationHelp {
    constructor(dom, {jsonData, imageUrl}, speed) {
      // 记录动画开启/结束状态
      this.isStart = false;
      // 存雪碧图的宽高、x\y坐标点。
      this.imageAttribute = {};
      // 当前时间
      this.startTime = window.performance.now();
      // 当前动画x,y下角标
      this.nowFramesIndex = 0;
      this.dom = document.getElementById(`${dom}`);
      this.speed = speed;
      this.imageUrl = imageUrl;
      this.jsonData = jsonData;
      this.getJSONData();
    }

    // 得到雪碧图JSON数据
    getJSONData() {
      // let url = './static/allAnimation.json';
      // $.get(url, result => {
        let keyData = this.jsonData;
        this.imageAttribute.height = keyData[0].height;
        this.imageAttribute.width = keyData[0].width;
        this.imageAttribute.childrens = [];
        for (let item of keyData) {
          let value = [];
          value.push(item.x);
          value.push(item.y);
          this.imageAttribute.childrens.push(value);
        }
        console.log('this.imageAttribute', this.imageAttribute);
        this.initSpriteMap();
        this.start();
      // });
    }

    // 初始化雪碧图
    initSpriteMap() {
      this.spriteMapDiv = document.createElement('div');
      this.dom.appendChild(this.spriteMapDiv);
      let divCss = {
        height: this.imageAttribute.height + 'px',
        width: this.imageAttribute.width + 'px',
        overflow: 'hidden'
      };
      $(this.spriteMapDiv).css(divCss);
      this.img  = document.createElement('img');
      this.img.src = this.imageUrl
      $(this.spriteMapDiv).append(this.img);
    }

    // 停止动画
    stop() {
      if (!this.isStart) return;
      cancelAnimationFrame(this.animationId);
      let initX = this.imageAttribute.childrens[0][0];
      let initY = this.imageAttribute.childrens[0][1];
      this.img && $(this.img).css("transform", `translate(-${initX}px, -${initY}px)`);
      this.isStart = false;
    }

    // 开始动画
    start() {
      if (this.isStart) return;
      this.isStart = true;
      this.repeatAnimation();
    }

    // 循环开始动画
    repeatAnimation() {
      let that = this;
      that.animationId = requestAnimationFrame(function fn(timestamp) {
        that.rander(timestamp);
        that.animationId = requestAnimationFrame(fn);
      });
    }

    rander(timestamp) {
      const elapsedTime = timestamp - this.startTime;
      if (elapsedTime > this.speed) {
        this.startTime = timestamp;
        if (this.imageAttribute.childrens.length <= this.nowFramesIndex) {
          this.nowFramesIndex = 0;
        }
        let x = this.imageAttribute.childrens[this.nowFramesIndex][0];
        let y = this.imageAttribute.childrens[this.nowFramesIndex][1];
        $(this.img).css("transform", `translate(-${x}px, -${y}px)`);
        this.nowFramesIndex++;
      }
    }
  }

