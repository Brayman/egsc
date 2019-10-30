import React from 'react';
import logo from './logo.svg';
import './App.css';
const usersbd = [
  {
    id: 1,
    first_name: "Artem",
    second_name: "Rakitskiy",
    age: 22,
    img: "https://sun9-59.userapi.com/c855332/v855332592/adcb0/d34-TO_I7m4.jpg",
    tag: "brayman"
  },
  {
    id: 2,
    first_name: "Alex",
    second_name: "Guest",
    age: 22,
    img: "https://sun9-66.userapi.com/c844416/v844416251/149850/MxiQTV4Oyfk.jpg",
    tag: "BR"
  }
]
class Menu extends React.Component {
  render() {
    console.log();
    const list = this.props.users;
    return (
      <div className="Menu">
        <h3>personal_db_list:</h3>
        {list.map(
          (arr) => {
            return (
              <p>{arr.first_name+" "+ arr.second_name}</p>
            )
          }
        )}<p className="active menu-item"></p>
        <p className="menu-item"></p>
        <p className="menu-item"></p>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      
      <div className="Profile">
        <img src="https://sun9-59.userapi.com/c855332/v855332592/adcb0/d34-TO_I7m4.jpg"/>

      </div>
      <Menu users={usersbd}/>
    </div>
  );
}

export default App;
