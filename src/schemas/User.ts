import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  firstName?: string
  lastName?: string
  isUser(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.isUser = function (): boolean {
  return true
}

export default model<UserInterface>('User', UserSchema)
