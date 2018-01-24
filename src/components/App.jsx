import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';


class App extends React.Component {

  constructor(props) {
    console.log('1. Collect Ingredients');
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentWillMount() {
    console.log('2. Open peanut butter jar');
  }

  componentDidMount(){
    console.log('4. knife out jar');
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      130000
    );
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }


  componentWillReceiveProps() {
    console.log('5. grab bread two');
  }

  shouldComponentUpdate() {
    console.log('6. Repeat steps 2-4');
    return true;
  }

  componentWillUpdate() {
    console.log('7. put together');
  }

  componentDidUpdate() {
    console.log('8. cut');
  }

  updateTicketElapsedWaitTime() {
      let newMasterTicketList = this.state.masterTicketList.slice();
      newMasterTicketList.forEach((ticket) =>
        ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList})
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
    console.log('NEW TICKET');
  }

  render(){
    console.log('3. knife in jar');
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
