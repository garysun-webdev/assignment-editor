import React, { Component } from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import RelativeDate from "../RelativeDate";

import "./Progress.css";

class Progress extends Component {
  constructor() {
    super();
    this.chartData = this.chartData.bind(this);
    this.chartOptions = this.chartOptions.bind(this);
  }

  static propTypes = {
    countData: PropTypes.number.isRequired,
    wordLimit: PropTypes.number.isRequired,
    wordCount: PropTypes.number.isRequired,
    dueDate: PropTypes.string.isRequired
  };

  chartData() {
    const labels = this.props.countData.map(
      (label, index) => `${index} minute`
    );
    const horizLine = this.props.countData.map(label => this.props.wordLimit);

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Word Count",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(109,36,244,0.4)",
          borderColor: "rgba(109,36,244,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(109,36,244,1)",
          pointBackgroundColor: "rgba(109,36,244,0)",
          pointBorderWidth: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.countData
        },
        {
          label: "Word Limit",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(109,36,244,0.4)",
          borderColor: "rgba(109,36,244,0.6)",
          borderCapStyle: "butt",
          borderDash: [10, 5],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(109,36,244,0)",
          pointBackgroundColor: "rgba(109,36,244,0)",
          pointBorderWidth: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: horizLine
        }
      ]
    };

    return data;
  }

  chartOptions() {
    const wordLimitMax = this.props.wordLimit;

    const options = {
      scales: {
        yAxes: [
          {
            display: false,
            ticks: {
              suggestedMin: 0,
              beginAtZero: true,
              suggestedMax: wordLimitMax
            }
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 80,
          bottom: 0
        }
      }
    };

    return options;
  }

  render() {
    const { wordCount, countData } = this.props;
    const timeSpent = countData.length;
    const speed = wordCount / timeSpent;
    const finishTime = Math.round((this.props.wordLimit - wordCount) / speed);

    return (
      <div className="paper Progress-main">
        <Line data={this.chartData()} options={this.chartOptions()} />

        <div className="Progress-item">
          <label>Current word count: </label>
          {wordCount}
        </div>

        <div className="Progress-item">
          <label>Time spent so far: </label>
          {countData.length}
          <label> min</label>
        </div>

        <div className="Progress-item">
          <label>Due in: </label>
          <RelativeDate dueDateString={this.props.dueDate} />
        </div>

        <div className="Progress-item">
          <label>Estimated finish time: in</label>
          {finishTime}
          <label> min</label>
        </div>
      </div>
    );
  }
}

export default Progress;
