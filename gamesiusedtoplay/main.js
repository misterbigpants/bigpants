"use strict";
/*
Going Live: 4 things
1. gamesList - don't show all games
2. configCacheBreaker
3. configDebug = 0
4. change if (holdCacheBreaker != configCacheBreaker)
*/

var configCacheBreaker = 38; //  Math.floor(Math.random() * 10000);
var configDebug = 0;  // Debug mode adds tedious Load to menus (slow load of .CMD/.DMK game source files that we make snapshots of)
var urlSearchParams = new URLSearchParams(window.location.search);

var holdCacheBreaker = 0;
if ((urlSearchParams.get("cachebreaker") != null) && (urlSearchParams.get("cachebreaker").trim() != "")) { holdCacheBreaker = parseInt(urlSearchParams.get("cachebreaker").trim()); }

// if (holdCacheBreaker == 0)
if (holdCacheBreaker != configCacheBreaker)
{
	urlSearchParams.set("cachebreaker", "" + configCacheBreaker);
	location.replace("index.html?" + urlSearchParams.toString());
	// .replace is asynchronous so code keeps going and gets here and renders the whole page before switching. sigh.
	document.write("<!-- ");   // don't bother with the rest of this document
}
else {
	window.history.replaceState(null, "", "index.html");   // don't want people copying cachebreaker parameter in URL, ironcially that will cause them to get a cached page
}

var gamesList = [
	"OUTHOUSE", "DEFENSECOMMAND"
	, "CRAZYPAINTER"
	, "SCARFMAN"
	, "PENETRATOR", "DANCINGDEMON", "EMPIRE"
	, "LIBERATOR", "DONKEYKONG"
	, "AIRRAID", "FLYINGSAUCERS"
	, "DONUT"
	, "CYBORG", "ASSAULT"
	, "GHOSTS"
	/* , "WEERD", "TIMEBANDIT" */
];

