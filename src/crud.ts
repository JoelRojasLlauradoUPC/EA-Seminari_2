import { Model, Document } from 'mongoose';

export function makeCrud<T extends Document | any>(model: Model<T>, populateFields: string[] = []) {
  return {
    create: (data: Partial<T>) => model.create(data),
    getById: (id: string) => model.findById(id).populate(populateFields).exec(),
    update: (id: string, data: Partial<T>) => model.findByIdAndUpdate(id, data, { new: true }).exec(),
    delete: (id: string) => model.findByIdAndDelete(id).exec(),
    listAll: () => model.find().lean().exec(),
  };
}
