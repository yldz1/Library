//kütüphane sistemi yapalım kitap seçme alma olsun 
class library {
    constructor() {
        this.books = [];//kitaplarımı saklıycağımız dizi

    }
}
//yeni bir kitap eklemek için metot 
addBook(book){
    const existingBook = this.books.find(b => b.title === book.title);
    if (existingBook) {
        console.log(`"${book.title}" zaten kütüphane mevcut.`);

    } else {
        this.book.push(book);
        console.log(`"${book.title}" başarıyla eklendi.`);

    }
}
//kitap listesini göstemek için metot 
listBook(){
    if (this.books.lengh === 0) {
        console.log("kütüphanede hiç kitap yok");
        return;
    }
    console.log("\nKütüphanedeki kitaplar:");
    this.books.forEach(book => {
        console.log(`-${book.title}(${book.author}[${book.isBorrowed ? "ödünç alındı" : "Mevcut"}])`);

    });
}
//kitap ödünç alma metotu 
barrowBook(title){
    const book = this.books.find(b => b.title === title);
    if (!book) {
        console.log(`"${title}" kütüphanede bulunamadı.`);
    } else if (book.isBorrowed) {
        console.log(`"${title}" zaten ödünç alınmıştır.`);

    } else {
        book.isBorrowed = true;
        console.log(`"${title}" başarıyla ödünç alınmıştır.`);

    }
}

//kitapları iade etme metotu
returnBook(title){
    const book = this.books.find(b => b.title === title);
    if (!book) {
        console.log(`"${title} Kütüphanede bulunamadı.`);

    } else if (!book.isBorrowed) {
        console.log(`"${title} Kütüphanede bulunuyor.`);

    } else {
        book.isBorrowed = false;
        console.log(`"${title} Başarıyla iade edildi.`);
    }
}
//kitap sınıfı hangi katagoride olduğu mesela 
class Book {
    constructor(title, outhor) {
        this.title = title;//buraya kitap adı gelicek
        this.author = author;//yazar gelicek buraya 
        this.isBorrowed = false;//kitap ödünç alındımı yı kontrol edicek
    }
}
//kütüphaneyi başlatma 
const myLibrary = new library();
//kitap eklemek 
myLibrary.addBook(new Book("Küçük prens", "Antonia de Saint"));
myLibrary.addBook(new Book("1997", "Georgeo owwel"));
myLibrary.addBook(new Book("Sefiller", "Victory hugo"));

//kitapları listelemek için şunu yapalım 
myLibrary.listBook();

//Kitaplarımı ödünç alma için bu kodu çalıştıralım 
myLibrary.barrowBook("1965");
myLibrary.listBook();//güncel listeyi göstermek için kullanılır.

//aynı kitabı tekrar ödünç alma için kullanılır 
myLibrary.barrowBook("1976");

//kitap iade etme için kullanılır 
myLibrary.returnBook("1876");
myLibrary.listBook();//kitabı listeleyip kontrol etmen gerek 

//olmayan kitabı iade etmeye çalışma 
myLibrary.returnBook("Harry Potter");

//yeni kitap eklemek
myLibrary.addBook(new Book("1987", "Taşuku Talat ve Fitnat"));
myLibrary.addBook(new Book("Şeker Portakalı", "Josep"));
myLibrary.listBook();



