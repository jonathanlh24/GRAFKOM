function gbr_titik(imageDataTemp, x, y, r, g, b) {
    var index = 4 * (Math.ceil(x) + (Math.ceil(y) * canvasKita.width));
    imageDataTemp.data[index] = r;
    imageDataTemp.data[index + 1] = g;
    imageDataTemp.data[index + 2] = b;
    imageDataTemp.data[index + 3] = 255;
}

function dda_line(imageData, x1, y1, x2, y2, r, g, b) {
    var dx = x2 - x1; // bisa (+) atau (-) tergantung posisi x2 sebelum atau sesudah x1
    var dy = y2 - y1; // bisa (+) atau (-)

    if (Math.abs(dx) > Math.abs(dy)) {
        // jalan di x
        if (x2 > x1) {
            // ke kanan
            var y = y1;
            for (var x = x1; x < x2; x++) {
                y = y + dy / Math.abs(dx);
                gbr_titik(imageData, x, y, r, g, b);
            }
        } else {
            // ke kiri
            var y = y1;
            for (var x = x1; x >= x2; x--) {
                y = y + dy / Math.abs(dx);
                gbr_titik(imageData, x, y, r, g, b);
            }
        }
    } else {
        // jalan ke kiri
        if (y2 > y1) {
            // ke kanan
            var x = x1;
            for (var y = y1; y < y2; y++) {
                x = x + dx / Math.abs(dy);
                gbr_titik(imageData, x, y, r, g, b);
            }
        } else {
            // ke kiri
            var x = x1;
            for (var y = y1; y > y2; y--) {
                x = x + dx / Math.abs(dy);
                gbr_titik(imageData, x, y, r, g, b);
            }
        }
    }
}

function Polygon(imageData, point_array, r, g, b) {
    for (var i = 0; i < point_array.length - 1; i++) {
        dda_line(imageData, point_array[i].x, point_array[i].y, point_array[i + 1].x, point_array[i + 1].y, r, g, b);
    }
    dda_line(imageData, point_array[point_array.length-1].x, point_array[point_array.length-1].y, point_array[0].x, point_array[0].y, r, g, b);
}

function translasi(titik_lama, T) {
    var x_baru = titik_lama.x + T.x;
    var y_baru = titik_lama.y + T.y;

    return { x: x_baru, y: y_baru };
}

function translasi_array(array_titik, T) {
    var array_hasil = [];
    for (var i = 0; i < array_titik.length; i++) {
        var temp = translasi(array_titik[i], T);
        array_hasil.push(temp);
    }
    return array_hasil;
}

// ROTASI
function rotasi(titik_lama, sudut) {
    var x_baru = titik_lama.x * Math.cos(sudut) - titik_lama.y * Math.sin(sudut);
    var y_baru = titik_lama.x * Math.sin(sudut) + titik_lama.y * Math.cos(sudut);

    return { x: x_baru, y: y_baru };
}

function rotasi_fp(titik_lama, titik_putar, sudut) {
    var p1 = translasi(titik_lama, { x: -titik_putar.x, y: -titik_putar.y });
    var p2 = rotasi(p1, sudut);
    var p3 = translasi(p2, titik_putar);

    return p3
}

function rotasi_array(array_titik, titik_pusat, sudut) {
    var array_hasil = [];
    for (var i = 0; i < array_titik.length; i++) {
        var temp = rotasi_fp(array_titik[i], titik_pusat, sudut);
        array_hasil.push(temp);
    }
    return array_hasil;
}


// SKALA
function penskalaan(titik_lama, S) {
    var x_baru = titik_lama.x * S.x;
    var y_baru = titik_lama.y * S.y;

    return { x: x_baru, y: y_baru };
}

function skala_fp(titik_lama, titik_pusat, S) {
    var p1 = translasi(titik_lama, { x: -titik_pusat.x, y: -titik_pusat.y });
    var p2 = penskalaan(p1, S);
    var p3 = translasi(p2, titik_pusat);

    return p3
}

function skala_array(array_titik, titik_pusat, S){
    var array_hasil = [];
    for (var i = 0; i < array_titik.length; i++){
        var temp = skala_fp(array_titik[i], titik_pusat, S);
        array_hasil.push(temp);
    }
    return array_hasil;
}