function search(){
    query = document.getElementById("searchbar").value;
    url = "https://oceanhero.today/web?q=" + query;
    window.open(url);
}