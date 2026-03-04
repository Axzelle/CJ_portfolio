// Boot sequence
const bootText = `
CRAIG TECHDEV UNIFIED OPERATING SYSTEM
COPYRIGHT 2026 CRAIG TECHDEV INDUSTRIES

BIOS CHECK OK...
RAM CHECK OK...
INITIALIZING PIP-OS v3.4.5...

WELCOME USER...
`;

let i = 0;
const speed = 30;
const bootElement = document.getElementById("boot-text");

function typeWriter() {
    if (i < bootText.length) {
        bootElement.textContent += bootText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            document.getElementById("boot-screen").classList.add("hidden");
            document.getElementById("pipboy").classList.remove("hidden");
        }, 1000);
    }
}

typeWriter();

// Tabs
const buttons = document.querySelectorAll(".nav-btn");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        tabs.forEach(t => t.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

// PipBoy Theme Switch
const pipSwitch = document.querySelector(".pip-switch");
const fo4Mode = document.querySelector(".mode.fo4");
const nvMode = document.querySelector(".mode.nv");
const clickSound = document.getElementById("clickSound");

pipSwitch.addEventListener("click", () => {

    // Flicker
    document.body.classList.add("flicker");

    // Glow Pulse
    document.body.classList.add("glow-effect");

    setTimeout(() => {
        document.body.classList.remove("flicker");
        document.body.classList.remove("glow-effect");
    }, 500);

    // Theme Switch
    if (document.body.classList.contains("nv-theme")) {
        document.body.classList.remove("nv-theme");
        document.body.classList.add("fo4-theme");

        fo4Mode.classList.add("active");
        nvMode.classList.remove("active");
    } else {
        document.body.classList.remove("fo4-theme");
        document.body.classList.add("nv-theme");

        nvMode.classList.add("active");
        fo4Mode.classList.remove("active");
    }

});

// Navbar Effects
// const underline = document.querySelector(".nav-underline");
const navBtns = document.querySelectorAll(".nav-btn");

// function moveUnderline(element) {
//     underline.style.width = element.offsetWidth + "px";
//     underline.style.left = element.offsetLeft + "px";
// }

// Initialize underline on load
// window.addEventListener("load", () => {
//     const activeBtn = document.querySelector(".nav-btn.active");
//     moveUnderline(activeBtn);
// });

navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        navBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // moveUnderline(btn);
    });
});

// ──── Navbar active indicator animation ────────
// const navBtns = document.querySelectorAll(".nav-btn");
// const indicator = document.querySelector(".nav-indicator");

// function updateIndicator(btn) {
//     if (!btn || !indicator) return;
    
//     indicator.style.width = `${btn.offsetWidth}px`;
//     indicator.style.left  = `${btn.offsetLeft}px`;   // relative to .nav-left
// }

// window.addEventListener("load", () => {
//     const active = document.querySelector(".nav-btn.active");
//     if (active) updateIndicator(active);
    
//     // Also update on resize (important for responsive)
//     window.addEventListener("resize", () => {
//         const active = document.querySelector(".nav-btn.active");
//         if (active) updateIndicator(active);
//     });
// });

// navBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         navBtns.forEach(b => b.classList.remove("active"));
//         btn.classList.add("active");
        
//         updateIndicator(btn);
        
//         // Your existing tab switching code here
//         document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
//         document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        
//         btn.classList.add("active");
//         document.getElementById(btn.dataset.tab).classList.add("active");
//     });
// });