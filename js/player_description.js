
    document.querySelectorAll('.banner').forEach(item => {

        item.addEventListener('click', event =>{

            let image = item.getAttribute('data-image');
            let artist = item.getAttribute('data-artist');
            let song = item.getAttribute('data-song');

            let playerArtistComponent = document.getElementsByClassName('player_artista');

            playerArtistComponent[0].innerHTML = `
            <img src="`+image+`" />
            <h4>`+song+`<br/><span>`+artist+`</span></h4>
            `;

        });

    });