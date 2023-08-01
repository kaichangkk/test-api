
const config = require('../../../config')

module.exports = {
    Query: {
        getUsersList: async (_, { where, orderBy }, { models, req }) => {
            try {
                // const _orderby = queryWithOrderBy(orderBy);
                // const _where = queryWithWhere(where);
                const allUser = await models.userModel.count(_where)
                const result = await models.userModel.find(_where)
                    .sort(_orderby)
                    .exec();
                return {
                    total: allUser,
                    data: result
                };
            } catch (error) {
                console.log("error", error)

            }
        },
        getUser: async (_, { where }, { models }) => {
            try {
                const User = await models.userModel.findById(where.id);
                return User;
            } catch (error) {
                console.log("Error:", error);
                throw new Error("Failed to fetch User");
            }
        }
    },

    Mutation: {
        updateUser: async (_, { data, where }, { models, req }) => {
            try {

                const updateUser = await models.userModel.findByIdAndUpdate(where.id, data)
                //TODO: Update CreatedByName if firstName is updated
                if (data.fullname) {
                    const user = await models.userModel.findById(where.id);
                    updateInfo = {
                        createdByName: user.fullname,
                        updatedByName: user.fullname
                    };
                }
                //TODO: Response update user
                return updateUser
            } catch (error) {
                console.log("err", error)
            }
        },
        addUser: async (_, { data}, { models, req }) => {
            try {
                // TODO: Check invalid data
                if (!data) throw config.statusMessage.BAD_REQUEST;
              // TODO: create user
                const result = await models.userModel.create(data);
                return result;
            } catch (error) {
                console.log("ERROR", error);
            }
        },

        deleteUser: async (_, { where }, { models, req }) => {
            try {
                
                // TODO: Delete 
                const deleteUser = await models.userModel.findByIdAndDelete(where.id);
                if (deleteUser) {
                    return { success: true, message: USER_DELETED_SUCCESSFULLY };
                } else {
                    return { success: false, message: USER_NOT_FOUND };
                }
            } catch (error) {
                console.log('Error while delete:', error);
                return { success: false, message: 'Error occurred while deleting user' };
            }
        },


    }
}


