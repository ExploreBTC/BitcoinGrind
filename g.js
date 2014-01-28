var adr,x=0,c = 59;
function address() {
adr=prompt('Enter your bitcoin address:');
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
i = prompt("Enter a number to skip to that faucet.");
x = 0;
while (i!=x) {
  if (x>c) {
  break;
  }
  x+=1;
}
changeSrc();
}
console.log(adr);
function changeSrc()
{
switch (x){
case 1:
document.getElementById("myframe").src="http://dailybitcoins.org/index.php?aff=9fb5ef25df8f3dc11cbf6a7c967d235d";
break;
case 2:
document.getElementById("myframe").src="http://freebitco.in/?r=135139";
break;
case 3:
document.getElementById("myframe").src="http://bitcoinfaucet.tk/?ref=1McYLx1YbnUZ5fRPw5Y24PBBQVutf89U6m";
break;
case 4:
document.getElementById("myframe").src="http://www.bitcoins4.me/";
break;
case 5:
document.getElementById("myframe").src="http://bitcoiner.net/";
break;
case 6:
document.getElementById("myframe").src="http://www.bitcointree.net/";
break;
case 7:
document.getElementById("myframe").src="http://www.btcflow.net/";
break;
case 8:
document.getElementById("myframe").src="http://hotswap.co/?id=369693";
break;
case 9:
document.getElementById("myframe").src="http://mmoclub.com/faucet";
break;
case 10:
document.getElementById("myframe").src="http://dailyfreebitcoin.com/?id=226530";
break;
case 11:
document.getElementById("myframe").src="http://btcfaucet.net/?id=92810";
break;
case 12:
document.getElementById("myframe").src="http://coinbooster.net/?id=99127";
break;
case 13:
document.getElementById("myframe").src="http://rainbow-btcfaucet.tk/?id=499";
break;
case 14:
document.getElementById("myframe").src="http://megabitcoinfaucet.com/?id=2227";
break;
case 15:
document.getElementById("myframe").src="http://bithunter.info/?id=28050";
break;
case 16:
document.getElementById("myframe").src="http://www.bitcoinfreefaucet.tk/?id=103623";
break;
case 17:
document.getElementById("myframe").src="http://www.coinfaucet.tk/?id=85285";
break;
case 18:
document.getElementById("myframe").src="http://www.thefreebitcoin.tk/?id=66880";
break;
case 19:
document.getElementById("myframe").src="http://www.freebitcoins.me/?a=" + adr;
break;
case 20:
document.getElementById("myframe").src="http://www.thefreebitcoins.com/?a=" + adr;
break;
case 21:
document.getElementById("myframe").src="http://www.srbitcoin.com/?a=" + adr;
break;
case 22:
document.getElementById("myframe").src="http://www.bitcats.net/?a=" + adr;
break;
case 23:
document.getElementById("myframe").src="http://www.canhasbitcoin.com/?a=" + adr;
break;
case 24:
document.getElementById("myframe").src="http://www.elbitcoingratis.es/?a=" + adr;
break;
case 25:
document.getElementById("myframe").src="http://www.rawbitcoins.com/?a=" + adr;
break;
case 26:
document.getElementById("myframe").src="http://www.fr33bitcoins.com/?a=" + adr;
break;
case 27:
document.getElementById("myframe").src="http://www.bitcoins4free.me/?a=" + adr;
break;
case 28:
document.getElementById("myframe").src="http://www.freebtc4all.com/?a=" + adr;
break;
case 29:
document.getElementById("myframe").src="http://www.virtualfaucet.com/?a=" + adr;
break;
case 30:
document.getElementById("myframe").src="http://www.faucetbtc.com/?a=" + adr;
break;
case 31:
document.getElementById("myframe").src="http://www.btc4you.com/?a=" + adr;
break;
case 32:
document.getElementById("myframe").src="http://www.nioctib.net/get-free-bitcoins/?a=" + adr;
break;
case 33:
document.getElementById("myframe").src="http://www.btcmine.net/?a=" + adr;
break;
case 34:
document.getElementById("myframe").src="http://www.thebitcoin.me/?a=" + adr;
break;
case 35:
document.getElementById("myframe").src="http://www.greencoins.org/?a=" + adr;
break;
case 36:
document.getElementById("myframe").src="http://www.bitcoinspain.net/?a=" + adr;
break;
case 37:
document.getElementById("myframe").src="http://www.freebitcoins4u.com/?a=" + adr;
break;
case 38:
document.getElementById("myframe").src="http://www.freebitcoinlottery.com/?a=" + adr;
break;
case 39:
document.getElementById("myframe").src="http://multifauceted.com";
break;
case 40:
document.getElementById("myframe").src="http://foxfaucet.com";
break;
case 41:
document.getElementById("myframe").src="http://www.rabbitcoin.tk";
break;
case 42:
document.getElementById("myframe").src="http://www.freakfaucet.com";
break;
case 43:
document.getElementById("myframe").src="http://www.hotbitcoins.me";
break;
case 44:
document.getElementById("myframe").src="http://www.hotbitcoin.me";
break;
case 45:
document.getElementById("myframe").src="http://nubtektrix.us";
break;
case 46:
document.getElementById("myframe").src="http://bitcoinblizzard.com/faucetsplash.php";
break;
case 47:
document.getElementById("myframe").src="http://superfaucet.com";
break;
case 48:
document.getElementById("myframe").src="http://www.megafaucet.com";
break;
case 49:
document.getElementById("myframe").src="http://grifobitcoin.com";
break;
case 50:
document.getElementById("myframe").src="http://funnyfaucet.com";
break;
case 51:
document.getElementById("myframe").src="http://bitcoinhahn.de";
break;
case 52:
document.getElementById("myframe").src="http://www.bitcrate.net/index.php?ref=3665";
break;
case 53:
document.getElementById("myframe").src="http://faucet.galat.org";
break;
case 54:
document.getElementById("myframe").src="http://bitcoinflood.com/faucet/";
break;
case 55:
document.getElementById("myframe").src="http://www.cleverpuffin.com/faucet/?id=19158";
break;
case 56:
document.getElementById("myframe").src="http://bitfirefaucet.com";
break;
case 57:
document.getElementById("myframe").src="http://microfaucet.microwallet.org";
break;
case 58:
document.getElementById("myframe").src="http://www.infinityfaucet.com/micro.php";
break;
case 59:
document.getElementById("myframe").src="http://www.minifrij.pw";
break;
}
}
function newTab() {
var win=window.open(document.getElementById("myframe").src, '_blank');
win.focus();
}