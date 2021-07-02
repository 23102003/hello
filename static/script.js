var counter = 0;
function add() {
    const ex = document.getElementById('ex');
    var itemn = document.getElementById('Item-name').value;
    var itemq = document.getElementById('Item-quantity').value;
    var itemu = document.getElementById('Quantity-unit').value;
    var itemd =document.getElementById('Discription').value;
    if(itemd.length&&itemn.length&&itemq!=NaN&&itemu)
    {
    if(itemd.length<45)
    {
        alert("Discription length should be minimum of 50 words");
    }
    else
    { counter++;
        var text = `<tr>
       <td  class="c${counter}">${counter}</td>
       <td>${itemn}</td>
       <td>${itemq}</td>
       <td>${itemu}</td>
       <td><details>
       <summary>${itemd.substr(0,30) + "...."}</summary>
       <p>${itemd}</p>
     </details></td>
       <td><button  id="c${counter}"  onclick="remove(this)">Remove-item</button></td>
   </tr>`;
    ex.insertAdjacentHTML("beforebegin", text);
    }
}
    else
    {
        alert("Enter All Details to ADD item in List");
    }
}
function remove(x) {
    var t = x.id;
    var inti = parseInt(t.substr(1, 1));
    while (inti < counter) {
        var s = ".c" + (inti + 1);
        var change = s.replace(inti + 1, inti).substr(1, 2);
        document.querySelectorAll(s)[0].innerText = inti;
        document.querySelectorAll(s)[0].className = change;
        document.getElementById(s.substr(1, 2)).id = change;
        inti++;
    }
    counter--;
    x.parentNode.parentNode.remove();
}
document.getElementById('ct').addEventListener("click",clear);
function clear(){
    if(confirm("To Clear the List press OK"))
    {
    inti=1;
    while (inti <= counter) {
        var s =".c" +inti;
        document.querySelectorAll(s)[0].parentNode.remove();
        inti++;
    }
    counter=0;
    }
}
document.getElementById('submit').addEventListener("click",valid);
function valid(){
    if(counter<=0)
    {
        alert("To proceed Add Items in The list");
        return false;
    }
    else
    document.getElementById("Add-item").submit();
}