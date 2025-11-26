

export const HUSBAND_FINDER_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💖 HUSBAND FINDER 2000 💖</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #ffc0cb;
            background-image: url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDIwb2t1M3FraGxkajVyM3EzZzV1MDhhYjU4djRpNHJkYW9ncnp1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HiyCpSO2wE6sw/giphy.gif'); /* Pink Glitter Background */
            background-size: cover;
            font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            cursor: url('https://cur.cursors-4u.net/cursors/cur-2/cur116.cur'), auto;
        }

        .container {
            background: rgba(255, 255, 255, 0.8);
            border: 4px outset #ff69b4;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            width: 350px;
            box-shadow: 0 0 20px #ff1493, inset 0 0 20px #fff;
            backdrop-filter: blur(5px);
            position: relative;
        }

        h1 {
            color: #ff1493;
            text-shadow: 2px 2px 0px #fff, 4px 4px 0px #ffb6c1;
            font-size: 28px;
            margin-bottom: 10px;
            letter-spacing: 2px;
        }

        .subtitle {
            font-size: 12px;
            color: #db7093;
            margin-bottom: 20px;
            font-weight: bold;
        }

        input[type="text"] {
            width: 80%;
            padding: 10px;
            border: 2px dashed #ff69b4;
            border-radius: 10px;
            background-color: #fff0f5;
            color: #c71585;
            font-family: 'Comic Sans MS', sans-serif;
            font-size: 16px;
            text-align: center;
            outline: none;
            margin-bottom: 20px;
        }

        input[type="text"]:focus {
            background-color: #fff;
            border-style: solid;
        }

        button {
            background: linear-gradient(to bottom, #ff69b4, #c71585);
            border: 2px solid #fff;
            color: white;
            padding: 10px 20px;
            font-size: 18px;
            font-family: 'Comic Sans MS', sans-serif;
            border-radius: 25px;
            cursor: pointer;
            box-shadow: 3px 3px 0px #8b008b;
            transition: all 0.1s;
        }

        button:active {
            transform: translate(2px, 2px);
            box-shadow: 1px 1px 0px #8b008b;
        }

        button:hover {
            background: linear-gradient(to bottom, #ff1493, #d8bfd8);
        }

        #result-area {
            margin-top: 30px;
            display: none;
            animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes popIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        .soulmate-name {
            font-size: 32px;
            color: #ff0000;
            font-weight: bold;
            text-shadow: 2px 2px 0px white;
            margin: 10px 0;
            text-transform: uppercase;
        }

        .vibe-check {
            font-size: 14px;
            color: #ff1493;
            font-style: italic;
            background-color: yellow;
            padding: 5px;
            transform: rotate(-2deg);
            display: inline-block;
            border: 1px dotted black;
        }

        .decor {
            position: absolute;
            font-size: 24px;
        }
        
        /* Floating hearts animation */
        .heart-bg {
            position: fixed;
            color: #ff69b4;
            font-size: 20px;
            animation: flyUp linear infinite;
            z-index: -1;
            opacity: 0.6;
        }

        @keyframes flyUp {
            0% { transform: translateY(110vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
        }

        .marquee {
            position: fixed;
            bottom: 0;
            width: 100%;
            background: #ff1493;
            color: yellow;
            font-weight: bold;
            padding: 5px 0;
            border-top: 2px solid white;
            font-family: monospace;
            font-size: 14px;
        }

    </style>
</head>
<body>

    <div class="marquee">
        <marquee scrollamount="6">
            *** LOVE IS IN THE AIR *** FIND YOUR HABIBI TODAY *** 100% ACCURATE (MAYBE) *** DON'T TEXT YOUR EX *** </marquee>
    </div>

    <div class="container">
        <div style="font-size: 40px; margin-bottom: -10px;">💍</div>
        <h1>HUSBAND FINDER</h1>
        <div class="subtitle">~*~ who is written in your stars? ~*~</div>

        <input type="text" id="girlName" placeholder="Enter your name here...">
        <br>
        <button onclick="findHusband()">Find Soulmate Name 💖</button>

        <div id="result-area">
            <p style="font-size: 14px; margin-bottom: 5px;">Your future hubby is:</p>
            <div class="soulmate-name" id="boyName">???</div>
            <br>
            <div class="vibe-check">Go get yours babe! xoxo</div>
        </div>

        <!-- Decorative Stickers -->
        <div class="decor" style="top: 10px; left: 10px;">🦋</div>
        <div class="decor" style="top: 10px; right: 10px;">🦋</div>
        <div class="decor" style="bottom: 10px; left: 10px;">💋</div>
        <div class="decor" style="bottom: 10px; right: 10px;">💄</div>
    </div>

    <script>
        // Turkish Boy Names Database
        const boyNames = [
            "Mehmet", "Mustafa", "Ahmet", "Ali", "Hüseyin", "Hasan", "İbrahim", "İsmail", "Osman", "Yusuf", 
            "Murat", "Ömer", "Ramazan", "Halil", "Süleyman", "Abdullah", "Mahmut", "Salih", "Kemal", "Recep",
            "Sinan", "Metin", "Adem", "Fatih", "Kadir", "Emre", "Hakan", "Burak", "Can", "Barış", 
            "Arda", "Efe", "Mert", "Kerem", "Umut", "Ozan", "Volkan", "Tolga", "Onur", "Alper", 
            "Deniz", "Serkan", "Gökhan", "Selçuk", "İlker", "Kaan", "Bora", "Cem", "Koray", "Doruk",
            "Toprak", "Rüzgar", "Çınar", "Atlas", "Kuzey", "Ediz", "Sarp", "Yaman", "Aras", "Poyraz"
        ];

        function findHusband() {
            const input = document.getElementById('girlName').value;
            
            if (!input.trim()) {
                alert("Girl, you gotta type your name first! D'uh! 💅");
                return;
            }

            // Simple loading fake-out
            const btn = document.querySelector('button');
            const resultArea = document.getElementById('result-area');
            
            btn.innerHTML = "Calculating Love... 💘";
            resultArea.style.display = 'none';

            setTimeout(() => {
                // Pick random name
                // We use the input string length to seed the random slightly so it feels "destined" 
                // but add Math.random so they can retry if they don't like him lol
                const randomIndex = Math.floor(Math.random() * boyNames.length);
                const chosenOne = boyNames[randomIndex];

                document.getElementById('boyName').innerText = chosenOne;
                resultArea.style.display = 'block';
                btn.innerHTML = "Find Another One? 💔";
            }, 800); // 800ms delay for suspense
        }

        // Create background hearts
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart-bg');
            heart.innerHTML = Math.random() > 0.5 ? '💖' : '✨';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

        setInterval(createHeart, 300);
    </script>

</body>
</html>
`;

export const HANGI_MANIFEST_HTML = `
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manifest Fan Club ~*~</title>
    <style>
        /* --- Y2K FONTS & BASICS --- */
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        body {
            background-color: #ff0099;
            /* Classic Y2K Grid Background */
            background-image: 
                linear-gradient(90deg, rgba(255,255,255,.1) 50%, transparent 50%),
                linear-gradient(rgba(255,255,255,.1) 50%, transparent 50%);
            background-size: 40px 40px;
            font-family: 'VT323', monospace;
            color: #fff;
            text-align: center;
            margin: 0;
            padding: 20px;
            cursor: crosshair;
        }

        /* --- MAIN CONTAINER --- */
        .container {
            max-width: 650px;
            margin: 0 auto;
            border: 4px outset #ff66cc;
            background: #000033; /* Deep blue retro contrast */
            padding: 15px;
            box-shadow: 15px 15px 0px rgba(0,0,0,0.5);
        }

        /* --- HEADER STYLES --- */
        h1 {
            font-size: 3.5rem;
            color: #ffff00;
            text-shadow: 4px 4px #ff00cc;
            margin: 10px 0;
            letter-spacing: 4px;
        }

        .subtitle {
            font-size: 1.8rem;
            color: #00ffff;
            text-transform: uppercase;
            border-bottom: 2px dashed #00ffff;
            display: inline-block;
            margin-bottom: 20px;
        }

        /* --- MARQUEE --- */
        .marquee-box {
            background: #fff;
            color: #000;
            border: 2px solid #ff00cc;
            font-size: 1.4rem;
            font-weight: bold;
            margin-bottom: 20px;
            padding: 4px;
        }

        /* --- THE BUTTON --- */
        .magic-button {
            background: #ff00cc;
            border: 4px outset #ff99cc;
            cursor: pointer;
            color: #fff;
            font-family: 'VT323', monospace;
            font-size: 32px;
            padding: 15px 50px;
            margin-top: 20px;
            text-shadow: 2px 2px 0 #000;
            transition: transform 0.1s;
        }

        .magic-button:hover {
            background: #cc00cc;
            color: #ffff00;
        }

        .magic-button:active {
            border-style: inset;
            transform: translateY(4px);
        }

        /* --- RESULT CARD (PROFILE) --- */
        #result-area {
            display: none;
            margin-top: 30px;
            border: 2px solid #fff;
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            text-align: left; /* Better for reading descriptions */
        }

        .profile-header {
            border: 2px solid #fff;
            background: #000;
            color: #ffff00;
            padding: 10px;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 15px;
            text-shadow: 3px 3px #ff0000;
        }

        .profile-section {
            margin-bottom: 15px;
            font-size: 1.4rem;
            line-height: 1.4;
        }

        .label {
            color: #00ffff;
            font-weight: bold;
            text-decoration: underline;
        }

        /* --- FOOTER --- */
        .footer {
            margin-top: 40px;
            font-size: 1rem;
            color: #ff99cc;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="marquee-box">
            <marquee scrollamount="10" direction="left">
                +++ MANIFEST FAN CLUB +++ ARE U READY? +++ %100 GERÇEK SONUÇLAR +++ HANGİSİ SENSİN? +++
            </marquee>
        </div>

        <h1>~*~ MANIFEST ~*~</h1>
        <div class="subtitle">HANGİ MANIFEST KIZISIN?</div>

        <p style="font-size: 1.4rem;">
            Cevabı öğrenmek için aşağıya tıkla... <br>
            <span style="color: #ffff00;">✨ Kim olduğunu keşfet! ✨</span>
        </p>

        <button class="magic-button" onclick="findMember()">
            SONUCU GÖR >>
        </button>

        <div id="result-area">
            <div class="profile-header" id="member-name"></div>
            
            <div class="profile-section">
                <span class="label">KİMSİN SEN?:</span><br>
                <span id="member-intro"></span>
            </div>

            <div class="profile-section">
                <span class="label">VIBE'IN:</span><br>
                <span id="member-vibe"></span>
            </div>

            <div class="profile-section">
                <span class="label">GRUBA NE KATIYORSUN?:</span><br>
                <span id="member-contribution"></span>
            </div>
        </div>

        <div class="footer">
            <p>Made with <3 by Manifest Fans</p>
            <p>[Best viewed in Internet Explorer 5.0]</p>
        </div>
    </div>

    <script>
        // Member Data based on your description
        const members = [
            {
                name: "SUEDA",
                intro: "Sen Sueda’sın: grubun en genç üyesi ama enerjin ve sahne ışığın seni asla “küçük kardeş” konumuna düşürmüyor. 10 yılı aşkın dans geçmişin var ve başkalarına da dans öğretiyorsun.",
                vibe: "Taptaze, capcanlı, kıpır kıpırsın. Neşelisin ama disiplinsiz değilsin. Yeşilin o parlak tonu gibisin—yenileyici, umut verici.",
                contribution: "Elektriği, hareketi, enerjiyi. Girdiğin ortamı ışıklandırıyorsun. “Sahne ateşi” senden çıkıyor."
            },
            {
                name: "HİLAL",
                intro: "Sen Hilal’sin: ayakta duruşun sağlam, dansın güçlü, rap kısmı varsa sen oradasın. Bilgisayar mühendisliği okudun ama sahneye dönmeyi tercih ettin çünkü içindeki star titreşimlerini başka hiçbir şey bastıramazdı.",
                vibe: "Cool ama sıcak, zarif ama güçlü. Topuklu ayakkabılarla dans etmek bile senin için mesele değil.",
                contribution: "Karizma, teknik güç, güven. Gösterişli olmasan bile seni izlerken insanlar gözlerini senden alamıyor. Sahneye “ağırlık” getiriyorsun."
            },
            {
                name: "LİDYA",
                intro: "Sen Lidya’sın: o ses senin. Grubun lead vokali olarak duyguyu, derinliği, tınıyı sen taşıyorsun. Tiyatro kökenin ve klasik müzik kulağın var. Rus Dili ve Edebiyatı okudun, yani hem sanatçı hem akademik bir ruhsun.",
                vibe: "Zarif, duygusal ama net. O dramatik ama samimi havan seni seyirciyle bağ kurmada öne çıkarıyor.",
                contribution: "İçtenlik, duygusal bağ, güçlü vokal hatları. “Kalbe dokunma” işi sende."
            },
            {
                name: "MİNA",
                intro: "Sen Mina’sın: dans senin vücut dilin, sahne senin oyun alanın. Kültür yönetimi okudun ama seni ayakta tutan şey ritim. Salsa da biliyorsun, TikTok da.",
                vibe: "Enerjik, çekici, sahnede göz kırpan yıldız. Göz teması kurarsın ve o an herkes susar.",
                contribution: "Momentum. Koreografi başladığında kimin lider olduğunu herkes anlar. Sen sahnede bir mıknatıssın."
            },
            {
                name: "ZEYNEP",
                intro: "Sen Zeynep’sin: dışardan soğuk gibi durursun ama senin içinde alev var. Hayranlar “buz küpü” diyor sana ama o mesafe sadece senin koruma alanın. Rap desen var, laf sokma desen ondan da var.",
                vibe: "Sakin ama keskin. Çok konuşmazsın ama konuşunca herkes dinler.",
                contribution: "Edge. Tatlılık fazlaysa sen denge getirirsin. Sahnede “sertlik” ve “cool”luk gerektiğinde öne sen çıkarsın."
            },
            {
                name: "ESİN",
                intro: "Sen Esin’sin: başta yedek gibiydin ama şimdi grubun değişilmezi oldun. Latin dansından sahnelere uzanan yolculuğunla, sürpriz etkisi yaratıyorsun.",
                vibe: "Güneş gibi; parlıyorsun ama yakmıyorsun. Sarı rengi temsil ediyorsun çünkü varlığın umut verici.",
                contribution: "Çeşitlilik, esneklik, beklenmedik anlarda parlayan ışık. İnsanlar seni tanıdıkça daha çok seviyor."
            }
        ];

        function findMember() {
            const resultArea = document.getElementById('result-area');
            
            // Add a little loading delay for effect
            resultArea.style.display = 'none';
            
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * members.length);
                const selected = members[randomIndex];

                document.getElementById('member-name').innerText = "*** " + selected.name + " ***";
                document.getElementById('member-intro').innerText = selected.intro;
                document.getElementById('member-vibe').innerText = selected.vibe;
                document.getElementById('member-contribution').innerText = selected.contribution;

                resultArea.style.display = 'block';
                
                // Scroll to result
                resultArea.scrollIntoView({behavior: "smooth"});
            }, 300);
        }
    </script>
</body>
</html>
`;

export const PARTICULARLY_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Particularly</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #000;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        canvas {
            display: block;
        }

        /* Glassmorphism Control Panel */
        #controls {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 280px;
            padding: 20px;
            border-radius: 16px;
            background: rgba(30, 30, 30, 0.4);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            color: white;
            z-index: 10;
            transition: opacity 0.3s;
        }

        h2 {
            margin: 0 0 15px 0;
            font-size: 1.2rem;
            font-weight: 500;
            letter-spacing: 1px;
            color: #eee;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 10px;
        }

        .control-group {
            margin-bottom: 15px;
        }

        label {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            margin-bottom: 5px;
            color: #ccc;
        }

        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 5px;
            outline: none;
            cursor: pointer;
        }

        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #4ade80;
            cursor: pointer;
            transition: background .15s ease-in-out;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
            background: #fff;
        }

        button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 8px;
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: transform 0.1s, opacity 0.2s;
            margin-top: 10px;
        }

        button:active {
            transform: scale(0.98);
        }

        button:hover {
            opacity: 0.9;
        }

        .stats {
            margin-top: 15px;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
        }

        /* Mobile adjustment */
        @media (max-width: 600px) {
            #controls {
                width: calc(100% - 40px);
                bottom: 20px;
                top: auto;
            }
        }
    </style>
</head>
<body>

    <canvas id="simCanvas"></canvas>

    <div id="controls">
        <h2>Particularly</h2>
        
        <div class="control-group">
            <label>Interaction Radius <span id="val-radius">80</span></label>
            <input type="range" id="radius" min="20" max="200" value="80">
        </div>

        <div class="control-group">
            <label>Friction (Viscosity) <span id="val-friction">0.90</span></label>
            <input type="range" id="friction" min="0.10" max="0.99" step="0.01" value="0.90">
        </div>

        <div class="control-group">
            <label>Force Strength <span id="val-force">10</span></label>
            <input type="range" id="force" min="1" max="50" value="10">
        </div>

        <button id="btn-random">Randomize Rules</button>
        <button id="btn-reset" style="background: rgba(255,255,255,0.1); margin-top: 8px;">Reset Particles</button>
        
        <div class="stats">
            Particles: 1200 | FPS: <span id="fps">60</span>
        </div>
    </div>

    <script>
        // --- Configuration ---
        const PARTICLE_COUNT = 1200;
        const COLORS = ['#ef4444', '#22c55e', '#3b82f6', '#eab308']; // Red, Green, Blue, Yellow
        const GROUP_COUNT = 4;
        
        // --- State ---
        let particles = [];
        let ruleMatrix = []; // 2D array defining attraction/repulsion
        let canvas, ctx;
        let width, height;
        
        // Simulation Parameters
        let params = {
            radius: 80,
            friction: 0.90,
            forceBase: 10,
            beta: 0.3 // Repulsion zone ratio
        };

        // --- Initialization ---
        function init() {
            canvas = document.getElementById('simCanvas');
            ctx = canvas.getContext('2d', { alpha: false }); // Optimization: disable alpha channel for bg
            
            resize();
            window.addEventListener('resize', resize);

            initParticles();
            randomizeRules();
            
            // Start Loop
            requestAnimationFrame(loop);
            
            // Setup UI
            setupUI();
        }

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                // Determine group index (0 to 3)
                const group = Math.floor(Math.random() * GROUP_COUNT);
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: 0,
                    vy: 0,
                    group: group,
                    color: COLORS[group]
                });
            }
        }

        function randomizeRules() {
            ruleMatrix = [];
            for (let i = 0; i < GROUP_COUNT; i++) {
                ruleMatrix[i] = [];
                for (let j = 0; j < GROUP_COUNT; j++) {
                    // Generate a random force between -1 (repel) and 1 (attract)
                    ruleMatrix[i][j] = (Math.random() * 2 - 1);
                }
            }
            console.log("Rules updated:", ruleMatrix);
        }

        // --- Physics Engine ---
        // Optimization: Pre-allocating simpler variables to avoid GC
        function update() {
            const rMax = params.radius;
            const rMaxSq = rMax * rMax;
            const friction = params.friction;
            const forceFactor = params.forceBase / 10; // Normalized force scalar

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                let p1 = particles[i];
                let fx = 0;
                let fy = 0;

                for (let j = 0; j < PARTICLE_COUNT; j++) {
                    if (i === j) continue;
                    let p2 = particles[j];

                    let dx = p2.x - p1.x;
                    let dy = p2.y - p1.y;

                    // Wrap-around logic (Toroidal space)
                    if (dx > width * 0.5) dx -= width;
                    if (dx < -width * 0.5) dx += width;
                    if (dy > height * 0.5) dy -= height;
                    if (dy < -height * 0.5) dy += height;

                    const distSq = dx * dx + dy * dy;

                    if (distSq > 0 && distSq < rMaxSq) {
                        const dist = Math.sqrt(distSq);
                        
                        // F logic based on Primordial Particle Life:
                        // 1. Calculate normalized distance 'q' (0 to 1)
                        // 2. If q < beta: Repulse (Force = q/beta - 1)
                        // 3. If q > beta: Apply Rule (Force = rule * func(q))
                        
                        const q = dist / rMax;
                        let f = 0;

                        if (q < params.beta) {
                            // Close range repulsion (always negative)
                            // Smoother repulsion: 
                            f = q / params.beta - 1;
                        } else {
                            // Medium range interaction based on matrix
                            // Peak function: goes from 0 to 1 to 0 between beta and 1
                            const rule = ruleMatrix[p1.group][p2.group];
                            
                            // A simple linear falloff or a peak function? 
                            // Standard Particle Life peak function:
                            const mid = (1 + params.beta) / 2;
                            const range = 1 - params.beta;
                            
                            // This creates a "sweet spot" at distance 'mid'
                            f = rule * (1 - Math.abs(2 * q - 1 - params.beta) / range);
                        }

                        // Apply force
                        fx += (dx / dist) * f * forceFactor;
                        fy += (dy / dist) * f * forceFactor;
                    }
                }

                // Update Velocity
                p1.vx = (p1.vx + fx) * friction;
                p1.vy = (p1.vy + fy) * friction;

                // Update Position
                p1.x += p1.vx;
                p1.y += p1.vy;

                // Screen Wrap
                if (p1.x < 0) p1.x += width;
                if (p1.x >= width) p1.x -= width;
                if (p1.y < 0) p1.y += height;
                if (p1.y >= height) p1.y -= height;
            }
        }

        // --- Rendering ---
        function draw() {
            // Fade effect for trails (optional, but consumes performance. Let's do clear for crispness)
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, width, height);

            // Batch drawing by color is slightly faster but complex for depth. 
            // Simple iteration is fine for 1200 particles.
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                let p = particles[i];
                ctx.fillStyle = p.color;
                ctx.beginPath();
                // Drawing small squares is faster than circles (arc)
                ctx.fillRect(p.x, p.y, 3, 3);
            }
        }

        // --- FPS Counter & Loop ---
        let lastTime = 0;
        let frameCount = 0;
        let lastFpsTime = 0;

        function loop(timestamp) {
            update();
            draw();

            // FPS Calculation
            frameCount++;
            if (timestamp - lastFpsTime >= 1000) {
                document.getElementById('fps').innerText = frameCount;
                frameCount = 0;
                lastFpsTime = timestamp;
            }

            requestAnimationFrame(loop);
        }

        // --- UI Events ---
        function setupUI() {
            const radInput = document.getElementById('radius');
            const fricInput = document.getElementById('friction');
            const forceInput = document.getElementById('force');
            
            const radVal = document.getElementById('val-radius');
            const fricVal = document.getElementById('val-friction');
            const forceVal = document.getElementById('val-force');

            radInput.addEventListener('input', (e) => {
                params.radius = parseFloat(e.target.value);
                radVal.innerText = params.radius;
            });

            fricInput.addEventListener('input', (e) => {
                params.friction = parseFloat(e.target.value);
                fricVal.innerText = params.friction;
            });

            forceInput.addEventListener('input', (e) => {
                params.forceBase = parseFloat(e.target.value);
                forceVal.innerText = params.forceBase;
            });

            document.getElementById('btn-random').addEventListener('click', randomizeRules);
            document.getElementById('btn-reset').addEventListener('click', () => {
                initParticles();
                // Randomize slightly to break stuck clusters
                randomizeRules(); 
            });
        }

        // Start
        init();

    </script>
</body>
</html>
`;

export const PAGE_IN_PAGE_HTML = `
<!DOCTYPE html>
<html>
<head>
    <title>~*~ ÇAĞLA'S WORLD ~*~</title>
    <meta charset="UTF-8">
    <style>
        body {
            background-color: #000000;
            background-image: url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif'); /* Starry background */
            color: #FFFF00;
            font-family: "Comic Sans MS", "Chalkboard SE", sans-serif;
            margin: 0;
            padding: 0;
            cursor: url('https://cur.cursors-4u.net/cursors/cur-2/cur116.cur'), auto; /* Custom Cursor */
        }

        /* Standard Link Styles */
        a:link { color: #00FFFF; text-decoration: none; }
        a:visited { color: #FF00FF; text-decoration: none; }
        a:hover { 
            color: #FFFFFF; 
            text-decoration: underline; 
            background-color: blue;
            cursor: help;
        }
        a:active { color: #FF0000; }

        /* The Main Container Table */
        .main-table {
            width: 800px;
            background-color: #000033;
            border: 5px ridge #3366FF;
            margin: 0 auto;
        }

        /* Header Style */
        .header-box {
            text-align: center;
            background-color: #000000;
            border: 3px solid #FF00FF;
            margin: 10px;
            padding: 20px;
        }

        h1 {
            font-size: 48px;
            color: #FF00FF;
            text-shadow: 2px 2px #00FFFF;
            margin: 0;
        }

        /* Sidebar */
        .sidebar {
            vertical-align: top;
            width: 150px;
            background-color: #000066;
            padding: 10px;
            border-right: 3px ridge #3366FF;
            text-align: center;
        }

        /* Content Area */
        .content {
            vertical-align: top;
            padding: 20px;
        }

        /* Retro UI Elements */
        .blink {
            animation: blinker 1s linear infinite;
            color: red;
            font-weight: bold;
        }

        @keyframes blinker {
            50% { opacity: 0; }
        }

        .marquee-container {
            background-color: #000000;
            border: 1px solid #FFFFFF;
            color: #00FF00;
            font-family: "Courier New", monospace;
            padding: 2px;
            margin-bottom: 20px;
        }

        .divider {
            width: 100%;
            height: 4px;
            background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
            margin: 20px 0;
        }

        /* Fake Win95 Window */
        .win95-box {
            background: #c0c0c0;
            border: 2px solid #dfdfdf;
            border-bottom-color: #000;
            border-right-color: #000;
            padding: 2px;
            width: 200px;
            margin: 20px auto;
            color: black;
            font-family: 'MS Sans Serif', sans-serif;
            text-align: left;
        }
        .win95-title {
            background: #000080;
            color: white;
            padding: 2px 5px;
            font-weight: bold;
            font-size: 12px;
        }
        .win95-content {
            padding: 10px;
            text-align: center;
            font-size: 12px;
        }

        /* Snowflakes */
        .snowflake {
            position: fixed;
            color: #FFF;
            font-size: 1.5em;
            font-family: Arial, sans-serif;
            text-shadow: 0 0 5px #000;
            pointer-events: none;
            z-index: 9999;
            animation: fall linear infinite;
        }

        @keyframes fall {
            0% { transform: translateY(-10vh); }
            100% { transform: translateY(110vh); }
        }
        
        /* Cursor Trail Dot */
        .trail-dot {
            position: absolute;
            height: 5px;
            width: 5px;
            background-color: cyan;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
        }

    </style>
</head>
<body>

<!-- JS for Snow and Cursor Trail -->
<script>
    // --- SNOW EFFECT ---
    function createSnow() {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄';
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        
        document.body.appendChild(snowflake);
        
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }
    setInterval(createSnow, 100);

    // --- CURSOR TRAIL ---
    document.addEventListener('mousemove', function(e) {
        const dot = document.createElement('div');
        dot.className = 'trail-dot';
        dot.style.left = e.pageX + 'px';
        dot.style.top = e.pageY + 'px';
        document.body.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 300); // Fades out quickly
    });
</script>

<!-- Marquee at the very top -->
<div class="marquee-container">
    <marquee scrollamount="5" scrolldelay="100">
        +++ WELCOME TO ÇAĞLA'S HOMEPAGE +++ DON'T FORGET TO SIGN THE GUESTBOOK +++ BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 +++ I LOVE CATS +++
    </marquee>
</div>

<center>
    <table class="main-table" cellpadding="0" cellspacing="0">
        <tr>
            <td colspan="2">
                <div class="header-box">
                    <h1>&#10024; ÇAĞLA'S WEBPAGE &#10024;</h1>
                    <p style="font-size: 14px; color: yellow;">~*~ where magic happens ~*~</p>
                </div>
            </td>
        </tr>
        <tr>
            <!-- SIDEBAR -->
            <td class="sidebar">
                <br>
                <img src="https://web.archive.org/web/20090829035251/http://geocities.com/SunsetStrip/Club/9027/blue-anim-dragon.gif" width="80">
                <br><br>
                <b><u>NAVIGATION</u></b><br><br>
                <a href="#">[ HOME ]</a><br><br>
                <a href="#">[ ABOUT ME ]</a><br><br>
                <a href="#">[ MY PICS ]</a><br><br>
                <a href="#">[ POETRY ]</a><br><br>
                <a href="#">[ LINKS ]</a><br><br>
                <a href="#">[ EMAIL ME ]</a><br><br>
                <br>
                <div class="blink">NEW!!!</div>
                <a href="#">[ MY DIARY ]</a>
                <br><br>
                <br>
                <img src="https://web.archive.org/web/20091027005003/http://geocities.com/Heartland/Acres/4885/button10.gif">
            </td>

            <!-- MAIN CONTENT -->
            <td class="content">
                <center>
                    <img src="https://media.giphy.com/media/cfuL5gqFDreBbafCN/giphy.gif" alt="Construction Worker">
                    <h3><span class="blink">!!! UNDER CONSTRUCTION !!!</span></h3>
                    <p>Hi guys!!! Welcome to my personal site. <br>Please be patient I am still learning HTML :)</p>
                </center>
                
                <div class="divider"></div>

                <h3>&#9829; About Çağla &#9829;</h3>
                <p>
                    <b>Name:</b> Çağla<br>
                    <b>Age:</b> That's a secret! ;)<br>
                    <b>Location:</b> Earth<br>
                    <b>Mood:</b> Hyper!! ^_^<br>
                    <b>Music:</b> Britney, Spice Girls, Backstreet Boys<br>
                </p>
                <p>
                    I made this page to share my thoughts and cool stuff I find on the web. 
                    If you don't like it, click the BACK button on your browser!!! 
                    <br><br>
                    <i>"Be yourself because everyone else is taken."</i>
                </p>

                <div class="win95-box">
                    <div class="win95-title">Music Player</div>
                    <div class="win95-content">
                        Playing: <b>Toxic.midi</b><br>
                        <button>&#9654;</button> <button>&#9612;&#9612;</button> <button>&#9632;</button>
                    </div>
                </div>

                <div class="divider"></div>

                <h3>&#9734; My Cool Links &#9734;</h3>
                <ul>
                    <li><a href="#">Neopets</a> - Add me as a friend!!</li>
                    <li><a href="#">Dollz</a> - Make your own avatars</li>
                    <li><a href="#">AltaVista</a> - Search the web</li>
                    <li><a href="#">Hampster Dance</a> - So funny lol</li>
                </ul>

                <br><br>
                <center>
                    <p>You are visitor number:</p>
                    <div style="background: black; border: 2px inset white; color: red; font-family: 'Courier New'; display: inline-block; padding: 2px 10px; font-size: 20px; letter-spacing: 5px;">
                        01429
                    </div>
                    <br><br>
                    <a href="#">Sign My Guestbook</a> | <a href="#">View My Guestbook</a>
                    <br><br>
                    <small>Copyright 1999-2001 Çağla's Webpage. Do not steal my layout!!</small>
                    <br><br>
                    <img src="https://web.archive.org/web/20091026213038/http://geocities.com/RainForest/Vines/1684/ie_logo.gif">
                    <img src="https://web.archive.org/web/20091027063321/http://geocities.com/Area51/Cavern/3371/ns_logo.gif">
                </center>
            </td>
        </tr>
    </table>
</center>

</body>
</html>
`;

export const LYRICS_2003_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Which 2003 Pop Lyric Are You Today?</title>
    <style>
        /* --- FRUTIGER AERO / XP AESTHETIC --- */
        :root {
            --xp-blue-dark: #0054E3;
            --xp-blue-light: #2F96E6;
            --glass-white: rgba(255, 255, 255, 0.85);
            --gloss-green-top: #89f078;
            --gloss-green-mid: #54d23e;
            --gloss-green-bot: #009900;
        }

        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Verdana', 'Tahoma', sans-serif;
            /* The classic Frutiger Aero Aurora Background */
            background: url('https://media1.tenor.com/m/3zXpgzH1Y6cAAAAd/frutiger-aero.gif') no-repeat center center fixed;
            background-size: cover;
            overflow: hidden;
            position: relative;
        }

        /* Abstract Bokeh/Orbs for that 2000s tech feel */
        body::before {
            content: '';
            position: absolute;
            top: -20%;
            right: -10%;
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        body::after {
            content: '';
            position: absolute;
            bottom: -10%;
            left: -10%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(146, 254, 157, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
        }

        /* --- THE XP WINDOW --- */
        .xp-window {
            width: 500px;
            max-width: 90%;
            background-color: #ECE9D8; /* Classic XP Beige/Grey background */
            border-radius: 8px 8px 0 0;
            box-shadow: 
                0 10px 30px rgba(0, 0, 0, 0.3),
                0 0 0 1px rgba(0, 50, 150, 0.5); /* Blue outline */
            overflow: hidden;
            position: relative;
            z-index: 10;
            animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes popIn {
            from { opacity: 0; transform: scale(0.9) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Window Title Bar (Luna Blue) */
        .title-bar {
            background: linear-gradient(to bottom, #0058EE 0%, #3593FF 4%, #288EFF 18%, #127DFF 44%, #0369FD 46%, #0253DF 50%, #0051E2 100%);
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            border-radius: 8px 8px 0 0;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);
        }

        .title-text {
            color: white;
            font-weight: bold;
            font-size: 13px;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
            letter-spacing: 0.5px;
        }

        .window-controls {
            display: flex;
            gap: 5px;
        }

        .control-btn {
            width: 21px;
            height: 21px;
            background: #FFF;
            border-radius: 3px;
            border: 1px solid #FFF;
            box-shadow: 0 0 1px rgba(0,0,0,0.5);
            position: relative;
            cursor: default;
        }
        
        /* Fake Close Button (Red) */
        .btn-close {
            background: linear-gradient(to bottom, #E07D72 0%, #D44737 50%, #C33526 51%, #951406 100%);
            border-color: #FFF;
        }
        .btn-close::before {
            content: '×';
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -55%);
            color: white;
            font-weight: bold;
            font-size: 16px;
            text-shadow: 0 1px 1px rgba(0,0,0,0.3);
        }

        /* --- CONTENT AREA --- */
        .content {
            padding: 30px 20px;
            text-align: center;
            background: linear-gradient(to bottom, #fff 0%, #f1f1f1 100%);
        }

        .lyric-box {
            min-height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
        }

        #lyric-text {
            font-family: 'Trebuchet MS', 'Arial', sans-serif;
            font-size: 24px;
            color: #444;
            line-height: 1.4;
            font-style: italic;
        }

        /* --- THE GLOSSY BUTTON (Frutiger Style) --- */
        .refresh-btn {
            background: linear-gradient(to bottom, var(--gloss-green-top) 0%, var(--gloss-green-mid) 50%, #29b112 51%, var(--gloss-green-bot) 100%);
            border: 1px solid #006600;
            border-radius: 5px;
            color: white;
            font-family: 'Verdana', sans-serif;
            font-size: 15px;
            font-weight: bold;
            padding: 8px 30px;
            cursor: pointer;
            box-shadow: 
                0 2px 4px rgba(0,0,0,0.3),
                inset 0 1px 0 rgba(255,255,255,0.7);
            text-shadow: 0 -1px 1px rgba(0,0,0,0.4);
            transition: filter 0.1s;
            outline: none;
        }

        .refresh-btn:hover {
            filter: brightness(1.1) contrast(1.1);
        }

        .refresh-btn:active {
            transform: translateY(1px);
            background: linear-gradient(to bottom, var(--gloss-green-mid) 0%, #29b112 100%);
        }

        /* Footer text inside window */
        .footer-text {
            margin-top: 20px;
            font-size: 10px;
            color: #999;
        }

    </style>
</head>
<body>

    <div class="xp-window">
        <div class="title-bar">
            <span class="title-text">Which 2003 Pop Lyric Are You Today?</span>
            <div class="window-controls">
                <div class="control-btn" style="background: linear-gradient(to bottom, #a0cbf7 0%, #4a91e2 100%); opacity: 0.8;"></div>
                <div class="control-btn" style="background: linear-gradient(to bottom, #a0cbf7 0%, #4a91e2 100%); opacity: 0.8;"></div>
                <div class="control-btn btn-close"></div>
            </div>
        </div>
        
        <div class="content">
            <div class="lyric-box">
                <div id="lyric-text">Loading...</div>
            </div>
            
            <button class="refresh-btn" onclick="generateLyric()">give me another</button>
            
            <div class="footer-text">© 2003 ÇBS Lyrics Generator v42.0</div>
        </div>
    </div>

    <script>
        const lyrics = [
            "go shawty, it’s your birthday",
            "it's the freakin’ weekend baby, i’m about to have me some fun",
            "shake that thing, miss kana kana",
            "your love’s got me looking so crazy right now",
            "there’s another world inside of me that you may never see",
            "i’m not crazy, i’m just a little unwell",
            "i like the way you do that right thurr",
            "it’s been too long and i’m lost without you",
            "i put your picture away, sat down and cried today",
            "wake me up inside, call my name and save me from the dark",
            "baby boy, you stay on my mind",
            "we do it for fun, we do it for play",
            "would you love me if i was down and out?",
            "even though this might hurt you, i have to be honest",
            "you are beautiful, no matter what they say",
            "it’s a damn cold night, trying to figure out this life",
            "i got the magic stick, i know if i can hit once, i can hit twice",
            "i don’t know what you heard about me",
            "i love the way you grind with that booty on me",
            "i can’t really explain it, i’m so into you",
            "people killing people dying, children hurting, hear them crying",
            "tell me just what you want me to be",
            "i wanna dance with you, all night",
            "you were my sun, you were my earth",
            "don’t be so quick to walk away",
            "uh oooh, uh oooh, you got me",
            "miss independent, won’t let a man interfere",
            "this is the night, it’s all about now",
            "all i need in this life of sin is me and my girlfriend",
            "you can't roll a blunt to this one",
            "don’t be fooled by the rocks that i got",
            "thanks for making me a fighter",
            "confusion never stops, closing walls and ticking clocks",
            "give me two pairs, i need two pairs",
            "i’m here without you baby, but you’re still on my lonely mind",
            "since the moment i spotted you, like walking round with little wings on my shoes",
            "is there any more room for me in those jeans?",
            "we at the hotel, motel, holiday inn",
            "suga suga how you get so fly",
            "i’m looking in the mirror at this woman down and out",
            "step in the name of love, groove in the name of love",
            "if you got a big ***, let me search ya",
            "i say the remedy is the experience",
            "back off, i’ll take you on",
            "no letting go, no holding back",
            "girls who are boys who like boys to be girls"
        ];

        function generateLyric() {
            const display = document.getElementById('lyric-text');
            // Fade out
            display.style.opacity = '0';
            
            setTimeout(() => {
                // Change text
                const randomLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
                display.innerText = randomLyric;
                // Fade in
                display.style.transition = 'opacity 0.3s ease';
                display.style.opacity = '1';
            }, 200);
        }

        // Initialize on load
        window.onload = generateLyric;

    </script>
</body>
</html>
`;

export const ANKET_DEFTERI_HTML = `
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anket Defteri</title>
    
    <!-- Importing a cute, handwritten style font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@500;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --cover-pink: #FFC0CB;
            --page-bg: #fff0f5; /* Lavender Blush */
            --page-bg-alt: #ffe6f0;
            --line-color: #ff99cc;
            --text-color: #555;
            --shadow: rgba(0, 0, 0, 0.15);
            --spiral-grey: #dcdcdc;
            --accent-pink: #ff66b2;
        }

        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            font-family: 'Patrick Hand', cursive;
            background-color: #ffe4e1;
            /* Cute subtle pattern background */
            background-image: radial-gradient(#ffb6c1 15%, transparent 16%),
                              radial-gradient(#ffb6c1 15%, transparent 16%);
            background-size: 60px 60px;
            background-position: 0 0, 30px 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--text-color);
        }

        h1.main-title {
            font-family: 'Quicksand', sans-serif;
            color: #ff3385;
            text-shadow: 2px 2px 0px #fff;
            font-size: 3rem;
            margin-bottom: 20px;
            margin-top: 20px;
            text-align: center;
        }

        /* --- NOTEBOOK CONTAINER --- */
        .notebook-container {
            display: flex;
            width: 900px;
            max-width: 95%;
            min-height: 600px;
            background-color: transparent;
            position: relative;
            margin-bottom: 50px;
            perspective: 1000px;
            transition: opacity 0.5s ease;
        }

        .notebook-cover {
            display: flex;
            width: 100%;
            border-radius: 15px;
            box-shadow: 0 10px 25px var(--shadow);
            position: relative;
        }

        /* --- PAGES --- */
        .page {
            flex: 1;
            padding: 30px 25px;
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .page-left {
            background-color: var(--page-bg);
            border-radius: 15px 0 0 15px;
            border-right: 1px solid #eee;
        }

        .page-right {
            background-color: var(--page-bg-alt);
            border-radius: 0 15px 15px 0;
            border-left: 1px solid #eee;
        }

        /* --- SPIRAL BINDING --- */
        .spiral {
            width: 40px;
            height: 96%;
            position: absolute;
            left: 50%;
            top: 2%;
            transform: translateX(-50%);
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            pointer-events: none;
        }

        .coil {
            width: 100%;
            height: 12px;
            background: linear-gradient(90deg, #bbb, #eee, #999);
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            transform: rotate(-5deg);
        }

        /* --- FORM STYLING --- */
        .photo-area {
            width: 120px;
            height: 140px;
            border: 3px dashed var(--line-color);
            margin: 0 auto 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.5);
            transform: rotate(-3deg);
        }
        
        .photo-text {
            color: var(--accent-pink);
            font-size: 1rem;
            padding: 5px;
        }

        .heart-deco {
            font-size: 24px;
            color: var(--accent-pink);
            display: block;
            margin-bottom: 5px;
        }

        .form-row {
            display: flex;
            align-items: baseline;
            margin-bottom: 12px;
            width: 100%;
        }

        label {
            color: var(--accent-pink);
            font-weight: bold;
            font-size: 1.1rem;
            margin-right: 10px;
            white-space: nowrap;
        }

        input[type="text"], textarea {
            flex: 1;
            background: transparent;
            border: none;
            border-bottom: 2px solid var(--line-color);
            font-family: 'Patrick Hand', cursive;
            font-size: 1.1rem;
            color: #333;
            padding: 2px 5px;
            outline: none;
            transition: border-color 0.3s;
            width: 100%;
        }

        input[type="text"]:focus, textarea:focus {
            border-bottom: 2px solid #ff3385;
        }

        /* Special styling for the textarea Note */
        .note-container {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
        }
        
        textarea {
            border: 2px solid var(--line-color);
            border-radius: 10px;
            padding: 10px;
            height: 80px;
            resize: none;
            margin-top: 5px;
            background-color: rgba(255,255,255,0.4);
            line-height: 1.4;
        }

        /* --- DECORATIONS & BUTTONS --- */
        .bottom-icons {
            margin-top: auto;
            text-align: center;
            font-size: 1.5rem;
            color: var(--accent-pink);
            letter-spacing: 15px;
            opacity: 0.7;
            padding-top: 15px;
        }

        button.submit-btn {
            display: block;
            margin: 20px auto 0 auto;
            background-color: var(--accent-pink);
            color: white;
            border: none;
            padding: 10px 40px;
            font-family: 'Patrick Hand', cursive;
            font-size: 1.4rem;
            border-radius: 25px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            transform: rotate(-2deg);
        }

        button.submit-btn:hover {
            transform: rotate(0deg) scale(1.05);
            background-color: #ff3385;
            box-shadow: 0 6px 10px rgba(0,0,0,0.15);
        }

        /* --- EASTER EGG SCREEN --- */
        #easter-egg {
            display: none;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
            border: 4px dashed var(--accent-pink);
            max-width: 600px;
            animation: popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes popIn {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        .egg-msg-big {
            font-size: 2.5rem;
            color: #ff3385;
            margin-bottom: 10px;
            line-height: 1.2;
        }

        .egg-msg-small {
            font-size: 1.2rem;
            color: #888;
            margin-bottom: 30px;
        }

        .back-link {
            color: var(--accent-pink);
            text-decoration: underline;
            cursor: pointer;
            font-size: 1.2rem;
        }
        .back-link:hover {
            color: #ff3385;
        }

        /* --- RESPONSIVE DESIGN --- */
        @media (max-width: 768px) {
            .notebook-container {
                width: 95%;
                height: auto;
            }
            .notebook-cover {
                flex-direction: column;
            }
            .page-left {
                border-radius: 15px 15px 0 0;
                border-right: none;
                border-bottom: 2px dashed #ddd;
            }
            .page-right {
                border-radius: 0 0 15px 15px;
                border-left: none;
            }
            .spiral {
                display: none; /* Hide spiral on mobile stack */
            }
            h1.main-title {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>

    <h1 class="main-title">Anket Defteri</h1>

    <!-- FORM SECTION -->
    <div class="notebook-container" id="notebook">
        <!-- Spiral Decoration -->
        <div class="spiral">
            <div class="coil"></div><div class="coil"></div><div class="coil"></div>
            <div class="coil"></div><div class="coil"></div><div class="coil"></div>
            <div class="coil"></div><div class="coil"></div><div class="coil"></div>
            <div class="coil"></div><div class="coil"></div><div class="coil"></div>
            <div class="coil"></div><div class="coil"></div><div class="coil"></div>
            <div class="coil"></div><div class="coil"></div><div class="coil"></div>
        </div>

        <form class="notebook-cover" onsubmit="handleSubmit(event)">
            
            <!-- LEFT PAGE -->
            <div class="page page-left">
                <!-- Decorative Photo Area -->
                <div class="photo-area">
                    <div>
                        <span class="heart-deco">♥</span>
                        <div class="photo-text">Fotoğrafını yapıştırmayı unutma!</div>
                    </div>
                </div>

                <!-- Identity Fields -->
                <div class="form-row">
                    <label>Ad:</label>
                    <input type="text" name="ad" required autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Soyad:</label>
                    <input type="text" name="soyad" required autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Adres:</label>
                    <input type="text" name="adres" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Tel:</label>
                    <input type="text" name="tel" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>e-mail:</label>
                    <input type="text" name="email" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Doğum tarihi/yeri:</label>
                    <input type="text" name="dogum" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Burcun:</label>
                    <input type="text" name="burc" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Saç ve göz rengin:</label>
                    <input type="text" name="sacgoz" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Hobilerin:</label>
                    <input type="text" name="hobi" autocomplete="off">
                </div>
                
                <div class="bottom-icons">
                    ☁ ☂ ☃ ☄
                </div>
            </div>

            <!-- RIGHT PAGE -->
            <div class="page page-right">
                <!-- Preference Fields -->
                <div class="form-row">
                    <label>En sevdiğin hayvan:</label>
                    <input type="text" name="hayvan" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>En sevdiğin yemek:</label>
                    <input type="text" name="yemek" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>En sevdiğin kitap:</label>
                    <input type="text" name="kitap" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>En sevdiğin müzik grubu/şarkıcı:</label>
                    <input type="text" name="muzik" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>En sevdiğin şarkı:</label>
                    <input type="text" name="sarki" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>En sevdiğin film:</label>
                    <input type="text" name="film" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>En sevdiğin TV programı:</label>
                    <input type="text" name="tv" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Sevdiğin:</label>
                    <input type="text" name="sevdigin" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Sevmediğin:</label>
                    <input type="text" name="sevmedigin" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Olmak istediğin kız/erkek:</label>
                    <input type="text" name="olmak" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>En büyük dileğin:</label>
                    <input type="text" name="dilek" autocomplete="off">
                </div>
                
                <div class="note-container">
                    <label>Not:</label>
                    <textarea name="not"></textarea>
                </div>

                <button type="submit" class="submit-btn">Gönder</button>

                <div class="bottom-icons">
                    ♥ ☼ ☾ ☆
                </div>
            </div>
        </form>
    </div>

    <!-- EASTER EGG SECTION -->
    <div id="easter-egg">
        <div style="font-size: 3rem; margin-bottom: 10px;">💖 ✨ 🦋</div>
        <div class="egg-msg-big">i cant believe u filled this in ur so sweet & ily</div>
        <div class="egg-msg-small">but idk how to view these so</div>
        <div class="back-link" onclick="resetForm()">Başa dön ve tekrar doldur</div>
    </div>

    <script>
        function handleSubmit(e) {
            e.preventDefault();
            
            // Hide Notebook
            const notebook = document.getElementById('notebook');
            notebook.style.opacity = '0';
            
            // Wait for transition then switch
            setTimeout(() => {
                notebook.style.display = 'none';
                
                // Show Easter Egg
                const egg = document.getElementById('easter-egg');
                egg.style.display = 'block';
                
                // Add some confetti effect (simple visual change)
                document.body.style.backgroundImage = "radial-gradient(#fff 15%, transparent 16%), radial-gradient(#fff 15%, transparent 16%)";
                document.body.style.backgroundColor = "#ff99cc";
            }, 500);
        }

        function resetForm() {
            // Hide Egg
            const egg = document.getElementById('easter-egg');
            egg.style.display = 'none';
            
            // Reset Body Style
            document.body.style.backgroundColor = "#ffe4e1";
            document.body.style.backgroundImage = "radial-gradient(#ffb6c1 15%, transparent 16%), radial-gradient(#ffb6c1 15%, transparent 16%)";

            // Show Notebook
            const notebook = document.getElementById('notebook');
            notebook.style.display = 'flex';
            
            // Trigger reflow
            void notebook.offsetWidth;
            
            notebook.style.opacity = '1';
            
            // Optional: clear the inputs
            document.querySelector('form').reset();
        }
    </script>
</body>
</html>
`;

export const ONE_OF_YOU_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE BETRAYAL</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=VT323&display=swap" rel="stylesheet">

    <style>
        /* --- BIBLICAL GOTHIC ATMOSPHERE --- */
        body {
            margin: 0;
            height: 100vh;
            background-color: #050000;
            background-image: radial-gradient(circle at center, #2a0000 0%, #000000 80%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            text-align: center;
        }

        /* The Huge Text */
        h1 {
            font-family: 'UnifrakturMaguntia', cursive;
            font-size: clamp(3rem, 8vw, 8rem); /* Responsive huge text */
            color: #ff0000;
            margin: 0 0 50px 0;
            line-height: 1;
            text-shadow: 
                0 0 10px #500000,
                0 0 20px #300000,
                4px 4px 0px #000;
            letter-spacing: -2px;
            animation: flicker 4s infinite alternate;
        }

        /* --- Y2K BUTTON STYLE --- */
        .y2k-btn {
            font-family: 'VT323', monospace;
            font-size: 1.5rem;
            padding: 10px 25px;
            background-color: #c0c0c0; /* Classic Win95 Grey */
            color: #000080; /* Classic Blue Text */
            border: 4px solid;
            border-color: #ffffff #404040 #404040 #ffffff; /* Beveled 3D look */
            cursor: pointer;
            text-transform: lowercase;
            outline: none;
            box-shadow: 10px 10px 20px rgba(0,0,0,0.8);
            transition: transform 0.1s;
            position: relative;
            z-index: 10;
        }

        .y2k-btn:active {
            border-color: #404040 #ffffff #ffffff #404040; /* Inset look on click */
            transform: translate(2px, 2px);
        }

        .y2k-btn:hover {
            background-color: #dcdcdc;
        }

        /* --- RESULT TEXT --- */
        #result {
            margin-top: 40px;
            font-family: 'VT323', monospace;
            font-size: 2rem;
            min-height: 3rem;
            color: #00ff00; /* Matrix/Terminal Green */
            text-shadow: 0 0 5px #00ff00;
        }

        /* Specific style for the betrayal message */
        .betrayal-mode {
            color: red !important;
            text-shadow: 0 0 10px red !important;
            font-family: 'UnifrakturMaguntia', cursive !important;
            font-size: 3rem !important;
        }

        /* Atmosphere Animation */
        @keyframes flicker {
            0% { opacity: 1; text-shadow: 0 0 10px #500000; }
            50% { opacity: 0.8; text-shadow: 0 0 20px #800000; }
            100% { opacity: 1; text-shadow: 0 0 10px #500000; }
        }

        /* Grain overlay for that old feeling */
        .overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+');
            pointer-events: none;
            opacity: 0.4;
            z-index: 1;
        }
    </style>
</head>
<body>

    <div class="overlay"></div>

    <h1 style="z-index: 2;">ONE OF YOU<br>WILL BETRAY ME</h1>

    <button class="y2k-btn" onclick="checkBetrayal()">is it you?</button>

    <div id="result" style="z-index: 2;"></div>

    <script>
        function checkBetrayal() {
            const resultDiv = document.getElementById('result');
            // Reset styles
            resultDiv.className = ''; 
            
            // Math.random returns 0 to 0.999...
            // < 0.1 is a 10% chance
            if (Math.random() < 0.1) {
                // 10% Chance
                resultDiv.innerText = "OMG ITS U";
                resultDiv.className = "betrayal-mode"; // Make it scary red
                
                // Optional: Add a little shake effect to the body
                document.body.style.transform = "translate(5px, 5px)";
                setTimeout(() => document.body.style.transform = "translate(0, 0)", 100);

            } else {
                // 90% Chance
                const safeResponses = [
                    "no we good",
                    "probably not",
                    "no ily",
                    "nah ur safe",
                    "judas who?",
                    "ur vibes are holy",
                    "absolutely not",
                    "ur an angel",
                    "we chillin"
                ];
                
                // Pick a random response from the list
                const randomResponse = safeResponses[Math.floor(Math.random() * safeResponses.length)];
                
                resultDiv.innerText = randomResponse;
            }
        }
    </script>
</body>
</html>
`;

export const RED_FLAG_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>red flag or green flag??</title>
    <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
    <style>
        :root {
            --hot-pink: #ff00cc;
            --silver: #c0c0c0;
            --screen-bg: #98fb98; /* LCD Green */
            --screen-text: #000;
            --keypad-bg: #e0e0e0;
        }

        body {
            background-color: #ff69b4;
            background-image: 
                linear-gradient(45deg, #ff69b4 25%, #ff1493 25%, #ff1493 50%, #ff69b4 50%, #ff69b4 75%, #ff1493 75%, #ff1493 100%);
            background-size: 20px 20px;
            height: 100vh;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'VT323', monospace;
            overflow: hidden;
        }

        /* --- THE FLIP PHONE --- */
        .phone-container {
            width: 320px;
            height: 600px;
            background: linear-gradient(135deg, #dcdcdc 0%, #ffffff 50%, #a9a9a9 100%); /* Silver metallic */
            border-radius: 20px 20px 40px 40px;
            padding: 20px;
            box-shadow: 
                -10px 10px 20px rgba(0,0,0,0.5),
                inset 2px 2px 5px rgba(255,255,255,0.8),
                inset -2px -2px 5px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            gap: 15px;
            position: relative;
            border: 4px solid #888;
        }

        /* Decoration: Rhinestones */
        .phone-container::before {
            content: '';
            position: absolute;
            top: 10px; right: 10px;
            width: 10px; height: 10px;
            background: radial-gradient(white, violet);
            border-radius: 50%;
            box-shadow: 0 0 5px white;
        }

        /* --- THE SCREEN SECTION --- */
        .screen-bezel {
            background: #000;
            padding: 15px;
            border-radius: 10px 10px 0 0;
            border: 2px solid #555;
            height: 45%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .lcd-screen {
            background-color: var(--screen-bg);
            width: 100%;
            height: 100%;
            border: 2px inset #555;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
        }

        /* Scanlines */
        .lcd-screen::after {
            content: " ";
            display: block;
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
            background-size: 100% 4px;
            z-index: 2;
            pointer-events: none;
        }

        h2 {
            margin: 0 0 5px 0;
            font-size: 1.5rem;
            color: #000080;
            text-transform: uppercase;
            letter-spacing: 1px;
            z-index: 3;
        }

        .input-area {
            width: 95%;
            height: 40px;
            background: #e0ffe0;
            border: 1px dashed #006400;
            font-family: 'VT323', monospace;
            font-size: 1.2rem;
            color: #000;
            outline: none;
            resize: none;
            z-index: 3;
            margin-bottom: 10px;
            text-align: center;
        }

        .result-display {
            font-size: 1.8rem;
            font-weight: bold;
            line-height: 1.1;
            z-index: 3;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: glitch 0.2s infinite;
            display: none; /* Hidden by default */
        }

        /* --- THE HINGE --- */
        .hinge {
            height: 20px;
            background: linear-gradient(to bottom, #888, #eee, #888);
            border-radius: 5px;
            margin: -10px -20px;
            z-index: 5;
            border-top: 1px solid #444;
            border-bottom: 1px solid #444;
        }

        /* --- THE KEYPAD SECTION --- */
        .keypad-area {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 10px;
        }

        .nav-controls {
            display: flex;
            gap: 15px;
            align-items: center;
            margin-bottom: 15px;
        }

        .soft-key {
            width: 40px; 
            height: 20px; 
            background: #ccc; 
            border-radius: 5px;
            border-bottom: 3px solid #999;
        }

        .d-pad {
            width: 60px;
            height: 60px;
            background: radial-gradient(circle, #ff00cc 20%, #aa0088 100%);
            border-radius: 50%;
            border: 3px solid #fff;
            box-shadow: 0 4px 0 #660055;
            color: white;
            font-family: 'VT323', monospace;
            font-size: 1.2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            line-height: 1;
        }
        
        .d-pad:active {
            transform: translateY(4px);
            box-shadow: 0 0 0;
        }

        .num-pad {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            width: 90%;
        }

        .num-btn {
            background: linear-gradient(to bottom, #fff, #ddd);
            height: 35px;
            border-radius: 10px 10px 15px 15px;
            border: 1px solid #aaa;
            box-shadow: 0 3px 0 #888;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: #444;
        }

        /* --- ANIMATIONS & COLORS --- */
        .red-flag { color: #ff0000; text-shadow: 2px 2px 0px #000; }
        .green-flag { color: #006400; text-shadow: 2px 2px 0px #fff; }
        .maybe { color: #000080; text-shadow: 1px 1px 0px #ccc; }
        .clown { color: #ff00cc; font-size: 2rem; text-shadow: 3px 3px 0px #ffff00; animation: shake 0.5s infinite; }

        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }

    </style>
</head>
<body>

    <div class="phone-container">
        <!-- Top Screen Half -->
        <div class="screen-bezel">
            <div class="lcd-screen">
                <div style="width:100%; display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px; z-index:3;">
                    <span>📶 T-Mobile</span>
                    <span>🔋</span>
                </div>
                
                <h2>JUDGE HIM</h2>
                
                <input type="text" id="userInput" class="input-area" placeholder="type what he did here..." autocomplete="off">
                
                <div id="resultBox" class="result-display"></div>
            </div>
            <div style="text-align: center; color: #fff; font-size: 12px; margin-top: 5px; letter-spacing: 2px;">MOTOROLA</div>
        </div>

        <!-- The Hinge -->
        <div class="hinge"></div>

        <!-- Bottom Keypad Half -->
        <div class="keypad-area">
            <div class="nav-controls">
                <div class="soft-key"></div>
                <button class="d-pad" onclick="judgeHim()">JUDGE<br>HIM</button>
                <div class="soft-key"></div>
            </div>

            <!-- Decorative Num Pad -->
            <div class="num-pad">
                <div class="num-btn">1 .,</div>
                <div class="num-btn">2 ABC</div>
                <div class="num-btn">3 DEF</div>
                <div class="num-btn">4 GHI</div>
                <div class="num-btn">5 JKL</div>
                <div class="num-btn">6 MNO</div>
                <div class="num-btn">7 PQRS</div>
                <div class="num-btn">8 TUV</div>
                <div class="num-btn">9 WXYZ</div>
                <div class="num-btn">*</div>
                <div class="num-btn">0 +</div>
                <div class="num-btn"># 🔇</div>
            </div>
        </div>
    </div>

    <script>
        // Sound Context
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();

        function playBeep() {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = 'sawtooth'; // Harsh sound
            oscillator.frequency.setValueAtTime(150, audioCtx.currentTime); // Low pitch error
            oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);

            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.3);
        }

        function playWin() {
            if (audioCtx.state === 'suspended') { audioCtx.resume(); }
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.3);
        }

        function judgeHim() {
            const input = document.getElementById('userInput');
            const resultBox = document.getElementById('resultBox');

            // Visual feedback: clear current result
            resultBox.style.display = 'none';
            
            if (input.value.trim() === "") {
                input.placeholder = "TYPE SOMETHING!!";
                return;
            }

            // Probability Logic
            const rand = Math.random(); // 0.0 to 1.0
            
            let resultText = "";
            let resultClass = "";

            if (rand < 0.05) {
                // 5% Chance
                resultText = "🤡 YOU’RE THE RED FLAG";
                resultClass = "clown";
                playBeep(); // Using error sound for the clown roast too
            } else {
                // 95% Chance split 3 ways (~31.6% each)
                // Normalize the remaining 0.95 to a 0-3 range
                const remainingRand = Math.floor(Math.random() * 3);
                
                if (remainingRand === 0) {
                    resultText = "🚩 RED FLAG";
                    resultClass = "red-flag";
                    playBeep();
                } else if (remainingRand === 1) {
                    resultText = "💚 MAYBE HE’S JUST STUPID";
                    resultClass = "maybe";
                    playWin();
                } else {
                    resultText = "💚 GREEN FLAG GO OFF BESTIE";
                    resultClass = "green-flag";
                    playWin();
                }
            }

            // Display Result
            setTimeout(() => {
                resultBox.style.display = 'flex';
                resultBox.innerText = resultText;
                resultBox.className = "result-display " + resultClass;
            }, 100);
        }
    </script>
</body>
</html>
`;

export const THE_CRUNCH_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CEO SIMULATOR: THE CRUNCH</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #202020;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: 'Press Start 2P', cursive;
            overflow: hidden;
        }

        #game-container {
            position: relative;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            border: 4px solid #555;
        }

        canvas {
            display: block;
            background-color: #f0f0f0; /* Office Wall Color */
        }

        #ui-layer {
            position: absolute;
            top: 10px;
            left: 10px;
            text-shadow: 2px 2px 0 #000;
            pointer-events: none;
        }

        #start-screen, #game-over-screen {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            z-index: 10;
        }

        button {
            margin-top: 20px;
            padding: 15px 30px;
            font-family: 'Press Start 2P', cursive;
            font-size: 16px;
            background: #ffcc00;
            border: 4px solid #fff;
            cursor: pointer;
            box-shadow: 0 4px 0 #b38f00;
        }
        button:active {
            box-shadow: 0 0 0;
            transform: translateY(4px);
        }

        .hidden { display: none !important; }
        
        h1 { font-size: 24px; line-height: 1.5; color: #ffcc00; margin-bottom: 10px;}
        p { font-size: 12px; line-height: 1.5; color: #ccc; max-width: 80%; }
        .red { color: #ff5555; }
    </style>
</head>
<body>

    <div id="game-container">
        <canvas id="gameCanvas" width="800" height="450"></canvas>
        
        <div id="ui-layer">
            <div>REVENUE: $<span id="score">0</span></div>
            <div>BURNOUT: <span id="health">0</span>%</div>
        </div>

        <div id="start-screen">
            <h1>CEO SIMULATOR:<br>THE CRUNCH</h1>
            <p>You are ÇBS, the Founder.</p>
            <p>Avoid <span class="red">REVISIONS</span> and <span class="red">EMAILS</span>.</p>
            <p>Drink COFFEE to sprint.</p>
            <p>Collect REVENUE.</p>
            <p>ARROWS to Move & Jump.</p>
            <button onclick="startGame()">START WORK DAY</button>
        </div>

        <div id="game-over-screen" class="hidden">
            <h1 id="go-title">BANKRUPT</h1>
            <p id="go-reason">You missed the deadline.</p>
            <p>Final Revenue: $<span id="final-score">0</span></p>
            <button onclick="resetGame()">TRY AGAIN</button>
        </div>
    </div>

<script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreEl = document.getElementById('score');
    const healthEl = document.getElementById('health');
    const startScreen = document.getElementById('start-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    const goTitle = document.getElementById('go-title');
    const goReason = document.getElementById('go-reason');
    const finalScoreEl = document.getElementById('final-score');

    // Game Constants
    const GRAVITY = 0.6;
    const FRICTION = 0.8;
    const JUMP_FORCE = 12;
    const SPEED = 5;
    
    // Game State
    let gameRunning = false;
    let score = 0;
    let burnout = 0; // 100 = dead
    let frame = 0;
    let cameraX = 0;

    // Keys
    const keys = {
        right: false,
        left: false,
        up: false
    };

    // Entities
    let player = {
        x: 100, y: 100, width: 30, height: 40,
        velX: 0, velY: 0,
        grounded: false,
        color: '#4a4a4a', // Dark Suit
        facingRight: true
    };

    let platforms = [];
    let enemies = [];
    let items = [];
    let decorations = []; // Background office stuff
    let goal = { x: 0, y: 0, w: 40, h: 80 }; // The IPO Bell

    const TILE_SIZE = 50;

    function initLevel() {
        platforms = [];
        enemies = [];
        items = [];
        decorations = [];
        
        // Generate a longer floor
        for(let i=0; i<100; i++) {
             platforms.push({ x: i * TILE_SIZE, y: 400, w: TILE_SIZE, h: TILE_SIZE, type: 'floor' });
        }

        // Add some "Desks" (Platforms)
        platforms.push({ x: 300, y: 300, w: 100, h: 20, type: 'desk' });
        platforms.push({ x: 500, y: 250, w: 100, h: 20, type: 'desk' });
        platforms.push({ x: 750, y: 300, w: 100, h: 20, type: 'desk' });
        platforms.push({ x: 1000, y: 200, w: 150, h: 20, type: 'desk' });
        platforms.push({ x: 1300, y: 300, w: 100, h: 20, type: 'desk' });
        platforms.push({ x: 1600, y: 350, w: 100, h: 20, type: 'desk' });

        // Add "Deadlines" (Spikes/Obstacles)
        enemies.push({ x: 600, y: 360, w: 30, h: 40, type: 'deadline', velX: 0 }); // Static
        enemies.push({ x: 1100, y: 160, w: 30, h: 40, type: 'deadline', velX: 0 });
        enemies.push({ x: 1450, y: 360, w: 30, h: 40, type: 'deadline', velX: 0 });

        // Add "Revisions" (Moving Enemies)
        enemies.push({ x: 400, y: 360, w: 30, h: 30, type: 'revision', velX: -2, patrolStart: 300, patrolEnd: 500 });
        enemies.push({ x: 800, y: 260, w: 30, h: 30, type: 'revision', velX: 2, patrolStart: 750, patrolEnd: 900 });
        enemies.push({ x: 1800, y: 360, w: 30, h: 30, type: 'revision', velX: -3, patrolStart: 1600, patrolEnd: 2000 });

        // Add Items
        items.push({ x: 320, y: 260, w: 20, h: 20, type: 'coffee' });
        items.push({ x: 520, y: 200, w: 20, h: 20, type: 'money' });
        items.push({ x: 1050, y: 150, w: 20, h: 20, type: 'money' });
        items.push({ x: 1320, y: 260, w: 20, h: 20, type: 'coffee' });
        items.push({ x: 1620, y: 300, w: 20, h: 20, type: 'money' });

        // Goal
        goal = { x: 2200, y: 320, w: 40, h: 80 };

        // Background Decor (Charts on walls)
        for(let i=0; i<10; i++) {
            decorations.push({ 
                x: i * 400 + 100, 
                y: 150, 
                w: 60, 
                h: 80, 
                type: 'chart' 
            });
        }
    }

    function startGame() {
        startScreen.classList.add('hidden');
        gameOverScreen.classList.add('hidden');
        
        player.x = 50;
        player.y = 300;
        player.velX = 0;
        player.velY = 0;
        score = 0;
        burnout = 0;
        gameRunning = true;
        initLevel();
        requestAnimationFrame(loop);
    }

    function resetGame() {
        startGame();
    }

    function endGame(status, reason) {
        gameRunning = false;
        gameOverScreen.classList.remove('hidden');
        finalScoreEl.innerText = score;
        
        if (status === 'win') {
            goTitle.innerText = "IPO LAUNCHED!";
            goTitle.style.color = "#00ff00";
            goReason.innerText = "You survived the crunch. Investors are happy.";
        } else {
            goTitle.innerText = "FIRED";
            goTitle.style.color = "#ff5555";
            goReason.innerText = reason;
        }
    }

    // Input Handling
    window.addEventListener('keydown', function (e) {
        if (e.code === 'ArrowRight') keys.right = true;
        if (e.code === 'ArrowLeft') keys.left = true;
        if (e.code === 'ArrowUp') {
            if (player.grounded) {
                player.velY = -JUMP_FORCE;
                player.grounded = false;
            }
        }
    });

    window.addEventListener('keyup', function (e) {
        if (e.code === 'ArrowRight') keys.right = false;
        if (e.code === 'ArrowLeft') keys.left = false;
    });

    // Helper: Rectangle Collision
    function checkCollision(rect1, rect2) {
        return (rect1.x < rect2.x + rect2.w &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.h &&
                rect1.y + rect1.height > rect2.y);
    }

    function update() {
        if (!gameRunning) return;

        // Player Movement
        if (keys.right) {
            if (player.velX < SPEED) player.velX++;
            player.facingRight = true;
        }
        if (keys.left) {
            if (player.velX > -SPEED) player.velX--;
            player.facingRight = false;
        }

        player.velX *= FRICTION;
        player.velY += GRAVITY;

        player.x += player.velX;
        player.y += player.velY;
        player.grounded = false;

        // Platform Collisions
        for(let plat of platforms) {
            if (player.x < plat.x + plat.w &&
                player.x + player.width > plat.x &&
                player.y < plat.y + plat.h &&
                player.y + player.height > plat.y) {
                
                // Collision Direction Check
                let vectorX = (player.x + (player.width/2)) - (plat.x + (plat.w/2));
                let vectorY = (player.y + (player.height/2)) - (plat.y + (plat.h/2));
                let hWidths = (player.width/2) + (plat.w/2);
                let hHeights = (player.height/2) + (plat.h/2);

                let colDir = null;

                if (Math.abs(vectorX) < hWidths && Math.abs(vectorY) < hHeights) {
                    let oX = hWidths - Math.abs(vectorX);
                    let oY = hHeights - Math.abs(vectorY);

                    if (oX >= oY) {
                        if (vectorY > 0) {
                            colDir = "t"; // Player hitting bottom of platform
                            player.y += oY;
                            player.velY = 0;
                        } else {
                            colDir = "b"; // Player standing on top
                            player.y -= oY;
                            player.velY = 0;
                            player.grounded = true;
                        }
                    } else {
                        if (vectorX > 0) {
                            colDir = "l";
                            player.x += oX;
                            player.velX = 0;
                        } else {
                            colDir = "r";
                            player.x -= oX;
                            player.velX = 0;
                        }
                    }
                }
            }
        }

        // Enemy Logic
        for (let i = 0; i < enemies.length; i++) {
            let e = enemies[i];
            
            // Movement for Revisions
            if (e.type === 'revision') {
                e.x += e.velX;
                if (e.x < e.patrolStart || e.x > e.patrolEnd) e.velX *= -1;
            }

            // Collision with Player
            if (checkCollision(player, {x: e.x, y: e.y, w: e.w, h: e.h})) {
                if (e.type === 'revision' && player.velY > 0 && player.y + player.height < e.y + e.h / 2) {
                    // Jumped on head
                    enemies.splice(i, 1);
                    player.velY = -JUMP_FORCE / 1.5;
                    score += 500;
                    i--;
                } else {
                    // Hit enemy
                    endGame('loss', 'You were overwhelmed by ' + (e.type === 'deadline' ? 'a deadline.' : 'revisions.'));
                    return;
                }
            }
        }

        // Item Logic
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (checkCollision(player, {x: item.x, y: item.y, w: item.w, h: item.h})) {
                if (item.type === 'money') {
                    score += 1000;
                } else if (item.type === 'coffee') {
                    score += 100;
                    // Speed boost logic could go here
                }
                items.splice(i, 1);
                i--;
            }
        }

        // Goal Logic
        if (checkCollision(player, goal)) {
            endGame('win');
            return;
        }

        // Pitfall logic
        if (player.y > canvas.height) {
            endGame('loss', 'You fell out of the market.');
            return;
        }

        // Camera
        cameraX = player.x - 100;

        // UI Update
        scoreEl.innerText = score;
        burnout = Math.min(100, burnout + 0.05); // Slowly increase burnout
        healthEl.innerText = Math.floor(burnout);
        if(burnout >= 100) {
            endGame('loss', 'Burnout reached 100%.');
        }
    }

    function draw() {
        // Clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Save context for camera translation
        ctx.save();
        ctx.translate(-cameraX, 0);

        // Draw Background Items
        for(let d of decorations) {
            ctx.fillStyle = '#d0d0d0';
            ctx.fillRect(d.x, d.y, d.w, d.h);
            // Draw chart lines
            ctx.strokeStyle = '#ff5555';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(d.x + 5, d.y + d.h - 5);
            ctx.lineTo(d.x + d.w/2, d.y + d.h/2);
            ctx.lineTo(d.x + d.w - 5, d.y + 10);
            ctx.stroke();
        }

        // Draw Platforms
        ctx.fillStyle = '#666';
        for(let p of platforms) {
            if (p.type === 'desk') {
                ctx.fillStyle = '#8B4513'; // Wood color
                ctx.fillRect(p.x, p.y, p.w, 5); // Desk top
                ctx.fillStyle = '#666'; // Legs
                ctx.fillRect(p.x + 10, p.y+5, 5, p.h); 
                ctx.fillRect(p.x + p.w - 15, p.y+5, 5, p.h); 
            } else {
                ctx.fillStyle = '#444';
                ctx.fillRect(p.x, p.y, p.w, p.h);
            }
        }

        // Draw Goal (IPO Bell/Flag)
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(goal.x, goal.y, 5, 80); // Pole
        ctx.fillRect(goal.x, goal.y, 40, 30); // Flag
        ctx.fillStyle = '#000';
        ctx.fillText("IPO", goal.x + 5, goal.y + 20);

        // Draw Enemies
        for(let e of enemies) {
            if (e.type === 'deadline') {
                // Red Spikes
                ctx.fillStyle = '#ff0000';
                ctx.beginPath();
                ctx.moveTo(e.x, e.y + e.h);
                ctx.lineTo(e.x + e.w/2, e.y);
                ctx.lineTo(e.x + e.w, e.y + e.h);
                ctx.fill();
            } else {
                // Moving Paper Stack (Ghost)
                ctx.fillStyle = '#fff';
                ctx.fillRect(e.x, e.y, e.w, e.h);
                ctx.fillStyle = '#000';
                ctx.fillRect(e.x + 5, e.y + 10, 5, 5); // Eye
                ctx.fillRect(e.x + 20, e.y + 10, 5, 5); // Eye
            }
        }

        // Draw Items
        for(let item of items) {
            if (item.type === 'money') {
                ctx.fillStyle = '#85bb65';
                ctx.beginPath();
                ctx.arc(item.x + item.w/2, item.y + item.h/2, 10, 0, Math.PI*2);
                ctx.fill();
                ctx.fillStyle = '#fff';
                ctx.fillText("$", item.x + 6, item.y + 15);
            } else {
                // Coffee Mug
                ctx.fillStyle = '#fff';
                ctx.fillRect(item.x, item.y + 5, 15, 15);
                ctx.fillStyle = '#6f4e37';
                ctx.fillRect(item.x+2, item.y + 5, 11, 4);
            }
        }

        // Draw Player (Girl CEO ÇBS)
        const pDrawX = player.x;
        const pDrawY = player.y;

        // 1. Hair (Back) - "Blondeish Brunette" (Golden/Brown)
        ctx.fillStyle = '#C5A059'; 
        if (player.facingRight) {
             ctx.fillRect(pDrawX - 4, pDrawY + 5, 10, 25); // Long hair back
        } else {
             ctx.fillRect(pDrawX + player.width - 6, pDrawY + 5, 10, 25);
        }

        // 2. Body (Suit)
        ctx.fillStyle = '#333'; // Dark grey suit
        ctx.fillRect(pDrawX, pDrawY + 12, player.width, player.height - 12);
        
        // Shirt/Blouse
        ctx.fillStyle = '#fff';
        ctx.fillRect(pDrawX + 10, pDrawY + 12, 10, 28);

        // 3. Head (Skin)
        ctx.fillStyle = '#ffccaa';
        ctx.fillRect(pDrawX + 4, pDrawY - 5, 22, 17);

        // 4. Hair (Top/Front)
        ctx.fillStyle = '#C5A059'; 
        ctx.fillRect(pDrawX + 2, pDrawY - 8, 26, 6); // Top
        // Bangs/Side
        if (player.facingRight) {
            ctx.fillRect(pDrawX + 18, pDrawY - 2, 4, 10);
        } else {
            ctx.fillRect(pDrawX + 8, pDrawY - 2, 4, 10);
        }

        // 5. Name Label "ÇBS"
        ctx.fillStyle = '#ffcc00'; // Gold text
        ctx.font = '10px "Press Start 2P"';
        ctx.textAlign = "center";
        ctx.fillText("ÇBS", pDrawX + player.width/2, pDrawY - 15);
        ctx.textAlign = "left"; // Reset

        ctx.restore();
    }

    function loop() {
        if (!gameRunning) return;
        update();
        draw();
        frame++;
        requestAnimationFrame(loop);
    }

</script>
</body>
</html>
`;

export const THE_VOID_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE VOID | anti-productivity</title>
    <style>
        /* --- THE VIBE --- */
        :root {
            --void-black: #050505;
            --existential-purple: #bd93f9;
            --glitch-green: #50fa7b;
            --despair-grey: #6272a4;
            --font-fancy: 'Courier New', Courier, serif; 
            --font-chaos: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
        }

        body {
            margin: 0;
            height: 100vh;
            background-color: var(--void-black);
            color: #f8f8f2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: var(--font-fancy);
            overflow: hidden;
            cursor: crosshair;
        }

        /* --- THE BLACK HOLE --- */
        .black-hole-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            pointer-events: none;
        }

        .black-hole {
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, #000 40%, #1a0b2e 60%, transparent 70%);
            border-radius: 50%;
            box-shadow: 0 0 50px 10px rgba(189, 147, 249, 0.2);
            animation: breathe 8s infinite alternate;
        }

        @keyframes breathe {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.1); opacity: 0.4; }
        }

        /* --- UI LAYOUT --- */
        .app-wrapper {
            z-index: 10;
            width: 90%;
            max-width: 500px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        h1 {
            font-family: var(--font-chaos);
            font-size: 2.5rem;
            margin: 0;
            color: var(--existential-purple);
            text-shadow: 2px 2px 0px var(--glitch-green);
            letter-spacing: -2px;
        }

        .affirmation {
            font-style: italic;
            color: var(--despair-grey);
            font-size: 0.9rem;
            min-height: 1.5rem;
            opacity: 0.8;
        }

        /* --- THE INPUT --- */
        .input-group {
            position: relative;
        }

        input[type="text"] {
            width: 100%;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--despair-grey);
            padding: 15px;
            color: white;
            font-family: var(--font-fancy);
            font-size: 1.2rem;
            text-align: center;
            outline: none;
            border-radius: 5px;
            transition: all 0.3s;
        }

        input[type="text"]:focus {
            border-color: var(--glitch-green);
            box-shadow: 0 0 15px rgba(80, 250, 123, 0.2);
        }

        /* --- THE BUTTON --- */
        .void-btn {
            background: transparent;
            border: 2px solid var(--existential-purple);
            color: var(--existential-purple);
            padding: 15px 30px;
            font-family: var(--font-fancy);
            font-size: 1rem;
            cursor: pointer;
            text-transform: lowercase;
            letter-spacing: 2px;
            transition: 0.2s;
            position: relative;
            overflow: hidden;
        }

        .void-btn:hover {
            background: var(--existential-purple);
            color: var(--void-black);
            box-shadow: 0 0 20px var(--existential-purple);
        }

        .void-btn:active {
            transform: scale(0.95);
        }

        /* --- PRAISE BUBBLES --- */
        .praise-bubble {
            position: absolute;
            color: var(--glitch-green);
            font-family: var(--font-chaos);
            font-size: 14px;
            pointer-events: none;
            animation: floatUp 1.5s forwards;
            white-space: nowrap;
            z-index: 20;
            text-shadow: 1px 1px 0 #000;
        }

        @keyframes floatUp {
            0% { opacity: 1; transform: translateY(0) scale(0.8); }
            100% { opacity: 0; transform: translateY(-50px) scale(1.2); }
        }

        /* --- TASK DESTRUCTION ANIMATION --- */
        .doomed-task {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1.5rem;
            color: white;
            pointer-events: none;
            animation: suckIntoVoid 1s forwards cubic-bezier(0.68, -0.55, 0.27, 1.55);
            z-index: 5;
        }

        @keyframes suckIntoVoid {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            50% { color: var(--glitch-green); transform: translate(-50%, -50%) rotate(180deg) scale(0.5); }
            100% { opacity: 0; transform: translate(-50%, -50%) rotate(720deg) scale(0); }
        }

        /* --- BOTTOM STATS --- */
        .footer-stats {
            margin-top: 50px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            font-size: 0.8rem;
            color: var(--despair-grey);
        }

        .pie-chart {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: conic-gradient(var(--existential-purple) 0% 100%);
            position: relative;
        }
        
        /* The Snail */
        .snail-track {
            position: fixed;
            bottom: 10px;
            left: 0;
            width: 100%;
            height: 20px;
            pointer-events: none;
        }
        #snail {
            position: absolute;
            left: 0;
            transition: left 1s linear;
            font-family: monospace;
            font-size: 20px;
        }

    </style>
</head>
<body>

    <div class="black-hole-container">
        <div class="black-hole"></div>
    </div>

    <div class="app-wrapper">
        <h1 id="app-title">THE VOID</h1>
        
        <div class="affirmation" id="daily-affirmation">
            loading existential dread...
        </div>

        <div class="input-group">
            <input type="text" id="task-input" placeholder="what burden are you carrying?" autocomplete="off">
        </div>

        <button class="void-btn" onclick="submitToVoid()">[ submit to the void ]</button>

        <div class="footer-stats">
            <div style="text-align: left;">
                <div class="pie-chart"></div>
                <div style="margin-top:5px;">productivity: 100%</div>
                <div style="font-size: 10px;">(you are enough)</div>
            </div>
            
            <div style="text-align: right; max-width: 150px;">
                <div id="status-msg">tasks ignored: 0</div>
                <div style="font-size: 10px; margin-top:5px;">please close this app</div>
            </div>
        </div>
    </div>

    <div class="snail-track">
        <div id="snail">_@/</div>
    </div>

    <script>
        // --- DATA ---
        const affirmations = [
            "you are not behind. time is fake.",
            "burnout is chic now.",
            "capitalism is the real toxic trait.",
            "your inbox will never be empty. release the fantasy.",
            "rotting in bed is a valid hobby.",
            "nothing matters, so have a treat.",
            "your worth is not your output.",
            "mediocrity is a form of rebellion.",
            "nap until the economy collapses."
        ];

        const praise = [
            "omg stunning",
            "brave of you",
            "literally poetry",
            "beyoncé could never",
            "genius alert",
            "revolutionary",
            "so aesthetic",
            "stop, you're doing too much",
            "icon behavior",
            "main character energy"
        ];

        const placeholders = [
            "type your trauma here...",
            "write down a task & forget about it",
            "list your failures",
            "pretend to be busy...",
            "feed the void..."
        ];

        // --- STATE ---
        let tasksIgnored = 0;
        const input = document.getElementById('task-input');
        const affirmationEl = document.getElementById('daily-affirmation');
        const snail = document.getElementById('snail');
        const title = document.getElementById('app-title');

        // --- INIT ---
        window.onload = () => {
            affirmationEl.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
            input.placeholder = placeholders[Math.floor(Math.random() * placeholders.length)];
            moveSnail();
            
            // Randomly glitch the title
            setInterval(() => {
                if(Math.random() > 0.9) {
                    title.style.fontFamily = Math.random() > 0.5 ? "var(--font-chaos)" : "var(--font-fancy)";
                    title.style.color = Math.random() > 0.5 ? "var(--glitch-green)" : "var(--existential-purple)";
                    setTimeout(() => {
                        title.style.fontFamily = "var(--font-chaos)";
                        title.style.color = "var(--existential-purple)";
                    }, 100);
                }
            }, 2000);
        };

        // --- SNAIL LOGIC ---
        function moveSnail() {
            let pos = 0;
            setInterval(() => {
                pos += 0.05; // Extremely slow
                if (pos > 100) pos = -5;
                snail.style.left = pos + '%';
            }, 100);
        }

        // --- INPUT HANDLER (PRAISE GENERATOR) ---
        input.addEventListener('input', (e) => {
            if (Math.random() > 0.7) { // 30% chance per keystroke
                spawnPraise();
            }
        });

        function spawnPraise() {
            const el = document.createElement('div');
            el.classList.add('praise-bubble');
            el.innerText = praise[Math.floor(Math.random() * praise.length)];
            
            // Random position near the input
            const rect = input.getBoundingClientRect();
            const randomX = (Math.random() * 200) - 100;
            
            el.style.left = (rect.left + rect.width/2 + randomX) + 'px';
            el.style.top = (rect.top - 20) + 'px';
            
            document.body.appendChild(el);
            
            setTimeout(() => el.remove(), 1500);
        }

        // --- THE BUTTON (THE VOID) ---
        function submitToVoid() {
            const text = input.value;
            if (!text.trim()) {
                spawnPraise(); // Praise them even for empty submission
                return;
            }

            // 1. Create the floating text element
            const doom = document.createElement('div');
            doom.classList.add('doomed-task');
            doom.innerText = text;
            document.body.appendChild(doom);

            // 2. Clear input immediately
            input.value = "";
            
            // 3. Audio Hallucination (Synth Drone)
            playVoidSound();

            // 4. Update Stats
            tasksIgnored++;
            // Fix: escape template literal for TS
            document.getElementById('status-msg').innerText = \`tasks ignored: \${tasksIgnored}\`;

            // 5. Cleanup DOM
            setTimeout(() => {
                doom.remove();
            }, 1000);

            // 6. Sometimes give a fake error
            if (Math.random() > 0.8) {
                setTimeout(() => {
                    alert("Error: You are doing too great. Please stop.");
                }, 500);
            }
        }

        // --- SOUND GENERATION (Web Audio API) ---
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        function playVoidSound() {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            oscillator.type = 'sawtooth';
            // Drop pitch from high to deep low
            oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(10, audioCtx.currentTime + 1);
            
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 1);
        }

    </script>
</body>
</html>
`;

export const MS_PAINT_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Untitled - Paint</title>
    <style>
        /* --- RETRO WINDOWS AESTHETIC --- */
        :root {
            --win-gray: #c0c0c0;
            --win-dark: #808080;
            --win-darker: #404040;
            --win-light: #ffffff;
            --win-blue: #000080;
        }

        body {
            background-color: #008080; /* Teal Desktop Background */
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Comic Sans MS', 'MS Sans Serif', sans-serif;
            overflow: hidden;
            user-select: none;
        }

        /* The Main Window */
        .paint-window {
            width: 95vw;
            height: 90vh;
            background-color: var(--win-gray);
            border: 2px solid;
            border-color: var(--win-light) var(--win-darker) var(--win-darker) var(--win-light);
            display: flex;
            flex-direction: column;
            box-shadow: 4px 4px 10px rgba(0,0,0,0.5);
        }

        /* Title Bar */
        .title-bar {
            background: linear-gradient(90deg, var(--win-blue), #1084d0);
            padding: 4px 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 0.5px;
        }

        .title-icon {
            width: 16px;
            height: 16px;
            background: white; /* Placeholder for icon */
            margin-right: 5px;
            display: inline-block;
            border: 1px solid gray;
        }

        .window-controls button {
            width: 16px;
            height: 14px;
            background: var(--win-gray);
            border: 1px outset white;
            font-size: 10px;
            line-height: 10px;
            font-weight: bold;
            margin-left: 2px;
            cursor: pointer;
            font-family: sans-serif;
        }

        /* Menu Bar */
        .menu-bar {
            padding: 2px 5px;
            border-bottom: 1px solid var(--win-dark);
            font-size: 12px;
        }
        .menu-bar span {
            margin-right: 10px;
            cursor: default;
        }
        .menu-bar span:hover {
            background-color: var(--win-blue);
            color: white;
        }

        /* Main Workspace */
        .workspace {
            flex: 1;
            display: flex;
            padding: 5px;
            overflow: hidden;
            gap: 5px;
        }

        /* Toolbar (Left) */
        .toolbar {
            width: 50px;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .tool-box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2px;
        }

        .tool-btn {
            width: 22px;
            height: 22px;
            background-color: var(--win-gray);
            border: 2px outset white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 12px;
        }

        .tool-btn:active, .tool-btn.active {
            border: 2px inset white;
            background-color: #ddd;
        }

        .options-box {
            margin-top: 10px;
            border: 2px inset white;
            padding: 5px;
            background: var(--win-gray);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }

        .brush-size {
            background: black;
            border-radius: 50%;
            cursor: pointer;
        }
        .brush-size:hover { background: var(--win-blue); }

        /* Canvas Area */
        .canvas-container {
            flex: 1;
            background-color: #808080;
            border: 2px inset white;
            padding: 2px;
            overflow: hidden;
            position: relative;
        }

        canvas {
            background-color: white;
            cursor: crosshair;
            display: block;
        }

        /* Color Palette (Bottom) */
        .palette-area {
            height: 40px;
            padding: 5px;
            border-top: 1px solid var(--win-light);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .current-colors {
            width: 30px;
            height: 30px;
            border: 2px inset white;
            background: var(--win-gray);
            position: relative;
        }
        
        #primaryColorDisplay {
            width: 15px;
            height: 15px;
            background: black;
            position: absolute;
            top: 5px; left: 5px;
            border: 1px inset white;
            z-index: 2;
        }

        .color-grid {
            display: grid;
            grid-template-columns: repeat(14, 1fr);
            grid-template-rows: 1fr 1fr;
            gap: 1px;
            border: 2px inset white;
            padding: 1px;
        }

        .color-swatch {
            width: 15px;
            height: 15px;
            border: 1px solid gray;
            cursor: pointer;
        }

        /* Footer */
        .status-bar {
            height: 20px;
            border-top: 1px solid var(--win-dark);
            padding: 2px 5px;
            font-size: 11px;
            color: black;
            display: flex;
            align-items: center;
            gap: 20px;
            background-color: var(--win-gray);
        }

        .status-field {
            border: 1px inset white;
            padding: 0 5px;
            height: 16px;
            display: flex;
            align-items: center;
        }

    </style>
</head>
<body>

    <div class="paint-window">
        <!-- Title Bar -->
        <div class="title-bar">
            <div style="display:flex; align-items:center;">
                <div class="title-icon"></div>
                untitled - Paint
            </div>
            <div class="window-controls">
                <button>_</button>
                <button>□</button>
                <button style="background:#c0c0c0;">×</button>
            </div>
        </div>

        <!-- Menu Bar -->
        <div class="menu-bar">
            <span><u>F</u>ile</span>
            <span><u>E</u>dit</span>
            <span><u>V</u>iew</span>
            <span><u>I</u>mage</span>
            <span><u>C</u>olors</span>
            <span><u>H</u>elp</span>
        </div>

        <!-- Workspace -->
        <div class="workspace">
            <!-- Left Toolbar -->
            <div class="toolbar">
                <div class="tool-box">
                    <div class="tool-btn" onclick="setTool('star')">★</div>
                    <div class="tool-btn" onclick="clearCanvas()">🗑️</div>
                    <div class="tool-btn active" onclick="setTool('pencil')">✏️</div>
                    <div class="tool-btn" onclick="setTool('brush')">🖌️</div>
                    <div class="tool-btn" onclick="setTool('spray')">💨</div>
                    <div class="tool-btn" onclick="setTool('eraser')">🧼</div>
                </div>

                <!-- Brush Sizes -->
                <div class="options-box">
                    <div class="brush-size" style="width:4px; height:4px;" onclick="setSize(2)"></div>
                    <div class="brush-size" style="width:8px; height:8px;" onclick="setSize(5)"></div>
                    <div class="brush-size" style="width:12px; height:12px;" onclick="setSize(10)"></div>
                    <div class="brush-size" style="width:16px; height:16px;" onclick="setSize(15)"></div>
                </div>
            </div>

            <!-- Drawing Area -->
            <div class="canvas-container" id="canvasContainer">
                <canvas id="paintCanvas"></canvas>
            </div>
        </div>

        <!-- Bottom Palette -->
        <div class="palette-area">
            <div class="current-colors">
                <div id="primaryColorDisplay"></div>
            </div>
            <div class="color-grid" id="colorGrid">
                <!-- Colors injected via JS -->
            </div>
        </div>

        <!-- Status Bar -->
        <div class="status-bar">
            <div class="status-field" style="width: 150px;">For Help, click Help Topics on the Help Menu.</div>
            <div class="status-field" style="flex:1;"></div>
            <div class="status-field" id="coords">0,0</div>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('paintCanvas');
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('canvasContainer');
        const coordsDisplay = document.getElementById('coords');
        const primaryColorDisplay = document.getElementById('primaryColorDisplay');

        // State
        let isDrawing = false;
        let tool = 'pencil';
        let color = '#000000';
        let size = 2;
        let lastX = 0;
        let lastY = 0;

        // Classic MS Paint Palette
        const colors = [
            '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080', '#808040', '#004040', '#0080ff', '#004080', '#4080ff', '#804000',
            '#ffffff', '#c0c0c0', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ffff80', '#00ff80', '#80ffff', '#8080ff', '#ff0080', '#ff8040'
        ];

        // Init Palette
        const colorGrid = document.getElementById('colorGrid');
        colors.forEach(c => {
            const div = document.createElement('div');
            div.className = 'color-swatch';
            div.style.backgroundColor = c;
            div.onclick = () => setColor(c);
            colorGrid.appendChild(div);
        });

        // Resize Canvas to fit Container
        function resizeCanvas() {
            // Give it a fixed feeling, but fill available space initially
            canvas.width = container.clientWidth - 8; 
            canvas.height = container.clientHeight - 8;
            
            // Fill white background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        window.onload = resizeCanvas;
        window.onresize = resizeCanvas; // Warning: This clears canvas in this simple version

        // Tool Functions
        function setTool(t) {
            tool = t;
            // Update UI buttons
            document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
            // Very simple active state logic based on click position or just relying on variable
            // For this snippet, just relying on visual "active" class toggle on click is handled in HTML/CSS mostly
        }

        function setColor(c) {
            color = c;
            primaryColorDisplay.style.backgroundColor = c;
        }

        function setSize(s) {
            size = s;
        }

        function clearCanvas() {
            if(confirm("Save changes to untitled?")) {
                // Janky fake save dialog behavior (just clears)
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }

        // Drawing Logic
        function startPosition(e) {
            isDrawing = true;
            draw(e);
        }

        function finishedPosition() {
            isDrawing = false;
            ctx.beginPath(); // Reset path so lines don't connect
        }

        function getMousePos(e) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }

        function draw(e) {
            if (!isDrawing) return;

            const pos = getMousePos(e);
            
            // Update Coords in status bar. Fix: escaped template literal.
            coordsDisplay.innerText = \`\${Math.floor(pos.x)},\${Math.floor(pos.y)}\`;

            ctx.lineWidth = size;
            ctx.lineCap = 'round';

            if (tool === 'eraser') {
                ctx.strokeStyle = '#ffffff';
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(pos.x, pos.y);
            } 
            else if (tool === 'spray') {
                ctx.fillStyle = color;
                for (let i = 0; i < 10; i++) {
                    const offsetX = (Math.random() - 0.5) * size * 4;
                    const offsetY = (Math.random() - 0.5) * size * 4;
                    ctx.fillRect(pos.x + offsetX, pos.y + offsetY, 1, 1);
                }
            } 
            else if (tool === 'star') {
                // Just draws stars on click/drag
                ctx.fillStyle = color;
                // Fix: escaped template literal.
                ctx.font = \`\${size * 3}px Arial\`;
                ctx.fillText("★", pos.x, pos.y);
            }
            else {
                // Pencil / Brush
                ctx.strokeStyle = color;
                ctx.lineTo(pos.x, pos.y);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(pos.x, pos.y);
            }
        }

        // Event Listeners
        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', finishedPosition);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseleave', finishedPosition);

    </script>
</body>
</html>
`;

export const THE_FROG_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catch the Frog</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            background: url('https://media.istockphoto.com/id/1404630379/vector/8bit-pixel-jungle-landscape-game-level-background.jpg?s=612x612&w=0&k=20&c=BlGmcaGYseeUyQL5MmGOA6IBIixKYv18EQbw8VKqg7Q=') no-repeat center center fixed;
            background-size: cover;
            /* Pixel art rendering for the background */
            image-rendering: pixelated; 
            font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
            cursor: crosshair;
            user-select: none;
        }

        #frog {
            position: absolute;
            font-size: 80px;
            cursor: pointer;
            transition: transform 0.1s;
            user-select: none;
            filter: drop-shadow(0 5px 5px rgba(0,0,0,0.5));
            z-index: 10;
        }

        #frog:active {
            transform: scale(0.8);
        }

        /* The taunt text */
        .taunt {
            position: absolute;
            color: white;
            font-weight: bold;
            font-size: 24px;
            pointer-events: none;
            text-shadow: 2px 2px 0 #000;
            animation: floatUp 1s ease-out forwards;
            z-index: 5;
            white-space: nowrap;
        }

        @keyframes floatUp {
            0% { opacity: 1; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(-50px) scale(1.2); }
        }

        /* Instruction overlay that disappears on first click */
        #overlay {
            position: fixed;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            pointer-events: none;
            transition: opacity 0.5s;
            z-index: 20;
        }
    </style>
</head>
<body>

    <div id="overlay">Click the Frog... if you can.</div>
    <div id="frog">🐸</div>

    <script>
        const frog = document.getElementById('frog');
        const overlay = document.getElementById('overlay');
        let moveTimer;

        // Taunt messages
        const taunts = [
            "nope", "try again", "too slow", "you wish", 
            "boing!", "missed me", "nice try", "lmao", 
            "almost", "catch me", "sike"
        ];

        // 1. Audio Context for the "Boing" sound
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();

        function playBoing() {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            
            // "Boing" effect: Slide pitch up rapidly
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(200, audioCtx.currentTime); 
            oscillator.frequency.linearRampToValueAtTime(600, audioCtx.currentTime + 0.15);
            
            // Fade out
            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
            
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.2);
        }

        // 2. Movement Logic
        function moveFrog() {
            // Screen boundaries
            const maxWidth = window.innerWidth - 100; // minus frog size
            const maxHeight = window.innerHeight - 100;

            const randomX = Math.random() * maxWidth;
            const randomY = Math.random() * maxHeight;

            frog.style.left = randomX + 'px';
            frog.style.top = randomY + 'px';
            
            // Random rotation for chaos
            const randomRot = (Math.random() * 40) - 20;
            // Fix: escaped template literal
            frog.style.transform = \`rotate(\${randomRot}deg)\`;

            resetAutoMove();
        }

        // 3. Auto-move timer (2-4 seconds random)
        function resetAutoMove() {
            clearTimeout(moveTimer);
            const randomTime = Math.random() * 2000 + 2000; // 2000ms to 4000ms
            moveTimer = setTimeout(moveFrog, randomTime);
        }

        // 4. Click Handler
        frog.addEventListener('mousedown', (e) => {
            // Hide intro overlay
            overlay.style.opacity = '0';

            // Play sound
            playBoing();

            // Show Taunt Text
            showTaunt(e.clientX, e.clientY);

            // Move Instantly
            moveFrog();
        });

        function showTaunt(x, y) {
            const el = document.createElement('div');
            el.classList.add('taunt');
            el.innerText = taunts[Math.floor(Math.random() * taunts.length)];
            
            // Position near the click
            el.style.left = x + 'px';
            el.style.top = y + 'px';
            
            document.body.appendChild(el);
            
            // Cleanup DOM
            setTimeout(() => el.remove(), 1000);
        }

        // Init
        moveFrog();

    </script>
</body>
</html>
`;

export const RABBIT_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>follow the white rabbit</title>
    <style>
        :root {
            --phosphor-main: #00ff00; /* Classic Terminal Green */
            --phosphor-glow: #008f11;
            --bg-color: #0d0d0d;
        }

        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            background-color: var(--bg-color);
            color: var(--phosphor-main);
            font-family: 'Courier New', Courier, monospace;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            user-select: none;
        }

        /* --- CRT SCREEN EFFECTS --- */
        .crt-container {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            z-index: 10;
        }

        /* Scanlines */
        .scanlines {
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                rgba(255,255,255,0),
                rgba(255,255,255,0) 50%,
                rgba(0,0,0,0.2) 50%,
                rgba(0,0,0,0.2)
            );
            background-size: 100% 4px;
            position: absolute;
            top: 0; left: 0;
        }

        /* Subtle Flicker */
        .flicker {
            width: 100%;
            height: 100%;
            background: rgba(0, 255, 0, 0.02);
            opacity: 0;
            position: absolute;
            top: 0; left: 0;
            animation: flickerAnim 0.15s infinite;
            pointer-events: none;
        }

        /* Vignette */
        .vignette {
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%);
            position: absolute;
            top: 0; left: 0;
        }

        @keyframes flickerAnim {
            0% { opacity: 0.02; }
            5% { opacity: 0.05; }
            10% { opacity: 0.01; }
            15% { opacity: 0.06; }
            30% { opacity: 0.02; }
            60% { opacity: 0.04; }
            100% { opacity: 0.02; }
        }

        /* --- THE RABBIT --- */
        #rabbit-container {
            cursor: pointer;
            transition: opacity 0.2s;
            z-index: 5;
            animation: pulse 3s infinite ease-in-out;
        }

        .rabbit-emoji {
            font-size: 120px;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        @keyframes pulse {
            0% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(255,255,255,0.3)); }
            50% { transform: scale(1.05); filter: drop-shadow(0 0 20px rgba(255,255,255,0.6)); }
            100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(255,255,255,0.3)); }
        }

        /* --- THE TERMINAL --- */
        #terminal-container {
            display: none; /* Hidden initially */
            position: absolute;
            top: 20%;
            left: 10%;
            width: 80%;
            font-size: 1.5rem;
            line-height: 1.8;
            text-shadow: 0 0 5px var(--phosphor-glow), 0 0 10px var(--phosphor-glow);
            z-index: 5;
        }

        .cursor {
            display: inline-block;
            width: 10px;
            height: 1.2em;
            background-color: var(--phosphor-main);
            vertical-align: bottom;
            animation: blink 1s step-end infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .line {
            display: block;
            margin-bottom: 20px;
            min-height: 1.5rem; /* Reserve space */
        }

        /* Glitch text effect class */
        .glitch {
            animation: glitch-skew 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
            color: var(--phosphor-main);
        }

    </style>
</head>
<body>

    <!-- CRT Overlay Effects -->
    <div class="crt-container">
        <div class="scanlines"></div>
        <div class="vignette"></div>
        <div class="flicker"></div>
    </div>

    <!-- Phase 1: The Rabbit -->
    <div id="rabbit-container" onclick="enterTheMatrix()">
        <div class="rabbit-emoji">🐇</div>
    </div>

    <!-- Phase 2: The Terminal -->
    <div id="terminal-container">
        <span class="line" id="line1"></span>
        <span class="line" id="line2"></span>
        <span class="line" id="line3"></span>
        <span class="cursor"></span>
    </div>

    <script>
        const rabbit = document.getElementById('rabbit-container');
        const terminal = document.getElementById('terminal-container');
        
        // The script to type out
        const script = [
            "this page looks familiar",
            "you were here on march 14 2004",
            "you clicked the rabbit back then too"
        ];

        // Typing Configuration
        const typingSpeed = 70; // ms per char
        const lineDelay = 1500; // ms between lines

        function enterTheMatrix() {
            // 1. Hide Rabbit
            rabbit.style.display = 'none';
            
            // 2. Show Terminal
            terminal.style.display = 'block';

            // 3. Start Typing Sequence
            typeLine(0);
        }

        function typeLine(lineIndex) {
            if (lineIndex >= script.length) return; // Done

            const currentLineId = 'line' + (lineIndex + 1);
            const lineElement = document.getElementById(currentLineId);
            const textToType = script[lineIndex];
            
            let charIndex = 0;

            function typeChar() {
                if (charIndex < textToType.length) {
                    lineElement.innerHTML += textToType.charAt(charIndex);
                    charIndex++;
                    
                    // Add random jitter to typing speed for realism
                    const randomJitter = Math.floor(Math.random() * 50); 
                    setTimeout(typeChar, typingSpeed + randomJitter);
                } else {
                    // Line finished, move cursor visual (optional, here cursor stays at bottom)
                    // Move to next line after delay
                    setTimeout(() => {
                        typeLine(lineIndex + 1);
                    }, lineDelay);
                }
            }

            typeChar();
        }
    </script>
</body>
</html>
`;

export const THE_ORB_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Oracle's Orb</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Quicksand:wght@300&display=swap" rel="stylesheet">
    <style>
        :root {
            --orb-color: #d8b4fe;
            --glow-color: #a855f7;
            --bg-dark: #0f0a1e;
            --text-color: #f3e8ff;
        }

        body {
            margin: 0;
            height: 100vh;
            background-color: var(--bg-dark);
            background-image: 
                radial-gradient(circle at 50% 50%, #2e1065 0%, #0f0a1e 70%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 20%);
            color: var(--text-color);
            font-family: 'Cinzel Decorative', cursive;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            text-align: center;
            cursor: pointer; /* Click anywhere */
        }

        /* --- THE CRYSTAL ORB --- */
        .orb-container {
            position: relative;
            width: 250px;
            height: 250px;
            margin-bottom: 50px;
            animation: float 6s ease-in-out infinite;
            cursor: pointer;
            z-index: 10;
        }

        .orb {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(216, 180, 254, 0.4) 20%, 
                rgba(168, 85, 247, 0.6) 50%, 
                rgba(88, 28, 135, 0.9) 90%);
            box-shadow: 
                0 0 30px var(--glow-color),
                0 0 60px var(--glow-color),
                inset 0 0 20px rgba(255, 255, 255, 0.5);
            position: relative;
            transition: transform 0.2s, box-shadow 0.2s;
            overflow: hidden;
        }
        
        /* Inner mist effect */
        .orb::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1), transparent 60%);
            animation: mistRotate 10s linear infinite;
            opacity: 0.6;
        }

        .orb:hover {
            transform: scale(1.05);
            box-shadow: 
                0 0 40px #d8b4fe,
                0 0 80px var(--glow-color),
                inset 0 0 30px rgba(255, 255, 255, 0.8);
        }

        .orb:active {
            transform: scale(0.95);
        }

        /* The Stand */
        .stand {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 40px;
            background: linear-gradient(to bottom, #4c1d95, #2e1065);
            border-radius: 50%;
            box-shadow: 0 5px 15px rgba(0,0,0,0.5);
            z-index: -1;
        }

        /* --- THE PROPHECY TEXT --- */
        .prophecy-container {
            min-height: 150px;
            width: 80%;
            max-width: 600px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        #prophecy-text {
            font-size: 1.8rem;
            line-height: 1.4;
            color: #e9d5ff;
            text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.5s ease-out;
            font-family: 'Quicksand', sans-serif;
            font-weight: 300;
            letter-spacing: 1px;
        }

        /* Interaction Classes */
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
            animation: textGlow 2s infinite alternate;
        }

        .instruction {
            font-size: 0.9rem;
            opacity: 0.5;
            margin-top: 10px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* --- ANIMATIONS --- */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }

        @keyframes mistRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes textGlow {
            from { text-shadow: 0 0 10px rgba(168, 85, 247, 0.5); }
            to { text-shadow: 0 0 20px rgba(216, 180, 254, 0.8), 0 0 30px rgba(168, 85, 247, 0.4); }
        }
        
        /* Particle Background (Stars) */
        .stars {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            z-index: -2;
            background-image: 
                radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0));
            background-size: 200px 200px;
            opacity: 0.3;
        }

    </style>
</head>
<body>

    <div class="stars"></div>

    <div class="orb-container" onclick="castProphecy()">
        <div class="orb"></div>
        <div class="stand"></div>
    </div>

    <div class="prophecy-container">
        <div id="prophecy-text"></div>
    </div>

    <div class="instruction">Touch the orb to seal your fate</div>

    <script>
        const prophecies = [
            "the banana will betray you",
            "you will lose a sock but gain perspective",
            "he knows",
            "you are being watched but lovingly",
            "do not open the third drawer",
            "a pigeon will change your fate",
            "you will be forgotten but in a poetic way",
            "beware the man with two first names",
            "mercury is not in retrograde you just made bad choices",
            "your ex is still talking about you",
            "something strange will happen with a cucumber",
            "you will trip on air and someone important will see",
            "your next decision will be the wrong one and it will be okay",
            "they remember even if you don’t",
            "a portal is opening don’t look at it",
            "you’re safe for now",
            "you will be blessed with clarity and cursed with wifi instability",
            "three ghosts are following you but they think you’re cool",
            "you left the stove on in a past life",
            "you are not the main character today",
            "the moon saw what you did",
            "avoid eye contact with the owl",
            "your doppelgänger is doing better than you",
            "the algorithm is learning your scent",
            "love is near but so is tax season",
            "you will meet a beautiful liar on a tuesday",
            "don’t trust the soup",
            "a child will name you correctly",
            "one of your plants is plotting",
            "a stranger will mistake you for someone they miss",
            "the crystals are disappointed",
            "the wind heard your secret",
            "your phone knows too much and still wants more",
            "your name is written in gravy on an altar somewhere",
            "a librarian will change your fate",
            "the vibes are off and it’s your fault",
            "you are being gently hexed by someone in crocs",
            "stop refreshing the tracking page",
            "you forgot something crucial in a dream",
            "the mice remember",
            "your next great idea will come from spite",
            "an old password is holding a grudge",
            "you already met your soulmate and ignored them",
            "they know you saw it",
            "the toast was a warning",
            "your bed is haunted but in a flirty way",
            "an unclaimed sock holds your destiny",
            "a frog envies your life",
            "your playlist is summoning something",
            "one of your friends is a shapeshifter and that’s okay",
            "something important will happen at 3am and you’ll miss it",
            "your reflection hesitated",
            "someone is using your selfie for a vision board",
            "your dreams are being live streamed",
            "the elevator is lying",
            "a cursed coupon is coming in the mail",
            "you will win an argument but lose a spoon",
            "someone whispered your name to a mirror",
            "do not reply to the third message",
            "your next snack will reveal everything"
        ];

        const textEl = document.getElementById('prophecy-text');
        const orb = document.querySelector('.orb');

        function castProphecy() {
            // 1. Fade out existing text
            textEl.classList.remove('revealed');
            textEl.style.opacity = '0';
            textEl.style.transform = 'translateY(-10px)';

            // 2. Flash the Orb
            orb.style.boxShadow = "0 0 60px #fff, 0 0 100px var(--glow-color)";
            setTimeout(() => {
                orb.style.boxShadow = ""; // Reset inline style to revert to CSS
            }, 300);

            // 3. Change text and Fade In
            setTimeout(() => {
                const randomProphecy = prophecies[Math.floor(Math.random() * prophecies.length)];
                textEl.innerText = randomProphecy;
                
                textEl.style.transform = 'translateY(10px)'; // Reset position for slide up
                
                // Trigger reflow
                void textEl.offsetWidth; 
                
                textEl.classList.add('revealed');
            }, 300);
        }
    </script>
</body>
</html>
`;

export const SCREAM_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shout Into the Void (Beta)</title>
    <style>
        :root {
            --font-main: 'Impact', 'Arial Black', sans-serif;
        }

        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            background: black;
            font-family: var(--font-main);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* --- BACKGROUND --- */
        .bg-layer {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: url('https://i.redd.it/x219hh4w95881.png') no-repeat center center fixed;
            background-size: cover;
            filter: brightness(0.6) contrast(1.2);
            z-index: 1;
        }

        /* --- STATIC OVERLAY (Hidden initially) --- */
        .static-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuODUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=');
            opacity: 0;
            pointer-events: none;
            z-index: 5;
            transition: opacity 3s ease-in;
        }

        /* --- UI CONTAINER --- */
        .ui-container {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 15px;
            align-items: center;
            width: 100%;
            max-width: 500px;
        }

        input[type="text"] {
            background: rgba(0, 0, 0, 0.5);
            border: 3px solid white;
            color: white;
            font-family: var(--font-main);
            font-size: 2rem;
            padding: 15px;
            text-align: center;
            width: 80%;
            outline: none;
            text-transform: uppercase;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
            transition: box-shadow 0.2s;
        }

        input[type="text"]:focus {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
        }

        button {
            background: white;
            color: black;
            border: none;
            font-family: var(--font-main);
            font-size: 1.5rem;
            padding: 10px 40px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 2px;
            transform: skew(-10deg);
            transition: transform 0.1s, background 0.1s;
        }

        button:active {
            transform: skew(-10deg) scale(0.95);
            background: #ddd;
        }

        /* --- SCREAM CONTAINER --- */
        #void-container {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 4;
        }

        .echo {
            position: absolute;
            color: white;
            font-family: var(--font-main);
            text-transform: uppercase;
            white-space: nowrap;
            opacity: 0;
            transform-origin: center;
            animation: screamIn 0.2s forwards;
            mix-blend-mode: overlay; /* Helps it blend chaotically */
        }

        /* The Main Scream (Centered) */
        .echo.main {
            font-size: 8rem;
            opacity: 1;
            mix-blend-mode: normal;
            text-shadow: 5px 5px 0px rgba(0,0,0,0.5);
            z-index: 6;
        }

        /* Animation States */
        @keyframes screamIn {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: var(--final-opacity); }
        }

        /* Fading into static */
        .echo.fading {
            transition: opacity 2s ease-out, filter 2s ease-out, transform 4s linear;
            opacity: 0;
            filter: blur(10px) grayscale(100%);
            transform: translate(-50%, -50%) scale(1.5); /* Dissipate outwards */
        }

        /* Helper for glitchy text */
        .glitch-text {
            position: relative;
        }
        
    </style>
</head>
<body>

    <div class="bg-layer"></div>
    <div class="static-overlay" id="staticOverlay"></div>

    <div class="ui-container">
        <input type="text" id="userInput" placeholder="WHAT HURTS?" autocomplete="off">
        <button onclick="scream()">SCREAM</button>
    </div>

    <div id="void-container"></div>

    <script>
        const voidContainer = document.getElementById('void-container');
        const staticOverlay = document.getElementById('staticOverlay');
        const input = document.getElementById('userInput');

        function scream() {
            const text = input.value.trim();
            if (!text) return;

            // 1. Clear previous screams
            voidContainer.innerHTML = '';
            staticOverlay.style.opacity = '0'; // Reset static
            
            // 2. Create the "Main" center scream
            createEcho(text, true);

            // 3. Create chaos echoes
            const echoCount = 15; // Number of echoes
            for (let i = 0; i < echoCount; i++) {
                setTimeout(() => {
                    createEcho(text, false);
                }, Math.random() * 200); // Stagger them slightly
            }

            // 4. Trigger the fade into static after delay
            setTimeout(() => {
                const allEchoes = document.querySelectorAll('.echo');
                allEchoes.forEach(el => el.classList.add('fading'));
                staticOverlay.style.opacity = '0.3'; // Bring in static
            }, 1500); // Scream lasts 1.5 seconds before fading

            // 5. Cleanup DOM after everything is gone
            setTimeout(() => {
                staticOverlay.style.opacity = '0';
                voidContainer.innerHTML = '';
            }, 5000);
        }

        function createEcho(text, isMain) {
            const el = document.createElement('div');
            el.innerText = text;
            el.classList.add('echo');
            
            if (isMain) {
                el.classList.add('main');
                el.style.left = '50%';
                el.style.top = '50%';
                el.style.setProperty('--final-opacity', '1');
            } else {
                // Randomize properties
                const randomX = Math.random() * 100;
                const randomY = Math.random() * 100;
                const randomSize = 2 + Math.random() * 6; // 2rem to 8rem
                const randomRot = (Math.random() * 60) - 30; // -30deg to 30deg
                const randomOpacity = 0.3 + Math.random() * 0.5;

                el.style.left = randomX + '%';
                el.style.top = randomY + '%';
                el.style.fontSize = randomSize + 'rem';
                el.style.transform = \`translate(-50%, -50%) rotate(\${randomRot}deg)\`;
                el.style.setProperty('--final-opacity', randomOpacity);
                
                // Random glitch color overlay (text shadow)
                const rColor = Math.random() > 0.5 ? 'red' : 'blue';
                // Fix: escaped template literal
                el.style.textShadow = \`\${Math.random()*4-2}px \${Math.random()*4-2}px 0 \${rColor}\`;
            }

            voidContainer.appendChild(el);
        }

        // Allow Enter key to scream
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                scream();
            }
        });
    </script>
</body>
</html>
`;

export const ICECUBE_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Melt the Ice Cube</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f0f4f8; /* Very soft icy white/blue */
            font-family: 'Inter', sans-serif;
            color: #4a5568;
            overflow: hidden;
            user-select: none;
        }

        #container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        #ice-cube {
            width: 300px;
            height: 300px;
            object-fit: cover;
            cursor: pointer;
            border-radius: 20px;
            transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 10px 30px rgba(173, 216, 230, 0.4);
            /* Initial state */
            opacity: 1;
            filter: blur(0px);
            transform: scale(1);
        }

        #ice-cube:hover {
            box-shadow: 0 15px 40px rgba(173, 216, 230, 0.6);
            transform: scale(1.02);
        }

        #ice-cube:active {
            transform: scale(0.98);
        }

        #final-message {
            position: absolute;
            text-align: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 2s ease-in;
            z-index: 10;
        }

        .line {
            display: block;
            margin-bottom: 1.5rem;
            font-size: 1.2rem;
            font-weight: 200;
            letter-spacing: 2px;
            opacity: 0; /* Staggered fade in */
            transform: translateY(10px);
            transition: all 1s ease-out;
        }

        /* Utility class to hide the ice cube abruptly at the end */
        .gone {
            display: none !important;
        }

        /* Utility for showing lines */
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        /* Progress hint (optional, kept very subtle) */
        #counter-hint {
            position: fixed;
            bottom: 20px;
            font-size: 0.8rem;
            opacity: 0.2;
        }
    </style>
