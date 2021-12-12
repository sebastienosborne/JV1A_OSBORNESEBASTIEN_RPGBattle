//Life Points des ennemies//
    var WarlockLP = 100
    var SkeletonLP = 100
    var SpiderLP = 100
//Life Points et Attack Points des héros//
    var KingLP = 100
    var KingATP = 25
    var BoyLP = 80
    var BoyATP = 20
    var BuddaLP = 60
    var BuddaATP = 15
    var SnakeLP = 40
    var SnakeATP = 10

//declaration des variables//

    var comment = document.getElementById("dialogue")
    var Actions = document.getElementById("actions")[0];
    var Attack = document.getElementById("Attaque")
    
    var King2 = document.getElementById("king")
    var Boy2 = document.getElementById("boy")
    var Budda2 = document.getElementById("budda")
    var Snake2 = document.getElementById("snake")
    
    var KingLP2 = document.getElementById("KingLP")
    var BoyLP2 = document.getElementById("BoyLP")
    var BuddaLP2 = document.getElementById("BuddaLP")
    var SnakeLP2 = document.getElementById("SnakeLP")
    
    var Warlock2 = document.getElementById("warlock");
    var Skeleton2 = document.getElementById("skeleton");
    var Spider2 = document.getElementById("spider");

    var WarlockLP2 = document.getElementById("WarlockLP");
    var SkeletonLP2 =  document.getElementById("SkeletonLP");
    var SpiderLP2 = document.getElementById("SpiderLP");
    
    
    
