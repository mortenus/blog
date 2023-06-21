import mongoose, { Schema, Document } from 'mongoose';

interface IBlogs extends Document {}

const BlogsSchema = new Schema(
  {
    data: {
      date: { type: Schema.Types.String, required: 'Date is required' },
      title: { type: Schema.Types.String, required: 'Blog Title is required' },
      description: { type: Schema.Types.String, required: 'Blog Description is required' },
      imgUrl: { type: Schema.Types.String, required: 'Image Url is required' },
      hashtag: { type: Schema.Types.Array, required: 'Hashtag are required' },
      fullText: { type: Schema.Types.String, required: 'Full Text of Blog is required' },
      related: { type: Schema.Types.Array },
      summary: { type: Schema.Types.String },
    },
    slug: { type: Schema.Types.String, required: 'Slug of a Blog is required' },
  },
  {
    timestamps: true,
  },
);

const BlogsModel = mongoose.model<IBlogs>('blogs', BlogsSchema);

export default BlogsModel;
