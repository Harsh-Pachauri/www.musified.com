/*   import font style */

/* @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'); */



@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Playwrite+AR:wght@100..400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
:root{
    --a:0;
}

/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'); */


body{
    background-color: black;
    color: white;
}

.home{
    background-color: #2d003d;
    /* background-color: rgb(26, 26, 26); */
}

.library{
    background-color: #16001f;
    /* background-color: rgb(26, 26, 26); */
}

.close{
    display: none;
}

*{
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto' , sans-serif;
}
.left{
    height: 100vh;
    width: 25vw;
    padding: 10px;
}

.right{
    width: 75vw;
    /* position: relative; */
}


.home ul li{
    display: flex;
    width: 14px;
    gap: 15px;
    list-style-type: none;
    font-weight: bold;
    padding-top: 14px;
}

.heading{
    display: flex;
    gap: 15px;
    padding-top: 14px;
    padding: 23px 14px;
    font-weight: bold;
    font-size: 13px;
    width: 100%;
    align-items: center;
}

.heading img{
    width: 30px;
}

.library{
    min-height: 80vh;
    position: relative;
}

.footer{
    display: flex;
    font-size: 10px;
    color: grey;
    gap: 13px;
    position: absolute;
    bottom: 0;
    margin-bottom: 9px;
    flex-wrap: wrap;
    padding: 10px 0;

}
.footer a{
    color: rgb(246, 244, 247);
    text-decoration: none;
}


.header{
    display: flex;
    justify-content: space-between;
    background-color: rgb(34,34,34);
    background-color: #300241;
}


.header > *{
    padding: 20px;
}

.spotifyPlaylists{
    padding: 16px;
    background-color: #0f0015;
}

.spotifyPlaylists h1{
    padding: 16px;
}

.cardContainer{
    margin: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    max-height: 60vh;
    overflow-y: auto;
}

.card{
    
    position: relative;
    
    width: 200px;
    padding: 10px;
    
    border-radius: 5px;

    /* background-color: #252525; */
    background-color: #580853;
}

.card:hover{
    background-color: rgb(105,103,103);
    transition: all .9s;
    cursor: pointer;
    --a:1;
}
/* 
.play{
    width: 28px;
    height: 28px;
    background-color: #1fdf64;
    position: absolute;
    border-radius: 100px;
    padding: 10px;
    display: flex;
    top: 166px;
    right: 17px;
    opacity: var(--a);
    right: 17px;
    
    align-items: center;
    justify-content: center;
    transition: all 1s ease-out;
} */



.card >*{
    padding-top: 10px;
}

.card img{
    width: 100%;
    object-fit: contain;


}

.buttons > *{
    margin: 0 12px;
}


.signupbtn{
    font-weight: bold;
    border: none;
    outline: none;
    background-color:#300241;
    color: rgb(22, 0, 30);
    color: white;
    text-shadow: 0px 0px 2px #16001f;
    cursor: pointer;
    font-size: 16px;
    padding: 10px;
    border-radius: 40px;
}

.signupbtn:hover{
    font-size: 17px;
    color: white;

}

.loginbtn{
    background-color: white;
    border-radius: 21px;
    color: rgb(45, 45, 45);
    font-weight: bold;
    padding: 10px;
    width: 79px;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 16px;
}

.loginbtn:hover
{
    /* width: 80px; */
    font-weight: bold;
    cursor: pointer;
    color: black;
    /* padding: 9px 0; */
    
    /* font-size: 16px; */
    /* padding: 10px 14px; */
}


.playbar{
    /* display: flex; */
    position: fixed;
    bottom: 30px;
    background-color: rgb(35, 4, 47);
    width: 90%;
    width: 70vw;
    padding: 12px;
    border-radius: 10px;
    min-height: 40px;    
}

.songbuttons{
    display: flex;
    justify-content: center;
    gap: 16px;
    filter: invert();
}

.songList{
    /* height: 508px; */
    height: 60vh;
    overflow: auto;
    margin-bottom: 44px;
    
}

.hamburger{
    display: none;
    cursor: pointer;
    
}

.songList ul{
    padding: 0 12px;
}
.songList ul li{
    display: flex;
    justify-content: space-between;
    list-style-type: decimal;
    gap: 12px;
    cursor: pointer;
    padding: 12px 0;
    border: 1px solid white;
    margin: 12px 0;
    padding: 13px;
    border-radius: 5px;
}

.songList .info{
    font-size: 13px;
    width: 344px;
}

.info div{
    word-break: break-all;
}

.playnow{
    display: flex;
    
    justify-content: center;
    align-items: center;
} 
.playnow span{
    font-size: 15px;
    width: 64px;
    padding: 12px;
}


.seekbar{
    height: 2px;
    border: 2px solid white;
    background-color: rgb(255, 255, 255);
    width: 95%;;
    border-radius: 10px;
    position: absolute;
    bottom: 8px;
    /* padding: 12px; */
    margin: 6px;
    cursor: pointer;
}

