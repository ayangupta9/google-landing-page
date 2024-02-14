let STR = `[Scavenger Hunt Initialization Sequence]
$ sudo apt-get update
$ sudo apt-get install nmap
$ nmap -v -A 192.168.0.1/24

Starting Nmap 7.80 ( https://nmap.org ) at 2024-02-13 12:00 EDT
Nmap scan report for 192.168.0.1
Host is up (0.080s latency).
Not shown: 991 closed ports
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 8.0p1 Ubuntu 6build1 (Ubuntu Linux; protocol 2.0)
80/tcp   open  http    Apache httpd 2.4.41 ((Ubuntu))
443/tcp  open  https   Apache httpd 2.4.41 ((Ubuntu))

$ traceroute 198.51.100.0
traceroute to 198.51.100.0 (198.51.100.0), 30 hops max, 60 byte packets
 1  router (192.168.0.1)  1.037 ms  1.013 ms  0.993 ms
 2  192.168.10.1 (192.168.10.1)  2.688 ms  2.667 ms  2.645 ms
 3  10.0.0.1 (10.0.0.1)  33.569 ms  33.558 ms  33.536 ms
 4  198.51.100.0 (198.51.100.0)  40.443 ms  40.416 ms  40.394 ms

$ sudo wireshark -k -i eth0 &

[Launching Wireshark for network sniffing...]
[Please wait...]
[Scavenger Hunt Data Packets Capturing...]

$ sudo crunch 12 12 -o wordlist.txt
$ sudo aircrack-ng -w wordlist.txt -b 00:14:22:01:23:45 wpa2-01.cap





             uu$$$$$$$$$$$uu
          uu$$$$$$$$$$$$$$$$$uu
         u$$$$$$$$$$$$$$$$$$$$$u
        u$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$"   "$$$"   "$$$$$$u
       "$$$$"      u$u       $$$$"
        $$$u       u$u       u$$$
        $$$u      u$$$u      u$$$
         "$$$$uu$$$   $$$uu$$$$"
          "$$$$$$$"   "$$$$$$$"
            u$$$$$$$u$$$$$$$u
             u$"$"$"$"$"$"$u
  uuu        $$u$ $ $ $ $u$$       uuu
 u$$$$        $$$$$u$u$u$$$       u$$$$
  $$$$$uu      "$$$$$$$$$"     uu$$$$$$
u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
$$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
 """      ""$$$$$$$$$$$uu ""$"""
           uuuu ""$$$$$$$$$$uuu
  u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
  $$$$$$$$$$""""           ""$$$$$$$$$$$"
   "$$$$$"                      ""$$$$""
     $$$"                         $$$$"





[Password cracking in progress...]
[This may take a while...]
[Scavenger Hunt Password Decryption Sequence Initiated...]
[Please wait...]
[Password successfully cracked: 'TreasureHunter2024']

$ ssh root@198.51.100.0
root@198.51.100.0's password: 

Welcome to Treasure Hunt Command Center
[Access Granted]
[Initiating Scavenger Hunt Protocol...]

root@thunt-cc:~$ ./load_scavenger_hunt --activate
Loading Scavenger Hunt...
[########################################] 100%
[Scavenger Hunt Loaded Successfully]

root@thunt-cc:~$ exit
`

let cmdscreen = document.getElementById('cmd-screen')
let shscreen = document.getElementById('scavenger-hunt-screen')
let container = document.getElementById('container')

let cmdText = STR.split('');
let index = 0;

cmdscreen.style.overflowY = 'hidden'; // Hide vertical scrollbar
cmdscreen.style.whiteSpace = 'pre-wrap'; // Preserve line breaks and wrap text

// cmdscreen.remove()

// function matrixRain() {
//     let canvas = document.querySelector('canvas'),
//         ctx = canvas.getContext('2d');

//     // Setting the width and height of the canvas
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // Setting up the letters
//     var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
//     letters = letters.split('');

//     // Setting up the columns
//     var fontSize = 10,
//         columns = canvas.width / fontSize;

//     // Setting up the drops
//     var drops = [];
//     for (var i = 0; i < columns; i++) {
//         drops[i] = 1;
//     }

//     // Setting up the draw function
//     function draw() {
//         ctx.fillStyle = 'rgba(0, 0, 0, .1)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
//         for (var i = 0; i < drops.length; i++) {
//             var text = letters[Math.floor(Math.random() * letters.length)];
//             ctx.fillStyle = '#0f0';
//             ctx.fillText(text, i * fontSize, drops[i] * fontSize);
//             drops[i]++;
//             if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
//                 drops[i] = 0;
//             }
//         }
//     }

//     // Loop the animation
//     setInterval(draw, 33);
// }


// matrixRain()

let intervalId = setInterval(() => {
    if (index < cmdText.length) {
        cmdscreen.textContent += cmdText[index];
        index++;
        cmdscreen.scrollTop = cmdscreen.scrollHeight;
    } else {
        clearInterval(intervalId);
        setTimeout(() => {
            // cmdscreen.style.visibility = 'hidden'
            cmdscreen.remove()
            setTimeout(() => {
                shscreen.style.visibility = 'visible'
                container.style.visibility = 'visible'
            }, 1500)
        }, 3000)
    }
}, 5);