//JS pour la parti combat//
    King2.onclick = function() {
        comment.innerHTML = "Choose an action for the King";
        Actions.style.visibility = "visible";
        Attack.onclick = function() {
            
            comment.innerHTML = "Choose an ennemy to attack";
            Warlock.onclick = function() {
                WarlockLP = WarlockLP - KingATP
                WarlockLP.innerHTML = "<h3>" + WarlockLP + "/100 PV </h3>";
                comment.innerHTML = "Warlock takes " + KingATP + 
                " damage fool!!<br>Select another character sucker";
                Warlock.onclick = "none";
                Skeleton.onclick = "none";
                Spider.onclick = "none";
            }
               
            Skeleton.onclick = function() {       //ici image skulle//
               SkeletonLP = SkeletonLP - KingATP //ici vie - ataque//
               SkeletonLP.innerHTML = "<h3>" + SkeletonLP + "/75 PV </h3>"; //change hp ds info ennemies//
               comment.inner = "Skeleton takes " + KingATP +  //indic degat infligé//
               " damage fool!!<br>Select another character sucker"; // fin indic//
               Warlock.onclick = "none";  // enleve le onclick pr chaque mob//
               Skeleton.onclick = "none";
               Spider.onclick = "none";
            }
            
               Spider.onclick = function() {
               SpiderLP = SpiderLP - KingATP
               SpiderLP.innerHTML = "<h3>" + WarlockLP + "/50 PV </h3>";
               comment.innerHTML = "Spider takes " + KingATP + 
               " damage fool!!<br>Select another character sucker";
               Warlock.onclick = "none";
               Skeleton.onclick = "none";
               Spider.onclick = "none";
            }
            
            
            
            Actions.style.visibility = "hidden"; //disparition fenetre action//
            King.onclick = "none";   //enleve le onclick du perso qui a jouer //
            }
    
    Boy.onclick = function() {
        comment.innerHTML = "Choose an action for the Boy";
        Actions.style.visibility = "visible";
        Attack.onclick = function() {
            comment.innerHTML = "Choose an ennemy to attack";
            Boss.onclick = function() {
                WarlockLP = WarlockLP - BoyATP
                WarlockLP.innerHTML = "<h3>" + WarlockLP + "/100 PV </h3>";
                comment.innerHTML = "Warlock takes " + BoyATP + 
                " damage fool!!<br>Select another character sucker";
                Warlock.onclick = "none";
                Skeleton.onclick = "none";
                Spider.onclick = "none";
            }
               
            Skeleton.onclick = function() {
                SkeletonLP = SkeletonLP - BoyATP
                SkeletonLP.innerHTML = "<h3>" + SkeletonLP + "/75 PV </h3>";
                comment.innerHTML = "Skeleton takes " + BoyATP + 
                " damage fool!!<br>Select another character sucker";
                Warlock.onclick = "none";
                Skeleton.onclick = "none";
                SpiderHTML.onclick = "none";
             }
             
             Spider.onclick = function() {
                SpiderLP = SpiderLP - BoyATP
                SpiderLP.innerHTML = "<h3>" + WarlockLP + "/50 PV </h3>";
                comment.innerHTML = "Spider takes " + BoyATP + 
                " damage fool!!<br>Select another character sucker";
                Warlock.onclick = "none";
                Skeleton.onclick = "none";
                Spider.onclick = "none";
            }
            
            Actions.style.visibility = "hidden";
            Boy.onclick = "none";
            }
   
    Budda.onclick = function() {
        comment.inner = "Choose an action for Budda";
        Actions.style.visibility = "visible";
        Attack.onclick = function() {
            
            comment.innerHTML = "Choose an ennemy to attack";
            Warlock.onclick = function() {
                WarlockLP = WarlockLP - BuddaATP
                WarlockLP.innerHTML = "<h3>" + WarlockLP + "/100 PV </h3>";
                comment.innerHTML = "Warlock takes " + BuddaATP + 
                " damage fool!!<br>Select another character sucker";
                Warlock.onclick = "none";
                Skeleton.onclick = "none";
                Spider.onclick = "none";
            }
               
            Skeleton.onclick = function() {
               SkeletonLP = SkeletonLP - BuddaATP
               SkeletonLP.innerHTML = "<h3>" + SkeletonLP + "/75 PV </h3>";
               comment.innerHTML = "Skeleton takes " + BuddaATP + 
               " damage fool!!<br>Select another character sucker";
               Warlock.onclick = "none";
               Skeleton.onclick = "none";
               Spider.onclick = "none";
            }
            
            Spider.onclick = function() {
               SpiderLP = SpiderLP - BuddaATP
               SpiderLP.innerHTML = "<h3>" + WarlockLP + "/50 PV </h3>";
               comment.innerHTML = "Spider takes " + BuddaATP + 
               " damage fool!!<br>Select another character sucker";
               Warlock.onclick = "none";
               Skeleton.onclick = "none";
               Spider.onclick = "none";
            }
            
            Actions.style.visibility = "hidden";
            Budda.onclick = "none";
            }
            
            SnakeHTML.onclick = function() {
                comment.innerHTML = "Choose an action for the Snake";
                Actions.style.visibility = "visible";
                Attack.onclick = function() {
                    
                    comment.innerHTML = "Choose an ennemy to attack";
                    Warlock.onclick = function() {
                        WarlockLP = WarlockLP - SnakeATP
                        WarlockLP.innerHTML = "<h3>" + WarlockLP + "/100 PV </h3>";
                        comment.innerHTML = "Warlock takes " + SnakeATP + 
                        " damage fool!!<br>Select another character sucker";
                        Warlock.onclick = "none";
                        Skeleton.onclick = "none";
                        Spider.onclick = "none";
                    }
                       
                    Skeleton.onclick = function() {
                       SkeletonLP = SkeletonLP - SnakeATP
                       SkeletonLP.innerHTML = "<h3>" + SkeletonLP + "/75 PV </h3>";
                       comment.innerHTMLs = "Skeleton takes " + SnakeATP + 
                       " damage fool!!<br>Select another character sucker";
                       Warlock.onclick = "none";
                       Skeleton.onclick = "none";
                       Spider.onclick = "none";
                    }
                    
                    Spider.onclick = function() {
                       SpiderLP = SpiderLP - SnakeATP
                       SpiderLP.innerHTML = "<h3>" + WarlockLP + "/50 PV </h3>";
                       comment.innerHTML = "Spider takes " + SnakeATP + 
                       " damage fool!!<br>Select another character sucker";
                       Warlock.onclick = "none";
                       Skeleton.onclick = "none";
                       Spider.onclick = "none";
                    }
                    
                    Actions.style.visibility = "hidden";
                    Snake.onclick = "none";
                    }
                }
        	
            }
        }
    }

/*I don't know what this does :p//
            //function dégats(min = - 10 , max = - 15){
                return Math.floor(Math.random() * (max - min + 1)) + min;*s/