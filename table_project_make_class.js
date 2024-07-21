const csvFile = document.getElementById('file_inp');
const upload = document.getElementById('upload');
const cofidis = document.getElementById('cofidis');
const contriesWithCaps = document.getElementById('contries_w_caps');
let csvArrayObject = [];
let table = document.getElementById('csvtable');
table.innerHTML = "";

$("#cofidis").hide();
$("#contries_w_caps").hide();

$(document).ready(function() {
  $("#upload").click(function() {
    $("#cofidis").show();
  });
});

$(document).ready(function() {
  $("#upload").click(function() {
    $("#contries_w_caps").show();
  });
});

upload.addEventListener('click',()=>{
  uploadWholeTable(csvFile);

  cofidis.addEventListener('click', ()=>{
    cofidisFilter(csvFile);
  })

  contriesWithCaps.addEventListener('click', ()=>{
    mapNationalities(csvFile);
  })
})

function uploadWholeTable(csvFile){
   Papa.parse(
    csvFile.files[0],
    {
      download: true,
      header: true,
      complete: function(results){
        table = document.getElementById('csvtable');
        table.innerHTML = "";

        () => {
          const th = table.insertRow;
          th.insertCell().textContent = "Name";
          th.insertCell().textContent = "Team";
          th.insertCell().textContent = "Date of birth";
          th.insertCell().textContent = "Height";
          th.insertCell().textContent = "Weight";
          th.insertCell().textContent = "Nationality";
          table.append(th);
        }

        csvArrayObject = results.data;
        console.log(csvArrayObject);
        csvArrayObject.forEach(putElementIntoTable);
      }
    }
  )
}

function cofidisFilter(csvFile){
  Papa.parse(
   csvFile.files[0],
   {
     download: true,
     header: true,
     complete: function(results){
      table = document.getElementById("csvtable");
      table.innerHTML = "";

      () => {
        const th = table.insertRow;
        th.insertCell().textContent = "Name";
        th.insertCell().textContent = "Team";
        th.insertCell().textContent = "Date of birth";
        th.insertCell().textContent = "Height";
        th.insertCell().textContent = "Weight";
        th.insertCell().textContent = "Nationality";
        table.append(th);
      }

       csvArrayObject = results.data;
       let cofidisFilter = csvArrayObject.filter((x) => {return x.team === "Cofidis "})
       console.log(cofidisFilter);
       cofidisFilter.forEach(putElementIntoTable);
     }
   }
 )
}

function mapNationalities(csvFile){
  Papa.parse(
   csvFile.files[0],
   {
     download: true,
     header: true,
     complete: function(results){
      table = document.getElementById("csvtable");
      table.innerHTML = "";

      () => {
        const th = table.insertRow;
        th.insertCell().textContent = "Name";
        th.insertCell().textContent = "Team";
        th.insertCell().textContent = "Date of birth";
        th.insertCell().textContent = "Height";
        th.insertCell().textContent = "Weight";
        th.insertCell().textContent = "Nationality";
        table.append(th);
      }

      csvArrayObject = results.data;
      let mapNationality = csvArrayObject.map((x) => {return x.nationality + " is a country"});
      console.log(mapNationality);
      let isAContryNationality = csvArrayObject;

      console.log(isAContryNationality.nationality)

      csvArrayObject.forEach((object, index) => object.nationality = mapNationality[index])

      console.log(isAContryNationality);
      isAContryNationality.forEach(putElementIntoTable);
     }
   }
 )
}

function putElementIntoTable(object){
  const tr = table.insertRow();
  tr.insertCell().textContent = object.name;
  tr.insertCell().textContent = object.team;
  tr.insertCell().textContent = object.date_of_birth;
  tr.insertCell().textContent = object.height;
  tr.insertCell().textContent = object.weight;
  tr.insertCell().textContent = object.nationality;
  table.append(tr);
}