function animateText(element, content, newContent = null) {
    let index = 0;

    let intervalId = setInterval(() => {
        if (index < content.length) {
            element.textContent += content[index];
            index++;
        } else {
            clearInterval(intervalId);

            if (newContent) {
                setTimeout(() => {
                    animateText(element, newContent)
                    setTimeout(() => {
                        element.remove()
                        generateRiddles()
                    }, 2000)

                }, 2000)


            }
        }
    }, 50);
}

// shscreen.style.visibility = 'visible'

let NO_PG_IDX = 0
let pg_yes_width = 70
let pg_yes_height = 40
let pg_no_btn = document.getElementById('play-game-no')
let pg_yes_btn = document.getElementById('play-game-yes')

pg_no_btn.onclick = function (e) {
    if (NO_PG_IDX == 15) {
        pg_no_btn.remove()
    }
    console.log(NO_PG_IDX);
    NO_PG_IDX += 1
    pg_yes_btn.style.width = `${pg_yes_width}px`
    pg_yes_btn.style.height = `${pg_yes_height}px`
    pg_yes_btn.style.fontSize = `${pg_yes_width / 2}px`

    pg_yes_width += 20
    pg_yes_height += 20
    // pg_no_btn.style.transform 
}

pg_yes_btn.onclick = function (e) {
    let pg_btn_cont = document.getElementById('pg-btn-container')
    // pg_btn_cont.remove()
    pg_no_btn.remove()
    pg_yes_btn.remove()

    let instructions = document.createElement('pre')
    instructions.classList.add('cmd-text')
    // instructions.textContent += 
    // instructions.style.visibility = 'hidden'
    pg_btn_cont.append(instructions)
    animateText(instructions, `
Good!
Let us begin then.
I give you riddles, you find answers.

Ready?`, ` I'm gonna assume you are...`)

}


let RIDDLES = null
fetch('./riddles.json').then(res => res.json()).then(data => RIDDLES = data)
let pg_btn_cont = document.getElementById('pg-btn-container');
pg_btn_cont.classList.add('animate')


function generateRiddles() {
    let pg_btn_cont = document.getElementById('pg-btn-container');
    pg_btn_cont.classList.add('animate')
    let i = 0;

    const RL = RIDDLES.length

    function generateNextRiddle() {
        if (i < RL) {
            let riddleContainer = generateRiddle(RIDDLES[i]);
            pg_btn_cont.innerHTML = '';
            pg_btn_cont.append(riddleContainer);
        } else {

            shscreen.remove()
            pg_btn_cont.style.marginTop = '2em'
            pg_btn_cont.innerHTML = ''
            animateText(pg_btn_cont, 'Look at you, Sherlock! So smart. I suppose a reward awaits you now.')

            setTimeout(() => {
                pg_btn_cont.innerHTML = ''
                let qrcodeEle = document.createElement('div')
                qrcodeEle.id = 'qrcode'
                qrcodeEle.classList.add('animate')
                qrcodeEle.style.marginTop = '2em'
                pg_btn_cont.append(qrcodeEle)

                var qrcode = new QRCode(document.getElementById("qrcode"), {
                    text: "https://drive.google.com/file/d/1ly4qD2nBeOOYAhku7DpE70K4_qJXnyNA/view?usp=sharing",
                    width: 128,
                    height: 128,
                    colorLight: "#000000",
                    // colorDark : "#000000",
                    colorDark: "#00ff00",
                    correctLevel: QRCode.CorrectLevel.H
                });

            }, 4500);

        }
    }

    generateNextRiddle();

    function generateRiddle(riddle) {
        let riddleContainer = document.createElement('div');
        riddleContainer.classList.add('animate')
        let riddleEle = document.createElement('pre');
        riddleEle.textContent = `Riddle:\n${riddle['riddle']}`;
        riddleContainer.append(riddleEle);

        let riddleanswer = document.createElement('input');
        riddleanswer.classList.add('riddle-input')
        riddleContainer.append(riddleanswer);

        let submitRiddle = document.createElement('button');
        submitRiddle.classList.add('play-game-btn')
        submitRiddle.textContent = 'Submit';
        riddleContainer.append(submitRiddle);

        submitRiddle.onclick = function (e) {
            if (riddleanswer.value === riddle['passcode']) {

                riddleanswer.remove()
                submitRiddle.remove()

                let riddleSuccess = document.createElement('pre');
                riddleSuccess.classList.add('animate')
                riddleSuccess.textContent = riddle['successMessage'];
                riddleContainer.append(riddleSuccess);

                confetti({
                    particleCount: 100,
                    spread: 130,
                    origin: { y: 1 },
                    shapes: ["emoji"],
                    scalar: 5,
                    shapeOptions: {
                        emoji: {
                            value: [riddle['value']],

                        },
                    }
                });

                let nextButton = document.createElement('button');
                nextButton.classList.add('play-game-btn')
                nextButton.textContent = 'Next';
                nextButton.classList.add('animate')
                nextButton.addEventListener('click', () => {
                    i++;
                    generateNextRiddle(); // Generate the next riddle immediately
                });
                riddleContainer.appendChild(nextButton);
            } else {
                let riddleFail = document.createElement('pre');
                riddleFail.textContent = 'Bzzzzzz! Try again.';
                riddleContainer.append(riddleFail);
            }
        }

        return riddleContainer;
    }
}

// setTimeout(generateRiddle, 5000)