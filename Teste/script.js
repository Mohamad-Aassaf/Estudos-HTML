// script.js
document.addEventListener("DOMContentLoaded", function() {
    const svg = d3.select("#map");
    const points = [
        {x: 244, y: 222},
        {x: 260, y: 345},
        {x: 500, y: 300},
        {x: 700, y: 400},
        {x: 800, y: 500}
    ];

    // Desenha os pontos no mapa
    svg.selectAll("circle.point")
        .data(points)
        .enter()
        .append("circle")
        .attr("class", "point")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 10);

    // Adiciona um personagem no primeiro ponto
    let character = svg.append("circle")
        .attr("class", "character")
        .attr("cx", points[0].x)
        .attr("cy", points[0].y)
        .attr("r", 10);

    // Mover o personagem ao clicar nos pontos
    svg.selectAll("circle.point").on("click", function(event, d) {
        character.transition()
            .duration(1000)
            .attr("cx", d.x)
            .attr("cy", d.y);
    });
});
