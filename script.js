
const inDevelopment = false;
var mainContent = "";
var frame = 0;
var inIntro = true;

//preload
let cmdFontRegular;
function preload() {
  cmdFontRegular = loadFont('assets/Source_Code_Pro/SourceCodePro-Regular.ttf');
}

const WIDTH = window.innerWidth - 20;
const HEIGHT = window.innerHeight - 20;

//setup
function setup() {
    
    if (inDevelopment) {
        strHTML = document.querySelector('#main-content').innerHTML;
        document.querySelector('#main-content').innerHTML = "<h2>Sorry!</h2><br/><h3>The website is still in development.<br/><a href=\"https://github.com/jaideng1\">To GitHub Page</a></h3>";
        document.querySelector('#main-content').style = "";
        return;
    }
    strHTML = document.querySelector('#main-content').innerHTML;
    document.querySelector('#main-content').innerHTML = "";
    createCanvas(WIDTH, HEIGHT);
}


let introStorage = {
    text: "",
    displayTextBar: true, //for blinking
    ableToType: false,
    showTextBar: false, //show textbar with typing thing
    textUnder: "",
};

let blacklistKeys = [
    "CapsLock",
    "Shift",
    "Tab",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
    "Meta",
    "Alt",
    "Control",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "Escape"
];

function draw() {
    if (inIntro) {
        background(0);
        frame++;
        let textbar = "";
        if (frame % 120 == 0) {
            introStorage.displayTextBar = true;
        } else if (frame % 120 == 60) {
            introStorage.displayTextBar = false;
        }
        if (introStorage.displayTextBar) {
            textbar = "_";
        }
        textSize(30)
        textFont(cmdFontRegular);
        stroke(255);
        fill(255);
        text("WebOS v1.0.3, made by jaideng1. Type in 'help', or 'pass'.", 50, 50);
      
        if (introStorage.showTextBar) {
          text("> " + introStorage.text + textbar, 50, 130);
        } else {
          text("> " + introStorage.text, 50, 130);
        }
        
        text(introStorage.textUnder, 50, 150);
        
    }
}

//haha, laugh at me all you want. i know this is unsecure alright? i just want a tiny bit of protection.
const PASS_TO_WEBSITE = "J41D3NGI";

document.onkeydown = function(e) {
    var key = e.key;
    
    if (inIntro) {
        if (blacklistKeys.includes(key)) {
            return;
        }
        if (key == "Backspace") {
            if (introStorage.text.split('').length > 0) {
                let temptxt = introStorage.text.split('');
                temptxt.pop();
                introStorage.text = temptxt.join('');
            }
            return;
        }
        if (key == "Enter" && introStorage.ableToType) {
            if (introStorage.text == "") {
              return;
            }
            if (introStorage.text == "pass ") {
              let p = introStorage.text.replace('pass ', '');
              if (p == PASS_TO_WEBSITE) {
                //display text
                /*
                Password correct.
                <wait 750 milliseconds>
                Joining <250mi> . <250mi> . <250mi> . (in this time, background fades to white)
                <do join animation>
                (mouse comes out of corner, "clicks" on bottom right, and "drags" over to top left, as if it's selecting something in an image)
                (delete key sound plays, as the white thing dissapears, making windows computer appear)
                (mouse goes to finder, opens it, and finder window appears)
                (clicks on "reboot_to_website.exe", and then screen goes to black, turns back on after 5 seconds, and shows window reboot thing.)
                (after 5 seconds, it stops, and fades to white)
                (reveal the website)
                */
              } else {
                //display message under
              }
            } else if (introStorage.text == "help") {
              //display message under
            }
            introStorage.text = "";
            return;
        }
        if (introStorage.ableToType) {
            introStorage.text += key;
        }
        
    }
};
