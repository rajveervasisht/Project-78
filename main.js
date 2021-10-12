var images=[
   "ME.JPG","MOM.JPG","pPA.JPG","UV(1).JPG","F1.png"
];
var names=[
   "Rajveer","Ritu","Rahul","Yuvraj","Home Page"
];

var i=0;
function Next(){
i++;
var n_o_f_m_i_a=4
if(i>n_o_f_m_i_a)
{
    i=0;
}
var updated_img=images[i];
var updated_name=names[i];
document.getElementById("Pic").src=updated_img;
document.getElementById("member-name").innerHTML=updated_name;
}