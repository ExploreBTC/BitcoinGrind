BitcoinGrind
============

This is a bitcoin faucet rotator.
More info on Bitcoin:
http://bitcoin.org/en/you-need-to-know

This rotator completely runs off of javascript and includes several features such as jumping, linking, reloading, and auto-fill-in's, in addition to previous and next page buttons.

You can easily add/remove faucets by modifying the URL's within the array. Follow the same syntax, and make sure to strip the URL of all query strings.

Just embed the javascript file into your html webpage and add the buttons to utilize it. Use the attribute:
onClick="function()"
Replace function() with either next(), prev(), jumpTo(), or link(). Reload is done with changeSrc().

All the javascript does is change the src attribute of an iFrame element with an id of "fm". 

To test it out:
http://bitcoingrind.netne.net

Donations:1McYLx1YbnUZ5fRPw5Y24PBBQVutf89U6m
