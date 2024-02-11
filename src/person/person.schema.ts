import * as mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema({
    id: String,
    name: String,
    document: String,
    birthday: Date,
    email: String,
    phone: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    active: Boolean
});

