// variable definitions
const version = "0.5";
const versionBranch = 1; // 0 is main, 1 is beta, switches stylesheets so must say same depending on the .css file name (style.css or beta.css)
const inDevelopment = 0; // toggle if developing actively. This is completely different than the builtin dev mode! Recommended that versionBranch is 1 for easier saving if this is toggled.

// customization
const backgroundForm = document.getElementById("backgroundSelect");
let currentBackground = "url(img/backgrounds/background-blue.png)";

let currentClicked = "Cookie";
let currentClickedPlural = "Cookies";
let currentClickedLowercase = "cookie";
let currentClickedLowercasePlural = "cookies";

// cookies
let cookies = 0;
let cookiesView = Math.floor(cookies);
// upgrades
let upgrade0sBought = 0;
let upgrade1sBought = 0;
let upgrade2sBought = 0;
let upgrade3sBought = 0;
let upgrade4sBought = 0;
let upgrade5sBought = 0;
let upgrade6sBought = 0;

// yes, i know, this is WILDLY INEFFICENT. If you can code better than me, please rewrite this better :D
let upgrade0Name = "Reinforced Keys";
let upgrade1Name = "Hardwood Walking Stick";
let upgrade2Name = "Pig Slop";
let upgrade3Name = "LED Display";
let upgrade4Name = "Medkits";
let upgrade5Name = "200 dollar bills";
let upgrade6Name = "null";
let upgrade0Description = "Multiplys Keyboard and clicking cookie production by 2" + "<br>" + "<i>'" + "press harder" + "'</i>";
let upgrade1Description = "Multiplys Grandpa production by 2" + "<br>" + "<i>'" + "nonna dat softwood crap" + "'</i>";
let upgrade2Description = "Multiplys Ranch production by 2" + "<br>" + "<i>'" + "Wait, what have we been feeding them before now?" + "'</i>";
let upgrade3Description = "Multiplys TV production by 2" + "<br>" + "<i>'" + "World's greatest leap in digital technology" + "'</i>";
let upgrade4Description = "Multiplys Worker production by 2" + "<br>" + "<i>'" + "Constant supply of Band-Aids in case of emergency" + "'</i>";
let upgrade5Description = "Multiplys Wallet production by 2" + "<br>" + "<i>'" + "Don't know how the goverment is going to take to this currency" + "'</i>";
let upgrade6Description = "null";
let upgrade0Price = 100;
let upgrade1Price = 1000;
let upgrade2Price = 11000;
let upgrade3Price = 120000;
let upgrade4Price = 1300000;
let upgrade5Price = 14000000;
let upgrade6Price = 100;
let upgrade0Identifier = "up0";
let upgrade1Identifier = "up1";
let upgrade2Identifier = "up2";
let upgrade3Identifier = "up3";
let upgrade4Identifier = "up4";
let upgrade5Identifier = "up4";
let upgrade6Identifier = "up4";

// keyboards
let keyboardsBought = 0;
let keyboardCPSGain = 0.1;
let keyboardCPSGiven = 0;
let keyboardUpgradeCost = 15;
// grandpas
let grandpasBought = 0;
let grandpaCPSGain = 1;
let grandpaCPSGiven = 0;
let grandpaUpgradeCost = 100;
let grandpaUnlocked = 0;
// ranches
let ranchesBought = 0;
let ranchCPSGain = 8;
let ranchCPSGiven = 0;
let ranchUpgradeCost = 1100;
let ranchUnlocked = 0;
// televisions
let tvsBought = 0;
let tvCPSGain = 47;
let tvCPSGiven = 0;
let tvUpgradeCost = 12000;
let tvUnlocked = 0;
// workers
let workersBought = 0;
let workerCPSGain = 260;
let workerCPSGiven = 0;
let workerUpgradeCost = 130000;
let workerUnlocked = 0;
// wallets
let walletsBought = 0;
let walletCPSGain = 1440;
let walletCPSGiven = 0;
let walletUpgradeCost = 1400000;
let walletUnlocked = 0;
// churches
let churchesBought = 0;
let churchCPSGain = 7800;
let churchCPSGiven = 0;
let churchUpgradeCost = 20000000;
let churchUnlocked = 0;

// dev variables
let devMode = 0;
let devCPSGiven = 0;

// stats
let cookiesPerClick = 1;
let cookieBeenClickedTimes = 0;
let totalCookies = 0;
let totalCookiesView = Math.round(totalCookies * 10) / 10; // merge totalcookies & totalcookies view later
let cookiesPerSecond = 0;
let cookiesPerSecondView = cookiesPerSecond;
let buildingsOwned = 0;

// middle other occupiers
let statsUp = 0;
let infoUp = 0;
let optionsUp = 0;

// misc
let grandmaPromptClicks = 0;
let cookieProductionStopped = 0;
let buttonDoWhat = "default";
let hasCheated = 0;
let won = 0;

// save stuff
let currentImportedData; // parsed stringified and not ready for object-turning
let dataIncomplete; // Parsed JSON but cannot be read for an unknown reason without being parsed again
let dataComplete; // Completely functional parseded JSON
let allToSave = [cookies, totalCookies, cookiesPerSecond, // all additions to this variable MUST BE AT THE END, then reflected in getLocalSave()
                keyboardCPSGiven,grandpaCPSGiven,ranchCPSGiven,tvCPSGiven,workerCPSGiven,walletCPSGiven,churchCPSGiven,
                keyboardsBought,grandpasBought,ranchesBought,tvsBought,workersBought,walletsBought,churchesBought,
                keyboardCPSGain,grandpaCPSGain,ranchCPSGain,tvCPSGain,workerCPSGain,walletCPSGain,churchCPSGain,
                keyboardUpgradeCost,grandpaUpgradeCost,ranchUpgradeCost,tvUpgradeCost,workerUpgradeCost,walletUpgradeCost,churchUpgradeCost,
                upgrade0sBought,upgrade1sBought,upgrade2sBought,upgrade3sBought,upgrade4sBought,upgrade5sBought,upgrade6sBought,
                cookiesPerClick,cookieBeenClickedTimes,buildingsOwned,grandmaPromptClicks,hasCheated];
let dataLoaded;

// timer things
const intervalCPSU = setInterval(cookiesPerSecondUpdate, 1000);
const perMillisecondUniversalVar = setInterval(perMillisecondUniversal, 1);
const autoSaveInterval = setInterval(autoSave, 60 * 1000);

// set version
switch (versionBranch) { // number
    case 0:
        document.getElementById("versionNumber").innerHTML = "Version: " +version;
        break;
    case 1:
        document.getElementById("versionNumber").innerHTML = "Version: " +version+ " Beta";
        break;
}
switch (versionBranch) { // info
    case 0:
        document.getElementById("versionSwitchInfoText").innerHTML = "Clicking this will switch to the beta branch, this will wipe your current progress!";
        break;
    case 1:
        document.getElementById("versionSwitchInfoText").innerHTML = "Clicking this will switch to the main branch, this will wipe your current progress!";
        break;
}

loadAutoSave();
if (isNaN(cookies)) {
    resetSave();
}
reloadBuildingPrices();

