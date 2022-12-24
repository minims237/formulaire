const info = () => "passport";
const users=async (parent, args, context, info) => {
    try {
        const user=await context.prisma.user.findMany();
        return user
    } catch (e) {
        throw new Error("chargement des utilisateur echouer")
    }
}
const deleteUsers=async (parent, args, context, info) => {
    const {numero}=args
 
        const user=await context.prisma.user.delete({where:{numero:numero}});
        if(user){
            return true
        }else{
            throw new Error("erreur de suppresion")
        }
    
        
}
const userByNumero=async (parent, args, context, info) => {
    const {numero}=args
    try {
        const user=await context.prisma.user.findUnique({
            where: {
              numero: numero,
            },
          })
        return user
    } catch (e) {
        throw new Error("chargement d'un utilsateur a echouer")
    }
}
module.exports={
    users,
    info,
    deleteUsers,
    userByNumero
}