const NewUser=async(parent,args,context,info)=>{
    const{
        nom,
        categorie,
        statut,
        date1,
        date2,
        date3, 
        photo,
        numero
    }=args
phtos=[]
console.log("debut de lup");
    await Promise.all(
        photo.map(async(valeur)=> { const valeu = await context.storeUpload(valeur)  
         console.log( 'valeur'+valeu);
         phtos.push(valeu.path)
         console.log(phtos );
          }  ) , 
                     
     
                     console.log("link",phtos))
                     console.log("fin de lup");

    
    const user=await context.prisma.user.create({
        data:{
            nom,
            categorie,
            statut,
            date1,
            date2,
            date3, 
            photo:{set:phtos},
            numero
        }
       
    })
    return user
}

module.exports = {
    NewUser
};