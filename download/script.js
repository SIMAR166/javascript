// elements
let button = document.querySelector("#downloadBtn");     // Main Download / Resume button
let pause = document.querySelector("#pauseBtn");         // Pause button
let cancel = document.querySelector("#cancelBtn");       // Cancel button

let h1 = document.querySelector("#percent");             // 0%, 10%, ...
let bar = document.querySelector("#progressBar");        // Green bar
let state = document.querySelector(".status");           // Status text

// globals
let progress = 0;
let time = null;
let isPaused = false;

// Use a clear state rather than relying on exact button text
//  "downloadingpossible values: "idle",", "paused", "completed"
button.dataset.state = "idle";

// ---------- START ----------
function startDownload() {
    // reset UI
    progress = 0;
    h1.textContent = "0%";
    bar.style.width = "0%";
    state.textContent = "";

    // avoid reverse animation on reset
    bar.style.transition = "none";
    setTimeout(() => bar.style.transition = "width 0.3s linear", 20);

    // states & buttons
    button.disabled = true;        // during active download main button disabled
    pause.disabled = false;
    cancel.disabled = false;
    isPaused = false;
    button.dataset.state = "downloading";
    button.textContent = "Downloading...";

    // ensure no leftover interval
    clearInterval(time);

    // start interval (uses global "progress")
    time = setInterval(() => {
        if (isPaused) return; // safegard, though pause clears interval too

        progress++;
        if (progress > 100) progress = 100;

        h1.textContent = progress + "%";
        bar.style.width = progress + "%";
        state.textContent = "Downloading...";

        if (progress >= 100) {
            clearInterval(time);
            button.disabled = false;   // allow next action
            pause.disabled = true;
            cancel.disabled = true;
            button.dataset.state = "completed";
            button.textContent = "Download Again";
            state.textContent = "Downloaded ✔️";
        }
    }, 50);
}

// ---------- PAUSE ----------
function pauseDownload() {
    if (button.dataset.state !== "downloading") return; // only when downloading

    clearInterval(time);       // stop the timer
    isPaused = true;

    pause.disabled = true;     // can't pause twice
    // enable main button so user can click Resume
    button.disabled = false;
    button.dataset.state = "paused";
    button.textContent = "Resume";
    state.textContent = "Paused ⏸️";

    console.log("Paused at =", progress);
}

// ---------- RESUME ----------
function resumeDownload() {
    // only resume if paused
    if (button.dataset.state !== "paused") return;

    // prepare
    isPaused = false;
    pause.disabled = false;
    button.disabled = true;         // disable while interval runs
    button.dataset.state = "downloading";
    button.textContent = "Downloading...";
    state.textContent = "Downloading...";

    // always clear existing interval before creating new one
    clearInterval(time);

    // restart interval from current global progress
    time = setInterval(() => {
        if (isPaused) return;

        progress++;
        if (progress > 100) progress = 100;

        h1.textContent = progress + "%";
        bar.style.width = progress + "%";
        state.textContent = "Downloading...";

        if (progress >= 100) {
            clearInterval(time);
            button.disabled = false;
            pause.disabled = true;
            cancel.disabled = true;
            button.dataset.state = "completed";
            button.textContent = "Download Again";
            state.textContent = "Downloaded ✔️";
        }
    }, 50);

    console.log("Resumed from =", progress);
}

// ---------- CANCEL ----------
function cancelDownload() {
    clearInterval(time);

    progress = 0;
    isPaused = false;

    h1.textContent = "0%";
    bar.style.width = "0%";

    state.textContent = "Canceled ❌";

    // reset buttons and state
    button.textContent = "Download";
    button.disabled = false;
    button.dataset.state = "idle";

    pause.disabled = true;
    cancel.disabled = true;

    console.log("Download canceled");
}

// ---------- EVENT LISTENERS ----------
button.addEventListener("click", () => {
    // decide action based on explicit state (not fragile text matching)
    const st = button.dataset.state;
    if (st === "paused") {
        resumeDownload();
    } else if (st === "completed" || st === "idle") {
        startDownload();
    } else {
        // if it's "downloading" we don't expect clicks (button disabled), but safe-fallback:
        // do nothing
    }
});

pause.addEventListener("click", pauseDownload);
cancel.addEventListener("click", cancelDownload);