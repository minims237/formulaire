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
  const ph = await context.storeUpload(photo)  
    console.log( 'valeur link'+ph.path);
    
    const user=await context.prisma.user.create({
        data:{
            nom,
            categorie,
            statut,
            date1,
            date2,
            date3, 
            photo:ph.path,
            numero
        }
       
    })
    return user
}

module.exports = {
    NewUser
};