.circle{
    height: 13px;
    width: 13px;
    border-radius: 13px  ;
    background-color: white;
    position: relative;
    bottom: 6px;
    left:-1%;
    transition: left 0.5s ;
}
 
.songbuttons img{
    cursor: pointer;
}

.songinfo{
    /* max-width: fit-content; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 0 12px ;
}

.songtime{
    color: white;
    padding: 0 12px ;
    width: 113px;
}

.timevol{
    display:flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
}

.volume{
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding-left: 10px;
    padding-top: 5px;
}

.range{
    
    width: 76px;
}

.ran{
    width: inherit;
}

.abovebar{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

@media (max-width:1314px){
    .left {
        position: absolute;
        left: -130%;
        transition: all .3s;
        z-index: 1;
        width: 320px;
        background-color: black;
        padding: 0;
        height: 100vh;
        position: fixed;
        top: 0;
    }
    .close {
        position: absolute;
        right: 31px;
        top: 25px;
        width: 29px;
        cursor: pointer;
        z-index: 2;
    }

    .close{
        display: block;
    }

    .right{
        width: 100vw ;
        margin: 0;
    }

    .seekbar{
        width: 90%;
    }

    .playbar{
        width:    calc(100vw - 60px);

    }

    .seekbar{

        width:calc(100vw - 70px);
    }

    /* .abovebar{
        flex-direction: column;
        gap: 9px;
        align-items: center;

    } */


    .hamburger{
        display: block;
    }
    .hamburgerflex{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 14px;
        width: 10vw;
    }

    .cardContainer{
        margin: 0;
        justify-content: center;
    }

    .card{
        width: 30vw;
    }


    .timevol{
        display:block;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav{
        padding: 10px;
        /* padding-left: 7px; */
    }
    .buttons{
        padding: 0 1vw;
    }


}


@media (max-width:898px){
    .card{
        width: 25vw;
    }

    /* .signupbtn{
        font-weight: bold;
        border: none;
        outline: none;
        background-color: #b94eda;
        color: rgb(22, 0, 30);
        color: white;
        text-shadow: 0px 0px 2px #16001f;
        cursor: pointer;
        font-size: 3vw;
        padding: 10px;
        border-radius: 40px;
        width: auto;
    }

    .loginbtn{
        background-color: white;
        border-radius: 21px;
        color: rgb(45, 45, 45);
        font-weight: bold;
        padding: 3vw;
        width: auto;
        cursor: pointer;
        border: none;
        outline: none;
        font-size: 3vw;
    } */


}
/* 
@media (max-width:898x){
    .card{
        width: 40vw;
    }
} */

@media(max-width : 572px){
    .card{
        width: 35vw;
        /* min-width: 20vw; */
    }
}
@media (max-width : 471px){
    .card{
        width: 35vw;
        /* min-width: 20vw; */
    }

    .signupbtn{
        font-weight: bold;
        border: none;
        outline: none;
        /* background-color: #b94eda; */
        color: rgb(22, 0, 30);
        color: white;
        text-shadow: 0px 0px 2px #16001f;
        cursor: pointer;
        font-size: 3vw;
        padding: 10px;
        border-radius: 40px;
        width: auto;
    }

    .loginbtn{
        background-color: white;
        border-radius: 21px;
        color: rgb(45, 45, 45);
        font-weight: bold;
        padding: 2vw 3vw;
        /* width: 10vw; */
        width: auto;
        cursor: pointer;
        border: none;
        outline: none;
        font-size: 3vw;
    }

    .buttons>*{
        margin: 0 1vw;
    }


}

@media (max-width:400px) {
    .left{
        width: 100vw;
    }    
    .abovebar{
        flex-direction: column;
        gap: 9px;
        align-items: center;
        justify-content: center;
        align-content: center;

    }
    h1{
        font-size: x-large;
    }
    .card{
        /* width: 60vw; */
        width: 33vw;
        margin: 1vw;
        /* gap: 1000vw; */
    }
    .card>*{
        /* padding: 1vw; */
        padding-top: 8px;
    }

    h2{
        font-size: 5vw;

    }
    p{
        font-size: 3vw;

    }
    .songinfo{
        width: 80vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .signupbtn{
        font-weight: bold;
        border: none;
        outline: none;
        background-color: #b94eda;
        background-color: #300241;
        color: rgb(22, 0, 30);
        color: white;
        text-shadow: 0px 0px 2px #16001f;
        cursor: pointer;
        font-size: 3vw;
        padding: 10px;
        border-radius: 40px;
        width: auto;
    }

    .loginbtn{
        background-color: white;
        border-radius: 21px;
        color: rgb(45, 45, 45);
        font-weight: bold;
        padding: 2vw 2.2vw;
        /* width: 10vw; */
        width: auto;
        cursor: pointer;
        border: none;
        outline: none;
        font-size: 3.5vw;
    }

    .buttons>*{
        margin: 0 1vw;
    }


}

@media (max-width:312px){
    .card{
        width: 32vw;
    }
} 
