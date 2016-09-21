$(document).ready(function($) {
	console.log('test');
    start_show();

});

function get_data(){

}

var static_data = [
['img1.jpeg',false,5000 ],
['img2.jpeg',false,3000],
['img3.jpg',false,2000]

];

function start_show(){
	//show_arr_json();
	
  static_data = arr_json;
  next();
	
}



var i_num = 0;

function next() {
	if (i_num < static_data.length ) {
      var o_data = static_data[i_num];
  		console.log( new Date() + 'end of the : ' +  o_data.id);  
      draw_main(o_data);
  		setTimeout(next, o_data.timeout);
  		i_num++;   
  		if(i_num == static_data.length){
  			i_num = 0;
  		}
	}	
}

function draw_main(s_data){
   $('#id_main').empty();
   var o_content = $('<div>');
   switch(s_data.type){
      case 'img':
        {
          o_content = generate_img(s_data.id,s_data.url);
        break;
        }
      case 'video':
        {
          o_content = generate_vid(s_data.id,s_data.url);
        break;
        }
      case 'youtube':
        {
          o_content = generate_youtube(s_data.id,s_data.url);
        break;
        }
   }
    
   $('#id_main').append(o_content);
}
