import { Schema, model, Document } from 'mongoose'

export interface VideoInterface extends Document {
  externalId: string
}

const VideoSchema = new Schema({
  externalId: String
}, {
  timestamps: true
})

export default model<VideoInterface>('Video', VideoSchema)