var gamesInfo = {};
gamesInfo.OUTHOUSE = { "index":0, "key":"OUTHOUSE", "caption": "OUTHOUSE", "backgroundImage": "game-OUTHOUSEImage1.jpg", "videoid": "pAXy24U_Gts?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [8 * 60 + 5, 9 * 60 + 30, 11 * 60 + 0]};
gamesInfo.DEFENSECOMMAND = { "index":1, "key":"DEFENSECOMMAND", "caption": "DEFENSE COMMAND", "backgroundImage": "game-DEFENSECOMMANDImage1.png", "videoid": "_ZVYTrDoOPI?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [3 * 60 + 53, 7 * 60 + 55, 9 * 60 + 58]};
gamesInfo.CRAZYPAINTER = { "index":2, "key":"CRAZYPAINTER", "caption": "CRAZY PAINTER", "backgroundImage": "game-CRAZYPAINTERImage1.jpg", "videoid": "CdiHbnn97Bg?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [2 * 60 + 0, 5 * 60 + 30, 19 * 60 + 0]};
gamesInfo.SCARFMAN = { "index":3, "key":"SCARFMAN", "caption": "SCARFMAN", "backgroundImage": "game-SCARFMANImage1.png", "videoid": "3edOlW42SLQ?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [5 * 60 + 35, 7 * 60 + 33]};
gamesInfo.PENETRATOR = { "index":4, "key":"PENETRATOR", "caption": "PENETRATOR", "backgroundImage": "game-PENETRATORImage2.jpg", "videoid": "XbXGahP5fsA?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [2 * 60 + 21, 6 * 60 + 39, 7 * 60 + 24]};
gamesInfo.DANCINGDEMON = { "index":5, "key":"DANCINGDEMON", "caption": "DANCING DEMON", "backgroundImage": "game-DANCINGDEMONImage1.jpg", "videoid": "5XLoNJ4l--E?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [0 * 60 + 14, 7 * 60 + 35, 9 * 60 + 5]};
gamesInfo.EMPIRE = { "index":6, "key":"EMPIRE", "caption": "EMPIRE", "backgroundImage": "game-EMPIREImage1.png", "videoid": "k2gDhfE5wWw?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [5 * 60 + 16, 16 * 60 + 30, 29 * 60 + 13]};
gamesInfo.LIBERATOR = { "index":7, "key":"LIBERATOR", "caption": "LIBERATOR", "backgroundImage": "game-LIBERATORImage2.png", "videoid": "CVYXgexc7Mk?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [2 * 60 + 21, 3 * 60 + 17, 4 * 60 + 55]};
gamesInfo.DONKEYKONG = { "index": 8, "key": "DONKEYKONG", "caption": "DONKEY KONG", "backgroundImage": "game-DONKEYKONGImage1.gif", "videoid": "CVYXgexc7Mk?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1&start=388", "videomoments": [9 * 60 + 0, 13 * 60 + 20, 14 * 60 + 30]};
gamesInfo.AIRRAID = { "index": 9, "key": "AIRRAID", "caption": "AIR RAID", "backgroundImage": "game-AIRRAIDImage1.jpg", "videoid": "MktIMzw9qtI?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1&start=388", "videomoments": [7 * 60 + 15] };
gamesInfo.FLYINGSAUCERS = { "index": 10, "key": "FLYINGSAUCERS", "caption": "FLYING SAUCERS", "backgroundImage": "game-FLYINGSAUCERSImage1.png", "videoid": "MktIMzw9qtI?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [55, 2 * 60 + 18] };
gamesInfo.DONUT = { "index": 11, "key": "DONUT", "caption": "DONUT DILEMMA", "backgroundImage": "game-DONUTImage1.png", "videoid": "TXDiwTNPKqw?list=PLL1GJzE_yK8ycBR2hJmbsHXNWjqTEV2t1", "videomoments": [3 * 60 + 27, 12 * 60 + 46, 15 * 60] };

gamesInfo.CYBORG = { "index": 12, "key": "CYBORG", "caption": "CYBORG", "backgroundImage": "game-CYBORGImage1.jpg", "videoid": "Bh0eE3Tf2_Y", "videomoments": [] };
gamesInfo.ASSAULT = { "index": 13, "key": "ASSAULT", "caption": "ASSAULT", "backgroundImage": "game-ASSAULTImage1.jpg", "videoid": "Bh0eE3Tf2_Y", "videomoments": [] };
gamesInfo.GHOSTS = { "index": 14, "key": "GHOSTS", "caption": "13 GHOSTS", "backgroundImage": "game-GHOSTSImage1.jpg", "videoid": "ZQDqYZ2pgOs", "videomoments": [] };

gamesInfo.WEERD = {"index":14, "key":"WEERD", "caption": "WEERD", "backgroundImage": "game-WEERDImage1.jpg", "videoid": "ZQDqYZ2pgOs", "videomoments": []};
gamesInfo.TIMEBANDIT = {"index":15, "key":"TIMEBANDIT", "caption": "TIME BANDIT", "backgroundImage": "game-TIMEBANDITImage1.jpg", "videoid": "ZQDqYZ2pgOs", "videomoments": []};

/*
// hard-learned. relocate comment
// event is a global object that's constantly getting changed.
// this is also like this. big difference between addeventlistener.click and onclick=
// it's always here living, BUT when called from a click event.currentTarget points to the HTML otherwise it points to the window

collection[i].addEventListener("click", DropDownToggle);
// if click event already hooked, will not add TWO (thank god).
// global event object is implicitly passed as first argument (by value hopefully?)

Adding a game: 4 Things
1. Add to gamesList with ID. i.e. TIMEBANDIT
2. Add DIV with ID TIMEBANDITtext
3. Add game-TIMEBANDIT.js file
4. Add DMK/CMD file

Ways Game can be Loaded
1. Click Link (script already loaded). gamename + index
2. Pasted (script might not be loaded) gamename + json, don't need script
3. Params (script might not be loaded). gamename + index 
4. Link NOT on left that tries to load game (challenges) 
Note: Links might want to main page (just video)

keys: left:37 up:38 right:39 down:40
*/

var videoState = 0;

function VideoSeekTo(pSeconds)
{	
	// https://stackoverflow.com/questions/25684693/where-to-pass-arguments-of-postmessage-command-to-youtube-iframe/78707728#78707728
	var dataObject = {event:"command",func:"seekTo",args:[pSeconds, true]}
	document.getElementById("mainvideo").contentWindow.postMessage(JSON.stringify(dataObject), '*');
	// alternatively
	// document.getElementById(gameName + 'iframe').contentWindow.postMessage('{"event":"command","func":"seekTo","args":[' + pSeconds + ', true]}', '*');
}

function VideoResize()
{
	if (videoState > 0)
	{
		var testw = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
		testw = parseFloat(testw);

		var testh = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;	
		testh = parseFloat(testh);
			
		var aspectRatio = 0.5625;   // YouTube ratio

		var w = parseInt(testw - 30);   // padding left & right of 20 pixels
		var h = parseInt(w * aspectRatio);

		if (h > parseInt(testh - 50))
		{
			h = parseInt(testh - 50);
			w = parseInt(h / aspectRatio);
		}

		let mainvideo = document.getElementById("mainvideo");
		// mainvideo.width = w;   // trsEmu needs this, iFrame doesn't
		// mainvideo.height = h;		
		mainvideo.style.left = parseInt((testw - w) * 0.5) + "px";
		mainvideo.style.top = "0px";
		mainvideo.style.width = w + "px";
		mainvideo.style.height = h + "px";		

		let mainvideotext = document.getElementById("mainvideotext");
		mainvideotext.style.left = parseInt((testw - w) * 0.5) + "px";
		mainvideotext.style.top = h + "px";
		mainvideotext.style.width = w + "px";
		mainvideotext.style.height = "30px";		
	}
}

function FormatTime(pSeconds)
{
	pSeconds = parseInt(pSeconds);
	if (pSeconds > 3600) { pSeconds = 3600; }
	return (parseInt(pSeconds / 60).toLocaleString()) + ":"
		+ "00".substr(1, 2 - ((pSeconds - parseInt(pSeconds / 60) * 60) + "").length)
		+ (pSeconds - parseInt(pSeconds / 60) * 60);
}

function VideoOpen(pGameName, pStartSeconds = 0)
{
	GameClose();   // Close Game
	document.getElementById(homeGameName + "text").style.display = "none";  // Close open pages, which removes vertical scrolling (VideoClose will bring them back)

	document.getElementById("mainvideo").style.display = "";
	let src = "https://www.youtube-nocookie.com/embed/" + gamesInfo[pGameName].videoid
	if (src.indexOf("?") == -1) { src += "?"; } else { src += "&"; }
	src += "autoplay=1&enablejsapi=1";
	if (pStartSeconds > 0) { src += "&start=" + pStartSeconds; }
	if (document.getElementById("mainvideo").src != src) { document.getElementById("mainvideo").src = src; }
	let innerHTML = "Moments";
	for (let index = 0; index < gamesInfo[pGameName].videomoments.length; index++)
	{
		innerHTML += " &nbsp;&nbsp; <A HRef='javascript:VideoSeekTo(" + gamesInfo[pGameName].videomoments[index] + ");'>" + FormatTime(gamesInfo[pGameName].videomoments[index]) + "</A>";
	}
	document.getElementById("mainvideotext").innerHTML = "<B>" + innerHTML + "</B>";
	
	document.getElementById("mainvideotext").style.display = "";	
	document.getElementById("VideoButtons").style.display = "";	

	videoState = 1;
	VideoResize();
}


function VideoClose()
{	
	if (videoState > 0)
	{
		videoState = 0;
		document.getElementById("mainvideo").style.display = "none";
		document.getElementById("mainvideo").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
		// document.getElementById("mainvideo").src = "";
		document.getElementById("mainvideotext").style.display = "none";	
		document.getElementById("VideoButtons").style.display = "none";	
	}
}

/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
function DropDownToggle(pEvent = null, pThis = "", pType = 0, pDisplay = "")
{
	// pType:   0:toggle   1:open   2:close
	// since part of event
	if (pThis == "") { pThis = this; } else { pThis = document.getElementById(pThis); }   // works because we used addEventListener, so this points to 
	console.assert(pThis != null, "DropDownToggle Error(): The element does not exist");
	
	// Changing CSS pseudo-elements is NASTY so instead ADD a second class that rotates the arrow in the first class. Sucks but works.
	let holdStyle = pThis.nextElementSibling.style;
	if (pType == 0)
	{
		// Toggle
		if (holdStyle.display == "none")
		{
			// Open
			pThis.classList.add("jimsectiondown");
			holdStyle.display = pDisplay;
		}
		else
		{
			// closed
			pThis.classList.remove("jimsectiondown");
			holdStyle.display = "none";
		}
	}
	else if (pType == 1)
	{
		// Force Open
		if (holdStyle.display == "none")
		{
			pThis.classList.add("jimsectiondown");
			holdStyle.display = pDisplay;
		}
	}
	else if (pType == 2)
	{
		// Force Close
		if (holdStyle.display != "none")
		{
			pThis.classList.remove("jimsectiondown");
			holdStyle.display = "none";
		}
	}
		
	if (pEvent) { pEvent.preventDefault(); pEvent.stopPropagation(); return false; }
}

function DropDownInitialize()
{
	var collection = document.getElementsByClassName("jimsection");

	for (let i = 0; i < collection.length; i++) {
		collection[i].addEventListener("click", DropDownToggle);
		// if click event already hooked, will not add TWO (thank god).
		// global event object is implicitly passed as first argument (by value hopefully?)
	}
}

/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
var SideNavState = 0;

function SideNavOpen(pEvent) {
	document.getElementById("mySidenav").style.display = "";
	SideNavState = 1;
	if (pEvent) { pEvent.preventDefault(); pEvent.stopPropagation(); return false; }
}

function SideNavClose(pEvent) {
	if (SideNavState != 0)
	{	
		document.getElementById("mySidenav").style.display = "none";
		SideNavState = 0;

		document.getElementById("mySidenavButton").style.opacity = 1;
		SideNavButtonFade();
	}
	if (pEvent) { pEvent.preventDefault(); pEvent.stopPropagation(); return false; }
}

function SideNavButtonFade() {
	let hold = parseFloat(document.getElementById("mySidenavButton").style.opacity);
	if (hold > 0.3)
	{
		document.getElementById("mySidenavButton").style.opacity = (hold - 0.01);
		setTimeout(SideNavButtonFade, 33);
	}
}

function SideNavInitialize() {
	let innerHTML = `
	<STYLE>
	.sidenav {
		position:fixed;
		left:0px;
		top:0px;
		width:300px;
		height:100%;
		background-color:#606060;
		overflow-y: scroll;
		padding:0px
		margin:0px;
		opacity:0.9
	}

	.sidenav .closebtn {
		position: absolute;
		top: 0;
		right: 25px;
		font-size: 36px;
		cursor:pointer;	
	}
	</STYLE>
	
	<DIV id='mySidenavButton' Style="position:fixed; left:10px; top:10px; min-height:110%; opacity:0.8;">
		<DIV Style="position:absolute; left:0px; top:0px; width:60px; height:60px; background-color:#ccccff; box-sizing:border-box; border:4px solid #666666;"></DIV>
		<DIV Style="position:absolute; left:11px; top:6px; font-size:42px; color:#000000;">&#9776;</DIV>
		<DIV Style="position:absolute; left:13px; top:8px; font-size:42px; color:#ffffff;">&#9776;</DIV>
		<DIV Style="position:absolute; left:0px; top:0px; width:60px; height:60px; cursor:pointer;" OnClick="SideNavOpen(event);"></DIV>
	</DIV>

	<div id="mySidenav" class="sidenav" style="display:none;" OnClick="event.stopPropagation();"><div Style="padding:10px 20px calc(100vh) 10px;">
		<A HRef='../index.htm' Style="font-weight:normal;font-size:11px;">back to bigpants</A><BR>
		<BR>
		<A HRef="index.html" Style="font-size:125%;"><B>HOME</B></A><BR>
		<BR>
`;

	for (var index = 0; index < gamesList.length; index++)
	{
		innerHTML += ''
			+ '<DIV Class="jimsection" id="' + gamesList[index] + '" OnClick="LoadScript1(event, \'' + gamesList[index] + '\');"> <B>' + (index + 1) + ' ' + gamesInfo[gamesList[index]].caption + '</B></DIV>'
			+ '<DIV id="' + gamesList[index] + 'list" Style="display:none;padding-left:20px;">loading...</DIV>';
	}

	innerHTML += `
		<DIV Style="color:#CCCCCC;">
			<B>CONTROLS</B><BR>
			<DIV Style="clear:both;"><DIV Style="float:left;width:80px;"><B>Esc</B></DIV><DIV Style="float:left;">Trs-80 Break</DIV></DIV>			
			<DIV Style="clear:both;"><DIV Style="float:left;width:80px;"><B>\\</B></DIV><DIV Style="float:left;">Trs-80 Clear</DIV></DIV>
			<DIV Style="clear:both;"><DIV Style="float:left;width:80px;"><B>Ctrl+P</B></DIV><DIV Style="float:left;">Pause</DIV></DIV>			
			<DIV Style="clear:both;"><DIV Style="float:left;width:80px;"><B>Ctrl+S</B></DIV><DIV Style="float:left;">Save</DIV></DIV>			
			<DIV Style="clear:both;"><DIV Style="float:left;width:80px;"><B>Ctrl+L</B></DIV><DIV Style="float:left;">Load</DIV></DIV>
			<DIV Style="clear:both;"><DIV Style="float:left;width:80px;"><B>Ctrl+C</B></DIV><DIV Style="float:left;">Copy</DIV></DIV>
			<DIV Style="clear:both;"><DIV Style="float:left;width:80px;"><B>Ctrl+V</B></DIV><DIV Style="float:left;">Paste</DIV></DIV>
			<DIV Style="clear:both;"></DIV>
		</DIV>

		<a OnClick="SideNavClose(event);" class="closebtn">&times;</a>
	</div></div>
		`;

		var elemDiv = document.createElement('div');
		elemDiv.innerHTML = innerHTML;
		document.body.appendChild(elemDiv);	
		
		SideNavButtonFade();
	}

/* --------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------- */
var homeGameName = "MAIN";

var paramsTempGameName = urlSearchParams.get("gameName");
var paramsTempGameLevelIndex = 0;   // default to home page
if (urlSearchParams.get("gameLevelIndex") != null) { paramsTempGameLevelIndex = parseInt(urlSearchParams.get("gameLevelIndex")); }

var gamesListSave = [];
var gameName = "";
var gameEverything = null;

var appState = 0;  // 0-No Emulator   1-Emulator Running
var gameState = 0;   // 0:Uninitialized   1:Game Paused   2:Game Playing

var loadRememberGameType = 0;   // 0-gamesList   1-gamesListSave
var loadRememberGameListIndex = -1;

function LoadFull(pGameName, pPageIndex)
{
	homeGameName = pGameName;
	let url = "index.html?gameName=" + homeGameName;
	if (pPageIndex > 0) { url += "&gameLevelIndex=" + pPageIndex; }
	window.history.replaceState(null, "", url);
	window.scrollTo(0, 0);
	document.body.style.backgroundImage = "url('" + gamesInfo[homeGameName].backgroundImage + "')";

	// Sync SideNav with Game
	LoadScript1(null, homeGameName);
	DropDownToggle(null, homeGameName, 1);
}

function LoadHome(pGameName, pFull = true)
{
	GameClose();
	VideoClose();
	document.getElementById(homeGameName + "text").style.display = "none";

	document.getElementById(pGameName + "text").style.display = "";
	if (pFull) { LoadFull(pGameName, 0); }

	SideNavClose();
}

function LoadVideo(pGameName, pFull = true, pSeconds = 0)
{
	GameClose();
	// VideoClose();
	document.getElementById(homeGameName + "text").style.display = "none";

	VideoOpen(pGameName, pSeconds);
	if (pFull) { LoadFull(pGameName, 1); }

	SideNavClose();
}

function LoadGamesList(pGameName, pGamesListIndex, pFull = true)
{
	// GameClose();
	VideoClose();
	document.getElementById(homeGameName + "text").style.display = "none";

	gameName = pGameName;
	loadRememberGameType = 0;
	loadRememberGameListIndex = pGamesListIndex;
	gameEverything = gamesList[gameName][pGamesListIndex];   // Horrible Dependency: Script MUST be loaded by LoadScript1
	resetgame1();   // does VideoClose and homeGameName.display = "none"
	if (pFull) { LoadFull(gameName, pGamesListIndex + 2); }

	SideNavClose();
}

function LoadGamesListSave(pGameName, pGamesListSaveIndex, pFull = true)
{
	// GameClose();
	VideoClose();
	document.getElementById(homeGameName + "text").style.display = "none";

	gameName = pGameName;
	loadRememberGameType = 1;
	loadRememberGameListIndex = pGamesListSaveIndex;
	gameEverything = gamesListSave[gameName][pGamesListSaveIndex];
	resetgame1();   // does VideoClose and homeGameName.display = "none"
	if (pFull) { LoadFull(gameName, 0); }   // no gameLevelIndex because we can't share LOCAL saves

	SideNavClose();
}

function GameClose()
{
	if (appState > 1)
	{
		trsEmu.run("stop");
		document.getElementById("maincanvas").style.display = "none";
		document.getElementById("Buttons").style.display = "none";
		appState = 1;
		gameState = 0;
		gameName = "";
	}
}

var soundInit = 0;
function resetgame1()
{
	console.assert(gameName != "", "ResetGame1() Error: gameName = \"\"");
	// enable sound on mobile
	if (soundInit == 0)
	{
		// mobile safari refuses to play sound without a user interaction
		// user has clicked to get here, so play a sound (before trsEmu initializes) so mobile allows sound.
		// while needless for desktop, it's harmless so I'm keeping it.
		var audio = new Audio('sound-silence.mp3');
		audio.play();
		audio.addEventListener("ended", function() { soundInit = 1; window.setTimeout("resetgame2();", 100); });  // don't call resetgame2 directly, give mobile browser time to approve sound
	}
	else
	{
		resetgame2();
	}
}

function resetgame2()
{
	console.assert(gameName != "", "ResetGame2() Error: gameName = \"\"");

	// install the TRSEmu emulator (sets up sound, so mobile better allow it)
	// cannot initilaize trsemu-1.5.js in SCRIPT or Body.OnLoad
	// 1. user must interact with browser BEFORE trsemu-1.5.js can initilaize audio
	// 2. trsemu-1.5.js also needs body fully loaded
	if (typeof trsEmu == 'undefined')
	{
		var newScript1 = document.createElement("script");
		newScript1.src = "trsemu-1.6.js?cachebreaker=" + configCacheBreaker;
		newScript1.addEventListener("load", function() { window.setTimeout("resetgame3();", 100); });   // done't call resetgame3 directly, give browser + TRSEmu script time to do a few things first
		document.body.appendChild(newScript1);   // actually loads the script, triggering the above load event
	}
	else
	{
		resetgame3();
	}
}

function resetgame3()
{
	console.assert(gameName != "", "ResetGame3() Error: gameName = \"\"");

	VideoClose();
	document.getElementById(homeGameName + "text").style.display = "none";   // can't show Home page because that causes vertical scroll

	if (appState < 1) { appState = 1; }   // trsEMU has successfully been initialized
	trsEmu.screen('scrn').button('btn').perf('graph').focus();   // not currently able to remove this

	// a game is active and paused, toggle back to play
	if (gameState == 1) { ButtonPauseOnClick(); }
	if (trsEmu.getFastForward() != 1) {
		trsEmu.setFastForward(1);
		document.getElementById("ButtonFastText").innerHTML = "<B>1X</B>";
	}
	
	// fresh load of actual command file (once snapshots are created, this is no longer necessary BUT I hate to remove functionality)
	if (gameEverything.PC == -1)
	{
		trsEmu.run(gamesList[gameName + "LOAD"]);
		// if we were to try a trsEmu.set right here it would NOT work, would have to fire with a timer. window.setTimeout("resetgame3();", 1000);
		appState = 2;
	}
	// if emulator is already running with >something<, then it can take anything
	else if (appState == 2)
	{
		trsEmu.set(gameEverything);	
	}
	// emulator not running so start it then feed it the game
	else
	{		
		trsEmu.run('');  
		trsEmu.set(gameEverything);	
		appState = 2;
	}		
	
	document.getElementById("maincanvas").style.display = "";
	gameState = 2;   // game is active and running
	document.getElementById("Buttons").style.display = "";
}


function LoadPage(pGameName, pPageIndex = 0, pFull = false)
{
	if (pPageIndex == 0)
	{
		LoadHome(pGameName, pFull);
	}
	else if (pPageIndex == 1)
	{
		LoadVideo(pGameName, pFull);
	}
	else if (pPageIndex < 2 + gamesList[pGameName].length)
	{
		LoadGamesList(pGameName, pPageIndex - 2, pFull);
	}
	else
	{
		// This should NEVER happen. Means we're providing links to LOCAL SAVED GAMES.
		LoadGamesListSave(pGameName, pPageIndex - 2 - gamesList[pGameName].length, pFull);
	}		
}

function LoadScript1(pEvent = null, pGameName = "", pPageIndex = -1, pFull = true)
{	
	if ((pPageIndex > -1) && (pPageIndex < 2)) { LoadPage(pGameName, pPageIndex, pFull); }

	if (typeof gamesList[pGameName] == 'undefined')
	{
		let js = document.createElement("script");
		js.id = pGameName + "-script";
		js.src = "game-" + pGameName + ".js?cachebreaker=" + configCacheBreaker;
		js.addEventListener("load", function() { LoadScript2(pGameName, pPageIndex, pFull); });	
		document.head.appendChild(js);
	}
	else
	{
		LoadScript2(pGameName, pPageIndex, pFull);
	}
	
	if (pEvent) { pEvent.preventDefault(); pEvent.stopPropagation(); return false; }	
}

function LoadScript2(pGameName, pPageIndex, pFull)
{	
	let innerHTML = "";
	
	innerHTML += '<DIV Style="padding-bottom:10px;"><B><A HREF="javascript:LoadHome(\'' + pGameName + '\');">Home</A></B></DIV>';
	innerHTML += '<DIV Style="padding-bottom:10px;"><B><A HREF="javascript:LoadVideo(\'' + pGameName + '\');">Video</A></B></DIV>';

	let startIndex = 1; if (configDebug) { startIndex = 0; }
	for (var index = startIndex; index < gamesList[pGameName].length; index++)
	{
		innerHTML += '<DIV Style="padding-bottom:10px;"><A HREF="javascript:LoadGamesList(\'' + pGameName + '\',' + index + ');"><B>' + gamesList[pGameName][index].gameTitle + '</B></A></DIV>';
	}

	gamesListSave[pGameName] = [];
	let hold = null;
	for (var index = 0; index < 3; index++)
	{
		hold = null;
		hold = localStorage.getItem(pGameName + index);
		if (hold == null)
		{
			gamesListSave[pGameName][index] = null;
			innerHTML += '<DIV Style="padding-bottom:10px;">Empty</DIV>';
		}
		else
		{
			gamesListSave[pGameName][index] = JSON.parse(hold);
			innerHTML += '<DIV Style="padding-bottom:10px;"><A HREF="javascript:LoadGamesListSave(\'' + pGameName + '\',' + index + ');"><B>' + gamesListSave[pGameName][index].gameTitle + '</B></A></DIV>';
		}
	}

	document.getElementById(pGameName + "list").innerHTML = innerHTML + "<BR>";

	if (pPageIndex > 1) { LoadPage(pGameName, pPageIndex, pFull); }
}

function ButtonPauseOnClick()
{
	if (typeof trsEmu != 'undefined')
	{
		trsEmu.run("toggle");
		if (gameState == 2)
		{
			// Pause
			document.getElementById("ButtonPauseText").innerHTML = "<B>&gt;</B>";
			gameState = 1;
		}
		else
		{
			// Play
			document.getElementById("ButtonPauseText").innerHTML = "<B>ll</B>";
			gameState = 2;
		}
	}
}

function ButtonFastOnClick()
{
	if (typeof trsEmu != 'undefined')
	{
		if (trsEmu.getFastForward() == 1)
		{
			trsEmu.setFastForward(5);
			document.getElementById("ButtonFastText").innerHTML = "<B>5X</B>";
		}
		else if (trsEmu.getFastForward() == 5)
		{
			trsEmu.setFastForward(0.5);
			document.getElementById("ButtonFastText").innerHTML = "<B>Half</B>";
		}
		else
		{
			trsEmu.setFastForward(1);
			document.getElementById("ButtonFastText").innerHTML = "<B>1X</B>";
		}
	}
}

function ButtonSaveOnClick()
{
	trsEmu.keyclearall();
	var hold = trsEmu.get();   // makes a COPY of the current game state

	hold.gameName = gameName;
	hold.gameDate = new Date().toString();   // Tue Aug 19 1975 23:15:30 GMT-0400 (Eastern Daylight Time)   // Convert back to Date by doing new Date(string);
	hold.gameTitle = new Date().toLocaleString(); // "forthcoming";

	for (var index = 0; index < gamesListSave[gameName].length - 1; index++)
	{
		gamesListSave[gameName][index] = gamesListSave[gameName][index + 1];
	}
	gamesListSave[gameName][gamesListSave[gameName].length - 1] = hold;
	
	loadRememberGameType = 1;
	loadRememberGameListIndex = gamesListSave[gameName].length - 1;

	var success = false;
	for (var index = 0; index < 3; index++)
	{
		if (gamesListSave[gameName][index] != null)
		{
			try
			{
				var holdS = JSON.stringify(gamesListSave[gameName][index]);
				console.log("SAVED " + hold.gameName + " : " + hold.gameTitle);
				console.log(holdS);
				localStorage.setItem(gameName + index, JSON.stringify(gamesListSave[gameName][index]));
				success = true;
			}
			catch ({ name, message })
			{
				alert("Unexpected Error Saving: " + gameName + index + "\nconsole window has preserved save information. Copy and paste locally.\n" + name + "\n" + message);
				success = false;
			}						
		}
	}				
	LoadScript1(null, gameName);   // Refresh Navigation to show latest Save
	MessageDisplay("<B>SAVE</B>", "#FF0000");
}

function ButtonLoadOnClick()
{
	// Paste may have obliterated gameEverything, so grab it again.
	trsEmu.keyclearall();
	if (loadRememberGameType == 1)
	{
		gameEverything = gamesListSave[gameName][loadRememberGameListIndex];
	}
	else
	{
		gameEverything = gamesList[gameName][loadRememberGameListIndex];
	}
	resetgame1();	
	MessageDisplay("<B>LOAD</B>", "#FFFF00");
}

function ParamGameStart()
{
	document.removeEventListener("click", ParamGameStart);
	document.removeEventListener("keyup", ParamGameStart);	
	document.removeEventListener("touchstart", ParamGameStart);
	document.getElementById("PARAMtext").style.display = "none";

	DropDownToggle(null, paramsTempGameName);
	LoadScript1(null, paramsTempGameName, paramsTempGameLevelIndex);   // brings in the SCRIPT and then launches the game
	paramsTempGameName = "";
	paramsTempGameLevelIndex = -1;
}

function BodyOnLoad()
{
	if (paramsTempGameName != null)
	{
		if (paramsTempGameLevelIndex > 1)
		{
			// URL links to game, need player to display "Click Something" window so player gets sound
			document.getElementById("PARAMtext").style.display = "";
			document.addEventListener("click", ParamGameStart, {once : true});
			document.addEventListener("keyup", ParamGameStart, {once : true});	
			document.addEventListener("touchstart", ParamGameStart, {once : true});
		}
		else
		{
			// Home Page or Video, player does NOT need to click.
			ParamGameStart();
		}
	}
}

function MessageDisplay(pInnerHTML, pColor)
{
	var testw = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
	testw = parseFloat(testw);

	var testh = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
	testh = parseFloat(testh);

	let message = document.getElementById("message");
	message.style.left = "0px";
	message.style.top = "0px";
	message.style.width = testw + "px";
	message.style.height = testh + "px";
	
	message.style.backgroundColor = pColor + "50";   // opacity
	message.style.color = pColor;
	message.style.fontSize = "150px";
	message.style.opacity = 1;

	message.innerHTML = "<DIV Style='padding-top:10%'>" + pInnerHTML + "</DIV>";
	
	message.style.display = "";
	MessageTimer();
}

function MessageTimer()
{
	let hold = parseFloat(document.getElementById("message").style.opacity);
	if (hold > 0)
	{
		hold -= 0.04;
		if (hold <= 0)
		{
			document.getElementById("message").style.display = "none";
		}
		else
		{
			document.getElementById("message").style.opacity = hold;
			setTimeout(MessageTimer, 33);
		}
	}
}

function BodyOnCopy(event)
{
	if (appState == 2)
	{
		if (typeof trsEmu != 'undefined')
		{
			MessageDisplay();			
			trsEmu.keyclearall();
			var hold = trsEmu.get();   // makes a COPY of the current game state
			hold.gameName = gameName;
			hold.gameDate = new Date().toString();   // Tue Aug 19 1975 23:15:30 GMT-0400 (Eastern Daylight Time)   // Convert back to Date by doing new Date(string);
			hold.gameTitle = new Date().toLocaleString(); // "forthcoming";

			var holdS = JSON.stringify(hold);
			// var holdS = encodeURIComponent(JSON.stringify(hold));
			event.clipboardData.setData("text/plain", holdS);
			console.log("COPIED " + hold.gameName + " : " + hold.gameTitle);
			console.log(holdS);

			MessageDisplay("<B>COPY</B>", "#FF0000");
		}

		event.preventDefault();
		event.stopPropagation();
		return false;
	}
}


function BodyOnPaste(event)
{	
	let holdClipboardData = (event.clipboardData || window.clipboardData).getData("text");
	if (holdClipboardData != null) 
	{
		let holdClipboardDataTrim = holdClipboardData.trim();
		if (holdClipboardDataTrim != "")
		{
			try
			{
				gameEverything = JSON.parse(holdClipboardDataTrim);
				if (typeof gameEverything.gameName != 'undefined')
				{	
					LoadHome(gameEverything.gameName, true);
					gameName = gameEverything.gameName;
					resetgame1();
					
					MessageDisplay("<B>PASTE</B>", "#FFFF00");
					
					event.preventDefault();
					event.stopPropagation();	
					return false;
				}
			}
			catch { }			
		}
		
		// Player didn't paste a game, so pass the paste into trsEMU which turns them into keystrokes
		if (trsEmu) { trsEmu.keyBufferAdd(holdClipboardData); }
	}

	event.preventDefault();
	event.stopPropagation();	
	return false;
}

window.addEventListener("DOMContentLoaded", SideNavInitialize);
window.addEventListener("DOMContentLoaded", DropDownInitialize);
window.addEventListener("DOMContentLoaded", BodyOnLoad);
window.addEventListener("resize", VideoResize);
window.addEventListener("copy", BodyOnCopy);
window.addEventListener("paste", BodyOnPaste);
