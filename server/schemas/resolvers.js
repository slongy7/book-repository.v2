const { User, Book } = require('../models');

const resolvers = {
    Query: {
        user: async() => {
            return User.find({});
        },
        book: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Book.find(params);
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
        saveBook: async (parent, { bookInfo }, context) => {
            const book = await User.findOneAndUpdate(
                { _id: context.user._id },
                {
                    $addToSet: { savedBooks: bookInfo },
                },
                { new: true }
            )

            return book
        },
        removeBook: async (parent, { userId }) => {
            const book = await Book.findOneAndDelete(
                { _id: userId },
                { savedBooks: book },
            )
        },
    }
};

module.exports = resolvers;