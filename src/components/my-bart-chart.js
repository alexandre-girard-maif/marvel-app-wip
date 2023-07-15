import { useEffect } from "react";
import * as d3 from 'd3';

function MyBartChart(props) {
    const {
        //data,
        outerRadius,
        innerRadius,
    } = props;

    let data = [
        { letter: "A", frequency: .08167 },
        { letter: "B", frequency: .01492 },
        { letter: "C", frequency: .02782 },
        { letter: "D", frequency: .04253 },
        { letter: "E", frequency: .12702 },
    ]

    useEffect(() => {
        drawChart();
    }, [data]);


    function drawChart() {
        var margin = { top: 20, right: 20, bottom: 70, left: 40 },
            width = 600 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        // Remove the old svg
        d3.select('#bar-container')
            .select('svg')
            .remove();

        // Declare the x (horizontal position) scale.
        const x = d3.scaleBand()
            .domain(d3.groupSort(data, ([d]) => -d.frequency, (d) => d.letter)) // descending frequency
            .range([margin.left, width - margin.right])
            .padding(0.1);

        // Declare the y (vertical position) scale.
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d.frequency)])
            .range([height - margin.bottom, margin.top]);

        // Create new svg
        const svg = d3
            .select('#pie-container')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        // Add a rect for each bar.
        svg.append("g")
            .attr("fill", "steelblue")
            .selectAll()
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d.letter))
            .attr("y", (d) => y(d.frequency))
            .attr("height", (d) => y(0) - y(d.frequency))
            .attr("width", x.bandwidth());

        // Add the x-axis and label.
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

        // Add the y-axis and label, and remove the domain line.
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", -margin.left)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("↑ Frequency (%)"));
    }

    return <div id="bar-container" />;
}

export default MyBartChart;