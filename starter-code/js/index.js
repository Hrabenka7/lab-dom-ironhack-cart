var calculatePriceButton = document.getElementById('calculate-button');
calculatePriceButton.addEventListener("click", getTotalPrices)

var deleteButtons = document.getElementsByClassName("btn btn-delete");
for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', deleteProduct);
}

var createButton = document.getElementsByClassName("btn btn-create")[0];
createButton.addEventListener("click", createProduct);



function getTotalPrices(){
  var ppuBubble = document.getElementsByClassName("pricePerUnit")[0].innerHTML;
  var quantityBubble = document.getElementsByClassName("input")[0].value;
  var ppuTshirt = document.getElementsByClassName("pricePerUnit")[1].innerHTML;
  var quantityTshirt = document.getElementsByClassName("input")[1].value;
  
  
  var totalBubble = ppuBubble * quantityBubble
  var totalTshirt = ppuTshirt * quantityTshirt
  var totalAll = totalBubble + totalTshirt


  var totalPriceBubble = document.getElementsByClassName("total")[0];
  totalPriceBubble.innerHTML = totalBubble;

  var totalPriceTshirt = document.getElementsByClassName("total")[1];
  totalPriceTshirt.innerHTML = totalTshirt;

  var totalPriceFinal = document.getElementsByClassName("totalFinal")[0]
  totalPriceFinal.innerHTML = totalAll;
  
}

function deleteProduct(e) {
  parentElement = e.currentTarget.parentElement.parentElement;
  childElement = e.currentTarget.parentElement;
  parentElement.removeChild(childElement);
}

// with ONCLICK
/*for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].onclick = function (e) {
    parentElement = e.currentTarget.parentElement.parentElement;
    childElement = e.currentTarget.parentElement;
    parentElement.removeChild(childElement);
  }
}*/


function createProduct() {
  var parentElement = document.getElementsByTagName('body')[0]; // get parent node
  var firstChild = document.getElementsByClassName('add-product')[0]; // get the "after" element

  var newDiv = document.createElement("div");
  newDiv.innerHTML = `<ul>
                        <li>Ironhack Sticker</li> 
                        <li>$<span class="pricePerUnit">1</span></li>
                        <li><label for="quantity">Quantity</label>
                            <input class="input" name="quantity-number" type="number" value="0"></li>
                         <li>$<span class="total">0.00</span></li>
                         <button class="btn btn-delete">Delete</button>
                      </ul>`
  parentElement.insertBefore(newDiv,firstChild);

}
