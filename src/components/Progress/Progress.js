import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import RelativeDate from '../RelativeDate';

class Progress extends Component {
  constructor() {
    super();
    this.chartData = this.chartData.bind(this);
    this.chartOptions = this.chartOptions.bind(this);
  }

  chartData() {
    const labels = this.props.countData.map((label,index)=>(`${index} minute`));

    const data = {
      labels: labels,
      datasets: [
        {
          label: "word count",
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(109,36,244,0.4)',
          borderColor: 'rgba(109,36,244,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.countData
        }
      ]
    };
    return data;
  }

  chartOptions() {
    
    const wordLimitMax = this.props.wordLimit*1.2;

    const options = {
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    suggestedMin: 0, 
                    beginAtZero: true,
                    suggestedMax: wordLimitMax
                }
                
            }]
        }
    };

    return options;
  }

  render() {
    
    const {wordCount, countData} = this.props;
    const timeSpent = countData.length;
    const speed = wordCount/timeSpent;
    const finishTime = (this.props.wordLimit-wordCount)/speed;

    return (

      <div className="paper">
        <Line data={this.chartData()} options={this.chartOptions()} />
      
        <div>
          <p>
            Current word count: {wordCount}  
          </p>
          <p>
            Time spent so far: {countData.length} min  
          </p>
          <p>
            Due in: <RelativeDate dueDateString={this.props.dueDate}/>
          </p>
          <p>
            Estimated finish time: in {finishTime} min
          </p>
        </div>

      </div>
    );
  }
}


export default Progress;
