const time = document.querySelector(`.clock`);

const tick = ()=> {

    const now = new Date();

    
    



    let h = now.getHours();

    
if (h > 12) {
    h -=12;
} else if (h === 0) {
   h = 12;
}

console.log(h)

    const m = now.getMinutes();
    const s = now.getSeconds();


    const html = `
    <span> ${h}</span> : 
    <span> ${m}</span> : 
    <span> ${s}</span>

    `;

   
time.innerHTML = html;
};

setInterval(tick, 800);