if (won == 1) {
    document.getElementById("win").style.display = "block";
}

// check for development special stuff
if (inDevelopment == 1) {
    // quick buttons
    const devDiv = document.createElement("div");
    
    const devWarning = document.createElement("h4");
    devWarning.appendChild(document.createTextNode("Dev build detected, options below"));
    devWarning.setAttribute("style","color:black;");
    devDiv.appendChild(devWarning);

    const devResetButton = document.createElement("button");
    devResetButton.appendChild(document.createTextNode("Reset Sava Data"));
    devResetButton.setAttribute("onclick","resetSave()");
    devDiv.appendChild(devResetButton);

    const br1 = document.createElement("br");
    devDiv.appendChild(br1);

    const devSaveButton = document.createElement("button");
    devSaveButton.appendChild(document.createTextNode("Force Auto Save"));
    devSaveButton.setAttribute("onclick","autoSave()");
    devDiv.appendChild(devSaveButton);

    const br2 = document.createElement("br");
    devDiv.appendChild(br2);

    const devLoadButton = document.createElement("button");
    devLoadButton.appendChild(document.createTextNode("Force Load Save"));
    devLoadButton.setAttribute("onclick","loadAutoSave()");
    devDiv.appendChild(devLoadButton);

    document.getElementById("leftSide").insertBefore(devDiv, document.getElementById("leftSidePush"));

    // version change
    document.getElementById("versionNumber").innerHTML = "Version: " + version + " Dev";

    setDevMode("on");
    document.getElementById("offSelectionDev").innerHTML = "Overwritten";
}

// change title
switch (versionBranch) {
    case 0:
        document.getElementById("title").innerHTML = "Clicker Cookie";
        break;
    case 1:
        document.getElementById("title").innerHTML = "Clicker Cookie Beta";
        break;
}
switch (inDevelopment) {
    case 0:
        break;
    case 1:
        document.getElementById("title").innerHTML = "Clicker Cookie Dev";
        break;
}

// sounds
const cookieClick = new Audio("sfx/cookie-click.wav");
cookieClick.volume = 0.05;

// set default upgrades
document.getElementById("upgrade0").style.backgroundImage = "url(img/upgrades/reinforced-keys.png)";
document.getElementById("upgrade1").style.backgroundImage = "url(img/upgrades/hardwood-walking-stick.png)";
document.getElementById("upgrade2").style.backgroundImage = "url(img/upgrades/ranch-upgrade1.png)";
document.getElementById("upgrade3").style.backgroundImage = "url(img/upgrades/tv-upgrade1.png)";
document.getElementById("upgrade4").style.backgroundImage = "url(img/upgrades/worker-upgrade1.png)";

function perMillisecondUniversal() {
    cookiesView = Math.round(cookies * 10) / 10;
    totalCookiesView = Math.round(totalCookies * 10) / 10;
    cookiesPerSecondView = Math.round(cookiesPerSecond * 10) / 10;

    // CPS
    document.getElementById("cookiesPerSecondCounter").innerHTML = currentClickedPlural + " Per Second: " +cookiesPerSecondView;
    reloadCookieCounter();

    // Upgrade Unlocks (very long) (fixes accepted) (create a github pull request)
        // Keyboards
        if (keyboardsBought >= 1 && upgrade0sBought == 0) {
            document.getElementById("upgrade0").style.display = "inline-block";
        }
        if (upgrade0sBought == 1 && keyboardsBought >= 5) {
            createUpgrade("upgrade0","Obsidian Keys","Multiplys keyboard and clicking " + currentClickedLowercasePlural + " by 2","so heavy they're always pressed",500,"img/upgrades/obsidian-keys.png");
        }
        // Grandpas
        if (grandpasBought >= 1 && upgrade1sBought == 0) {
            document.getElementById("upgrade1").style.display = "inline-block";
        }
        // Ranches
        if (ranchesBought >= 1 && upgrade2sBought == 0) {
            document.getElementById("upgrade2").style.display = "inline-block";
        }
        // TVs
        if (tvsBought >= 1 && upgrade3sBought == 0) {
            document.getElementById("upgrade3").style.display = "inline-block";
        }
        // Workers
        if (workersBought >= 1 && upgrade4sBought == 0) {
            document.getElementById("upgrade4").style.display = "inline-block";
        }

    // building unlocks
    if (totalCookies >= 100) {
        grandpaUnlocked = 1;
    }
    if (totalCookies >= 700) {
        ranchUnlocked = 1;
    }
    if (totalCookies >= 8000) {
        tvUnlocked = 1;
    }
    if (totalCookies >= 80000) {
        workerUnlocked = 1;
    }
    if (totalCookies >= 700000) {
        walletUnlocked = 1;
    }
    if (totalCookies >= 15000000) {
        churchUnlocked = 1;
    }

    // these 2 could be combined, but would make manually unlocking buildings more difficult

    // keep unlocked
    if (grandpaUnlocked == 1) {
        document.getElementById("grandpaUpgrade").style.display = "inline";
        document.getElementById("building1").style.display = "block";
    }
    if (ranchUnlocked == 1) {
        document.getElementById("ranchUpgrade").style.display = "inline";
        document.getElementById("building2").style.display = "block";
    }
    if (tvUnlocked == 1) {
        document.getElementById("tvUpgrade").style.display = "inline";
        document.getElementById("building3").style.display = "block";
    }
    if (workerUnlocked == 1) {
        document.getElementById("workerUpgrade").style.display = "inline";
        document.getElementById("building4").style.display = "block";
    }
    if (walletUnlocked == 1) {
        document.getElementById("walletUpgrade").style.display = "inline";
        document.getElementById("building5").style.display = "block";
    }
    if (churchUnlocked == 1) {
        document.getElementById("churchUpgrade").style.display = "inline";
        document.getElementById("building6").style.display = "block";
    }

    // check for grandma's visit
    if (totalCookies >= 1000000000) {
        grandmasArrival();
    }

    // check for stopped cookie production
    if (cookieProductionStopped == 1) {
        cookies = 0;
    }

    // log to console in case of error
    if (cookies < 0) {
        createSimplePopUp(300,150,"<i>huh, what just happened?</i> <br> An error occured: " + currentClickedPlural + " are in negative!<br>Please report this to the GitHub accessable in the bottom left corner",false,"default","");
    }
    if (upgrade0Identifier == upgrade1Identifier) {
        createSimplePopUp(300,150,"<i>huh, what just happened?</i> <br> An error occured: Multiple of same upgrade or identifier is not set!<br>Please report this to the GitHub accessable in the bottom left corner",false,"default","");
    }
    // stats that need to be updated beforehand
    buildingsOwned = keyboardsBought + grandpasBought + ranchesBought + tvsBought + workersBought + walletsBought + churchesBought;
    
    // set statistic page statistics
    if (statsUp == 1) {
        document.getElementById("cookiesStat").innerHTML = currentClickedPlural + ": " + cookiesView;
        document.getElementById("allTimeCookies").innerHTML = "All Time " + currentClickedPlural + ": " + totalCookiesView;
        document.getElementById("cookiesPerSecondStat").innerHTML = currentClickedPlural + " Per Second: " + cookiesPerSecondView;
        document.getElementById("buildingsOwnedStat").innerHTML = "Buildings Owned: " + buildingsOwned;
        document.getElementById("cookieBeenClickedTimesStat").innerHTML = "Total " + currentClicked + " Clicks: " + cookieBeenClickedTimes; // move to cookieClicked() later
    }

    // set number of bought to bought (not required unless number of bought is set in console)
    document.getElementById("keyboardsBought").innerHTML = +keyboardsBought;
    document.getElementById("grandpasBought").innerHTML = +grandpasBought;
    document.getElementById("ranchesBought").innerHTML = +ranchesBought;
    document.getElementById("tvsBought").innerHTML = +tvsBought;
    document.getElementById("workersBought").innerHTML = +workersBought;
    document.getElementById("walletsBought").innerHTML = +walletsBought;
    document.getElementById("churchesBought").innerHTML = +churchesBought;

    cookiesPerSecond = keyboardCPSGiven+grandpaCPSGiven+ranchCPSGiven+tvCPSGiven+workerCPSGiven+walletCPSGiven+churchCPSGiven+devCPSGiven;
}

