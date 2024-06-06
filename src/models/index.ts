import User from "./User";
import UserPdfs from "./UserPdf";

// model associations
User.hasMany(UserPdfs, { foreignKey: "userId", as: "pdfs" });
UserPdfs.belongsTo(User, { foreignKey: "userId", as: "user" });

export { User, UserPdfs };
