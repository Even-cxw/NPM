

class Component {
  constructor(game) {
    console.log('Component')
    this.game = game
    this.init()
  }
  init() {
    this.game.willmount()
    let dom = this.game.render()
    console.log('dom', dom);
    this.game.didmount()
  }
}