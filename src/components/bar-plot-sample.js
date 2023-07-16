import * as d3 from 'd3';
import { useEffect } from 'react';

export default function BarPlotSample(props) {
    const {
        data,
        outerRadius,
        innerRadius,
    } = props;

    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 300 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

    useEffect(() => {
        drawChart();
    }, [data]);

    function drawChart() {
        // Remove the old svg
        d3.select('#bar-plot-container')
            .select('svg')
            .remove();

        // append the svg object to the body of the page
        let svg = d3.select("#bar-plot-container")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // X axis
        const x = d3.scaleBand()
            .range([0, width])
            .domain(data.map(function (d) { return d.name; }))
            .padding(0.2);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Add Y axis
        const y = d3.scaleLinear()
            .domain([0, 2000])
            .range([height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

        // Bars
        svg.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(d.name); })
            .attr("y", function (d) { return y(d.value); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.value); })
            .attr("fill", "#69b3a2")
    }
    return (<div id="bar-plot-container" />);
}