function cookiesPerSecondUpdate() {
    cookies = cookies + cookiesPerSecond;
    totalCookies = totalCookies + cookiesPerSecond;
    reloadCookieCounter();
}

function cookieClicked() {
    cookies = cookies + cookiesPerClick;
    cookieBeenClickedTimes = cookieBeenClickedTimes + 1;
    totalCookies = totalCookies + cookiesPerClick;
    reloadCookieCounter();
    cookieClick.play();
}

function popupClicked() {
    switch (popupButtonDo) {
        case "default":
            destroySimplePopUp();
            break;
        case "grandmaPromptClicks":
            grandmaPromptClicks = grandmaPromptClicks + 1;
            break;
        case "resetSave()":
            resetSave();
            destroySimplePopUp();
            break;
        case "resetSaveTwo()": // DELETE LATER
            resetSaveTwo();
            destroySimplePopUp();
            break;
    }
    if (cookies < 0) {
        cookies = 0;
    }
}
function popupBackClicked() {
    destroySimplePopUp();
}
// dev commands
function beginGrandma() {
    if (devMode == 1) {
        setCookies(1000000000);
        grandmaPromptClicks = 0;
    }
    else {
        console.log("You need developer mode ON to run this command.");
    }
}

function ignoreGrandma() {
    if (devMode == 1) {
        grandmaPromptClicks = 10;
    }
    else {
        console.log("You need developer mode ON to run this command.");
    }
}

function setCookies(x) {
    if (devMode == 1) {
        cookies = x;
        totalCookies = totalCookies + x;
        hasCheated = 1;
        reloadCookieCounter();
        document.getElementById("ifCheatedStat").innerHTML = "You have cheated on this playthrough!";
        ignoreGrandma();
    }
    else {
        console.log("You need developer mode ON to run this command.");
    }
}

function setCPS(x) {
    if (devMode == 1) {
        devCPSGiven = x;
        cookiesPerSecondView = Math.round(cookiesPerSecond * 10) / 10;
        document.getElementById("cookiesPerSecondCounter").innerHTML = currentClickedPlural +" Per Second: " +cookiesPerSecondView;
        document.getElementById("ifCheatedStat").innerHTML = "<b>You have cheated on this playthrough!</b>";
        ignoreGrandma();
    }
    else {
        console.log("You need developer mode ON to run this command.");
    }
}

function versionSwitch() {
    switch (versionBranch) {
        case 0:
            window.location.href = "beta/beta.html";
            break;
        case 1:
            window.location.href = "https://clickercookie.github.io";
            break;
    }
}

// upgrades
function keyboardUpgrade() {
    if (cookies >= keyboardUpgradeCost) {
        cookies = cookies - keyboardUpgradeCost;
        keyboardUpgradeCost = keyboardUpgradeCost * 1.15;
        keyboardUpgradeCost = Math.floor(keyboardUpgradeCost);
        keyboardsBought = keyboardsBought + 1;
        keyboardCPSGiven = keyboardCPSGiven + keyboardCPSGain;
        reloadCookieCounter();
        document.getElementById("keyboardUpgrade").innerHTML = "Keyboard: " +keyboardUpgradeCost;
        document.getElementById("keyboardsBought").innerHTML = +keyboardsBought;
        makeUpgradeSound();
    }
}

function grandpaUpgrade() {
    if (cookies >= grandpaUpgradeCost) {
        cookies = cookies - grandpaUpgradeCost;
        grandpaUpgradeCost = grandpaUpgradeCost * 1.15;
        grandpaUpgradeCost = Math.floor(grandpaUpgradeCost);
        grandpasBought = grandpasBought + 1;
        grandpaCPSGiven = grandpaCPSGiven + grandpaCPSGain;
        reloadCookieCounter();
        document.getElementById("grandpaUpgrade").innerHTML = "Grandpa: " +grandpaUpgradeCost;
        document.getElementById("grandpasBought").innerHTML = +grandpasBought;
        makeUpgradeSound();
    }
}

function ranchUpgrade() {
    if (cookies >= ranchUpgradeCost) {
        cookies = cookies - ranchUpgradeCost;
        ranchUpgradeCost = ranchUpgradeCost * 1.15;
        ranchUpgradeCost = Math.floor(ranchUpgradeCost);
        ranchesBought = ranchesBought + 1;
        ranchCPSGiven = ranchCPSGiven + ranchCPSGain;
        reloadCookieCounter();
        document.getElementById("ranchUpgrade").innerHTML = "Ranch: " +ranchUpgradeCost;
        document.getElementById("ranchesBought").innerHTML = +ranchesBought;
        makeUpgradeSound();
    }
}

function tvUpgrade() {
    if (cookies >= tvUpgradeCost) {
        cookies = cookies - tvUpgradeCost;
        tvUpgradeCost = tvUpgradeCost * 1.15;
        tvUpgradeCost = Math.floor(tvUpgradeCost);
        tvsBought = tvsBought + 1;
        tvCPSGiven = tvCPSGiven + tvCPSGain;
        reloadCookieCounter();
        document.getElementById("tvUpgrade").innerHTML = "Television: " +tvUpgradeCost;
        document.getElementById("tvsBought").innerHTML = +tvsBought;
        makeUpgradeSound();
    }
}
function workerUpgrade() {
    if (cookies >= workerUpgradeCost) {
        cookies = cookies - workerUpgradeCost;
        workerUpgradeCost = workerUpgradeCost * 1.15;
        workerUpgradeCost = Math.floor(workerUpgradeCost);
        workersBought = workersBought + 1;
        workerCPSGiven = workerCPSGiven + workerCPSGain;
        reloadCookieCounter();
        document.getElementById("workerUpgrade").innerHTML = "Worker: " +workerUpgradeCost;
        document.getElementById("workersBought").innerHTML = +workersBought;
        makeUpgradeSound();
    }
}
function walletUpgrade() {
    if (cookies >= walletUpgradeCost) {
        cookies = cookies - walletUpgradeCost;
        walletUpgradeCost = walletUpgradeCost * 1.15;
        walletUpgradeCost = Math.floor(walletUpgradeCost);
        walletsBought = walletsBought + 1;
        walletCPSGiven = walletCPSGiven + walletCPSGain;
        reloadCookieCounter();
        document.getElementById("walletUpgrade").innerHTML = "Wallet: " +walletUpgradeCost;
        document.getElementById("walletsBought").innerHTML = +walletsBought;
        makeUpgradeSound();
    }
}
function churchUpgrade() {
    if (cookies >= churchUpgradeCost) {
        cookies = cookies - churchUpgradeCost;
        churchUpgradeCost = churchUpgradeCost * 1.15;
        churchUpgradeCost = Math.floor(churchUpgradeCost);
        churchesBought = churchesBought + 1;
        churchCPSGiven = churchCPSGiven + churchCPSGain;
        reloadCookieCounter();
        document.getElementById("churchUpgrade").innerHTML = "Church: " +churchUpgradeCost;
        document.getElementById("churchesBought").innerHTML = +churchesBought;
        makeUpgradeSound();
    }
}