</head>
<body>

    <div id="container">
        <!-- Using a clean, high-res ice cube image -->
        <img id="ice-cube" src="https://png.pngtree.com/png-clipart/20250209/original/pngtree-ice-cube-with-water-droplets-png-image_20401930.png" alt="A single ice cube">
        
        <div id="final-message">
            <span class="line" id="line1">here</span>
            <span class="line" id="line2">you did this</span>
            <span class="line" id="line3">it's gone</span>
        </div>
    </div>

    <script>
        const iceCube = document.getElementById('ice-cube');
        const finalMessage = document.getElementById('final-message');
        const lines = [
            document.getElementById('line1'),
            document.getElementById('line2'),
            document.getElementById('line3')
        ];

        let clicks = 0;
        const maxClicks = 42;

        iceCube.addEventListener('click', () => {
            clicks++;

            if (clicks < maxClicks) {
                // Calculate melting percentage (0 to 1)
                const melted = clicks / maxClicks;

                // 1. Reduce Opacity (starts at 1, goes to 0)
                const newOpacity = 1 - melted;

                // 2. Increase Blur (starts at 0px, goes to 20px)
                const newBlur = melted * 20;

                // 3. Scale Down slightly (starts at 1, goes to 0.6)
                const newScale = 1 - (melted * 0.4);

                // 4. Distort slightly (rotate randomly a bit more as it melts)
                const distortion = Math.random() * (melted * 10) - (melted * 5); 

                // Apply styles
                iceCube.style.opacity = newOpacity;
                // Fix: escaped template literal
                iceCube.style.filter = \`blur(\${newBlur}px)\`;
                
                // We use a specific transform here, overriding the hover effect slightly
                // to make it look like it's losing structural integrity
                // Fix: escaped template literal
                iceCube.style.transform = \`scale(\${newScale}) rotate(\${distortion}deg)\`;
                
                // Add a "water" drop shadow that grows
                // Fix: escaped template literal
                iceCube.style.boxShadow = \`0 \${10 + (melted * 50)}px \${30 + (melted * 20)}px rgba(173, 216, 230, \${0.4 + (melted * 0.4)})\`;

            } else {
                // Trigger the end state
                endGame();
            }
        });

        function endGame() {
            // Remove the ice cube
            iceCube.classList.add('gone');
            
            // Show the container for the message
            finalMessage.style.opacity = '1';

            // Stagger the text reveal
            setTimeout(() => lines[0].classList.add('visible'), 500);
            setTimeout(() => lines[1].classList.add('visible'), 2000);
            setTimeout(() => lines[2].classList.add('visible'), 4000);
        }
    </script>
</body>
</html>
`;

export const EXCUSE_GEN_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>excuse generator</title>
    <style>
        :root {
            --paper-bg: #fdfbf7;
            --ink-color: #2b2b2b;
            --accent-color: #5c5c5c;
            --font-main: 'Times New Roman', Times, serif;
        }

        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            background-color: var(--paper-bg);
            color: var(--ink-color);
            font-family: var(--font-main);
            display: flex;
            align-items: center;
            justify-content: center;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
        }

        .container {
            width: 100%;
            max-width: 600px;
            padding: 40px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
        }

        h1 {
            font-size: 2rem;
            font-weight: normal;
            letter-spacing: 0.05em;
            margin: 0;
            border-bottom: 1px solid var(--ink-color);
            padding-bottom: 10px;
            width: 100%;
            max-width: 300px;
        }

        button {
            background: transparent;
            border: 1px solid var(--ink-color);
            color: var(--ink-color);
            padding: 12px 24px;
            font-family: var(--font-main);
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
            outline: none;
            letter-spacing: 0.02em;
        }

        button:hover {
            background-color: var(--ink-color);
            color: var(--paper-bg);
        }

        button:active {
            transform: translateY(1px);
        }

        .excuse-display {
            min-height: 100px;
            font-size: 1.25rem;
            line-height: 1.6;
            width: 100%;
            opacity: 0;
            transform: translateY(5px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .excuse-display.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Subtle decorative element */
        .container::before {
            content: "fig. 1";
            font-size: 0.75rem;
            color: var(--accent-color);
            font-style: italic;
            margin-bottom: -30px;
            opacity: 0.6;
        }

    </style>
</head>
<body>

    <div class="container">
        <h1>excuse generator</h1>

        <button onclick="generateExcuse()">give me an excuse</button>

        <div id="excuse-output" class="excuse-display"></div>
    </div>

    <script>
        const excuses = [
            "hey i’m so sorry but the plumber just showed up two hours early and i need to stay here while they work",
            "i know this is super last minute but i just got a delivery i wasn’t expecting and it needs to be unpacked and checked right away",
            "my neighbor’s power is out and i had to help them move their stuff into my fridge so i’m a bit behind on everything",
            "had to call my internet provider about something weird and of course it turned into a whole thing",
            "the person i sublet from randomly came by to pick something up and now i can’t leave until they do",
            "i completely forgot i have to be home for a scheduled maintenance check this afternoon. they just rang the bell",
            "just found out i need to sign for a delivery window that’s earlier than planned so i can’t step away right now",
            "i got pulled into something at home and it’s looking like i won’t be able to make it today",
            "i was planning on coming but now there’s a leak situation in the kitchen and i have to deal with it first",
            "just got back from running errands and realized i locked myself out of my upstairs storage. waiting on the landlord now",
            "really thought i’d be free by now but something small turned into a two-hour detour and i’m still not done",
            "i had a repair appointment booked for tomorrow but they just called and said they’re coming today instead",
            "just remembered i have a standing call with someone i can’t move and it completely slipped my mind earlier",
            "my upstairs neighbors have water damage and the building manager asked if they could check my pipes too. i have to stay put",
            "not gonna make it — my wifi just went down and i’m trying to get them on the phone before the window closes",
            "i wish i could join but my phone’s been acting up and i’ve had to reset everything which is now taking forever",
            "just remembered i promised i’d help a friend move a shelf this afternoon and she’s already on her way",
            "the hot water’s been weird all day and now someone’s here to look at it so i can’t step out or take calls",
            "i know i said yes but i’m stuck dealing with something in the building and don’t know how long it’ll take",
            "i was getting ready to leave but then my laundry machine overflowed a bit and now i’m on towel duty",
            "i just had someone show up to measure the windows and i need to be here while they take notes",
            "something weird is going on with the plumbing and i’m waiting for someone to come check it out",
            "i got caught up helping my neighbor with some stuff and lost track of time completely",
            "the grocery delivery showed up with missing items and now i’m trying to fix it before everything melts",
            "the internet has been cutting in and out all morning and i didn’t want to risk losing connection halfway through",
            "i had to stay home to wait for a new appliance and now they’ve pushed the delivery window later",
            "i’m in the middle of dealing with a weird tech issue and can’t step away yet",
            "my phone was updating all afternoon and i couldn’t access anything until just now",
            "i had to help someone carry something heavy upstairs and now i’m kind of stuck here",
            "something just came up with my building’s maintenance and i’m not sure how long it’ll take",
            "a friend called with a mini crisis and i couldn’t just ignore it, sorry for the silence",
            "the locksmith came early and now i’m sitting here while they change out the hardware",
            "i had to take care of something for my lease renewal and it turned into a whole back-and-forth",
            "they’re doing unexpected noise testing in the building and i can’t really focus or be on calls right now",
            "the light in the hallway went out and i had to wait for someone to come fix it before leaving",
            "i forgot i had to drop off paperwork in person and the office was further than i remembered",
            "something small turned into a chain reaction and now i’m behind on literally everything",
            "i opened my laptop to join and immediately got pulled into a neighbor emergency",
            "the elevator stopped working and i had to take the stairs both ways which took longer than planned",
            "just realized i left something plugged in that wasn’t supposed to be and had to run back to fix it",
            "i was trying to fix something quickly before joining and ended up making it worse",
            "i didn’t want to join while dealing with it but there’s something weird going on with the heating and i’m waiting on someone to check",
            "my internet provider scheduled a reboot and it just happened to fall right in the middle of this",
            "i’ve been waiting on hold for half an hour and if i hang up now i’ll lose my place in the queue",
            "i stepped out for a five-minute errand and it turned into a forty-minute situation",
            "just realized i had overlapping commitments and totally forgot to block my calendar",
            "someone came by to drop something off and it turned into a longer conversation than expected",
            "my building had a brief alarm go off and we had to pause everything until they sorted it out",
            "i was troubleshooting something small and lost track of the time completely",
            "just saw the time and realized i underestimated how long it would take to get back from what i was doing",
            "just remembered i left something at a friend’s place and had to go grab it before they left town",
            "my neighbor needed help moving something heavy and i couldn’t really say no in the moment",
            "i had to run out for a quick thing and now i’m stuck behind a delivery truck trying to get back",
            "my phone was dead most of the afternoon and by the time i got it charged everything was backed up",
            "just realized my laundry's been sitting in the machine for hours and it needs to be redone before it gets worse",
            "the person i live with needed help with something right before i was about to leave and now i’m running behind",
            "something small i’d been putting off finally needed fixing and of course it turned into a bigger mess",
            "i ended up having to wait on someone who showed up late and now it threw off my whole afternoon",
            "i meant to check in earlier but had to focus on something i couldn’t stop halfway through",
            "i had to help someone find their lost keys and didn’t want to leave them alone with it",
            "just got back home after being out all day and completely forgot what time it was",
            "a package i was waiting on showed up damaged so i had to deal with the return immediately",
            "i sat down to get ready and then remembered i had to fill something out that was time-sensitive",
            "i was trying to wrap something up before joining and it ended up taking longer than i expected",
            "i forgot to charge my laptop and by the time it was ready i had missed the window",
            "there’s been construction noise all day and i didn’t want to try to talk over it",
            "someone asked for help with something quick and it ended up taking over an hour",
            "something came up with my utilities and i had to stay on-site while they checked it out",
            "i thought i’d have time but my schedule got shifted and now i’m trying to catch up on everything",
            "totally spaced after my last meeting and went into full autopilot for an hour"
        ];

        const output = document.getElementById('excuse-output');

        function generateExcuse() {
            // Remove visible class to trigger fade out/reset
            output.classList.remove('visible');
            
            // Wait briefly for CSS transition or immediate swap feel
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * excuses.length);
                output.innerText = excuses[randomIndex];
                
                // Add visible class to trigger fade in
                output.classList.add('visible');
            }, 100);
        }
    </script>
</body>
</html>
`;

export const HOGWARTS_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Sorting Ceremony - Discover Your True House</title>
    <!-- Fonts for that magical feel -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=IM+Fell+English:ital@0;1&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --parchment: #fcf5e5;
            --ink: #2b1d0e;
            --gold: #d4af37;
            --burgundy: #4a0404;
            --navy: #0e1a40;
        }

        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background-color: #050510;
            /* Deep mystical background */
            background-image: 
                radial-gradient(circle at 20% 20%, #1a0b2e 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, #2e0b0b 0%, transparent 40%);
            font-family: 'IM Fell English', serif;
            color: var(--ink);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow-x: hidden;
        }

        /* --- FLOATING CANDLES --- */
        .candles-container {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            z-index: 0;
        }

        .candle {
            position: absolute;
            width: 12px;
            height: 40px;
            background: linear-gradient(to bottom, #fffcf0, #e8dcb5);
            border-radius: 4px;
            box-shadow: 0 0 10px rgba(255, 255, 200, 0.2);
            animation: float 4s ease-in-out infinite;
        }

        .flame {
            position: absolute;
            top: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 15px;
            background: radial-gradient(ellipse at center, #ffffd1 0%, #ffca28 50%, #ff8f00 100%);
            border-radius: 50% 50% 20% 20%;
            box-shadow: 0 0 15px #ffca28, 0 -5px 10px #ff8f00;
            animation: flicker 0.1s infinite alternate;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }

        @keyframes flicker {
            0% { transform: translateX(-50%) scale(1); opacity: 0.9; }
            100% { transform: translateX(-50%) scale(1.1); opacity: 1; }
        }

        /* --- MAIN PARCHMENT CONTAINER --- */
        .scroll-container {
            position: relative;
            width: 800px;
            max-width: 90%;
            min-height: 500px;
            padding: 60px;
            background-color: var(--parchment);
            background-image: url('https://www.transparenttextures.com/patterns/aged-paper.png');
            box-shadow: 
                0 0 50px rgba(0,0,0,0.8),
                inset 0 0 100px rgba(139, 69, 19, 0.2),
                0 0 0 5px var(--gold),
                0 0 0 10px var(--burgundy);
            border-radius: 5px;
            text-align: center;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: min-height 1s ease;
        }

        /* Decorative Corners */
        .scroll-container::before, .scroll-container::after {
            content: "✦";
            font-size: 30px;
            color: var(--gold);
            position: absolute;
        }
        .scroll-container::before { top: 15px; left: 15px; }
        .scroll-container::after { bottom: 15px; right: 15px; }

        h1 {
            font-family: 'Cinzel', serif;
            font-size: 3rem;
            color: var(--burgundy);
            margin-bottom: 20px;
            text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
            border-bottom: 2px double var(--gold);
            padding-bottom: 10px;
            display: inline-block;
        }

        .intro-text {
            font-size: 1.4rem;
            font-style: italic;
            margin-bottom: 40px;
            color: #4a3b2a;
        }

        /* --- MAGIC BUTTON --- */
        .magic-btn {
            background: linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d); /* Magic sunset gradient */
            background: var(--navy);
            color: var(--gold);
            border: 2px solid var(--gold);
            padding: 15px 40px;
            font-family: 'Cinzel', serif;
            font-size: 1.2rem;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .magic-btn:hover {
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.6);
            transform: scale(1.05);
            background: var(--burgundy);
        }

        .magic-btn::after {
            content: '';
            position: absolute;
            top: -50%; left: -50%;
            width: 200%; height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.2), transparent 60%);
            opacity: 0;
            transform: scale(0.5);
            transition: opacity 0.3s, transform 0.3s;
        }

        .magic-btn:active::after {
            opacity: 1;
            transform: scale(1);
            transition: 0s;
        }

        /* --- THE REVEAL TEXT --- */
        .reveal-area {
            font-family: 'Crimson Text', serif;
            font-size: 1.1rem;
            line-height: 1.6;
            text-align: left;
            white-space: pre-wrap; /* Preserve formatting */
            max-width: 100%;
            display: none; /* Hidden initially */
            color: #1a1a1a;
        }

        .cursor {
            display: inline-block;
            width: 2px;
            height: 1.2em;
            background-color: var(--ink);
            animation: blink 1s infinite;
            vertical-align: text-bottom;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        .hidden {
            display: none !important;
        }

        /* Fade in animation for the scroll expanding */
        .expand-scroll {
            animation: expand 1s forwards;
        }

        @keyframes expand {
            from { min-height: 300px; }
            to { min-height: 600px; }
        }
        
    </style>
</head>
<body>

    <!-- Floating Candles Background -->
    <div class="candles-container">
        <div class="candle" style="top: 10%; left: 10%; animation-delay: 0s;"><div class="flame"></div></div>
        <div class="candle" style="top: 20%; left: 80%; animation-delay: 1s;"><div class="flame"></div></div>
        <div class="candle" style="top: 15%; left: 30%; animation-delay: 2s;"><div class="flame"></div></div>
        <div class="candle" style="top: 50%; left: 5%; animation-delay: 0.5s;"><div class="flame"></div></div>
        <div class="candle" style="top: 60%; left: 90%; animation-delay: 1.5s;"><div class="flame"></div></div>
        <div class="candle" style="top: 80%; left: 15%; animation-delay: 2.5s;"><div class="flame"></div></div>
        <div class="candle" style="top: 75%; left: 70%; animation-delay: 0.2s;"><div class="flame"></div></div>
    </div>

    <div class="scroll-container" id="scroll">
        <div id="intro-content">
            <h1>The Sorting Ceremony</h1>
            <p class="intro-text">
                The hat is waiting. The stars are aligned.<br>
                Discover your true Hogwarts house...
            </p>
            <button class="magic-btn" onclick="revealHouse()">Reveal My House</button>
        </div>

        <div id="result-content" class="reveal-area">
            <span id="typed-text"></span><span class="cursor"></span>
        </div>
    </div>

    <script>
        const fullText = \`let’s talk about joanne “girlboss in the wrong century” rowling. this woman took the goodwill of a generation who grew up reading about love and courage and being different—and decided to spend her later years tweeting 2011 facebook aunt memes about “biological sex is real” like that’s the mic drop of the century. she’s not just someone who said she was confused about gender stuff. she deliberately crafted a public persona as a defender of “real women” while punching down on one of the most vulnerable communities—trans people, especially trans women. and she knows what she's doing. she’s not ignorant, she’s invested. it started with a tweet in june 2020 where she quote-tweeted an article that used the phrase “people who menstruate,” and instead of just googling why that language exists—to include trans men and nonbinary people—she got snarky and said, “people who menstruate. i’m sure there used to be a word for those people. someone help me out. wumben? wimpund? woomud?” like girl. you’re not clever. you’re not oppressed. you’re just mocking inclusive language that helps people not feel erased. and then of course she wrote a 3,600-word blog post where she played the victim, said she supports trans people but also, and warned that gender identity is a dangerous ideology threatening the safety of women and girls. her logic is that acknowledging trans women as women somehow endangers cis women, and that letting people self-identify their gender is a slippery slope to the end of feminism. she positions herself as this warrior for women’s rights, but feminism that excludes other women isn’t feminism. using vague fears about bathrooms and predators to justify excluding trans people from rights is the same playbook bigots have always used, just with a british accent now. the truth is jk rowling isn’t confused, she’s calculated. she’s spent years liking and retweeting far-right transphobic content, mocking people’s pronouns, and aligning with terfs who push anti-trans rhetoric dressed up as “women’s safety.” she’s launched a women’s shelter that excludes trans women, spread debunked nonsense about kids being rushed into medical transition, and even compared affirming trans kids to lobotomies. yes. really. she’s weaponized her platform—knowing her audience is full of young people—and made trans people the villain in a fake feminist war she invented to stay relevant. and the hypocrisy? the woman who wrote a series about outcasts and misfits and love conquering hate is now the poster girl for “i support trans people, but—” energy. you don’t get to say you support a community while actively trying to strip them of recognition, dignity, and access to care. this isn’t about “having an opinion.” it’s about misinformation, dehumanization, and real-world consequences. her words have been used by anti-trans lobbyists. her platform has made hate louder. and every time someone tries to hold her accountable, she plays the martyr. meanwhile, trans kids are dying, facing violence, and begging to be seen. and she’s busy writing wizard sidequests and defending her right to punch down. she could’ve stayed rich, beloved, and mysterious. but instead she became a full-time reddit comment section in a scarf. what a waste of a platform. what a betrayal of magic. and i don’t care how many horcruxes you wrote—if your feminism isn’t intersectional, it’s just bigotry with eyeliner.\`;

        function revealHouse() {
            // 1. Hide Intro
            document.getElementById('intro-content').classList.add('hidden');
            
            // 2. Expand Scroll and Show Result Area
            const scroll = document.getElementById('scroll');
            scroll.classList.add('expand-scroll');
            
            const resultArea = document.getElementById('result-content');
            resultArea.style.display = 'block';

            // 3. Start Typing
            let index = 0;
            const speed = 25; // Typing speed in ms

            function typeWriter() {
                if (index < fullText.length) {
                    document.getElementById("typed-text").innerHTML += fullText.charAt(index);
                    index++;
                    // Random variance to speed to mimic human typing/magical reveal
                    setTimeout(typeWriter, speed + Math.random() * 20);
                } else {
                    document.querySelector('.cursor').style.display = 'none'; // Stop blinking cursor when done
                }
            }

            typeWriter();
        }
    </script>
</body>
</html>
`;

export const PAST_LIFE_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metaphysical Office of Soul Records</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">

    <style>
        :root {
            --bg-cream: #E8E0D5;
            --ink-black: #2A2420;
            --faded-red: #8a3324;
            --paper-shadow: #bcaaa4;
            --gold: #C5A059;
        }

        body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            background-color: var(--bg-cream);
            color: var(--ink-black);
            font-family: 'Libre Baskerville', serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            /* Noisy texture for dust effect */
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=');
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%232A2420" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>') 0 24, auto;
        }

        /* --- THE DOCUMENT CONTAINER --- */
        .document-container {
            width: 90%;
            max-width: 700px;
            background-color: #f4ece2;
            padding: 60px 50px;
            box-shadow: 
                0 0 20px rgba(0,0,0,0.1),
                inset 0 0 60px rgba(161, 140, 116, 0.3);
            border: 1px solid #d3c4b1;
            position: relative;
            margin: 40px 0;
        }

        /* Ornate Border (CSS Only) */
        .document-container::before {
            content: '';
            position: absolute;
            top: 15px; left: 15px; right: 15px; bottom: 15px;
            border: 2px solid var(--ink-black);
            pointer-events: none;
        }
        .document-container::after {
            content: '';
            position: absolute;
            top: 20px; left: 20px; right: 20px; bottom: 20px;
            border: 1px solid var(--ink-black);
            pointer-events: none;
        }

        /* Ink Splatters */
        .ink-splatter {
            position: absolute;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(42, 36, 32, 0.1) 0%, transparent 60%);
            border-radius: 50%;
            pointer-events: none;
            filter: blur(2px);
            z-index: 0;
        }

        /* --- HEADER & CREST --- */
        header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 2px solid var(--ink-black);
            padding-bottom: 20px;
            position: relative;
        }

        .crest {
            width: 80px;
            height: 80px;
            margin: 0 auto 10px;
            border: 2px solid var(--ink-black);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Cinzel', serif;
            font-size: 40px;
        }

        h1 {
            font-family: 'Playfair Display', serif;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 1.2rem;
            margin: 10px 0 5px 0;
        }

        .subtitle {
            font-family: 'Cinzel', serif;
            font-size: 0.7rem;
            letter-spacing: 2px;
            color: #5a524a;
        }

        /* --- FORM --- */
        .form-section {
            display: flex;
            flex-direction: column;
            gap: 25px;
            position: relative;
            z-index: 2;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        label {
            font-family: 'Cinzel', serif;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.8;
        }

        input, select {
            background: transparent;
            border: none;
            border-bottom: 1px dashed var(--ink-black);
            padding: 10px 0;
            font-family: 'Playfair Display', serif;
            font-size: 1.2rem;
            color: var(--ink-black);
            outline: none;
            width: 100%;
            cursor: text;
        }
        
        select {
            cursor: pointer;
        }

        input::placeholder {
            color: rgba(42, 36, 32, 0.3);
            font-style: italic;
        }

        button.request-btn {
            margin-top: 20px;
            background: transparent;
            border: 2px solid var(--ink-black);
            padding: 15px 30px;
            font-family: 'Cinzel', serif;
            font-size: 0.9rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s;
            align-self: center;
        }

        button.request-btn:hover {
            background: var(--ink-black);
            color: var(--bg-cream);
        }

        /* --- LOADING SEAL --- */
        .loading-overlay {
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 40px 0;
            text-align: center;
        }

        .wax-seal {
            width: 60px;
            height: 60px;
            background-color: var(--faded-red);
            border-radius: 50%;
            box-shadow: 
                0 0 0 4px rgba(138, 51, 36, 0.3),
                inset 0 0 20px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(0,0,0,0.3);
            font-size: 24px;
            animation: pulse-spin 2s infinite ease-in-out;
            border: 2px solid #5e2219;
        }

        .loading-text {
            margin-top: 20px;
            font-style: italic;
            font-size: 0.9rem;
            animation: blink 1.5s infinite;
        }

        /* --- RESULTS --- */
        .result-section {
            display: none;
            border-top: 1px solid var(--ink-black);
            margin-top: 30px;
            padding-top: 30px;
            animation: fadeIn 1s ease-in;
        }

        .record-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            font-family: 'Cinzel', serif;
            font-size: 0.8rem;
            opacity: 0.7;
        }

        .data-row {
            margin-bottom: 15px;
            line-height: 1.6;
        }

        .data-label {
            font-weight: bold;
            text-transform: lowercase;
            font-variant: small-caps;
            margin-right: 5px;
            font-size: 1.1rem;
        }

        .data-value {
            font-family: 'Playfair Display', serif;
        }

        .stamp {
            margin-top: 40px;
            border: 3px double var(--faded-red);
            color: var(--faded-red);
            width: fit-content;
            padding: 10px 20px;
            font-family: 'Cinzel', serif;
            font-weight: bold;
            transform: rotate(-10deg);
            opacity: 0.8;
            mix-blend-mode: multiply;
        }

        /* Animations */
        @keyframes pulse-spin {
            0% { transform: scale(0.95) rotate(0deg); }
            50% { transform: scale(1.05) rotate(180deg); }
            100% { transform: scale(0.95) rotate(360deg); }
        }

        @keyframes blink {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .hidden { display: none; }

    </style>
</head>
<body>

    <div class="document-container">
        <!-- Decoration -->
        <div class="ink-splatter" style="top: -20px; right: -20px;"></div>
        <div class="ink-splatter" style="bottom: 50px; left: 10px; width: 60px; height: 60px; opacity: 0.05;"></div>

        <header>
            <div class="crest">👁</div>
            <h1>Metaphysical Office of Soul Records</h1>
            <div class="subtitle">by appointment only • est. 1204</div>
        </header>

        <div id="form-area" class="form-section">
            <div class="input-group">
                <label>Claimant's First Name</label>
                <input type="text" id="nameInput" placeholder="e.g. Arthur" autocomplete="off">
            </div>

            <div class="input-group">
                <label>Month of Birth</label>
                <select id="monthInput">
                    <option value="" disabled selected>Select Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>

            <div class="input-group">
                <label>Primary Resonance (Vibe)</label>
                <select id="vibeInput">
                    <option value="" disabled selected>Select Vibe</option>
                    <option value="melancholic">Melancholic</option>
                    <option value="chaotic">Chaotic</option>
                    <option value="ambitious">Ambitious</option>
                    <option value="submissive">Submissive to Fate</option>
                    <option value="haunted">Mildly Haunted</option>
                    <option value="longing">Oceanic Longing</option>
                    <option value="vindictive">Quietly Vindictive</option>
                    <option value="lost">Just Lost</option>
                </select>
            </div>

            <button class="request-btn" onclick="fetchRecord()">Request Past Life File</button>
        </div>

        <!-- LOADING -->
        <div id="loader" class="loading-overlay">
            <div class="wax-seal">⚓</div>
            <div class="loading-text">retrieving soul imprint... please stand by...</div>
        </div>

        <!-- RESULT -->
        <div id="result-area" class="result-section">
            <div class="record-header">
                <span id="file-id">FILE #000</span>
                <span>STATUS: CLOSED</span>
            </div>
            
            <div class="data-row">
                <span class="data-label">Name:</span>
                <span class="data-value" id="res-name"></span>
            </div>
            <div class="data-row">
                <span class="data-label">Classification:</span>
                <span class="data-value" id="res-class"></span>
            </div>
            <div class="data-row">
                <span class="data-label">Active Period:</span>
                <span class="data-value" id="res-period"></span>
            </div>
            <div class="data-row">
                <span class="data-label">Temperament:</span>
                <span class="data-value" id="res-temp"></span>
            </div>
            <div class="data-row">
                <span class="data-label">Notable Trait:</span>
                <span class="data-value" id="res-trait"></span>
            </div>
            <div class="data-row">
                <span class="data-label">Known Associations:</span>
                <span class="data-value" id="res-assoc"></span>
            </div>
            <div class="data-row">
                <span class="data-label">Cause of Death:</span>
                <span class="data-value" id="res-death"></span>
            </div>

            <div class="stamp">VERIFIED</div>
            
            <div style="margin-top: 30px; text-align: center; font-size: 0.7rem; opacity: 0.5;">
                <a href="#" onclick="resetForm()" style="color: inherit; text-decoration: underline;">Inquire about another soul</a>
            </div>
        </div>
    </div>

    <script>
        // The Database
        const database = [
            { class: "The third-born flamekeeper of the ash coast", period: "1732–1789", temp: "Restless, obedient to strange winds", trait: "Once disappeared into the sea for seven days and returned changed", assoc: "A glassmaker, a nun, two wolves", death: "Unknown but rumored" },
            { class: "Silent archivist of the silver ledgers", period: "1641–1694", temp: "Brittle, dutiful, easily haunted", trait: "Could identify any ink by scent", assoc: "One monk, a lost twin, a locked cabinet", death: "Archival dust inhalation" },
            { class: "Fourth attendant to the broken crown", period: "1420–1455", temp: "Obedient with brief flashes of defiance", trait: "Burned every letter after reading it", assoc: "A horse thief, a scribe, three mirrors", death: "Trampled during a failed rehearsal" },
            { class: "Seasonal poisoner (rural assignment)", period: "1803–1832", temp: "Calm, calculating, not without conscience", trait: "Never wore shoes, even in snow", assoc: "Two widows, a snake, one unsent letter", death: "Slipped in her own oil" },
            { class: "Counterfeit heir to a collapsing estate", period: "1768–1810", temp: "Charming, exhausted, mildly cursed", trait: "Could play piano with gloves on", assoc: "A paperboy, a stage actor, a glass ring", death: "Misfiled inheritance dispute turned duel" },
            { class: "Herbal intermediary (unlicensed)", period: "1599–1630", temp: "Warm, secretive, slightly wet", trait: "Kept notes in six dialects", assoc: "Four chickens, a masked courier, the town well", death: "Wrongly blamed, quietly buried" },
            { class: "Unknowing prophet (later revoked)", period: "1872–1879", temp: "Manic, sincere, slightly translucent", trait: "Once correctly guessed the contents of 17 locked boxes", assoc: "A thunderstorm, a widow, a tax collector", death: "Accidental flooding of a dry room" },
            { class: "Lighthouse understudy", period: "1701–1725", temp: "Repetitive, hopeful, incredibly lonely", trait: "Memorized the stars but forgot people's names", assoc: "A seagull with one leg, a barrel of salted fish", death: "Fell asleep during a storm" }
        ];

        function fetchRecord() {
            const name = document.getElementById('nameInput').value;
            const month = document.getElementById('monthInput').value;
            const vibe = document.getElementById('vibeInput').value;

            if (!name || !month || !vibe) {
                alert("The spirits require full details. Fill out the form.");
                return;
            }

            // UI Transition
            document.getElementById('form-area').style.display = 'none';
            document.getElementById('loader').style.display = 'flex';

            setTimeout(() => {
                document.getElementById('loader').style.display = 'none';
                
                // Deterministic "Random" Selection based on name length
                const index = (name.length + parseInt(month)) % database.length;
                const record = database[index];

                // Populate Fields
                document.getElementById('file-id').innerText = "FILE #" + Math.floor(Math.random() * 8000 + 1000);
                document.getElementById('res-name').innerText = name; // They are the reincarnation
                document.getElementById('res-class').innerText = record.class;
                document.getElementById('res-period').innerText = record.period;
                document.getElementById('res-temp').innerText = record.temp;
                document.getElementById('res-trait').innerText = record.trait;
                document.getElementById('res-assoc').innerText = record.assoc;
                document.getElementById('res-death').innerText = record.death;

                document.getElementById('result-area').style.display = 'block';
            }, 2500);
        }

        function resetForm() {
            document.getElementById('result-area').style.display = 'none';
            document.getElementById('nameInput').value = '';
            document.getElementById('monthInput').selectedIndex = 0;
            document.getElementById('vibeInput').selectedIndex = 0;
            document.getElementById('form-area').style.display = 'flex';
        }
    </script>
</body>
</html>
`;

export const STARTUP_GEN_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Disrupt.io - Startup Generator</title>
    <style>
        body {
            margin: 0;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background: #1a1a1a;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
        }
        .container {
            text-align: center;
            padding: 40px;
            border: 1px solid #333;
            background: #222;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        h1 {
            font-size: 24px;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #00d2ff;
        }
        .pitch {
            font-size: 32px;
            font-weight: bold;
            margin: 30px 0;
            line-height: 1.4;
            min-height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .highlight {
            color: #00d2ff;
            background: rgba(0, 210, 255, 0.1);
            padding: 0 5px;
            border-radius: 4px;
        }
        button {
            background: #00d2ff;
            color: #000;
            border: none;
            padding: 15px 40px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 50px;
            transition: transform 0.1s, box-shadow 0.1s;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 210, 255, 0.4);
        }
        button:active {
            transform: translateY(1px);
        }
        .valuation {
            margin-top: 20px;
            font-size: 14px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Startup Generator</h1>
        <div class="pitch" id="pitch">
            Click below to disrupt an industry.
        </div>
        <button onclick="generate()">Pivot</button>
        <div class="valuation" id="valuation"></div>
    </div>
    <script>
        const subjects = ["Uber", "Airbnb", "Tinder", "Spotify", "Netflix", "TikTok", "Zoom", "ChatGPT", "Bitcoin"];
        const audiences = ["dogs", "grandmas", "babies", "gamers", "plants", "influencers", "introverts", "robots", "ghosts"];
        const technologies = ["on the blockchain", "powered by AI", "in the metaverse", "using quantum computing", "with zero emissions", "subscription-based", "but decentralized"];
        const buzzwords = ["synergy", "disruption", "paradigm shift", "growth hacking", "hyper-local", "scalable", "agile"];

        function generate() {
            const subject = subjects[Math.floor(Math.random() * subjects.length)];
            const audience = audiences[Math.floor(Math.random() * audiences.length)];
            const tech = technologies[Math.floor(Math.random() * technologies.length)];
            
            const pitchDiv = document.getElementById('pitch');
            const valDiv = document.getElementById('valuation');

            const templates = [
                \`It's like <span class="highlight">\${subject}</span> for <span class="highlight">\${audience}</span>.\`,
                \`<span class="highlight">\${subject}</span>, but <span class="highlight">\${tech}</span>.\`,
                \`We are disrupting the <span class="highlight">\${audience}</span> industry with <span class="highlight">\${tech}</span>.\`
            ];

            const template = templates[Math.floor(Math.random() * templates.length)];
            pitchDiv.innerHTML = template;

            const valuation = (Math.random() * 900 + 10).toFixed(1);
            valDiv.innerText = \`Pre-seed valuation: \$\${valuation} Million\`;
        }
    </script>
</body>
</html>
`;

export const TUESDAY_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Is It Tuesday?</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
        }
        h1 {
            font-size: 8rem;
            margin: 0;
        }
        p {
            font-size: 2rem;
            margin-top: 20px;
            color: #666;
        }
    </style>
</head>
<body>
    <h1 id="answer">NO</h1>
    <p id="details">...checking...</p>

    <script>
        const answer = document.getElementById('answer');
        const details = document.getElementById('details');
        
        const today = new Date();
        const day = today.getDay(); // 0 is Sunday, 1 is Monday, 2 is Tuesday...

        if (day === 2) {
            document.body.style.backgroundColor = "#ccffcc";
            answer.innerText = "YES";
            answer.style.color = "green";
            details.innerText = "It is actually Tuesday.";
        } else {
            document.body.style.backgroundColor = "#ffcccc";
            answer.innerText = "NO";
            answer.style.color = "red";
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            // Fix: escaped template literal
            details.innerText = \`It is \${days[day]}.\`;
        }
    </script>
</body>
</html>
`;
