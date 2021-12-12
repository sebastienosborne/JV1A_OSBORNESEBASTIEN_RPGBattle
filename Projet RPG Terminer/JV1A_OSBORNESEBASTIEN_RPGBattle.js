/*declaration des variables:
Life Points des mobs*/
var WarlockLP = "100"
var SkeletonLP = "75"
var SpiderLP = "50"
//Life Points et Attack Points des héros//
var KingLP = "100"
var KingATP = "25"
var BoyLP = "80"
var BoyATP = "20"
var BuddaLP = "60"
var BuddaATP = "15"
var SnakeLP = "40"
var SnakeATP = "10"
var EnnemiesVengeance= 0
var DegatMonstre = Math.floor(Math.random()*25);
var comment = document.getElementById("dialogue")
var Actions = document.getElementById("actions");
    
    
var King2 = document.getElementById("king")
var Boy2 = document.getElementById("boy")
var Budda2 = document.getElementById("budda")
var Snake2 = document.getElementById("snake")
    
var KingLP2 = document.getElementById("KingLP")
var BoyLP2 = document.getElementById("BoyLP")
var BuddaLP2 = document.getElementById("BuddaLP")
var SnakeLP2 = document.getElementById("SnakeLP")

var KingM = document.getElementById("KingMana")
var BoyM = document.getElementById("BoyMana")
var BuddaM = document.getElementById("BuddaMana")
var SnakeM = document.getElementById("SnakeMana")

var WarlockhpHTML=document.getElementById('Warlockhp')
var SkeletonhpHTML=document.getElementById('Skeletonhp')
var SpiderhpHTML=document.getElementById('Spiderhp')


var WarlockImage = document.getElementById("warlock");
var SkeletonImage = document.getElementById("skeleton");
var SpiderImage = document.getElementById("spider");

var WarlockLP2 = document.getElementById("warlocklp");
var SkeletonLP2 = document.getElementById("skeletonlp");
var SpiderLP2 = document.getElementById("spiderlp");
    

    
/*Affichage de bulles LP pour les mobs*/           
                    

WarlockImage.addEventListener("mouseenter", function(event){
    WarlockLP2.style.visibility="visible";
});

WarlockImage.addEventListener("mouseleave", function(event){
    WarlockLP2.style.visibility="hidden";
});

SkeletonImage.addEventListener("mouseenter", function(event){
    SkeletonLP2.style.visibility="visible";
});

SkeletonImage.addEventListener("mouseleave", function(event){
    SkeletonLP2.style.visibility="hidden";
});

SpiderImage.addEventListener("mouseenter", function(event){
    SpiderLP2.style.visibility="visible";
});

SpiderImage.addEventListener("mouseleave", function(event){
    SpiderLP2.style.visibility="hidden";
});


King2.onclick = KingAttackAction;                 
Boy2.onclick = BoyAttackAction;
Budda2.onclick = BuddaAttackAction;
Snake2.onclick = SnakeAttackAction;   


