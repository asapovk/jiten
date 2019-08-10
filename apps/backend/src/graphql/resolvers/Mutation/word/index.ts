import createResolver from './create'
import updateResolver from './update'
import deleteResolver from './delete'

export default () => ({ 
    create: createResolver, 
    update: updateResolver, 
    delete: deleteResolver,
})