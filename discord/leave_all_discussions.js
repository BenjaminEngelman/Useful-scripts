// Closes all the discussions in the Discord client.
// Open the console with Ctrl + Shitf + I

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var closeButtons = document.getElementsByClassName("close");
for(var i = 0; i < closeButtons.length; i++)
{
   closeButtons.item(i).click()
   sleep(600)

   var confirm_button = document.getElementsByClassName("button-38aScr lookFilled-1Gx00P colorRed-1TFJan sizeMedium-1AC_Sl grow-q77ONN")
   confirm_button.item(0).click()
}