function KingAttackAction() {
    comment.innerHTML = "Choose an action for the King";
    //Rajouter les options d'action, defense et special//    
    comment.innerHTML = "Choose an ennemy to attack";
        WarlockImage.onclick = function() {
            WarlockhpHTML.innerHTML=WarlockLP -= KingATP
            comment.innerHTML = "Warlock takes " + KingATP + 
            " damage!<br>Select another character";
            WarlockImage.onclick = "none";
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            VerifHpWarlock()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
            VerifHpSkeleton()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
            VerifHpSpider()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
               
        SkeletonImage.onclick = function() {       // ici image skelette//
            SkeletonhpHTML.innerHTML=SkeletonLP -= KingATP 
            comment.innerHTML = "Skeleton takes " + KingATP +  // indique le degat infligé//
            " damage!<br>Select another character"; // fin indication//
            WarlockImage.onclick = "none";  // enlève le onclick pour chaque mob//
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
            
        SpiderImage.onclick = function() {       // ici image skelette//
            SpiderhpHTML.innerHTML=SpiderLP -= KingATP
            comment.innerHTML = "Spider takes " + KingATP +  // indique le degat infligé//
            " damage!<br>Select another character!"; // fin indication//
            WarlockImage.onclick = "none";  // enlève le onclick pour chaque mob//
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
            
        King2.onclick = "none";   //enleve le onclick du perso qui a jouer //
}


function VerifHpWarlock(){
    if (WarlockLP<=0){
        WarlockImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*30);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}


function VerifHpSkeleton(){
    if (SkeletonLP<=0){
        SkeletonImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*25);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}


function VerifHpSpider(){
    if (SpiderLP<=0){
        SpiderImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*20);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}



function BoyAttackAction() {
    comment.innerHTML = "Choose an action for the Boy";
    //Rajouter les options d'action, defense et special//     
    comment.innerHTML = "Choose an ennemy to attack";
        WarlockImage.onclick = function() {
            WarlockhpHTML.innerHTML=WarlockLP -= BoyATP
            comment.innerHTML = "Warlock takes " + BoyATP + 
            " damage!<br>Select another character";
            WarlockImage.onclick = "none";
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            VerifHpWarlock()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
            VerifHpSkeleton()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
            VerifHpSpider()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
               
        SkeletonImage.onclick = function() {       // ici image skelette//
            SkeletonhpHTML.innerHTML=SkeletonLP -= BoyATP 
            comment.innerHTML = "Skeleton takes " + BoyATP +  // indique le degat infligé//
            " damage!<br>Select another character"; // fin indication//
            WarlockImage.onclick = "none";  // enlève le onclick pour chaque mob//
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
            
        SpiderImage.onclick = function() {       // ici image skelette//
            SpiderhpHTML.innerHTML=SpiderLP -= BoyATP
            comment.innerHTML = "Spider takes " + BoyATP +  // indique le degat infligé//
            " damage!<br>Select another character!"; // fin indication//
            WarlockImage.onclick = "none";  // enlève le onclick pour chaque mob//
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
            
        Boy2.onclick = "none";   //enleve le onclick du perso qui a jouer //
}


function VerifHpWarlock(){
    if (WarlockLP<=0){
        WarlockImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*30);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}


function VerifHpSkeleton(){
    if (SkeletonLP<=0){
        SkeletonImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*25);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}


function VerifHpSpider(){
    if (SpiderLP<=0){
        SpiderImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*20);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}



function BuddaAttackAction() {
    comment.innerHTML = "Choose an action for Budda";
    //Rajouter les options d'action, defense et special//     
    comment.innerHTML = "Choose an ennemy to attack";
        WarlockImage.onclick = function() {
            WarlockhpHTML.innerHTML=WarlockLP -= BuddaATP
            comment.innerHTML = "Warlock takes " + BuddaATP + 
            " damage!<br>Select another character";
            WarlockImage.onclick = "none";
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            VerifHpWarlock()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
            VerifHpSkeleton()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
            VerifHpSpider()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
               
        SkeletonImage.onclick = function() {       // ici image skelette//
            SkeletonhpHTML.innerHTML=SkeletonLP -= BuddaATP 
            comment.innerHTML = "Skeleton takes " + BuddaATP +  // indique le degat infligé//
            " damage!<br>Select another character"; // fin indication//
            WarlockImage.onclick = "none";  // enlève le onclick pour chaque mob//
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
            
        SpiderImage.onclick = function() {       // ici image skelette//
            SpiderhpHTML.innerHTML=SpiderLP -= BuddaATP
            comment.innerHTML = "Spider takes " + BuddaATP +  // indique le degat infligé//
            " damage!<br>Select another character!"; // fin indication//
            WarlockImage.onclick = "none";  // enlève le onclick pour chaque mob//
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
            
        Budda2.onclick = "none";   //enleve le onclick du perso qui a jouer //
}


function VerifHpWarlock(){
    if (WarlockLP<=0){
        WarlockImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*30);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}


function VerifHpSkeleton(){
    if (SkeletonLP<=0){
        SkeletonImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*25);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}


function VerifHpSpider(){
    if (SpiderLP<=0){
        SpiderImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*20);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}



function SnakeAttackAction() {
    comment.innerHTML = "Choose an action for the Snake";
    //Rajouter les options d'action, defense et special//     
    comment.innerHTML = "Choose an ennemy to attack";
        WarlockImage.onclick = function() {
            WarlockhpHTML.innerHTML=WarlockLP -= SnakeATP
            comment.innerHTML = "Warlock takes " + SnakeATP + 
            " damage!<br>Select another character";
            WarlockImage.onclick = "none";
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            VerifHpWarlock()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
            VerifHpSkeleton()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
            VerifHpSpider()
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
               
        SkeletonImage.onclick = function() {       // ici image skelette//
            SkeletonhpHTML.innerHTML=SkeletonLP -= SnakeATP 
            comment.innerHTML = "Skeleton takes " + SnakeATP +  // indique le degat infligé//
            " damage!<br>Select another character"; // fin indication//
            WarlockImage.onclick = "none";  // enlève le onclick pour chaque mob//
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
            
        SpiderImage.onclick = function() {       // ici image skelette//
            SpiderhpHTML.innerHTML=SpiderLP -= SnakeATP
            comment.innerHTML = "Spider takes " + SnakeATP +  // indique le degat infligé//
            " damage!<br>Select another character!"; // fin indication//
            WarlockImage.onclick = "none";  // enlève le onclick pour chaque mob//
            SkeletonImage.onclick = "none";
            SpiderImage.onclick = "none";
            EnnemiesVengeance+=1
            AttaqueEnnemies()
        }
            
        Snake2.onclick = "none";   //enleve le onclick du perso qui a jouer //
}


function VerifHpWarlock(){
    if (WarlockLP<=0){
        WarlockImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*30);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}


function VerifHpSkeleton(){
    if (SkeletonLP<=0){
        SkeletonImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*25);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}


function VerifHpSpider(){
    if (SpiderLP<=0){
        SpiderImage.style.visibility="hidden";
    }
}

function AttaqueEnnemies(){
    if (EnnemiesVengeance==4){
        DegatMonstre = Math.floor(Math.random()*20);
        KingLP2.innerHTML=KingLP-DegatMonstre
        BoyLP2.innerHTML=BoyLP-DegatMonstre
        BuddaLP2.innerHTML=BuddaLP-DegatMonstre
        SnakeLP2.innerHTML=SnakeLP-DegatMonstre
        EnnemiesVengeance=0;
        Snake2.onclick = SnakeAttackAction
        Boy2.onclick = BoyAttackAction
        King2.onclick = KingAttackAction
        Budda2.onclick = BuddaAttackAction
    }
}

//if 3 ennemies lp = 0, Comment.innerHTML= "Bravo, vous avez gagné la partie!"//

