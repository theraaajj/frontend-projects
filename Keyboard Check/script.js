const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
      <div class='color'>
      <table>
      <tr>
        <th>Key</th>
        <th>Key Code</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key}</td>    
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
      
    </table>
      </div>
    `
})       // window pe event listener lagaye kyuki kahi bhi click kare toh batana chahiye

// line 13 me sab sahi hai magar jab space press karoge toh key me kch likh kar nhi aata hai
// for that aise ternary operator use kar skte hain likhne ke liye!
// <td>${e.key === " " ? "Space" : e.key}</td>    

// keyCode ka toh itna jarurat bhi nahi padta hai, kyuki
// e.code se key ka direct naam hi mil jata hai na 