var arr_json = [
{ id:'1',
type:'img',
url:'http://feelgrafix.com/data_images/out/8/814410-free-wallpaper.jpg' ,
timeout: 2000
},
{ id:'2',
type:'video',
url: 'http://thenewcode.com/assets/videos/polina.webm',
timeout: 4000 
},
{ id:'3',
type:'img',
url: 'http://feelgrafix.com/data_images/out/8/814188-free-wallpaper.jpg',
timeout: 2000 
},{

  id:'4',
  type:'youtube',
  url:'https://www.youtube.com/embed/DVByA7OaIvY',
  timeout:5000
}

];

function show_arr_json(){
  for (var i = arr_json.length - 1; i >= 0; i--) {
    console.log(' type: ' + arr_json[i].type);
  };
};

function generate_vid(s_id,s_url){

  var o_vid = $('<video>',{
    id: s_id,
    'loop' :'loop',
    'autoplay':'autoplay'
  }).addClass('maxi');
  var o_vid_src = $('<source>',{
    src: s_url
    /*,type: 'video/webm; codecs="vp8.0, vorbis"'*/

  });
  var o_fallback_cont = $('<p>Sorry, its not supported yet. </p>');

  o_vid.append(o_vid_src).append(o_fallback_cont);

  return o_vid;
}

function generate_img(s_id, s_url){
  var o_img = $('<img>',{
    id: s_id,
    src: s_url
  }).addClass('maxi');

  return o_img;

}

function generate_youtube(s_id,s_url){
  var o_yt = $('<iframe>',{
    id: s_id,
    src :s_url + '?autoplay=1&controls=0&fs=0&loop=1',
    height: '640',
    width: '320'
  }).addClass('maxi');

  return o_yt;
}




