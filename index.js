function removeAllProducts() {
    var productElements = $('.remove');
    
    productElements.each(function() {
      var productId = $(this).attr('productId');
      zid.store.cart.removeProduct(productId);
    });
  
    $.toast({
      heading: 'Success',
      text: 'تم حذف جميع المنتجات بنجاح',
      icon: 'success',
      position: 'top-right',
    });
  
    // Optionally, you can call fetchCart() here to update the cart after removing all products
     fetchCart();
  }
  
  // Call the function to remove all products
  removeAllProducts();
  