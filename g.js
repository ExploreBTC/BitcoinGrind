var s=[
"gin.htm",
"http://freebitco.in/?r=135139",
"http://dailybitcoins.org/index.php?aff=9fb5ef25df8f3dc11cbf6a7c967d235d",
"http://bitcoinfaucet.tk/?ref=1McYLx1YbnUZ5fRPw5Y24PBBQVutf89U6m",
"http://www.bitcoins4.me/",
"http://bitcoiner.net/",
"http://www.btcflow.net/",
"http://hotswap.co/?id=369693",
"http://mmoclub.com/faucet",
"http://bithunter.info/?id=28050",
"http://btcfaucet.net/?id=92810",
"http://www.minifrij.pw",
"http://megabitcoinfaucet.com/?id=2227",
"http://www.8coin.me/?r=7T8dOw&a=",
"http://www.bbitcoin.me/?r=7T8dOw&a=",
"http://www.bitcoinfaucet.me/?r=7T8dOw&a=",
"http://www.bitcurl.me/?r=7T8dOw&a=",
"http://www.btcalot.com/?r=7T8dOw&a=",
"http://www.btcrew.com/?r=7T8dOw&a=",
"http://www.coinpearl.me/?r=7T8dOw&a=",
"http://www.earnbtc.me/?r=7T8dOw&a=",
"http://www.earn-free-bitcoins.com/?r=7T8dOw&a=",
"http://www.freebitcoinsfast.com/?r=7T8dOw&a=",
"http://www.freebitcoin.mobi/?r=7T8dOw&a=",
"http://www.freebitcoin.ws/?r=7T8dOw&a=",
"http://www.freecoinbit.com/?r=7T8dOw&a=",
"http://www.getbitcoinsquick.com/?r=7T8dOw&a=",
"http://www.raincoins.net/?r=7T8dOw&a=",
"http://www.smurfcoin.com/?r=7T8dOw&a=",
"http://www.freebitcoins.me/?a=",
"http://www.thefreebitcoins.com/?a=",
"http://www.srbitcoin.com/?a=",
"http://www.bitcats.net/?a=",
"http://www.canhasbitcoin.com/?a=",
"http://www.elbitcoingratis.es/?a=",
"http://www.rawbitcoins.com/?a=",
"http://www.fr33bitcoins.com/?a=",
"http://www.bitcoins4free.me/?a=",
"http://www.freebtc4all.com/?a=",
"http://www.virtualfaucet.com/?a=",
"http://www.faucetbtc.com/?a=",
"http://www.btc4you.com/?a=",
"http://www.nioctib.net/get-free-bitcoins/?a=",
"http://www.btcmine.net/?a=",
"http://www.thebitcoin.me/?a=",
"http://www.greencoins.org/?a=",
"http://www.bitcoinspain.net/?a=",
"http://www.freebitcoins4u.com/?a=",
"http://www.freebitcoinlottery.com/?a=",
"http://multifauceted.com",
"http://foxfaucet.com",
"http://www.cleverpuffin.com/faucet/?id=19158",
"http://www.rabbitcoin.tk",
"http://www.freakfaucet.com",
"http://www.hotbitcoins.me",
"http://www.hotbitcoin.me",
"http://nubtektrix.us",
"http://bitcoinblizzard.com/faucetsplash.php",
"http://superfaucet.com",
"http://www.megafaucet.com",
"http://grifobitcoin.com",
"http://funnyfaucet.com",
"http://bitcoinhahn.de",
"http://faucet.galat.org",
"http://bitcoinflood.com/faucet/",
"http://bitfirefaucet.com",
"http://www.bitcrate.net/index.php?ref=3665"
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c)
  {
  x=1;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<1)
  {
  x=c;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
