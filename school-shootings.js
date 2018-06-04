var samples = [];
var iterateTime = 250;
var years = 1999;
  

function preload() {
  table = loadTable('../data/school-shootings-data.csv', 'csv', function(success){
  }, function(err){
    console.log(err);
  });
  for (var i =0; i<5; i++){
    var filename = 'samples/' + i + '.wav';
    var s = loadSound(filename);
    samples.push(s);
  }
}
 
function setup(){
    all_shootings = table.getRows();
    createCanvas(1000, 500);
    nextRow(1);
    textSize(20);
    
}


function nextRow(i){

  
    years = all_shootings[i]['arr'][7];
    
    let long = all_shootings[i]['arr'][41];
    var panning = map(long,-159,-71,-1,1);
    
    let weapon = all_shootings[i]['arr'][38];
    
    

    
  setTimeout(function(){
      
    text(years, width/2, height/10+(years-1998)*20);  
      
    if(weapon.includes("handgun")){
        samples[2].pan(panning);
        samples[2].play();
    } else if(weapon.includes("rifle")){
        samples[1].pan(panning);
        samples[1].play();
    } else if(weapon.includes("revolver")){
        samples[4].pan(panning);
        samples[4].play();
    } else if(weapon.includes("shotgun")){
        samples[3].pan(panning);
        samples[3].play();
    }  else {
        samples[0].pan(panning);
        samples[0].play();
    }
    
      
    if (i < all_shootings.length){
      nextRow(i+1);
    }
  }, iterateTime)
}

//add 2 samples
//column 5 - date
//column 38 - weapon

//shot 0
//
//handgun 2
// shotgun, revolver, rifle