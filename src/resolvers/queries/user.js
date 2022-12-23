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
    try {
        const user=await context.prisma.user.findMany();
        return user
    } catch (e) {
        throw new Error("chargement des utilisateur echouer")
    }
}
module.exports={
    users,
    info
}