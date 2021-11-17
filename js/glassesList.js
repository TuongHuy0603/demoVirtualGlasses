export class GlassesList{
    constructor(){
        this.glist =[];

    }
    addGlasses(glasses){
        this.glist.push(glasses);

    }
    renderGlasses(){
        //cac the HTML chua noi dung cua cac doi tuong kinh 
        let content = "";
        content=this.glist.reduce((glContent,item,index)=>{
            glContent += `
            <div class="col-4">
                <img class="img-fluid" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" >
            </div>
            `;
            return glContent;
        },'');
        return content;
    }
}