// managing upgrades
function createUpgrade(identifier,name,description,quote,price,img) {
    switch (identifier) {
        case "upgrade0":
            document.getElementById("upgrade0").style.display = "inline-block";
            upgrade0Name = name;
            upgrade0Description = description + "<br>" + "<i>'" + quote + "'</i>";
            upgrade0Price = price;
            document.getElementById("upgrade0").style.backgroundImage = "url(" + img + ")";
            break;
        case "upgrade1":
            document.getElementById("upgrade1").style.display = "inline-block";
            upgrade1Name = name;
            upgrade1Description = description + "<br>" + "<i>'" + quote + "'</i>";
            upgrade1Price = price;
            document.getElementById("upgrade1").style.backgroundImage = "url(" + img + ")";
            break;
        case "upgrade2":
            document.getElementById("upgrade2").style.display = "inline-block";
            upgrade2Name = name;
            upgrade2Description = description + "<br>" + "<i>'" + quote + "'</i>";
            upgrade2Price = price;
            document.getElementById("upgrade2").style.backgroundImage = "url(" + img + ")";
            break;
        case "upgrade3":
            document.getElementById("upgrade3").style.display = "inline-block";
            upgrade3Name = name;
            upgrade3Description = description + "<br>" + "<i>'" + quote + "'</i>";
            upgrade3Price = price;
            document.getElementById("upgrade3").style.backgroundImage = "url(" + img + ")";
            break;
        case "upgrade4":
            document.getElementById("upgrade4").style.display = "inline-block";
            upgrade4Name = name;
            upgrade4Description = description + "<br>" + "<i>'" + quote + "'</i>";
            upgrade4Price = price;
            document.getElementById("upgrade4").style.backgroundImage = "url(" + img + ")";
            break;
        case "upgrade5":
            document.getElementById("upgrade5").style.display = "inline-block";
            upgrade5Name = name;
            upgrade5Description = description + "<br>" + "<i>'" + quote + "'</i>";
            upgrade5Price = price;
            document.getElementById("upgrade5").style.backgroundImage = "url(" + img + ")";
            break;
        case "upgrade6":
            document.getElementById("upgrade6").style.display = "inline-block";
            upgrade6Name = name;
            upgrade6Description = description + "<br>" + "<i>'" + quote + "'</i>";
            upgrade6Price = price;
            document.getElementById("upgrade6").style.backgroundImage = "url(" + img + ")";
            break;
        default:
            createSimplePopUp(300,150,"<i>huh, what just happened?</i> <br> A fatal error occured: upgrade identifier is invalid!<br>Please report this to the GitHub accessable in the bottom left corner",true);
            break;
    }
}
function destroyUpgrade(identifier) {
    switch (identifier) {
        case "upgrade0":
            document.getElementById("upgrade0").style.display = "none";
            break;
        case "upgrade1":
            document.getElementById("upgrade1").style.display = "none";
            break;
        case "upgrade2":
            document.getElementById("upgrade2").style.display = "none";
            break;
        case "upgrade3":
            document.getElementById("upgrade3").style.display = "none";
            break;
        case "upgrade4":
            document.getElementById("upgrade4").style.display = "none";
            break;
        case "upgrade5":
            document.getElementById("upgrade5").style.display = "none";
            break;
        case "upgrade6":
            document.getElementById("upgrade6").style.display = "none";
            break;
        default:
            createSimplePopUp(300,150,"<i>huh, what just happened?</i> <br> A fatal error occured: upgrade identifier is invalid for destroyed upgrade!<br>Please report this to the GitHub accessable in the bottom left corner",true);
            break;
    }
}

function upgrade0Clicked() {
    if (cookies >= upgrade0Price) {
        cookies = cookies - upgrade0Price;
        keyboardCPSGiven = keyboardCPSGiven * 2;
        keyboardCPSGain = keyboardCPSGain * 2;
        cookiesPerClick = cookiesPerClick * 2;
        upgrade0sBought = upgrade0sBought + 1;
        upgrade0Hovered();
        destroyUpgrade("upgrade0");
    }
}
function upgrade1Clicked() {
    if (cookies >= upgrade1Price) {
        cookies = cookies - upgrade1Price;
        grandpaCPSGiven = grandpaCPSGiven * 2;
        grandpaCPSGain = grandpaCPSGain * 2;
        upgrade1sBought =+ 1;
        upgrade1Hovered();
        destroyUpgrade("upgrade1");
    }
}
function upgrade2Clicked() {
    if (cookies >= upgrade2Price) {
        cookies = cookies - upgrade2Price;
        ranchCPSGiven = ranchCPSGiven * 2;
        ranchCPSGain = ranchCPSGain * 2;
        upgrade2sBought =+ 1;
        upgrade2Hovered();
        destroyUpgrade("upgrade2");
    }
}
function upgrade3Clicked() {
    if (cookies >= upgrade3Price) {
        cookies = cookies - upgrade3Price;
        tvCPSGiven = tvCPSGiven * 2;
        tvCPSGain = tvCPSGain * 2;
        upgrade3sBought =+ 1;
        upgrade3Hovered();
        destroyUpgrade("upgrade3");
    }
}
function upgrade4Clicked() {
    if (cookies >= upgrade4Price) {
        cookies = cookies - upgrade4Price;
        workerCPSGiven = workerCPSGiven * 2;
        workerCPSGain = workerCPSGain * 2;
        upgrade4sBought =+ 1;
        upgrade4Hovered();
        destroyUpgrade("upgrade4");
    }
}
function upgrade5Clicked() {
    if (cookies >= upgrade5Price) {
        cookies = cookies - upgrade5Price;
        walletCPSGiven = walletCPSGiven * 2;
        walletCPSGain = walletCPSGain * 2;
        upgrade5sBought =+ 1;
        upgrade5Hovered();
        destroyUpgrade("upgrade5");
    }
}
function upgrade6Clicked() {
    if (cookies >= upgrade6Price) {
        cookies = cookies - upgrade6Price;
        churchCPSGiven = churchCPSGiven * 2;
        churchCPSGain = churchCPSGain * 2;
        upgrade6sBought =+ 1;
        upgrade6Hovered();
        destroyUpgrade("upgrade6");
    }
}

