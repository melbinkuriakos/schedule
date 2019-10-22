import React from 'react';
import '../Common/index.css';
import 'tachyons';
import GameCardComponent from './GameCardComponent';

class GameMainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            status:'upcoming',
            type:'All',
            page:1,
            schedule:[]
        }
    }

    loadData = () => {

        const matchType = this.state.type;
        const matchStatus = this.state.status;
        const matchPage = this.state.page;
        const graphqlQuery ={
            query:`{
            schedule(type:"${matchType}",status:"${matchStatus}",page:${matchPage}){
            matchID,
            seriesName
        }
      }`
        };
        fetch('https://api.devcdc.com/cricket',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(graphqlQuery)
        }).then(res => res.json()).then((res) =>{
            this.setState({schedule: res.data.schedule});
        });

        console.log(this.state.status);
        console.log(this.state.type);
        console.log(this.state.page);

    };

    setParameterAndLoad = (paramName, status) => {
        if(paramName === 'type'){
            this.setState({type: status})
        }
        if(paramName === 'status'){
            this.setState({status: status})
        }
        if(paramName === 'page'){
            this.setState({page: status})
        }

        this.loadData();
    };

    componentDidMount() {
        this.loadData('All', 'upcoming', 0);
    }

    render() {
    const schedule = this.state.schedule;
    const type = this.state.type;
        const status = this.state.status;
        return (
            <div className="App background">
                <h2>Schedule</h2>
                <div className="bg-white pt4 mb3">
                    <section className="flex justify-center">
                        <button className="f7 black-60 bg-near-white link dim ba ph3 pv2 mb2 dib b--black-20 br-3" onClick={()=>this.setParameterAndLoad('status', 'upcoming')}>Upcoming</button>
                        <button className="f7 black-60 bg-near-white link dim bt bb ph3 pv2 mb2 dib b--black-20 br-3" onClick={()=>this.setParameterAndLoad('status', 'live')}>Running</button>
                        <button className="f7 black-60 bg-near-white link dim ba ph3 pv2 mb2 dib b--black-20 br-3" onClick={()=>this.setParameterAndLoad('status', 'completed')}>Completed</button>
                    </section>

                    <section className="">
                        <div className="f7 bb bw1 b--black-10 flex justify-between">
                            <a className={`dib link pa2 ${type === 'Upcoming' ? 'b bb bw2 b--light-red' : ''}`} onClick={()=>this.setParameterAndLoad('type', 'upcoming')}>All</a>
                            <a className={`dib link pa2 ${type === 'International' ? 'b bb bw2 b--light-red' : ''}`} onClick={()=>this.setParameterAndLoad('type', 'International')}>International</a>
                            <a className={`dib link pa2 ${type === 'Domestic' ? 'b bb bw2 b--light-red' : ''}`} onClick={()=>this.setParameterAndLoad('type', 'Domestic')}>Domestic</a>
                        </div>
                    </section>
                    <GameCardComponent games={schedule}/>
                </div>


            </div>
        );
    }
}


export default GameMainComponent;
