function browse(){
    let fileInput = document.getElementById('fileInput');
    
    fileInput.click();

    fileInput.addEventListener('change', function(){

        let file = fileInput.files[0];

        let msg = document.getElementById('msg');

        msg.textContent =`Selected: ${file.name}`;

        msg.style.padding = '10px';

    });
    
}