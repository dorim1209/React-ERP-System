import React from 'react';
//import Login from './login';
import TimeLog from './timelog';
import Admin from './admin';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    isLogin: true,
    isTimeLog: false,
    isAdmin: false,
    login: false,
    name: '',
    admin:'',
    number: '',
    Timelogs: [],
    dept: '',
    Admins: []
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      number: e.target.value
    });
  };

  pushLogin = (e) => {
    this.login();
    this.TimeLog();
    e.preventDefault();
  }

  isLogin = () => {
    this.setState({ isLogin: true, isTimeLog: false, isAdmin: false })
  }
  isTimeLog = () => {
    this.setState({ isLogin: false, isTimeLog: true, isAdmin: false })
  }
  isAdminTimeLog = () => {
    this.setState({ isLogin: false, isTimeLog: true, isAdmin: true })
  }
  isAdmin = () => {
    this.setState({ isLogin: false, isTimeLog: false, isAdmin: true, login: true })
  }
  login = async () => {
    const {
      data: {
        name,
        admin
      }
    }
      = await axios.get('http://localhost:4000/users', {
        params: {
          result: this.state.number
        }
      })
    await console.log(name,admin);
    await this.setState({ isLogin: false, isTimeLog: true, isAdmin: admin, login: true, name})
  }
  Logout = () => {
    this.setState({ isLogin: true, isTimeLog: false, isAdmin: false, login: false })
  }

  TimeLog = async () => {
    const {
      data: {
        Timelogs
      }
    }
      = await axios.get('http://localhost:4000/timelogs', {
        params: {
          result: this.state.number
        }
      })
    await console.log(Timelogs);
    await this.setState({ Timelogs })

  }

  Admin = async () => {
    this.isAdmin();
    const {
      data: {
        Admins
      }
    }
      = await axios.get('http://localhost:4000/admins', {
/*         params: {
          result: this.state.dept
        } */
      })
    await console.log(Admins);
    await this.setState({ Admins })
  }


  render() {
    const { isLogin, isTimeLog, isAdmin, login, Timelogs, Admins } = this.state;
    return (
      <div className="App">
        <div className="sidebar">
          {login ?
            isAdmin ?
              <ul class="sidenav">
                <li><p onClick={this.Logout}>로그아웃</p></li>
                <li><p class="active" onClick={this.isAdminTimeLog}>근태기록</p></li>
                <li><p onClick={this.Admin}>부서별조회</p></li>
              </ul>
              :
              <ul class="sidenav">
                <li><p onClick={this.Logout}>로그아웃</p></li>
                <li><p class="active" onClick={this.isTimeLog}>근태기록</p></li>
              </ul>
            :
            <ul class="sidenav">
              <li><p class="active" onClick={this.isLogin}>로그인</p></li>
            </ul>
          }
        </div>
        <div className="main">
          {isLogin ?
            <form action="" method="post">
              <div className="container">
                <label for="id"><b>사원번호</b></label>
                <input type="text" value={this.state.number} onChange={this.handleChange} placeholder="사원번호를 입력해주세요." />

                <label for="psw"><b>비밀번호</b></label>
                <input type="password" placeholder="비밀번호를 입력해주세요." />

                <button type="submit" onClick={this.pushLogin}>로그인</button>

              </div>

            </form>

            : isTimeLog ?
              <div>
                <p>{this.state.name}님 반갑습니다.</p>
                <tr>
                  <th>사원번호</th>
                  <th>날짜</th>
                  <th>시간</th>
                  <th>분류</th>
                </tr>
                {Timelogs.map(timelog => (
                  <TimeLog
                    number={timelog.number}
                    date={timelog.date}
                    time={timelog.time}
                    type={timelog.type} />
                ))}

              </div>
              :
              <div>
                <p>관리자님 반갑습니다.</p>
                <tr>
                  <th>부서</th>
                  <th>사원번호</th>
                  <th>이름</th>
                  <th>근무시간</th>
                </tr>
                {Admins.map(admin => (
                  <Admin
                    dept={admin.dept}
                    number={admin.number}
                    name={admin.name}
                    total={admin.total}
                  />
                ))}
              </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
