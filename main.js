
function staples(id,url) {

    const comp = document.querySelector('#' + id)
    comp.src = url}
    staples('image-1', 'https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif')
    staples('image-2', 'https://media1.tenor.com/images/c13ca8c474c7ef4b0a959535aa8cc2e3/tenor.gif')
    staples('image-3', 'https://d24bnpykhxwj9p.cloudfront.net/s3file/s3fs-public/users1/2017-02/Thu/giphy_1.gif')
    

function drawings(){

    return  document.querySelector('#a').style.textDecoration= 'line-through'
    }
drawings()


function rem(){
        return document.querySelector('#arguments').lastElementChild.remove()
        
    }
rem()
rem()


function argu(element){
    document.querySelector('#arguments').appendChild(element)
    
}


const photo=document.createElement('img')
photo.src='https://media1.tenor.com/images/55c2d038c481d8b45ed6bc90abe985cf/tenor.gif'

argu(photo)

function sketch(image){
    image.height='30'
}
const someImage = document.querySelector('#image-1');
sketch(someImage)
const someImage2 = document.querySelector('#image-2');
sketch(someImage2)


const total = 5 + 3 + 10;
getAverage(total, 3);

function getAverage(total, count) {
    return total / count;
}
function 