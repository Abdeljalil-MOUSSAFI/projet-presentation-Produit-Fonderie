/*Base de donnée de les produits pour chaque catégore*/
let listBson=[
  {
    id:"0",
    titre:"Pont Bascule",
    img1:"img/produits/pont bascule/p1.webp",
    img2:"img/Produits/pont bascule/p2.webp",
    img3:"img/Produits/pont bascule/p3.png"
  },
  {
    id:"1",
    titre:"Poids",
    img1:"img/produits/poids/p1.jpg",
    img2:"img/Produits/poids/p2.jpg",
    img3:"img/Produits/poids/p4.jpg",
    img4:"img/Produits/poids/p5.jpg",
    img5:"img/Produits/poids/p6.jpg",
    img6:"img/produits/poids/p7.png",
    img7:"img/produits/poids/p8.jpg"
  },
  {
    id:"2",
    titre:"Indicateur",
    img1:"img/produits/indicateur/p1.jpg",
    img2:"img/Produits/indicateur/p3.jfif",
    img3:"img/Produits/indicateur/p4.png",
    img4:"img/Produits/indicateur/p5.jpg",
    img5:"img/Produits/indicateur/p6.jpg",
    img6:"img/produits/indicateur/p7.jpg"
  },
  {
    id:"3",
    titre:"Capteur",
    img1:"img/produits/capteur/p1.webp",
    img2:"img/Produits/capteur/p2.jpg",
    img3:"img/Produits/capteur/p4.jfif",
    img4:"img/Produits/capteur/p5.jpg",
    img5:"img/Produits/capteur/p6.jpg",
    img5:"img/Produits/capteur/p7.jpg"
  },
  {
    id:"4",
    titre:"Balance",
    img1:"img/produits/balance/p1.jpg",
    img2:"img/Produits/balance/p2.jpg",
    img3:"img/Produits/balance/p3.jpg",
    img4:"img/Produits/balance/p4.jpg",
    img5:"img/Produits/balance/p5.jpg",
    img6:"img/produits/balance/p6.jpg",
    img7:"img/Produits/balance/p7.jpg",
    img8:"img/Produits/balance/p9.jpg"
  },
  {
    id:"5",
    titre:"Accesoire",
    img1:"img/produits/accesoire/p1.jpg",
    img2:"img/Produits/accesoire/p2.jfif",
    img3:"img/Produits/accesoire/p3.jfif",
    img4:"img/Produits/accesoire/p4.jfif"
  },
  {
    id:"6",
    titre:"Mecanique",
    img1:"img/produits/Mecanique/p1.jpg",
    img2:"img/Produits/Mecanique/p3.jpg",
    img3:"img/Produits/Mecanique/p4.jpg",
    img4:"img/Produits/Mecanique/p5.jpg",
    img5:"img/Produits/Mecanique/p6.jpg",
    img6:"img/produits/Mecanique/p7.jpg"
  }
];

$(document).on('click','.Produit',function(){
      $("#imgProduit1").attr("src","img/defaultimg.PNG");
      $("#imgProduit2").attr("src","img/defaultimg.PNG");
      $("#imgProduit3").attr("src","img/defaultimg.PNG");
      $("#imgProduit4").attr("src","img/defaultimg.PNG");
      $("#imgProduit5").attr("src","img/defaultimg.PNG");
      $("#imgProduit6").attr("src","img/defaultimg.PNG");
      $("#imgProduit7").attr("src","img/defaultimg.PNG");
      $("#imgProduit8").attr("src","img/defaultimg.PNG");
      let idp=this.getAttribute('data-id');
      let product=listBson[idp];
      $(".modal-title").text(product["titre"]);
      $("#imgProduit1").attr("src",(product["img1"]));
      $("#imgProduit2").attr("src",(product["img2"]));
      $("#imgProduit3").attr("src",(product["img3"]));
      $("#imgProduit4").attr("src",(product["img4"]));
      $("#imgProduit5").attr("src",(product["img5"]));
      $("#imgProduit6").attr("src",(product["img6"]));
      $("#imgProduit7").attr("src",(product["img7"]));
      $("#imgProduit8").attr("src",(product["img8"]));
      $('#exampleModal').modal("show");
      
})