function upgrade0Hovered() {
    document.getElementById("upgradeName").innerHTML = "Name: " + upgrade0Name;
    document.getElementById("upgradePrice").innerHTML = "Price: " + upgrade0Price;
    document.getElementById("upgradeDesc").innerHTML = "Description: " + upgrade0Description;
    document.getElementById("upgradeViewer").style.display = "block";
    document.getElementById("upgradeViewer").style.float = "right";
}
function upgrade1Hovered() {
    document.getElementById("upgradeName").innerHTML = "Name: " + upgrade1Name;
    document.getElementById("upgradePrice").innerHTML = "Price: " + upgrade1Price;
    document.getElementById("upgradeDesc").innerHTML = "Description: " + upgrade1Description;
    document.getElementById("upgradeViewer").style.display = "block";
    document.getElementById("upgradeViewer").style.float = "right";
}
function upgrade2Hovered() {
    document.getElementById("upgradeName").innerHTML = "Name: " + upgrade2Name;
    document.getElementById("upgradePrice").innerHTML = "Price: " + upgrade2Price;
    document.getElementById("upgradeDesc").innerHTML = "Description: " + upgrade2Description;
    document.getElementById("upgradeViewer").style.display = "block";
    document.getElementById("upgradeViewer").style.float = "right";
}
function upgrade3Hovered() {
    document.getElementById("upgradeName").innerHTML = "Name: " + upgrade3Name;
    document.getElementById("upgradePrice").innerHTML = "Price: " + upgrade3Price;
    document.getElementById("upgradeDesc").innerHTML = "Description: " + upgrade3Description;
    document.getElementById("upgradeViewer").style.display = "block";
    document.getElementById("upgradeViewer").style.float = "right";
}
function upgrade4Hovered() {
    document.getElementById("upgradeName").innerHTML = "Name: " + upgrade4Name;
    document.getElementById("upgradePrice").innerHTML = "Price: " + upgrade4Price;
    document.getElementById("upgradeDesc").innerHTML = "Description: " + upgrade4Description;
    document.getElementById("upgradeViewer").style.display = "block";
    document.getElementById("upgradeViewer").style.float = "right";
}
function upgrade5Hovered() {
    document.getElementById("upgradeName").innerHTML = "Name: " + upgrade5Name;
    document.getElementById("upgradePrice").innerHTML = "Price: " + upgrade5Price;
    document.getElementById("upgradeDesc").innerHTML = "Description: " + upgrade5Description;
    document.getElementById("upgradeViewer").style.display = "block";
    document.getElementById("upgradeViewer").style.float = "right";
}
function upgrade6Hovered() {
    document.getElementById("upgradeName").innerHTML = "Name: " + upgrade6Name;
    document.getElementById("upgradePrice").innerHTML = "Price: " + upgrade6Price;
    document.getElementById("upgradeDesc").innerHTML = "Description: " + upgrade6Description;
    document.getElementById("upgradeViewer").style.display = "block";
    document.getElementById("upgradeViewer").style.float = "right";
}
function upgradeUndoHover() {
    document.getElementById("upgradeName").innerHTML = "Name: ";
    document.getElementById("upgradePrice").innerHTML = "Price: ";
    document.getElementById("upgradeDesc").innerHTML = "Description: ";
    document.getElementById("upgradeViewer").style.display = "none";
    document.getElementById("upgradeViewer").style.float = "right";
}

function versionNumberMousedOver() {
    document.getElementById("versionSwitchInfo").style.display = "block";
}
function versionNumberMousedOverUndo() {
    document.getElementById("versionSwitchInfo").style.display = "none";
}

// helper functions
function reloadCookieCounter() {
    document.getElementById("cookieCounter").innerHTML = currentClickedPlural + ": " +cookiesView;
}

function reloadBuildingPrices() {
    document.getElementById("keyboardUpgrade").innerHTML = "Keyboard: " +keyboardUpgradeCost;
    document.getElementById("grandpaUpgrade").innerHTML = "Grandpa: " +grandpaUpgradeCost;
    document.getElementById("ranchUpgrade").innerHTML = "Ranch: " +ranchUpgradeCost;
    document.getElementById("tvUpgrade").innerHTML = "Television: " +tvUpgradeCost;
    document.getElementById("workerUpgrade").innerHTML = "Worker: " +workerUpgradeCost;
    document.getElementById("walletUpgrade").innerHTML = "Wallet: " +walletUpgradeCost;
    document.getElementById("churchUpgrade").innerHTML = "Church: " +churchUpgradeCost;
}

function checkInvalidCookies() {
    if (cookies == NaN) {
        resetSave();
    }
}

function makeUpgradeSound() {
    cookieClick.play(); // needs to be updated to different sfx
}

function createSimplePopUp(x,y,text,buttonNot,doWhat,title,backButton) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupContent").innerHTML = text;
    document.getElementById("popup").style.width = x + "px";
    document.getElementById("popupButtonDiv").style.width = x + "px";
    document.getElementById("popup").style.height = y + "px";
    if (title !== "undefined") {
        document.getElementById("popup-title").style.display = "block";
        document.getElementById("popup-title").innerHTML = title;
    }
    else {
        consoleLogDev("If you want a titleless popup, due to a technical limitation, please use the title parameter with a blank string")
    }
    if (buttonNot == true) {
        document.getElementById("popupButton").style.display = "none";
    }
    else {
        document.getElementById("popupButton").style.display = "inline-block";
    }
    if (backButton == true) {
        document.getElementById("popupBackButton").style.display = "inline-block";
    }
    else {
        document.getElementById("popupBackButton").style.display = "none";
    }
    popupButtonDo = doWhat;
}

function destroySimplePopUp() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popupContent").innerHTML = "null";
    document.getElementById("popupButton").style.display = "none";
}

// set areas to different things
function setBackground(color) {
    currentBackground = "url(img/backgrounds/background-" + color + ".png)";
    document.getElementById("leftSide").style.background = currentBackground;
    document.getElementById("middleButtons").style.background = currentBackground;
    document.getElementById("rightSide").style.background = currentBackground;

    consoleLogDev("Background color set to: " + color);
}

function setCurrentClicked(value) {
    switch (value) {
        case "cookie":
            document.getElementById("cookie").src = "img/cookie.png";
            currentClicked = "Cookie";
            currentClickedPlural = "Cookies";
            currentClickedLowercase = "cookie";
            currentClickedLowercasePlural = "cookies";
            break;
        case "potato":
            document.getElementById("cookie").src = "img/potato.png";
            currentClicked = "Potato";
            currentClickedPlural = "Potatoes";
            currentClickedLowercase = "potato";
            currentClickedLowercasePlural = "potatoes";
            break;
        case "strawberry":
            document.getElementById("cookie").src = "img/strawberry.png";
            currentClicked = "Strawberry";
            currentClickedPlural = "Strawberries";
            currentClickedLowercase = "strawberry";
            currentClickedLowercasePlural = "strawberries";
            break;
    }
}

