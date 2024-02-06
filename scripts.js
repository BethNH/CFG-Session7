function bookSuggestion(){
    let bookName = document.getElementById('bookInput').value;
    if (bookName == null || bookName == "") {
        alert('Please enter the title of a book.')
    } else {
        alert("Thanks for suggesting " + bookName + ", I'll add it to my TBR list!");
    }
}