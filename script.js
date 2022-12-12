var data = [
    {"Game": "Valorant", "Film": "Titanic", "Serie": "Grey's Anatomy", "Artist": "Adele", "Bøker": "Nevermoor"},
    {"Game": "Minecraft", "Film": "Karate Kid", "Serie": "Lost In Space", "Artist": "Lewis Capaldi", "Bøker": "Percy Jackson"},
    {"Game": "MFS2020", "Film": "Titanic", "Serie": "Heart Stopper", "Artist": "Benson Boone", "Bøker": "Heart Stopper"},
    {"Game": "CS:GO", "Film": "Fast and Furious", "Serie": "Young Royals", "Artist": "Tom Odell", "Bøker": "Harry Potter"},
    {"Gane": "FS2019", "Film": "Skjelvet", "Serie": "Wednesday", "Artist": "Mariah Carey", "Bøker": "Full Circle"}];

function arrayToTable(data) {
    var table = document.createElement("table");
  
    data.forEach(function(rowData) {
        var row = document.createElement("tr");
      
        Object.keys(rowData).forEach(function(key) {
            var cell = document.createElement("td");
            cell.appendChild(document.createTextNode(rowData[key]));
            row.appendChild(cell);
        });
      
        table.appendChild(row);
    });
      
    return table;
}

var table = arrayToTable(data);

var container = document.querySelector("#table-container");
container.appendChild(table);

      