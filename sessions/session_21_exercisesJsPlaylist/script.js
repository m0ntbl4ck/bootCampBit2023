/*- Crear una playlist, teniendo en cuenta que debe grabarse con un nombre
- Agregar temas a la playlist (todos los que quiera)
- Buscar temas en una playlist
- Mostrar los datos de la playlist (nombre y listado de temas)*/


var namePlaylist = (prompt("Ingresa el nombre de tu Playlist"));

var playList = [], searchPlaylist, encontrar;
var i = 0, x = true, opt, y;
while (x === true) {
    opt = parseInt(prompt("1) Deseas Ingresar una canción a la PlayList " + namePlaylist + "." + "\n\n" + "2) Ver Playlist completa." + "\n\n" + "3) Buscar una canción en la Playlist." + "\n\n" + "4) salir."));
    switch (opt) {
        case 1:
            playList[i] = prompt("Ingresa una canción");
            alert("Tu canción " + playList[i] + " Fue agregada exitosamente a la Playlist " + namePlaylist);
            i++;
            break;
        case 2:
            alert("Tu Playlist: " + namePlaylist + "\n\n" + "Canciones que has añadido recientemente a la Playlist:\n\n" + playList);
            break;
        case 3:
            searchPlaylist = prompt("Que canción deseas buscar en tu Playlist " + namePlaylist);
            encontrar = false;
            for (i = 0; i < playList.length; i++) {
                if (playList[i] === searchPlaylist) {
                    encontrar = true;
                }
            }
            if (encontrar === true) {
                alert("Tu canción " + searchPlaylist + " Se encuentra en la PlayList " + namePlaylist + ".");
            }
            else {
                y = true;
                while (y === true) {
                    alert("Tu canción " + searchPlaylist + " No Se encuentra en la PlayList " + namePlaylist + ".");
                    opt = parseInt(prompt("1) ¿Deseas agregar esta canción que no se encuentra? \n\n 2) No y salir."));

                    switch (opt) {
                        case 1: playList[i] = searchPlaylist;
                            alert("Tu canción " + searchPlaylist + " Fue agregada exitosamente a la Playlist " + namePlaylist);
                            i++;
                            y = false;
                            break;

                        case 2:
                            y = false;
                            break;
                        default:
                            alert("Ingrese una opción valida");
                            break;
                    }

                }
            }
            break;

        case 4:
            x = false;
            break;
        default:
            alert("Ingrese una opción valida");
            break;
    }
}
