
window.onload = function() {
  var num;
  var box;
  var gameOver=false;
  var filled;
  var ctx;
  var turn = 1;
  var symbol;
  var winner;
  filled = [false,false,false,false,false,false,false,false,false];
  symbol = ['','','','','','','','',''];
  winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  var n = document.getElementById("new");
  n.addEventListener("click", newgame);

  document.getElementById("tic").addEventListener("click", function(e)
  {
    boxClick(e.target.id)
  });

  function newgame()
  {
    document.location.reload();
  }

  function boxClick(numid)
  {
    box = document.getElementById(numid);
    ctx = box.getContext("2d");
    switch (numid) {
      case "canvas1": num=1;

        break;
      case "canvas2": num=2;

        break;
      case "canvas3": num=3;

        break;
      case "canvas4": num=4;

        break;
      case "canvas5": num=5;

        break;
      case "canvas6": num=6;

        break;
      case "canvas7": num=7;

        break;
      case "canvas8": num=8;

        break;
      case "canvas9": num=9;

        break;
    }

    if(filled[num-1]==false)
    {
      if(gameOver==false)
      {
          if(turn%2==0)
          {
            ctx.beginPath();
            ctx.moveTo(15,15);
            ctx.lineTo(85,85);
            ctx.moveTo(85,15);
            ctx.lineTo(15,85);
            ctx.strokeStyle = "dodgerblue";
            ctx.stroke();
            ctx.closePath();
            symbol[num-1] = 'X';
          }
          else
          {
            ctx.beginPath();
            ctx.arc(50,50,35,0,360,false);
            ctx.strokeStyle = "dodgerblue";
            ctx.stroke();
            ctx.closePath();
            symbol[num-1] = 'O';
          }
          turn++;
          filled[num-1]=true;
          var s = symbol[num-1];
          if(check(s)) gameOver = true; 
          if(turn>9 && gameOver==false)
          {
            document.getElementById("result").innerText = "Game OVER! IT WAS A DRAW!";
          }
      }
      else
      {
        alert("Game is over, please restart it");
      }

    }
    else
    {
      alert("This box is already filled, please choose another one");
    }
  }

  function check(s)
  {
    for(var i=0;i<winner.length;i++)
    {
      if(symbol[winner[i][0]]==s && symbol[winner[i][1]]==s && symbol[winner[i][2]]==s)
      {
        gameOver = true;
        document.getElementById("result").innerText = "Player '" + s + "' won!";
        return true;
      }
    }
    return false;
  }
}
