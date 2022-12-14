var tableData = [
    ['Spel', 'Film', 'Serie', 'Artist', 'B&oslash;ker'],
    ['Valorant', 'Harry Potter', "Grey's anatomy", 'Adele', "Nevermoor"],
    ['Minecraft', 'Karate Kid', 'Lost In Space', 'Lewis Capaldi', 'Percy Jackson'],
    ['MFS2020', 'Titanic', 'Heart Stopper', 'Benson Boone', 'Heart Stopper'],
    ['CS:GO', 'Fast and Furious', 'Young Royals', 'Tom Odell', 'Harry Potter'],
    ['FS2019', 'Skjelvet', 'Wednesday', 'Mariah Carey', 'Full Circle']
];


  function createTable() {
    var data = tableData;
    var table = "<table class='tabell'>";

    table += "<thead><tr>";
    for (var i = 0; i < data[0].length; i++) {
      table += "<th>" + data[0][i] + "</th>";
    }
    table += "</tr></thead>";
    table += "<tbody>";
    for (var i = 1; i < data.length; i++) {
      table += "<tr>";
      for (var j = 0; j < data[i].length; j++) {
        table += "<td>" + data[i][j] + "</td>";
      }
      table += "</tr>";
    }
    table += "</tbody></table>";
 
    document.write(table);
  }