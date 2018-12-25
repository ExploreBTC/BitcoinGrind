var s=[
"gin.htm",
"http://freebitco.in/?r=135139",
"http://dailybitcoins.org/index.php?aff=9fb5ef25df8f3dc11cbf6a7c967d235d",
"http://www.btcflow.net/",
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
"http://www.thebitcoin.me/?a=",
"http://www.greencoins.org/?a=",
"http://www.bitcoinspain.net/?a=",
"http://www.freebitcoins4u.com/?a=",
"http://hotswap.co/?id=369693",
"http://givemebtc.net/",
"http://multifauceted.com",
"http://www.rabbitcoin.tk",
"http://www.freakfaucet.com",
"http://faucet.galat.org",
"http://bitcoinflood.com/faucet/",
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
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
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