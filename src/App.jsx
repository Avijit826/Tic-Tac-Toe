import { useState } from 'react'
import './App.css'
const itemArray = new Array(9).fill('empty')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCross: false,
      winMessage: '',
    }
    this.reloadGame = this.reloadGame.bind(this)
    this.checkIsWinner = this.checkIsWinner.bind(this)
    this.changeItem = this.changeItem.bind(this)
  }
  reloadGame() {
    this.setState({
      isCross: (this.state.isCross = false),
      winMessage: (this.state.winMessage = false),
    })
    itemArray.fill('empty', 0, 9)
  }

  checkIsWinner() {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      this.setState({
        winMessage: (this.state.winMessage = `${itemArray[0]} Won`),
      })
    } else if (
      itemArray[3] !== 'empty' &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      this.setState({
        winMessage: (this.state.winMessage = `${itemArray[3]} Won`),
      })
    } else if (
      itemArray[6] !== 'empty' &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      this.setState({
        winMessage: (this.state.winMessage = `${itemArray[6]} Won`),
      })
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      this.setState({
        winMessage: (this.state.winMessage = `${itemArray[0]} Won`),
      })
    } else if (
      itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      this.setState({
        winMessage: (this.state.winMessage = `${itemArray[1]} Won`),
      })
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      this.setState({
        winMessage: (this.state.winMessage = `${itemArray[2]} Won`),
      })
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      this.setState({
        winMessage: (this.state.winMessage = `${itemArray[0]} Won`),
      })
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      this.setState({
        winMessage: (this.state.winMessage = `${itemArray[2]} Won`),
      })
    }
  }
  changeItem(itemNumber) {
    if (winMessage) {
      console.log('Win')
    }

    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'Cross' : 'Circle'
      this.setState({ isCross: (this.state.isCross = !isCross) })
    } else {
      console.log('already filled')
    }
    checkIsWinner()
  }
  render() {
    return (
      <main>
        <h2>Tic Tac Toe</h2>
        <h3>{winMessage}</h3>
        <div className='grid card'>
          {itemArray.map((item, index) => (
            <button disabled={winMessage} onClick={() => changeItem(index)}>
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => reloadGame()}>Reload Game</button>
      </main>
    )
  }
}

export default App