function setDevMode(value) {
    switch (value) {
        case "off":
            devMode = 0;
            break;
        case "on":
            devMode = 1;
            console.log("Developer Mode activated.");
            document.getElementById("devModeSelect").disabled = true;
            document.getElementById("newDataOptions").style.display = "block";
            break;
    }
}

// toggle menu openness, needs to be updated to allow switching by pressing another button
function toggleStats() {
    switch (statsUp) {
        case 0:
            if (optionsUp == 0 && infoUp == 0) {
                statsUp = 1;
                document.getElementById("statsMiddleText").style.display = "block";
                document.getElementById("middle").style.background = "black";
            }
            break;
        case 1:
            statsUp = 0;
            document.getElementById("statsMiddleText").style.display = "none";
            document.getElementById("middle").style.background = currentBackground;
    }
}
function toggleInfo() {
    switch (infoUp) {
        case 0:
            if (optionsUp == 0 && statsUp == 0) {
                infoUp = 1;
                document.getElementById("infoMiddleText").style.display = "block";
                document.getElementById("middle").style.background = "black";
            }
            break;
        case 1:
            infoUp = 0;
            document.getElementById("infoMiddleText").style.display = "none";
            document.getElementById("middle").style.background = currentBackground;
    }
}
function toggleOptions() {
    switch (optionsUp) {
        case 0:
            if (infoUp == 0 && statsUp == 0) {
                optionsUp = 1;
                document.getElementById("optionsMiddleText").style.display = "block";
                document.getElementById("middle").style.background = "black";
            }
            break;
        case 1:
            optionsUp = 0;
            document.getElementById("optionsMiddleText").style.display = "none";
            document.getElementById("middle").style.background = currentBackground;
    }
}

function consoleLogDev(str) {
    if (devMode == 1) {
        console.log(str);
    }
}

function grandmasArrival() {
    switch (grandmaPromptClicks) {
        case 0:
            createSimplePopUp(300,150,"a familiar face appears...",false,"grandmaPromptClicks");
            break;
        case 1:
            document.getElementById("popupImage").src = "img/grandma.png";
            document.getElementById("popupImage").style.display = "block";
            createSimplePopUp(300,150,"hello...",false,"grandmaPromptClicks");
            break;
        case 2:
            createSimplePopUp(300,150,"how long have you done this for?",false,"grandmaPromptClicks");
            break;
        case 3:
            createSimplePopUp(300,150,"oh my...",false,"grandmaPromptClicks");
            break;
        case 4:
            createSimplePopUp(300,150,"well i suppose you must know this:",false,"grandmaPromptClicks");
            break;
        case 5:
            createSimplePopUp(300,150,"<i>there is nothing else to do here</i>",false,"grandmaPromptClicks");
            break;
        case 6:
            createSimplePopUp(300,150,"you win.",false,"grandmaPromptClicks");
            document.getElementById("win").style.display = "block";
            won = 1;
            break;
        case 7:
            createSimplePopUp(300,150,"you may keep going...",false,"grandmaPromptClicks");
            break;
        case 8:
            createSimplePopUp(300,150,"but you will be wasting your time.",false,"grandmaPromptClicks");
            break;
        case 9:
            destroySimplePopUp();
            grandmaPromptClicks = grandmaPromptClicks + 1;
            break;
    }
}

// saves
function exportData() {
    autoSave();
    let dataJSON = JSON.stringify(localStorage);

    const textToBLOB = new Blob([dataJSON], { type: 'text/plain' });
    const sFileName = 'save.ccsave';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}

function importData() {
    autoSave();
    var file = document.getElementById("importDataInput").files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        currentImportedData = JSON.stringify(reader.result);
    }
    reader.onerror = (e) => alert("something broke, don't expect me to fix it :D");

    reader.readAsText(file);
    
    reader.onloadend = () => {
        importReadData();
    };
}
function importReadData() {
    dataIncomplete = JSON.parse(currentImportedData);
    dataComplete = JSON.parse(dataIncomplete);

    cookies = parseFloat(dataComplete.cookies);
    totalCookies = parseFloat(dataComplete.totalCookies);
    cookiesPerClick = parseFloat(dataComplete.cookiesPerClick);

    keyboardCPSGiven = parseFloat(dataComplete.keyboardCPSGiven);
    grandpaCPSGiven = parseFloat(dataComplete.grandpaCPSGiven);
    ranchCPSGiven = parseFloat(dataComplete.ranchCPSGiven);
    tvCPSGiven = parseFloat(dataComplete.tvCPSGiven);
    workerCPSGiven = parseFloat(dataComplete.workerCPSGiven);
    walletCPSGiven = parseFloat(dataComplete.walletCPSGiven);
    churchCPSGiven = parseFloat(dataComplete.churchCPSGiven);

    keyboardsBought = parseInt(dataComplete.keyboardsBought);
    grandpasBought = parseInt(dataComplete.grandpasBought);
    ranchesBought = parseInt(dataComplete.ranchesBought);
    tvsBought = parseInt(dataComplete.tvsBought);
    workersBought = parseInt(dataComplete.workersBought);
    walletsBought = parseInt(dataComplete.walletsBought);
    churchesBought = parseInt(dataComplete.churchesBought);

    keyboardCPSGain = parseFloat(dataComplete.keyboardCPSGain);
    grandpaCPSGain = parseFloat(dataComplete.grandpaCPSGain);
    ranchCPSGain = parseFloat(dataComplete.ranchCPSGain);
    tvCPSGain = parseFloat(dataComplete.tvCPSGain);
    workerCPSGain = parseFloat(dataComplete.workerCPSGain);
    walletCPSGain = parseFloat(dataComplete.walletCPSGain);
    churchCPSGain = parseFloat(dataComplete.churchCPSGain);

    keyboardUpgradeCost = parseFloat(dataComplete.keyboardUpgradeCost);
    grandpaUpgradeCost = parseFloat(dataComplete.grandpaUpgradeCost);
    ranchUpgradeCost = parseFloat(dataComplete.ranchUpgradeCost);
    tvUpgradeCost = parseFloat(dataComplete.tvUpgradeCost);
    workerUpgradeCost = parseFloat(dataComplete.workerUpgradeCost);
    walletUpgradeCost = parseFloat(dataComplete.walletUpgradeCost);
    churchUpgradeCost = parseFloat(dataComplete.churchUpgradeCost);

    upgrade0sBought = parseInt(dataComplete.upgrade0sBought);
    upgrade1sBought = parseInt(dataComplete.upgrade1sBought);
    upgrade2sBought = parseInt(dataComplete.upgrade2sBought);
    upgrade3sBought = parseInt(dataComplete.upgrade3sBought);
    upgrade4sBought = parseInt(dataComplete.upgrade4sBought);
    upgrade5sBought = parseInt(dataComplete.upgrade5sBought);
    upgrade6sBought = parseInt(dataComplete.upgrade6sBought);

    cookiesPerClick = parseInt(dataComplete.cookiesPerClick);
    cookieBeenClickedTimes = parseInt(dataComplete.cookieBeenClickedTimes);
    buildingsOwned = parseInt(dataComplete.buildingsOwned);
    grandmaPromptClicks = parseInt(dataComplete.grandmaPromptClicks);
    hasCheated = parseInt(dataComplete.hasCheated);
    reloadBuildingPrices();

    consoleLogDev("Imported save with " +cookies+ " cookies.");
}

