// This code can NEVER change because it gets cached

var configCacheBreaker = 31;   // Math.floor(Math.random() * 10000);
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
else
{
	window.history.replaceState(null, "", "index.html");   // don't want people copying cachebreaker parameter in URL, ironcially that will cause them to get a cached page
}

