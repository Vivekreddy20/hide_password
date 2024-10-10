let pass=document.getElementById("password");
let img=document.getElementById("img");
let board=document.getElementById("board");
img.addEventListener('click',()=>{
   if(pass.type == 'password')
   {
    pass.type='text';
    img.src="view.png";
    board.classList.add("night");
   }
    else{
        pass.type="password";
        img.src="hide.png";
        board.classList.remove("night");
    }
})