function autoSave() {
    if (typeof(Storage) !== "undefined") {
        if (hasCheated == 0) {
            localStorage.cookies = cookies;
            localStorage.totalCookies = totalCookies;
            localStorage.cookiesPerClick = cookiesPerClick;

            localStorage.keyboardCPSGiven = keyboardCPSGiven;
            localStorage.grandpaCPSGiven = grandpaCPSGiven;
            localStorage.ranchCPSGiven = ranchCPSGiven;
            localStorage.tvCPSGiven = tvCPSGiven;
            localStorage.workerCPSGiven = workerCPSGiven;
            localStorage.walletCPSGiven = walletCPSGiven;
            localStorage.churchCPSGiven = churchCPSGiven;
            localStorage.devCPSGiven = devCPSGiven;

            localStorage.keyboardsBought = keyboardsBought;
            localStorage.grandpasBought = grandpasBought;
            localStorage.ranchesBought = ranchesBought;
            localStorage.tvsBought = tvsBought;
            localStorage.workersBought = workersBought;
            localStorage.walletsBought = walletsBought;
            localStorage.churchesBought = churchesBought;

            localStorage.keyboardCPSGain = keyboardCPSGain;
            localStorage.grandpaCPSGain = grandpaCPSGain;
            localStorage.ranchCPSGain = ranchCPSGain;
            localStorage.tvCPSGain = tvCPSGain;
            localStorage.workerCPSGain = workerCPSGain;
            localStorage.walletCPSGain = walletCPSGain;
            localStorage.churchCPSGain = churchCPSGain;

            localStorage.keyboardUpgradeCost = keyboardUpgradeCost;
            localStorage.grandpaUpgradeCost = grandpaUpgradeCost;
            localStorage.ranchUpgradeCost = ranchUpgradeCost;
            localStorage.tvUpgradeCost = tvUpgradeCost;
            localStorage.workerUpgradeCost = workerUpgradeCost;
            localStorage.walletUpgradeCost = walletUpgradeCost;
            localStorage.churchUpgradeCost = churchUpgradeCost;

            localStorage.upgrade0sBought = upgrade0sBought;
            localStorage.upgrade1sBought = upgrade1sBought;
            localStorage.upgrade2sBought = upgrade2sBought;
            localStorage.upgrade3sBought = upgrade3sBought;
            localStorage.upgrade4sBought = upgrade4sBought;
            localStorage.upgrade5sBought = upgrade5sBought;
            localStorage.upgrade6sBought = upgrade6sBought;

            localStorage.cookiesPerClick = cookiesPerClick;
            localStorage.cookieBeenClickedTimes = cookieBeenClickedTimes;
            localStorage.buildingsOwned = buildingsOwned;
            localStorage.grandmaPromptClicks = grandmaPromptClicks;
            localStorage.hasCheated = hasCheated;
            return("Saved with " + cookies + " cookies.");
        }
    } 
    else {
        if (autoSaveWarningGiven == 0) {
            autoSaveWarningGiven = 1;
            alert("Your browser doesn't support auto saving. Consider updating?");
        }
    }
}

function autoSaveTwo() {
    allToSave = [cookies, totalCookies, cookiesPerSecond,
        keyboardCPSGiven,grandpaCPSGiven,ranchCPSGiven,tvCPSGiven,workerCPSGiven,walletCPSGiven,churchCPSGiven,
        keyboardsBought,grandpasBought,ranchesBought,tvsBought,workersBought,walletsBought,churchesBought,
        keyboardCPSGain,grandpaCPSGain,ranchCPSGain,tvCPSGain,workerCPSGain,walletCPSGain,churchCPSGain,
        keyboardUpgradeCost,grandpaUpgradeCost,ranchUpgradeCost,tvUpgradeCost,workerUpgradeCost,walletUpgradeCost,churchUpgradeCost,
        upgrade0sBought,upgrade1sBought,upgrade2sBought,upgrade3sBought,upgrade4sBought,upgrade5sBought,upgrade6sBought,
        cookiesPerClick,cookieBeenClickedTimes,buildingsOwned,grandmaPromptClicks,hasCheated];
    switch (versionBranch) {
        case 0:
            localStorage.save = JSON.stringify(allToSave);
            break;
        case 1:
            switch (inDevelopment) {
                case 0:   
                    localStorage.betaSave = JSON.stringify(allToSave);
                    break;
                case 1:
                    localStorage.devSave = JSON.stringify(allToSave);
                    break;
            }
            break;
        default:
            alert("Version branch is invalid and auto-saving is not functional!");
    }
}

function loadAutoSave() {
    cookies = parseFloat(localStorage.cookies);
    totalCookies = parseFloat(localStorage.totalCookies);
    cookiesPerSecond = parseFloat(localStorage.cookiesPerSecond);

    keyboardCPSGiven = parseFloat(localStorage.keyboardCPSGiven);
    grandpaCPSGiven = parseFloat(localStorage.grandpaCPSGiven);
    ranchCPSGiven = parseFloat(localStorage.ranchCPSGiven);
    tvCPSGiven = parseFloat(localStorage.tvCPSGiven);
    workerCPSGiven = parseFloat(localStorage.workerCPSGiven);
    walletCPSGiven = parseFloat(localStorage.walletCPSGiven);
    churchCPSGiven = parseFloat(localStorage.churchCPSGiven);
    devCPSGiven = parseFloat(localStorage.devCPSGiven);

    keyboardsBought = parseInt(localStorage.keyboardsBought);
    grandpasBought = parseInt(localStorage.grandpasBought);
    ranchesBought = parseInt(localStorage.ranchesBought);
    tvsBought = parseInt(localStorage.tvsBought);
    workersBought = parseInt(localStorage.workersBought);
    walletsBought = parseInt(localStorage.walletsBought);
    churchesBought = parseInt(localStorage.churchesBought);

    keyboardCPSGain = parseFloat(localStorage.keyboardCPSGain);
    grandpaCPSGain = parseFloat(localStorage.grandpaCPSGain);
    ranchCPSGain = parseFloat(localStorage.ranchCPSGain);
    tvCPSGain = parseFloat(localStorage.tvCPSGain);
    workerCPSGain = parseFloat(localStorage.workerCPSGain);
    walletCPSGain = parseFloat(localStorage.walletCPSGain);
    churchCPSGain = parseFloat(localStorage.churchCPSGain);

    keyboardUpgradeCost = parseFloat(localStorage.keyboardUpgradeCost);
    grandpaUpgradeCost = parseFloat(localStorage.grandpaUpgradeCost);
    ranchUpgradeCost = parseFloat(localStorage.ranchUpgradeCost);
    tvUpgradeCost = parseFloat(localStorage.tvUpgradeCost);
    workerUpgradeCost = parseFloat(localStorage.workerUpgradeCost);
    walletUpgradeCost = parseFloat(localStorage.walletUpgradeCost);
    churchUpgradeCost = parseFloat(localStorage.churchUpgradeCost);

    upgrade0sBought = parseInt(localStorage.upgrade0sBought);
    upgrade1sBought = parseInt(localStorage.upgrade1sBought);
    upgrade2sBought = parseInt(localStorage.upgrade2sBought);
    upgrade3sBought = parseInt(localStorage.upgrade3sBought);
    upgrade4sBought = parseInt(localStorage.upgrade4sBought);
    upgrade5sBought = parseInt(localStorage.upgrade5sBought);
    upgrade6sBought = parseInt(localStorage.upgrade6sBought);

    cookiesPerClick = parseInt(localStorage.cookiesPerClick);
    cookieBeenClickedTimes = parseInt(localStorage.cookieBeenClickedTimes);
    buildingsOwned = parseInt(localStorage.buildingsOwned);
    grandmaPromptClicks = parseInt(localStorage.grandmaPromptClicks);
    hasCheated = parseInt(localStorage.hasCheated);
    reloadBuildingPrices();
}

