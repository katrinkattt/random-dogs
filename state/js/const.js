const frame = $('#frame');
const btnNext = $('#btnNext');
const loading = $('#loading');

const url = 'https://dog.ceo/api/breeds/image/random ';
const headers = {
    "Accept": "applicati/json",
    "Content-Type": "application/x-www-form-urlencoded"
}

const getPicture = () => {
    $.ajax({
        type: 'get',
        url: url,
        headers: headers,

        beforeSend: function(){
            loading.css({display:'flex'})
        },

        success: function(response){
            initialState.picture = response.message;
            frame.attr('src', initialState.picture);
            console.log(response);
        },
        error: function(){
            console.log('oops!!');

        },
        complete: function(){
            loading.css({display:'none'})
        }
    })
}


//form s variantami: pers/boot/countru
// c posled viborom
///swapi 
