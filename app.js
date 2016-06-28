function Car(make, model, year, color, rating, price) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.rating = rating;
  this.price = price;
}

var carArray = [];
var timesSubmit = 0;
var totalPrice = 0;
$(function() {

  $('#carForm').on('submit', function(event) {
    event.preventDefault();
    timesSubmit++;
    var tempMake = $('#make').val();
    var tempModel = $('#model').val();
    var tempYear = $('#year').val();
    var tempColor = $('#color').val();
    var tempRating = $('input:radio[name=rating]:checked').val();
    // var tempRating = $('#rating').val();
    var tempPrice = $('#price').val();

    if (tempPrice > 0) {
      totalPrice += parseInt(tempPrice);
    }

    $('#totalPrice').html(totalPrice.toLocaleString('en-US',{style: 'currency', currency: 'USD'}));
    carArray.push(new Car(tempMake, tempModel, tempYear, tempColor, tempRating, tempPrice));
    var ratingColor = '';
    switch (tempRating) {
      case '1':
        ratingColor = 'red';
        break;
      case '2':
        ratingColor = 'orange';
        break;
      case '3':
        ratingColor = 'yellow';
        break;
      case '4':
        ratingColor = 'blue';
        break;
      case '5':
        ratingColor = 'green';
        break;
    }
    var costAsCurrency = parseInt(carArray[timesSubmit-1].price).toLocaleString('en-US',{style: 'currency', currency: 'USD'});
    $('.carsList').append('<div class="car '+ ratingColor +'">\n' +
                          '<div class="remove">' +
                            '[ X ]' +
                          '</div>' +
                          '<h4 class="car-title">Car ' + carArray.length + '</h4>' +
                            '<ul>' +
                              '<li>Make: ' + carArray[timesSubmit-1].make  + '</li>' +
                              '<li>Model: ' + carArray[timesSubmit-1].model  + '</li>' +
                              '<li>Year: ' + carArray[timesSubmit-1].year  + '</li>' +
                              '<li>Color: ' + carArray[timesSubmit-1].color  + '</li>' +
                              '<li>Customer Rating: ' + carArray[timesSubmit-1].rating  + '</li>' +
                              '<li data-price=' + parseInt(tempPrice) + '>Price: ' + costAsCurrency  + '</li>' +
                            '</ul>' +
                          '</div>');
    $('form').trigger('reset');
  });

  $('.carsList').on('click', '.remove', function() {
    $(this).parent().remove();
    var removedPrice = $(this).parent().find('ul').find('li:nth-child(6)').data('price');
    if (removedPrice > 0) {
      totalPrice -= removedPrice;
    }

    console.log(totalPrice);
    $('#totalPrice').html(totalPrice.toLocaleString('en-US',{style: 'currency', currency: 'USD'}));
  })

  $('#sort').on('click',function() {
    carArray.sort(function(a, b) {
      var a1 = a.make.toLowerCase(), b1 = b.make.toLowerCase();
      if(a1== b1) return 0;
      return a1> b1? 1: -1;
    });
    $('.car').remove();
    totalPrice = 0;
    for (var i = 0; i < carArray.length; i++) {


    var tempMake = carArray[i].make;
    var tempModel = carArray[i].model;
    var tempYear = carArray[i].year;
    var tempColor = carArray[i].color;
    var tempRating = carArray[i].rating;
    // var tempRating = $('#rating').val();
    var tempPrice = carArray[i].price;

    var ratingColor = '';
    switch (tempRating) {
      case '1':
        ratingColor = 'red';
        break;
      case '2':
        ratingColor = 'orange';
        break;
      case '3':
        ratingColor = 'yellow';
        break;
      case '4':
        ratingColor = 'blue';
        break;
      case '5':
        ratingColor = 'green';
        break;
    }

    var costAsCurrency = parseInt(carArray[i].price).toLocaleString('en-US',{style: 'currency', currency: 'USD'});
    $('.carsList').append('<div class="car '+ ratingColor +'">\n' +
                          '<div class="remove">' +
                            '[ X ]' +
                          '</div>' +
                          '<h4 class="car-title">Car ' + (i+1) + '</h4>' +
                            '<ul>' +
                              '<li>Make: ' + carArray[i].make  + '</li>' +
                              '<li>Model: ' + carArray[i].model  + '</li>' +
                              '<li>Year: ' + carArray[i].year  + '</li>' +
                              '<li>Color: ' + carArray[i].color  + '</li>' +
                              '<li>Customer Rating: ' + carArray[i].rating  + '</li>' +
                              '<li data-price=' + parseInt(tempPrice) + '>Price: ' + costAsCurrency  + '</li>' +
                            '</ul>' +
                          '</div>');
          if (tempPrice > 0) {
            totalPrice += parseInt(tempPrice);
          }

        }


        $('#totalPrice').html(totalPrice.toLocaleString('en-US',{style: 'currency', currency: 'USD'}));


    console.log(carArray);
  });

  $('.clearList').on('click',function() {
    carArray.sort(function(a, b) {
      var a1 = a.make.toLowerCase(), b1 = b.make.toLowerCase();
      if(a1== b1) return 0;
      return a1> b1? 1: -1;
    });
    $('.car').remove();
    totalPrice = 0;
    $('#totalPrice').html(totalPrice.toLocaleString('en-US',{style: 'currency', currency: 'USD'}));
  });


});