function loadAutoSaveTwo() {
    switch (versionBranch) {
        case 0:
            getLocalSave("save");
            break;
        case 1:
            switch (inDevelopment) {
                case 0:
                    getLocalSave("betaSave");
                    break;
                case 1:
                    getLocalSave("devSave");
                    break;
            }
            break;
    }
} // merge two later (idk why they are seperate things)
function getLocalSave(localStorageSave) {
    switch (localStorageSave) {
        case "save":
            dataLoaded = JSON.parse(localStorage.save);
            break;
        case "betaSave":
            dataLoaded = JSON.parse(localStorage.betaSave);
            break;
        case "devSave":
            dataLoaded = JSON.parse(localStorage.devSave);
            break;
        default:
            alert("Loading auto-saving is not functional because versionBranch or inDevelopment is invalid!");
            break;
    }
    cookies = dataLoaded[0];
    totalcookies = dataLoaded[1];
    cookiesPerSecond = dataLoaded[2];

    keyboardCPSGiven = dataLoaded[3];
    grandpaCPSGiven = dataLoaded[4];
    ranchCPSGiven = dataLoaded[5];
    tvCPSGiven = dataLoaded[6];
    workerCPSGiven = dataLoaded[7];
    walletCPSGiven = dataLoaded[8];
    churchCPSGiven = dataLoaded[9];

    keyboardsBought = dataLoaded[10];
    grandpasBought = dataLoaded[11];
    ranchesBought = dataLoaded[12];
    tvsBought = dataLoaded[13];
    workersBought = dataLoaded[14];
    walletsBought = dataLoaded[15];
    churchesBought = dataLoaded[16];

    keyboardCPSGain = dataLoaded[17];
    grandpaCPSGain = dataLoaded[18];
    ranchCPSGain = dataLoaded[19];
    tvCPSGain = dataLoaded[20];
    workerCPSGain = dataLoaded[21];
    walletCPSGain = dataLoaded[22];
    churchCPSGain = dataLoaded[23];

    keyboardUpgradeCost = dataLoaded[24];
    grandpaUpgradeCost = dataLoaded[25];
    ranchUpgradeCost = dataLoaded[26];
    tvUpgradeCost = dataLoaded[27];
    workerUpgradeCost = dataLoaded[28];
    walletUpgradeCost = dataLoaded[29];
    churchUpgradeCost = dataLoaded[30];

    upgrade0sBought = dataLoaded[31];
    upgrade1sBought = dataLoaded[32];
    upgrade2sBought = dataLoaded[33];
    upgrade3sBought = dataLoaded[34];
    upgrade4sBought = dataLoaded[35];
    upgrade5sBought = dataLoaded[36];
    upgrade6sBought = dataLoaded[37];

    cookiesPerClick = dataLoaded[38];
    cookieBeenClickedTimes = dataLoaded[39];
    buildingsOwned = dataLoaded[40];
    grandmaPromptClicks = dataLoaded[41];
    hasCheated = dataLoaded[42];
    reloadBuildingPrices();
}

function resetSave() {
    localStorage.cookies = 0;
    localStorage.totalCookies = 0;
    localStorage.cookiesPerSecond = 0;

    localStorage.keyboardCPSGiven = 0;
    localStorage.grandpaCPSGiven = 0;
    localStorage.ranchCPSGiven = 0;
    localStorage.tvCPSGiven = 0;
    localStorage.workerCPSGiven = 0;
    localStorage.walletCPSGiven = 0;
    localStorage.churchCPSGiven = 0;
    localStorage.devCPSGiven = 0;

    localStorage.keyboardsBought = 0;
    localStorage.grandpasBought = 0;
    localStorage.ranchesBought = 0;
    localStorage.tvsBought = 0;
    localStorage.workersBought = 0;
    localStorage.walletsBought = 0;
    localStorage.churchesBought = 0;

    localStorage.keyboardCPSGain = 0.1;
    localStorage.grandpaCPSGain = 1;
    localStorage.ranchCPSGain = 8;
    localStorage.tvCPSGain = 47;
    localStorage.workerCPSGain = 260;
    localStorage.walletCPSGain = 1440;
    localStorage.churchCPSGain = 7800;

    localStorage.keyboardUpgradeCost = 15;
    localStorage.grandpaUpgradeCost = 100;
    localStorage.ranchUpgradeCost = 1100;
    localStorage.tvUpgradeCost = 12000;
    localStorage.workerUpgradeCost = 130000;
    localStorage.walletUpgradeCost = 1400000;
    localStorage.churchUpgradeCost = 20000000;

    localStorage.upgrade0sBought = 0;
    localStorage.upgrade1sBought = 0;
    localStorage.upgrade2sBought = 0;
    localStorage.upgrade3sBought = 0;
    localStorage.upgrade4sBought = 0;
    localStorage.upgrade5sBought = 0;
    localStorage.upgrade6sBought = 0;

    localStorage.cookiesPerClick = 1;
    localStorage.cookieBeenClickedTimes = 0;
    localStorage.buildingsOwned = 0;
    localStorage.grandmaPromptClicks = 0;
    localStorage.hasCheated = 0;
    loadAutoSave();
}

function resetSaveTwo() {
    switch (versionBranch) {
        case 0:
            localStorage.removeItem(save);
            break;
        case 1:
            switch (inDevelopment) {
                case 0:
                    localStorage.removeItem(betaSave);
                    break;
                case 1:
                    localStorage.removeItem(devSave);
            }
            break;
        default:
            alert("Resetting save is not functional because versionBranch or inDevelopment is invalid!");
            break;
    }
    reloadBuildingPrices();
}

function resetSaveButton() {
    createSimplePopUp(300,150,"Are you sure you want to do this?",false,"resetSave()","Warning",true);
}
function resetSaveButtonTwo() {
    createSimplePopUp(300,150,"Are you sure you want to do this?",false,"resetSave()","Warning",true);
}

console.log("what are you doing here? well... as long as its productive.");
