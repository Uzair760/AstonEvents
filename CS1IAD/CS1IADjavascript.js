function showDesc() {
  var x = document.getElementById("allTypes").value;
  if (x == "Football") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! Score goals, have fun and improve on your fitness. (10:00 BST, 15/05/2021)";
    document.getElementById("footballPictures").style.display = 'block';
    document.getElementById("cricketPictures").style.display = 'none';
    document.getElementById("rugbyPictures").style.display = 'none';
    document.getElementById("artsPictures").style.display = 'none';
    document.getElementById("historyPictures").style.display = 'none';
    document.getElementById("theatrePictures").style.display = 'none';
    document.getElementById("podcastPictures").style.display = 'none';
    document.getElementById("radioPictures").style.display = 'none';
    document.getElementById("musicPictures").style.display = 'none';
  }
  else if (x == "Cricket") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! A great team sport in which you will not only have a lot of fun, but learn to improve on various skills. (12:00 BST, 15/05/2021)";
    document.getElementById("footballPictures").style.display = 'none';
    document.getElementById("cricketPictures").style.display = 'block';
    document.getElementById("rugbyPictures").style.display = 'none';
    document.getElementById("artsPictures").style.display = 'none';
    document.getElementById("historyPictures").style.display = 'none';
    document.getElementById("theatrePictures").style.display = 'none';
    document.getElementById("podcastPictures").style.display = 'none';
    document.getElementById("radioPictures").style.display = 'none';
    document.getElementById("musicPictures").style.display = 'none';
  }
  else if (x == "Rugby") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! Improve your physical strength and stamina while having fun. (14:00 BST, 15/05/2021)";
    document.getElementById("footballPictures").style.display = 'none';
    document.getElementById("cricketPictures").style.display = 'none';
    document.getElementById("rugbyPictures").style.display = 'block';
    document.getElementById("artsPictures").style.display = 'none';
    document.getElementById("historyPictures").style.display = 'none';
    document.getElementById("theatrePictures").style.display = 'none';
    document.getElementById("podcastPictures").style.display = 'none';
    document.getElementById("radioPictures").style.display = 'none';
    document.getElementById("musicPictures").style.display = 'none';
  }
  else if (x == "Arts") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! Join a group of people in discovering Arts around the country and sharing your own art. (10:00 BST, 16/05/2021)";
    document.getElementById("footballPictures").style.display = 'none';
    document.getElementById("cricketPictures").style.display = 'none';
    document.getElementById("rugbyPictures").style.display = 'none';
    document.getElementById("artsPictures").style.display = 'block';
    document.getElementById("historyPictures").style.display = 'none';
    document.getElementById("theatrePictures").style.display = 'none';
    document.getElementById("podcastPictures").style.display = 'none';
    document.getElementById("radioPictures").style.display = 'none';
    document.getElementById("musicPictures").style.display = 'none';
  }
  else if (x == "History") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! Visit museums around the country and learn new things about the past. (12:00 BST, 16/05/2021)";
    document.getElementById("footballPictures").style.display = 'none';
    document.getElementById("cricketPictures").style.display = 'none';
    document.getElementById("rugbyPictures").style.display = 'none';
    document.getElementById("artsPictures").style.display = 'none';
    document.getElementById("historyPictures").style.display = 'block';
    document.getElementById("theatrePictures").style.display = 'none';
    document.getElementById("podcastPictures").style.display = 'none';
    document.getElementById("radioPictures").style.display = 'none';
    document.getElementById("musicPictures").style.display = 'none';
  }
  else if (x == "Theatre") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! If you enjoy acting and watching plays, this event is perfect for you. (14:00 BST, 16/05/2021)";
    document.getElementById("footballPictures").style.display = 'none';
    document.getElementById("cricketPictures").style.display = 'none';
    document.getElementById("rugbyPictures").style.display = 'none';
    document.getElementById("artsPictures").style.display = 'none';
    document.getElementById("historyPictures").style.display = 'none';
    document.getElementById("theatrePictures").style.display = 'block';
    document.getElementById("podcastPictures").style.display = 'none';
    document.getElementById("radioPictures").style.display = 'none';
    document.getElementById("musicPictures").style.display = 'none';
  }
  else if (x == "Podcast") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! Discuss your opinions on different topics with other students. (10:00 BST, 17/05/2021)";
    document.getElementById("footballPictures").style.display = 'none';
    document.getElementById("cricketPictures").style.display = 'none';
    document.getElementById("rugbyPictures").style.display = 'none';
    document.getElementById("artsPictures").style.display = 'none';
    document.getElementById("historyPictures").style.display = 'none';
    document.getElementById("theatrePictures").style.display = 'none';
    document.getElementById("podcastPictures").style.display = 'block';
    document.getElementById("radioPictures").style.display = 'none';
    document.getElementById("musicPictures").style.display = 'none';
  }
  else if (x == "Radio") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! Want to pursure a career in radio hosting? Join our radio team and help broadcast to other Aston University students. (12:00 BST, 17/05/2021)";
    document.getElementById("footballPictures").style.display = 'none';
    document.getElementById("cricketPictures").style.display = 'none';
    document.getElementById("rugbyPictures").style.display = 'none';
    document.getElementById("artsPictures").style.display = 'none';
    document.getElementById("historyPictures").style.display = 'none';
    document.getElementById("theatrePictures").style.display = 'none';
    document.getElementById("podcastPictures").style.display = 'none';
    document.getElementById("radioPictures").style.display = 'block';
    document.getElementById("musicPictures").style.display = 'none';
  }
  else if (x == "Live Music") {
    document.getElementById("demo1").innerHTML = "Choose " + x + "! Enjoy music? We'll have a wide range of local musicians performing at this event. (14:00 BST, 17/05/2021)";
    document.getElementById("footballPictures").style.display = 'none';
    document.getElementById("cricketPictures").style.display = 'none';
    document.getElementById("rugbyPictures").style.display = 'none';
    document.getElementById("artsPictures").style.display = 'none';
    document.getElementById("historyPictures").style.display = 'none';
    document.getElementById("theatrePictures").style.display = 'none';
    document.getElementById("podcastPictures").style.display = 'none';
    document.getElementById("radioPictures").style.display = 'none';
    document.getElementById("musicPictures").style.display = 'block';
  }
}

function liked() {
    var btn = document.getElementById("like");
    if (btn.value=="Like") {
      btn.value = "Liked!";
      btn.style.background = "#1a0033";
      btn.style.color = "white";
    }
    else {
      btn.value = "Like";
      btn.style.background = "white";
      btn.style.color = "black";
    }
}
