// JavaScript

const map = L.map('map').setView([33.67345752177457, 130.44140661378802], 15);

// タイルレイヤーを作成し、地図にセットする
// Open Street Map
// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);


L.marker([33.67345752177457, 130.44140661378802]).addTo(map)
  .bindPopup('A pretty CSS popup.<br><img src="images/img01.png" alt="img">');

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
    shadowUrl: 'images/ico_shadow.png',
    iconSize: [40, 40],
    shadowSize: [40, 40],
    iconAnchor: [20, 40],
    shadowAnchor: [20, 40],
    popupAnchor: [0, -42]
  }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  L.marker([33.67345752177457, 130.44140661378802], { icon: whiteIcon }).addTo(map)
  .bindPopup('こんにちは！');
  L.marker([33.67345752177457, 130.44140661378802], { icon: pinkIcon }).addTo(map)
  .bindPopup('こんにちは！');

  const circle = L.circle([33.67345752177457, 130.44140661378802], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);
  circle.bindPopup("半径1kmの範囲");

  // 多角形の表示
const polygon = L.polygon([
  [33.623785868609026, 130.42136728765556],
  [33.6216059914674, 130.4408508539971],
  [33.60769234112236, 130.42353987696788]
], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3
}).addTo(map);